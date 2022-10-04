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

import template from '@babel/template';
import * as t from '@babel/types';

export const RecordType = (valType: t.TSType): t.TSTypeReference => {
  return t.tsTypeReference(t.identifier('Record'), t.tsTypeParameterInstantiation([t.tsStringKeyword(), valType]));
}

export const CloudEventImportStatement = template.statement(`
import {CloudEvent} from '../src/cloudevent';
`);

export const CloudEventInterfaceStatement = (name: string, ceType: string, dataType: string): t.Statement => {
  return template.statements(`
    export interface ${name} extends CloudEvent<${dataType}> {
      type: '${ceType}' | string;
    };
  `, {plugins: ['typescript'], syntacticPlaceholders: true, preserveComments: true})()[0];
};

export const TestAssignStatements = (testData: {type: string, ext: string, json: string}[]): string => {
  return "import { google } from '../src'\n\n" + testData.map((d, i) => {
    return `var obj${i}: ${d.type} = ${d.json};`;
  }).join('\n')
}

export const KnownEventsStatements = (
  cloudEvents: Map<string, string>
): t.Statement[] => {
  const eventTypeMapping = Array.from(cloudEvents.entries())
    .map(([key, value]) => {
      return `'${key}': ${value};`;
    })
    .join('\n');

  const knownEvents = Array.from(cloudEvents.keys())
    .map(t => `GoogleCloudEventUnionType<'${t}'>`)
    .join('\n |');

  const knownEventTypes = Array.from(cloudEvents.keys())
    .map(t => `'${t}'`)
    .join(',\n');
  
    return template.statements(`
    /**
     * A mapped type that defines which CloudEvent types correspond to which data 
     * payload schemas. This is an internal implementation detail of the @google/events
     * library, it is not exposed in the public API.
     *
     * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
     */
    export type GoogleCloudEventTypesToDataType = {
      ${eventTypeMapping}
    };
    
    /**
     * A GoogleCloudEvent is known CloudEvent type which a well defined data payload schema.
     */
    export interface GoogleCloudEvent<T extends keyof GoogleCloudEventTypesToDataType>
      extends CloudEvent<GoogleCloudEventTypesToDataType[T]> {
    };

    /**
     * This interface is used to create the GoogleCloudEventsUnion type. Is it more rigid than
     * the GoogleCloudEvent above because it constrains the 'type' field a one of the known
     * Google event types. This is useful when working with the union type but can be too strict
     * when working with individual events because it prevents assignment from untyped CloudEvent
     * in Typescript.
     */
    export interface GoogleCloudEventUnionType<T extends keyof GoogleCloudEventTypesToDataType>
      extends GoogleCloudEvent<T> {
        type: T;
    };
    
    /**
     * A union type of all known Google CloudEvents.
     *
     * see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
     * and https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
     */
    export type GoogleCloudEventsUnion =
      ${knownEvents};
      
    
    /**
     * Keep a set of of all known GoogleCloudEvent types to be used in the type predicates 
     * provided by this library.
     */
    export const GoogleCloudEventTypes = new Set([
      ${knownEventTypes},
    ]);
    `, {plugins: ['typescript'], syntacticPlaceholders: true, preserveComments: true})();
};

export const FileHeader = `// Copyright 2022 Google LLC
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

// NOTE: This code is auto-generated and should not be edited directly.

`