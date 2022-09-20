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

import { google, GoogleCloudEvent, GoogleCloudEventsUnion, GoogleCloudEventTypes, GoogleCloudEventTypesToDataType } from '../events/events';

/**
 * Check if a given a CloudEvent is a known GoogleCloudEvent.
 *
 * @param event the CloudEvent to check the type of
 * @returns true if this event is a GoogleCloudEvent of the provided type, false otherwise
 */
export function isGoogleEvent(
  event: any,
): event is GoogleCloudEventsUnion;
/**
 * Check if a given a CloudEvent is a known Google CloudEvent of a given type.
 *
 * @param event the CloudEvent to check the type of
 * @param eventType one of the know GoogleCloudEvent literal types
 * @returns true if this event is a GoogleCloudEvent of the provided type, false otherwise
 */
export function isGoogleEvent<T extends keyof GoogleCloudEventTypesToDataType>(
  event: any,
  eventType: T
): event is GoogleCloudEvent<T>;

export function isGoogleEvent(
  event: any,
  eventType?: keyof GoogleCloudEventTypesToDataType
): event is GoogleCloudEventsUnion {
  if (!event) {
    return false;
  }
  if (eventType) {
    return event.type === eventType;
  }
  return GoogleCloudEventTypes.has(event.type);
}

export { CloudEvent } from './cloudevent';
export { GoogleCloudEvent, GoogleCloudEventsUnion, google };
