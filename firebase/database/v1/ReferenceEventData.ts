/**
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The data within all Firebase Real Time Database reference events.
 */
export interface ReferenceEventData {
  data?: any[] | boolean | number | {[key: string]: any} | string;
  delta?: any[] | boolean | number | {[key: string]: any} | string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {ReferenceEventData} The object with type annotations
 */
export const toReferenceEventData = (json: object) => {
  return json as ReferenceEventData;
};
