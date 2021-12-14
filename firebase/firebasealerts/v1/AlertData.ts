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
 * The data within all Firebase Alerts.
 */
export interface AlertData {
  /**
   * Time that the event has created
   */
  createTime?: Date | string;
  /**
   * Time that the event has ended. Optional, only present for alertsthat are
   * ongoing
   */
  endTime?: Date | string;
  /**
   * Payload of the event, which includes the details of the specific alert.
   * It's a map of keys of String type and values of various types
   */
  payload?: {[key: string]: any};
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {AlertData} The object with type annotations
 */
export const toAlertData = (json: object) => {
  return json as AlertData;
};
