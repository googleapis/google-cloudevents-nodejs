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
  FieldBase,
  Namespace,
  Enum,
  Root,
  MapField,
} from 'protobufjs';
import * as t from '@babel/types';
import babelGenerate from '@babel/generator';
import * as templates from './templates';

/**
 * isType is a user-defined type guard to check if the given ReflectionObject
 * is a Type node.
 * @param x the ReflectionObject to check.
 * @returns true if the given ReflectionObject is a Type node.
 */
const isType = (x: ReflectionObject): x is Type => {
  return !!(x as Type).fields;
};

/**
 * isEnum is a user-defined type guard to check if the given ReflectionObject
 * is an Enum node.
 * @param x the ReflectionObject to check.
 * @returns true if the given ReflectionObject is an Enum node.
 */
const isEnum = (x: ReflectionObject): x is Enum => {
  return !!(x as Enum).valuesById;
};

/**
 * isCloudEventType is a user-defined type guard to check if the given
 * ReflectionObject is a Type node that corresponds to a CloudEvent inteface.
 * This can be inferred from the presence of a 'google.events.cloud_event_type'
 * option.
 * @param x the ReflectionObject to check.
 * @returns true if the given ReflectionObject is a CloudEvent Type node.
 */
const isCloudEventType = (x: ReflectionObject | Type): x is Type => {
  return x.options && x.options['(google.events.cloud_event_type)']!;
};

/**
 * isMapField is a user-defined type guard to check if the given Field
 * is a MapField node.
 * @param x the Field to check.
 * @returns true if the given Field is a MapField.
 */
const isMapField = (x: FieldBase): x is MapField => {
  if (!x.map) {
    return false;
  }
  if ((x as MapField).keyType !== 'string') {
    // Currently, only maps with string keys are supported.
    throw 'found an invalid map type: ' + x.fullName;
  }
  return true;
};

/**
 * isNamespace is a user-defined type guard to check if the given ReflectionObject
 * is a Namespace. This is inferred from the presence of a non-null "nested" property.
 * @param x the ReflectionObject to check.
 * @returns true if the given ReflectionObject is a Namespace.
 */
const isNamespace = (
  x: ReflectionObject | NamespaceBase
): x is NamespaceBase => {
  return (x as NamespaceBase).nested !== undefined;
};

/**
 * Helper for adding a JSDoc comment to a Babel AST node.
 * @param node the node the add the comment to
 * @param comment the comment text to add
 * @returns the node with attached comment
 */
const addComment = <T extends t.Node>(node: T, comment?: string): T => {
  if (comment) {
    const lines = comment.split('\n').map(l => ' * ' + l.trim());
    lines.unshift('*');
    t.addComment(node, 'leading', lines.join('\n') + '\n ');
  }
  return node;
};

/**
 * Get the TS type annotation for the given interface field.
 * @param field the protojs Field node to get the type of
 * @param scope a set of all identifiers that are in scope for the field
 * @returns a babel TSType node
 */
const interfacePropType = (field: Field, scope: Set<string>): t.TSType => {
  switch (field.type) {
    case 'string':
    case 'google.protobuf.Timestamp':
    case 'google.type.Date':
    case 'bytes':
    case 'Hash.HashType':
    case 'google.protobuf.Duration':
      return t.tsStringKeyword();
    case 'int64':
    case 'double':
    case 'int32':
    case 'float':
      return t.tsUnionType([t.tSNumberKeyword(), t.tsStringKeyword()]);
    case 'bool':
      return t.tSBooleanKeyword();
    case 'google.protobuf.Value':
      return t.tsAnyKeyword();
    case 'google.protobuf.Struct':
      return templates.RecordType(t.tsAnyKeyword());
    case 'google.protobuf.NullValue':
      return t.tsNullKeyword();
  }
  if (scope.has(field.type)) {
    return t.tsTypeReference(t.identifier(field.type));
  }
  if (isNamespace(field.parent!) && field.parent.nested![field.type]) {
    return t.tSTypeReference(
      t.tsQualifiedName(
        t.identifier(field.parent.name),
        t.identifier(field.type)
      )
    );
  }
  console.log(
    `found unknown type "${field.fullName}: ${field.type}" - setting type to "any"`
  );
  return t.tsAnyKeyword();
};

