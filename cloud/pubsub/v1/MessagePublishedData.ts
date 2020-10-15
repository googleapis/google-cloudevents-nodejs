// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * A message that is published by publishers and consumed by subscribers.
 */
export interface MessagePublishedData {
    /**
     * The message that was published.
     */
    message?: PubsubMessage;
    /**
     * The resource name of the subscription for which this event was generated. The format of
     * the value is `projects/{project-id}/subscriptions/{subscription-id}`.
     */
    subscription?: string;
}

/**
 * The message that was published.
 *
 * A message published to a topic.
 */
export interface PubsubMessage {
    /**
     * Attributes for this message. If this field is empty, the message must contain non-empty
     * data. This can be used to filter messages on the subscription.
     */
    attributes?: { [key: string]: any };
    /**
     * The message data field. If this field is empty, the message must contain at least one
     * attribute. A base64-encoded string.
     */
    data?: string;
    /**
     * ID of this message, assigned by the server when the message is published. Guaranteed to
     * be unique within the topic. This value may be read by a subscriber that receives a
     * PubsubMessage via a subscriptions.pull call or a push delivery. It must not be populated
     * by the publisher in a topics.publish call.
     */
    messageId?: string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {MessagePublishedData} The object with type annotations
 */
export const toMessagePublishedData = (json: object) => {
  return json as MessagePublishedData;
};