import {loadSync, NamespaceBase, ReflectionObject, Type, Field, Namespace, Enum, Root} from 'protobufjs';
import * as fs from 'fs';
import * as path from 'path';
import {execSync} from 'child_process';
import * as t from '@babel/types';
import generate from '@babel/generator';

const GOOGLE_EVENTS_DIR = '../google-cloudevents/';
const EVENTS_PROTO_DIR = './proto/';
const LIB_PROTO_DIR = './third_party/googleapis/';
const PROTOC_URL = 'https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip';
const TEMP_DIR = './tmp';


const isType = (x: ReflectionObject): x is Type => {
  // @ts-ignore
  return !!(x.fields);
};

const isEnum = (x: ReflectionObject): x is Enum => {
  // @ts-ignore
  return !!(x.valuesById);
}

const addComment = <T extends t.Node>(
  node: T,
  comment?: string,
  isPublic = false
): T => {
  if (comment) {
    const lines = comment.split('\n').map(l => ' * ' + l.trim());
    lines.unshift('*');

    if (isPublic) {
      lines.push(' * ');
      lines.push(' * @public');
    }

    t.addComment(node, 'leading', lines.join('\n') + '\n ');
  }
  return node;
};


const generateInterfaceProperty = (field: Field, scope: Set<string>): t.TSTypeElement => {
  
  let fieldType: t.TSType;
  
  
  if (field.type === 'string' || field.type === 'google.protobuf.Timestamp' || field.type === 'google.type.Date' || field.type === 'bytes' || field.type === 'Hash.HashType') {
    fieldType = t.tsStringKeyword();
  } else if (field.type === 'int64' || field.type === 'double' || field.type === 'int32' || field.type === 'float' || field.type === 'google.protobuf.Duration') {
    fieldType = t.tSNumberKeyword();
  } else if (field.type === 'bool') {
    fieldType = t.tSBooleanKeyword();
  } else if (field.type === 'google.protobuf.Value') {
    fieldType = t.tsAnyKeyword();
  } else if (field.type === 'google.protobuf.Struct') {
    fieldType = t.tsTypeReference(t.identifier('Record'), t.tsTypeParameterInstantiation([t.tsStringKeyword(), t.tsAnyKeyword()]));
  } else if (field.type === 'google.protobuf.NullValue') {
    fieldType = t.tsNullKeyword();
  } else if (scope.has(field.type)) {
    fieldType = t.tsTypeReference(t.identifier(field.type));
  } else if (hasNested(field.parent!) && field.parent.nested![field.type]) {
    console.log('nested!');
    fieldType = t.tsAnyKeyword();
  } else {
    console.log('=== unknown type: ' + field.name + ' =  ' + field.type);
    fieldType = t.tsAnyKeyword();
  }

  if (field.repeated) {
    fieldType = t.tsArrayType(fieldType);
  }

  const result = t.tsPropertySignature(
    t.identifier(field.name), 
    t.tsTypeAnnotation(fieldType),
  );
  if (field.comment) {
    addComment(result, field.comment);
  }
  return result;
}

/**
 * Generate all interfaces in a given cloudevent schema
 * @param schema The cloudevent data payload schema
 * @returns a set of Statement AST nodes representing interfaces declarations
 */
 const generateTypeInterface = (typeNode: Type, scope: Set<string>): t.Statement => {
    const interfaceStmt = t.tsInterfaceDeclaration(
      t.identifier(typeNode.name),
      null,
      null,
      t.tsInterfaceBody(typeNode.fieldsArray.map(x => generateInterfaceProperty(x, scope)))
    );
    if (typeNode.options && typeNode.options['(google.events.cloud_event_type)']) {
      interfaceStmt.body.body.push(t.tsPropertySignature(t.identifier('type'), t.tsTypeAnnotation(t.tsLiteralType(t.stringLiteral(typeNode.options['(google.events.cloud_event_type)'])))))
    }
    const exportStmt = t.exportNamedDeclaration(interfaceStmt);
    if (typeNode.comment) {
      addComment(exportStmt, typeNode.comment)
    }
    return exportStmt;
};


