import template from '@babel/template';
import * as t from '@babel/types';

export const CloudEventImportStatement = template.statement(`
import {CloudEvent} from '../src/cloudevent';
`);

export const KnownEventsStatements = (
  cloudEvents: Map<string, string>
): t.Statement[] => {
  const eventTypeMapping = Array.from(cloudEvents.entries())
    .map(([key, value]) => {
      return `'${key}': ${value};`;
    })
    .join('\n');

  const knownEvents = Array.from(cloudEvents.keys())
    .map(t => `KnownGoogleCloudEvent<'${t}'>`)
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
    type GoogleCloudEventTypesToDataType = {
      ${eventTypeMapping}
    };
    
    /**
     * This is a bit of syntactic sugar the allows us to create a concrete CloudEvent type
     * with known "type" of literal type and known data type.
     */
    interface KnownGoogleCloudEvent<T extends keyof GoogleCloudEventTypesToDataType>
      extends CloudEvent<GoogleCloudEventTypesToDataType[T]> {
      type: T;
    };
    
    /**
     * Modification 4: Define the GoogleCloudEvent type as a union type of all known
     * Google Events.
     *
     * see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
     * and https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
     */
    export type GoogleCloudEvent =
      ${knownEvents};
      
    
    /**
     * Modification 5: Keep a set of of all known GoogleCloudEvent types to be used
     * in the type predicates defined below. This is an internal implementation detail
     * of the @google/events library, it is not exposed in the public API.
     */
    const knownEventTypes = new Set([
      ${knownEventTypes},
    ]);
    `, {plugins: ['typescript'], syntacticPlaceholders: true, preserveComments: true})();
};



