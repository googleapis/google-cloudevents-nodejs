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

/**
 * The object interface for a CloudEvent.
 * @see https://github.com/cloudevents/spec/blob/v1.0/spec.md
 */
export interface CloudEvent<T = unknown> {
  /**
   * Identifier for the event.
   */
  id: string;

  /**
   * The version of the CloudEvents specification which the event uses.
   */
  specversion: string;

  /**
   * Identifies the context in which an event happened.
   */
  source: string;

  /**
   * The type of event.
   */
  type: string;

  /**
   * The content type of the data string.
   */
  datacontenttype?: string;

  /**
   * The schema that `data` adheres to. If present, MUST be a non-empty URI.
   */
  dataschema?: string;

  /**
   * Describes the subject of the event in the context of the source.
   */
  subject?: string;
  /**
   * Timestamp of when the event happened.
   */
  time?: string;
  /**
   * The event payload.
   */
  data?: T;
}
