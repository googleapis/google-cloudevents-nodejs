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
 * The data within all Firestore document events.
 */
export interface DocumentEventData {
    /**
     * A Document object containing a pre-operation document snapshot.
     * This is only populated for update and delete events.
     */
    oldValue?: { [key: string]: any };
    /**
     * A DocumentMask object that lists changed fields.
     * This is only populated for update events.
     */
    updateMask?: UpdateMask;
    /**
     * A Document object containing a post-operation document snapshot.
     * This is not populated for delete events. (TODO: check this!)
     */
    value?: { [key: string]: any };
}

/**
 * A DocumentMask object that lists changed fields.
 * This is only populated for update events.
 */
export interface UpdateMask {
    /**
     * The list of field paths in the mask.
     * See [Document.fields][google.cloud.firestore.v1.events.Document.fields]
     * for a field path syntax reference.
     */
    fieldPaths?: string[];
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {DocumentEventData} The object with type annotations
 */
export const toDocumentEventData = (json: object) => {
  return json as DocumentEventData;
};