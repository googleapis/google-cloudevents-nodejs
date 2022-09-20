// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {
  NamespaceBase,
  ReflectionObject,
  Type,
  Field,
  Namespace,
  Enum,
  Root,
} from 'protobufjs';
import * as fs from 'fs';
import * as path from 'path';
import {execSync} from 'child_process';
import * as t from '@babel/types';
import generate from '@babel/generator';
import * as templates from './templates';

const GOOGLE_EVENTS_DIR = '../google-cloudevents/';
const EVENTS_PROTO_DIR = './proto/';
const LIB_PROTO_DIR = './third_party/googleapis/';
const PROTOC_URL =
  'https://github.com/protocolbuffers/protobuf/releases/download/v21.5/protoc-21.5-linux-x86_64.zip';
const TEMP_DIR = './tmp';

const isType = (x: ReflectionObject): x is Type => {
  // @ts-ignore
  return !!x.fields;
};

const isEnum = (x: ReflectionObject): x is Enum => {
  // @ts-ignore
  return !!x.valuesById;
};

const isCloudEventType = (x: ReflectionObject | Type): x is Type => {
  return x.options && x.options['(google.events.cloud_event_type)']!!;
};

const hasNested = (x: ReflectionObject | NamespaceBase): x is NamespaceBase => {
  // @ts-ignore
  return x.nested != null;
};

const addComment = <T extends t.Node>(node: T, comment?: string): T => {
  if (comment) {
    const lines = comment.split('\n').map(l => ' * ' + l.trim());
    lines.unshift('*');
    t.addComment(node, 'leading', lines.join('\n') + '\n ');
  }
  return node;
};

const generateInterfaceProperty = (
  field: Field,
  scope: Set<string>
): t.TSTypeElement => {
  let fieldType: t.TSType;
  if (
    field.type === 'string' ||
    field.type === 'google.protobuf.Timestamp' ||
    field.type === 'google.type.Date' ||
    field.type === 'bytes' ||
    field.type === 'Hash.HashType' ||
    field.type === 'google.protobuf.Duration'
  ) {
    fieldType = t.tsStringKeyword();
  } else if (
    field.type === 'int64' ||
    field.type === 'double' ||
    field.type === 'int32' ||
    field.type === 'float'
  ) {
    fieldType = t.tSNumberKeyword();
  } else if (field.type === 'bool') {
    fieldType = t.tSBooleanKeyword();
  } else if (field.type === 'google.protobuf.Value') {
    fieldType = t.tsAnyKeyword();
  } else if (field.type === 'google.protobuf.Struct') {
    fieldType = t.tsTypeReference(
      t.identifier('Record'),
      t.tsTypeParameterInstantiation([t.tsStringKeyword(), t.tsAnyKeyword()])
    );
  } else if (field.type === 'google.protobuf.NullValue') {
    fieldType = t.tsNullKeyword();
  } else if (scope.has(field.type)) {
    fieldType = t.tsTypeReference(t.identifier(field.type));
  } else if (hasNested(field.parent!) && field.parent.nested![field.type]) {
    fieldType = t.tSTypeReference(t.tsQualifiedName(t.identifier(field.parent.name), t.identifier(field.type)));
  } else {
    console.log('=== unknown type: ' + field.name + ' =  ' + field.type);
    fieldType = t.tsAnyKeyword();
  }

  if (field.repeated) {
    fieldType = t.tsArrayType(fieldType);
  }
  if (field.map) {
    // @ts-ignore
    if (field.keyType !== 'string') {
      throw 'found an invalid map type: ' + field.fullName
    }
    fieldType = t.tsTypeReference(t.identifier('Record'), t.tsTypeParameterInstantiation([t.tsStringKeyword(), fieldType]));
  }

  const result = t.tsPropertySignature(
    t.identifier(field.name),
    t.tsTypeAnnotation(fieldType)
  );
  result.optional = true;
  if (field.comment) {
    addComment(result, field.comment);
  }
  return result;
};

/**
 * Generate all interfaces in a given cloudevent schema
 * @param schema The cloudevent data payload schema
 * @returns a set of Statement AST nodes representing interfaces declarations
 */
const generateTypeInterface = (
  typeNode: Type,
  scope: Set<string>
): t.Statement => {
  const interfaceStmt = t.tsInterfaceDeclaration(
    t.identifier(typeNode.name),
    null,
    null,
    t.tsInterfaceBody(
      typeNode.fieldsArray.map(x => generateInterfaceProperty(x, scope))
    )
  );
  if (isCloudEventType(typeNode)) {
    interfaceStmt.body.body.push(
      t.tsPropertySignature(
        t.identifier('type'),
        t.tsTypeAnnotation(
          t.tsLiteralType(
            t.stringLiteral(
              typeNode.options!['(google.events.cloud_event_type)']
            )
          )
        )
      )
    );
  }
  const exportStmt = t.exportNamedDeclaration(interfaceStmt);
  if (typeNode.comment) {
    addComment(exportStmt, typeNode.comment);
  }
  return exportStmt;
};

