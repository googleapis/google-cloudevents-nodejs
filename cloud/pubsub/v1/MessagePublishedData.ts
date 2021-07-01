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
 * The event data when a message is published to a topic.
 */
export interface MessagePublishedData {
  /**
   * The message that was published.
   */
  message?: Message;
  /**
   * The resource name of the subscription for which this event was
   * generated. The format of the value is
   * `projects/{project-id}/subscriptions/{subscription-id}`.
   */
  subscription?: string;
}

/**
 * The message that was published.
 */
export interface Message {
  /**
   * Attributes for this message.
   */
  attributes?: {[key: string]: string};
  /**
   * The binary data in the message.
   */
  data?: string;
  /**
   * ID of this message, assigned by the server when the message is published.
   * Guaranteed to be unique within the topic.
   */
  messageId?: string;
  /**
   * If non-empty, identifies related messages for which publish order should be
   * respected.
   */
  orderingKey?: string;
  /**
   * The time at which the message was published, populated by the server when
   * it receives the `Publish` call.
   */
  publishTime?: Date | string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {MessagePublishedData} The object with type annotations
 */
export const toMessagePublishedData = (json: object) => {
  return json as MessagePublishedData;
};
