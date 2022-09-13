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
     * Declare a mapped type that defines which CloudEvent types correspond
     * to which data payload schemas. This is an internal implementation detail of the
     * @google/events library, it is not exposed in the public API.
     *
     * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
     */
    export type GoogleCloudEventTypesToDataType = {
      ${eventTypeMapping}
    };
    
    /**
     * This is a bit of syntactic sugar the allows us to create a concrete CloudEvent type
     * with known "type" of literal type and known data type.
     */
    export interface GoogleCloudEvent<T extends keyof GoogleCloudEventTypesToDataType>
      extends CloudEvent<GoogleCloudEventTypesToDataType[T]> {
    };

    /**
     * This is a bit of syntactic sugar the allows us to create a concrete CloudEvent type
     * with known "type" of literal type and known data type.
     */
    export interface GoogleCloudEventUnionType<T extends keyof GoogleCloudEventTypesToDataType>
      extends GoogleCloudEvent<T> {
        type: T;
    };
    
    /**
     * Define the GoogleCloudEvent type as a union type of all known Google CloudEvents.
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