const generateEnum = (enumNode: Enum): t.Statement => {
  const enumStmt = t.tsEnumDeclaration(
    t.identifier(enumNode.name),
    Object.keys(enumNode.values).map(key => {
      return t.tsEnumMember(
        t.identifier(key),
        t.numericLiteral(enumNode.values[key])
      );
    })
  );

  const exportStmt = t.exportNamedDeclaration(enumStmt);
  if (enumNode.comment) {
    addComment(exportStmt, enumNode.comment);
  }
  return exportStmt;
};

const cloudEventDataType = (x: Type): string => {
  const {data} = x.fields;
  if (!data) {
    throw `Invalid CloudEvent type ${x.fullName}: missing data type`;
  }
  data.resolve();
  t.tsAnyKeyword()
  return data.resolvedType!.fullName.substring(1);
}

const compileNamespace = (
  namespace: Namespace,
  cloudEvents: Map<string, string>,
  seenTypes: Set<string>,
): t.Statement[] => {
  console.log(`generating ${namespace.fullName}`);
  const scope = new Set(namespace.nestedArray.map(x => x.name));
  const statements: t.Statement[] = [];
  for (let x of namespace.nestedArray) {
    if (seenTypes.has(x.fullName)) {
      // this type has already been generated
      continue;
    }
    console.log(x.fullName);
    seenTypes.add(x.fullName);
    if (isCloudEventType(x)) {
      const ceType = x.options!['(google.events.cloud_event_type)'];
      const ceDataType = cloudEventDataType(x)
      cloudEvents.set(ceType, ceDataType);
      const stmt = templates.CloudEventInterfaceStatement(x.name, ceType, ceDataType);
      if (x.comment) {
        addComment(stmt, x.comment);
      }
      statements.push(stmt);
    } else if (isType(x)) {
      statements.push(generateTypeInterface(x, scope));
    } else if (isEnum(x)) {
      statements.push(generateEnum(x));
    } else {
      throw 'Found unknown node type: ' + x.fullName;
    }

    // nested types:
    if (hasNested(x)) {
      const children = compileNamespace(x, cloudEvents, seenTypes);
      statements.push(t.exportNamedDeclaration(t.tsModuleDeclaration(t.identifier(x.name), t.tsModuleBlock(children))))
    }
  }
  return statements;
};

const compileProtos = (protos: string[]): string => {
  let root = new Root();
  root.loadSync(protos, {alternateCommentMode: true});
  const cloudEvents = new Map<string, string>();
  const statements = discoverNamespaces(root.nestedArray[0], cloudEvents);
  statements.push(
    ...templates.KnownEventsStatements(cloudEvents)
  );
  statements.unshift(templates.CloudEventImportStatement());
  return generate(t.program(statements)).code;
};

const discoverNamespaces = (
  x: ReflectionObject,
  cloudEvents: Map<string, string>,
  seenTypes: Set<string> = new Set<string>(),
): t.Statement[] => {
  if (isCloudEventType(x)) {
    const parent = x.parent!;
    return compileNamespace(parent, cloudEvents, seenTypes);
  }
  const children: t.Statement[] = [];
  if (hasNested(x)) {
    x.nestedArray.forEach(child => {
      children.push(...discoverNamespaces(child, cloudEvents, seenTypes));
    });
  }
  if (children.length === 0) {
    return [];
  }
  return [
    t.exportNamedDeclaration(t.tsModuleDeclaration(t.identifier(x.name), t.tsModuleBlock(children))),
  ];
};

const downloadProtoc = () => {
  const zipPath = path.resolve(TEMP_DIR, 'protobuf.zip');
  execSync(`curl -sSL ${PROTOC_URL} --output ${zipPath}`);
  execSync(`unzip -q ${zipPath} -d ${TEMP_DIR}`);
};

const findProtos = (dir: string): string[] => {
  const result: string[] = [];
  const paths = [dir];
  while (paths.length > 0) {
    const currentPath = paths.pop();
    const stats = fs.statSync(currentPath!);
    if (stats.isDirectory()) {
      fs.readdirSync(currentPath!).forEach(entry => {
        paths.push(path.join(currentPath!, entry));
      });
    } else if (stats.isFile()) {
      if (currentPath?.endsWith('.proto')) {
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

const libDir = path.resolve(GOOGLE_EVENTS_DIR, LIB_PROTO_DIR);
const protocDir = path.resolve(TEMP_DIR, 'include');
const protos = [
  ...findProtos(protocDir),
  ...findProtos(libDir),
  ...findProtos(eventsDir),
];

const code = compileProtos(protos);
fs.writeFileSync('./events/events.ts', code);
