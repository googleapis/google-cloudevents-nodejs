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
 * The data within all Firebase Remote Config events.
 */
export interface RemoteConfigEventData {
  /**
   * The user-provided description of the corresponding Remote Config template.
   */
  description?: string;
  /**
   * Only present if this version is the result of a rollback, and will be the
   * version number of the Remote Config template that was rolled-back to.
   */
  rollbackSource?: number;
  /**
   * Where the update action originated.
   */
  updateOrigin?: UpdateOriginEnum | number;
  /**
   * When the Remote Config template was written to the Remote Config server.
   */
  updateTime?: Date | string;
  /**
   * What type of update was made.
   */
  updateType?: UpdateTypeEnum | number;
  /**
   * Aggregation of all metadata fields about the account that performed the
   * update.
   */
  updateUser?: UpdateUser;
  /**
   * The version number of the version's corresponding Remote Config template.
   */
  versionNumber?: number;
}

export enum UpdateOriginEnum {
  AdminSDKNode = 'ADMIN_SDK_NODE',
  Console = 'CONSOLE',
  RESTAPI = 'REST_API',
  RemoteConfigUpdateOriginUnspecified = 'REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED',
}

export enum UpdateTypeEnum {
  ForcedUpdate = 'FORCED_UPDATE',
  IncrementalUpdate = 'INCREMENTAL_UPDATE',
  RemoteConfigUpdateTypeUnspecified = 'REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED',
  Rollback = 'ROLLBACK',
}

/**
 * Aggregation of all metadata fields about the account that performed the
 * update.
 */
export interface UpdateUser {
  /**
   * Email address.
   */
  email?: string;
  /**
   * Image URL.
   */
  imageUrl?: string;
  /**
   * Display name.
   */
  name?: string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {RemoteConfigEventData} The object with type annotations
 */
export const toRemoteConfigEventData = (json: object) => {
  return json as RemoteConfigEventData;
};
