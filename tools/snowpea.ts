import {loadSync, NamespaceBase, ReflectionObject, Type, Field, Namespace, Enum} from 'protobufjs';
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
  
  let result: t.TSPropertySignature;
  if (scope.has(field.type)) {
    result = t.tsPropertySignature(
      t.identifier(field.name), 
      t.tsTypeAnnotation(t.tsTypeReference(t.identifier(field.type))),
    );
  } else if (field.type === 'string' || field.type === 'google.protobuf.Timestamp') {
    result = t.tsPropertySignature(t.identifier(field.name), t.tsTypeAnnotation(t.tsStringKeyword()));
  } else if (field.type === 'int64' || field.type === 'double' || field.type === 'int32') {
    result = t.tsPropertySignature(t.identifier(field.name), t.tsTypeAnnotation(t.tSNumberKeyword()));
  } else if (field.type === 'bool') {
    result = t.tsPropertySignature(t.identifier(field.name), t.tsTypeAnnotation(t.tSBooleanKeyword()));
  } else {
    console.log('unknown type: ' + field.type);
    result = t.tsPropertySignature(t.identifier(field.name), t.tsTypeAnnotation(t.tsAnyKeyword()));
  }
  if (field.comment) {
    addComment(result, field.comment);
  }
  return result
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

const compileNamespace = (namespaceName: string, namespace: Namespace): string => {
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
  const ast = t.file(t.program(statements));
  return generate(ast).code;
};

const getOutputFile = (namespace: string): string => {
  const parts = namespace.split('.').slice(2);
  parts.push('Events.ts');
  return parts.join("/")
}


const compileProtos = (protos: string[]) => {
  let root = loadSync(protos);
  const namespaces = new Map<string, Namespace>();
  discoverNamespaces(root, namespaces);
  
  for (const [fqName, namespace] of namespaces.entries()) {
    const result = compileNamespace(fqName, namespace);
    const outputPath = getOutputFile(fqName);
    fs.mkdirSync(path.dirname(outputPath), {recursive: true});
    fs.writeFileSync(outputPath, result);
  }
};

const isNamespace = (namespace: any): namespace is Namespace => {
  return true;
}

const discoverNamespaces = (x: ReflectionObject, namespaces: Map<string, Namespace>) => {
  if (x.options && x.options['(google.events.cloud_event_type)']) {
    const {parent} = x;
    if (!isNamespace(parent)) {
      throw "encounted invalid namespace";
    }
    namespaces.set(parent.fullName, parent);
  }
  if (hasNested(x)) {
    Object.keys(x.nested!).forEach(key => discoverNamespaces(x.nested![key], namespaces))
  }
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
      } else if (!currentPath?.endsWith("README.md")) {
        console.log(
          'encountered file with unexpected extension: ' + currentPath
        );
      }
    }
  }
  return result;
};

const correctComments = (inputPath: string, outputPath: string) => {
  const input = fs.readFileSync(inputPath, 'utf-8');
  const lines: string[] = [];
  let inBlock = false;
  input.split("\n").forEach(line => {
    if (line.trim().startsWith('//')) {
      if (!inBlock) {
        lines.push('/**')
        inBlock = true;
      }
      lines.push(line.replace(/\w*\/\//, '*'))
    } else {
      if (inBlock) {
        lines.push('*/')
        inBlock = false;
      }
      lines.push(line);
    }
  });
  fs.mkdirSync(path.dirname(outputPath), {recursive: true});
  fs.writeFileSync(outputPath, lines.join("\n"))
}

fs.rmSync(TEMP_DIR, {force: true, recursive: true});
fs.mkdirSync(TEMP_DIR);
downloadProtoc();

const eventsDir = path.resolve(GOOGLE_EVENTS_DIR, EVENTS_PROTO_DIR);
const eventProtos = findProtos(eventsDir);
const correctedEventsDir = path.join(TEMP_DIR, 'goog');
eventProtos.forEach(x => correctComments(x, path.resolve(correctedEventsDir, path.relative(GOOGLE_EVENTS_DIR, x))));

const libDir = path.resolve(GOOGLE_EVENTS_DIR, LIB_PROTO_DIR);
const protocDir = path.resolve(TEMP_DIR, 'include');
const protos = [...findProtos(protocDir), ...findProtos(libDir), ...findProtos(correctedEventsDir)];

compileProtos(protos)