/**
 * Generate the AST node for a Typescript interface field
 * @param field the protojs Field node to generated
 * @param scope a set of all identifiers that are in scope for the field
 * @returns the TSPropertySignature AST node representing the interface field
 */
const generateInterfaceProperty = (
  field: Field,
  scope: Set<string>
): t.TSTypeElement => {
  let fieldType = interfacePropType(field, scope);
  if (field.repeated) {
    fieldType = t.tsArrayType(fieldType);
  }
  if (isMapField(field)) {
    fieldType = templates.RecordType(fieldType);
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
 * Generate an AST node representing a Typescript interface.
 * @param typeNode the protojs node to generate the interface for
 * @param scope a set of all identifiers that are in scope for the interfacec
 * @returns an Statement AST node representing the interface
 */
const generateInterface = (typeNode: Type, scope: Set<string>): t.Statement => {
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

/**
 * Generate an AST node representing a Typescript enum.
 * @param enumNode the protojs node to generate the enum for
 * @returns 2 Statements representing the Enum and a Type including Enum string values
 */
const generateEnum = (enumNode: Enum): t.Statement[] => {
  const enumStmt = t.tsEnumDeclaration(
    t.identifier(enumNode.name + 'Enum'),
    Object.entries(enumNode.values).map(([key, value]) =>
      t.tsEnumMember(t.identifier(key), t.numericLiteral(value))
    )
  );

  const typeStmt = t.tsTypeAliasDeclaration(
    t.identifier(enumNode.name),
    null,
    t.tsUnionType([
      ...Object.keys(enumNode.values).map(key =>
        t.tsLiteralType(t.stringLiteral(key))
      ),
      t.tSTypeReference(t.identifier(enumNode.name + 'Enum')),
    ])
  );
  const exportType = t.exportNamedDeclaration(typeStmt);
  const exportEnum = t.exportNamedDeclaration(enumStmt);
  if (enumNode.comment) {
    addComment(exportEnum, enumNode.comment);
  }
  return [exportEnum, exportType];
};

/**
 * Extract the type of a CloudEvent's data field from its proto definition.
 * @param x the protojs Type node representing a CloudEvent
 * @returns the fully qualified type name of "data" property of the given
 * CloudEvent.
 */
const cloudEventDataType = (x: Type): string => {
  const {data} = x.fields;
  if (!data) {
    throw `Invalid CloudEvent type ${x.fullName}: missing data type`;
  }
  data.resolve();
  t.tsAnyKeyword();
  return data.resolvedType!.fullName.substring(1);
};

/**
 * Generate the babel AST of all the types in the given protojs namespace
 * @param namespace the protojs namespace to generate
 * @param cloudEvents a map tracking all discovered all cloud event types and their
 * data payload type
 * @param seenTypes a set of all previously generated fully-qualified type names
 * used to dedupe code being generated
 * @returns the AST statement nodes representing the namespace.
 */
const generateNamespaceAST = (
  namespace: Namespace,
  cloudEvents: Map<string, string>,
  seenTypes: Set<string>
): t.Statement[] => {
  console.log(`generating ${namespace.fullName}`);
  const scope = new Set(namespace.nestedArray.map(x => x.name));
  const statements: t.Statement[] = [];
  for (const x of namespace.nestedArray) {
    if (seenTypes.has(x.fullName)) {
      // this type has already been generated
      continue;
    }
    console.log(x.fullName);
    seenTypes.add(x.fullName);
    if (isCloudEventType(x)) {
      const ceType = x.options!['(google.events.cloud_event_type)'];
      const ceDataType = cloudEventDataType(x);
      cloudEvents.set(ceType, ceDataType);
      const stmt = templates.CloudEventInterfaceStatement(
        x.name,
        ceType,
        ceDataType
      );
      if (x.comment) {
        addComment(stmt, x.comment);
      }
      statements.push(stmt);
    } else if (isType(x)) {
      statements.push(generateInterface(x, scope));
    } else if (isEnum(x)) {
      statements.push(...generateEnum(x));
    } else {
      throw 'Found unknown node type: ' + x.fullName;
    }

    // nested types:
    if (isNamespace(x)) {
      const children = generateNamespaceAST(x, cloudEvents, seenTypes);
      statements.push(
        t.exportNamedDeclaration(
          t.tsModuleDeclaration(t.identifier(x.name), t.tsModuleBlock(children))
        )
      );
    }
  }
  return statements;
};

/**
 * Recursively traverse a proto RootNamespace representing a set of CloudEvent
 * types and generate a Babel AST representing the Typescript Types.
 * NOTE: this code only generates the code for namespaces that contain one or more
 * CloudEvents types.
 * @param root the current proto node being traversed
 * @param cloudEvents a map tracking all discovered all cloud event types and their
 * data payload type
 * @param seenTypes a set of all previously generated fully-qualified type names
 * used to dedupe code being generated
 * @returns the AST statement nodes representing the generated Typescript types.
 */
const doGenerate = (
  root: ReflectionObject,
  cloudEvents: Map<string, string>,
  seenTypes: Set<string> = new Set<string>()
): t.Statement[] => {
  if (isCloudEventType(root)) {
    return generateNamespaceAST(root.parent!, cloudEvents, seenTypes);
  }
  const children: t.Statement[] = [];
  if (isNamespace(root)) {
    root.nestedArray.forEach(child => {
      children.push(...doGenerate(child, cloudEvents, seenTypes));
    });
  }
  if (children.length === 0) {
    return [];
  }
  return [
    t.exportNamedDeclaration(
      t.tsModuleDeclaration(t.identifier(root.name), t.tsModuleBlock(children))
    ),
  ];
};

/**
 * Generate the Typescript type defintions of the CloudEvents described
 * in a set of proto files.
 * @param protos an array of proto files to generate code from
 * @returns a string of gerenated code
 */
export const generate = (protos: string[]): string => {
  const root = new Root();
  root.loadSync(protos, {alternateCommentMode: true});
  const cloudEvents = new Map<string, string>();
  const statements = doGenerate(root.nestedArray[0], cloudEvents);
  statements.push(...templates.KnownEventsStatements(cloudEvents));
  statements.unshift(templates.CloudEventImportStatement());
  const {code} = babelGenerate(t.program(statements));
  return templates.FileHeader + code;
};

/**
 * Strips out any @type fields from subobjects within obj
 */
function stripExtras(obj: object): object {
  return Object.fromEntries(
    Object.entries(obj).map(([k1, v1]) => {
      if (v1 instanceof Object && !(v1 instanceof Array)) {
        return [
          k1,
          Object.fromEntries(
            Object.entries(v1).filter(([k2]) => k2 !== '@type')
          ),
        ];
      } else {
        return [k1, v1];
      }
    })
  );
}

/**
 * Generates validation tests ensuring accuracy of generated interfaces
 * @param testData testData sourced from google-cloudevents/testdata
 * @returns code to be written into tests/testEvents.ts
 */
export const generateTests = (
  testData: {type: string; ext: string; obj: object}[]
): string => {
  const statements: t.Statement[] = [
    templates.GoogleSrcImportStatement(),
    ...testData.map((t, i) =>
      templates.TestAssignStatement(t.type, stripExtras(t.obj), i)
    ),
  ];
  const {code} = babelGenerate(t.program(statements));
  return code;
};