const generateEnum = (enumNode: Enum): t.Statement => {
  
  const enumStmt = t.tsEnumDeclaration(t.identifier(enumNode.name), Object.keys(enumNode.values).map(key => {
    return t.tsEnumMember(t.identifier(key), t.numericLiteral(enumNode.values[key]))
  }));
  
  const exportStmt = t.exportNamedDeclaration(enumStmt);
  if (enumNode.comment) {
    addComment(exportStmt, enumNode.comment);
  }
  return exportStmt;
}

const compileNamespace = (namespaceName: string, namespace: Namespace): t.Statement[] => {
  console.log(`generating ${namespace.fullName}`);
  const scope = new Set(namespace.nestedArray.map(x => x.name))
  const statements: t.Statement[] = [];
  for (var x of namespace.nestedArray) {
    
    if (isType(x)) {
      statements.push(generateTypeInterface(x, scope));
    } else if (isEnum(x)) {
      statements.push(generateEnum(x));
    } else {
      console.log('Found an unknown');
      console.dir(x);
    }
  }
  return statements;
};

// const getOutputFile = (namespace: string): string => {
//   const parts = namespace.split('.').slice(2);
//   parts.push('Events.ts');
//   return parts.join("/")
// }


const compileProtos = (protos: string[]) => {
  let root = new Root();
  root.loadSync(protos, {alternateCommentMode: true});// loadSync(protos);
  const namespaces = new Map<string, Namespace>();
  const statements = discoverNamespaces(root.nestedArray[0], namespaces);
  statements[0] = t.exportNamedDeclaration(statements[0] as t.TSModuleDeclaration);
  console.log(generate(t.program(statements)).code);
  
  // const hierarchy = {};
  // for (const [fqName, namespace] of namespaces.entries()) {
  //   const result = compileNamespace(fqName, namespace);
  //   for (const n of fqName.split(".")) {
  //     if 
  //   }
    // const outputPath = getOutputFile(fqName);
    // fs.mkdirSync(path.dirname(outputPath), {recursive: true});
    // fs.writeFileSync(outputPath, result);
  // }
};

const discoverNamespaces = (x: ReflectionObject, namespaces: Map<string, Namespace>): t.Statement[] => {
  if (x.options && x.options['(google.events.cloud_event_type)']) {
    const parent = x.parent!;
    return compileNamespace(parent.fullName, parent);
  }
  const children: t.Statement[] = [];
  if (hasNested(x)) {
    x.nestedArray.forEach((child) => {
      children.push(...discoverNamespaces(child, namespaces));
    });
  }
  if (children.length === 0) {
    return [];
  }
  return [
    t.tsModuleDeclaration(t.identifier(x.name), t.tsModuleBlock(children))
  ];
  
};

const hasNested = (x: ReflectionObject|NamespaceBase): x is NamespaceBase => {
  // @ts-ignore
  return x.nested != null;
}


// URL of the image

const downloadProtoc = () => {
  const zipPath = path.resolve(TEMP_DIR, 'protobuf.zip')
  execSync(`curl -sSL ${PROTOC_URL} --output ${zipPath}`)
  execSync(`unzip -q ${zipPath} -d ${TEMP_DIR}`);
}



const findProtos = (dir: string): string[] => {
  const result: string[] = [];
  const paths = [dir];
  while (paths.length > 0) {
    const currentPath = paths.pop();
    const stats = fs.statSync(currentPath!);
    if (stats.isDirectory()) {
      fs.readdirSync(currentPath!).forEach(entry => {
        paths.push(path.join(currentPath!, entry))
      });
    } else if (stats.isFile()) {
      if (currentPath?.endsWith('.proto') ) {
        result.push(currentPath);
      }
    }
  }
  return result;
};

fs.rmSync(TEMP_DIR, {force: true, recursive: true});
fs.mkdirSync(TEMP_DIR);
downloadProtoc();

const eventsDir = path.resolve(GOOGLE_EVENTS_DIR, EVENTS_PROTO_DIR);
const correctedEventsDir = path.join(TEMP_DIR, 'goog');

const libDir = path.resolve(GOOGLE_EVENTS_DIR, LIB_PROTO_DIR);
const protocDir = path.resolve(TEMP_DIR, 'include');
const protos = [...findProtos(protocDir), ...findProtos(libDir), ...findProtos(eventsDir)];

compileProtos(protos)