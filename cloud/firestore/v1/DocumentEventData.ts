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
 * The data within all Firestore document events.
 */
export interface DocumentEventData {
  /**
   * A Document object containing a pre-operation document snapshot.
   * This is only populated for update and delete events.
   */
  oldValue?: OldValue;
  /**
   * A DocumentMask object that lists changed fields.
   * This is only populated for update events.
   */
  updateMask?: UpdateMask;
  /**
   * A Document object containing a post-operation document snapshot.
   * This is not populated for delete events.
   */
  value?: Value;
}

/**
 * A Document object containing a pre-operation document snapshot.
 * This is only populated for update and delete events.
 *
 * A Firestore document.
 */
export interface OldValue {
  /**
   * The time at which the document was created.
   *
   * This value increases monotonically when a document is deleted then
   * recreated. It can also be compared to values from other documents and
   * the `read_time` of a query.
   */
  createTime?: Date | string;
  /**
   * The document's fields.
   *
   * The map keys represent field names.
   *
   * A simple field name contains only characters `a` to `z`, `A` to `Z`,
   * `0` to `9`, or `_`, and must not start with `0` to `9`. For example,
   * `foo_bar_17`.
   *
   * Field names matching the regular expression `__.*__` are reserved. Reserved
   * field names are forbidden except in certain documented contexts. The map
   * keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
   * empty.
   *
   * Field paths may be used in other contexts to refer to structured fields
   * defined here. For `map_value`, the field path is represented by the simple
   * or quoted field names of the containing fields, delimited by `.`. For
   * example, the structured field
   * `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be
   * represented by the field path `foo.x&y`.
   *
   * Within a field path, a quoted field name starts and ends with `` ` `` and
   * may contain any character. Some characters, including `` ` ``, must be
   * escaped using a `\`. For example, `` `x&y` `` represents `x&y` and
   * `` `bak\`tik` `` represents `` bak`tik ``.
   */
  fields?: {[key: string]: OldValueField};
  /**
   * The resource name of the document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`
   */
  name?: string;
  /**
   * The time at which the document was last changed.
   *
   * This value is initially set to the `create_time` then increases
   * monotonically with each change to the document. It can also be
   * compared to values from other documents and the `read_time` of a query.
   */
  updateTime?: Date | string;
}

/**
 * A message that can hold any of the supported value types.
 */
export interface OldValueField {
  /**
   * An array value.
   *
   * Cannot directly contain another array value, though can contain an
   * map which contains another array.
   */
  arrayValue?: ArrayValue;
  /**
   * A boolean value.
   */
  booleanValue?: boolean;
  /**
   * A bytes value.
   *
   * Must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes are considered by queries.
   */
  bytesValue?: string;
  /**
   * A double value.
   */
  doubleValue?: number;
  /**
   * A geo point value representing a point on the surface of Earth.
   */
  geoPointValue?: GeoPointValue;
  /**
   * An integer value.
   */
  integerValue?: number;
  /**
   * A map value.
   */
  mapValue?: MapValue;
  /**
   * A null value.
   */
  nullValue?: BytesValue | number;
  /**
   * A reference to a document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   */
  referenceValue?: string;
  /**
   * A string value.
   *
   * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes of the UTF-8 representation are considered by
   * queries.
   */
  stringValue?: string;
  /**
   * A timestamp value.
   *
   * Precise only to microseconds. When stored, any additional precision is
   * rounded down.
   */
  timestampValue?: Date | string;
}

/**
 * A message that can hold any of the supported value types.
 */
export interface MapValueField {
  /**
   * An array value.
   *
   * Cannot directly contain another array value, though can contain an
   * map which contains another array.
   */
  arrayValue?: ArrayValue;
  /**
   * A boolean value.
   */
  booleanValue?: boolean;
  /**
   * A bytes value.
   *
   * Must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes are considered by queries.
   */
  bytesValue?: string;
  /**
   * A double value.
   */
  doubleValue?: number;
  /**
   * A geo point value representing a point on the surface of Earth.
   */
  geoPointValue?: GeoPointValue;
  /**
   * An integer value.
   */
  integerValue?: number;
  /**
   * A map value.
   */
  mapValue?: MapValue;
  /**
   * A null value.
   */
  nullValue?: BytesValue | number;
  /**
   * A reference to a document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   */
  referenceValue?: string;
  /**
   * A string value.
   *
   * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes of the UTF-8 representation are considered by
   * queries.
   */
  stringValue?: string;
  /**
   * A timestamp value.
   *
   * Precise only to microseconds. When stored, any additional precision is
   * rounded down.
   */
  timestampValue?: Date | string;
}

/**
 * A map value.
 */
export interface MapValue {
  /**
   * The map's fields.
   *
   * The map keys represent field names. Field names matching the regular
   * expression `__.*__` are reserved. Reserved field names are forbidden except
   * in certain documented contexts. The map keys, represented as UTF-8, must
   * not exceed 1,500 bytes and cannot be empty.
   */
  fields?: {[key: string]: MapValueField};
}

/**
 * A message that can hold any of the supported value types.
 */
export interface ValueElement {
  /**
   * An array value.
   *
   * Cannot directly contain another array value, though can contain an
   * map which contains another array.
   */
  arrayValue?: ArrayValue;
  /**
   * A boolean value.
   */
  booleanValue?: boolean;
  /**
   * A bytes value.
   *
   * Must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes are considered by queries.
   */
  bytesValue?: string;
  /**
   * A double value.
   */
  doubleValue?: number;
  /**
   * A geo point value representing a point on the surface of Earth.
   */
  geoPointValue?: GeoPointValue;
  /**
   * An integer value.
   */
  integerValue?: number;
  /**
   * A map value.
   */
  mapValue?: MapValue;
  /**
   * A null value.
   */
  nullValue?: BytesValue | number;
  /**
   * A reference to a document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   */
  referenceValue?: string;
  /**
   * A string value.
   *
   * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes of the UTF-8 representation are considered by
   * queries.
   */
  stringValue?: string;
  /**
   * A timestamp value.
   *
   * Precise only to microseconds. When stored, any additional precision is
   * rounded down.
   */
  timestampValue?: Date | string;
}

/**
 * An array value.
 *
 * Cannot directly contain another array value, though can contain an
 * map which contains another array.
 */
export interface ArrayValue {
  /**
   * Values in the array.
   */
  values?: ValueElement[];
}

/**
 * A geo point value representing a point on the surface of Earth.
 */
export interface GeoPointValue {
  /**
   * The latitude in degrees. It must be in the range [-90.0, +90.0].
   */
  latitude?: number;
  /**
   * The longitude in degrees. It must be in the range [-180.0, +180.0].
   */
  longitude?: number;
}

export enum BytesValue {
  NullValue = 'NULL_VALUE',
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
 * A Document object containing a post-operation document snapshot.
 * This is not populated for delete events.
 *
 * A Document object containing a pre-operation document snapshot.
 * This is only populated for update and delete events.
 *
 * A Firestore document.
 */
export interface Value {
  /**
   * The time at which the document was created.
   *
   * This value increases monotonically when a document is deleted then
   * recreated. It can also be compared to values from other documents and
   * the `read_time` of a query.
   */
  createTime?: Date | string;
  /**
   * The document's fields.
   *
   * The map keys represent field names.
   *
   * A simple field name contains only characters `a` to `z`, `A` to `Z`,
   * `0` to `9`, or `_`, and must not start with `0` to `9`. For example,
   * `foo_bar_17`.
   *
   * Field names matching the regular expression `__.*__` are reserved. Reserved
   * field names are forbidden except in certain documented contexts. The map
   * keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
   * empty.
   *
   * Field paths may be used in other contexts to refer to structured fields
   * defined here. For `map_value`, the field path is represented by the simple
   * or quoted field names of the containing fields, delimited by `.`. For
   * example, the structured field
   * `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be
   * represented by the field path `foo.x&y`.
   *
   * Within a field path, a quoted field name starts and ends with `` ` `` and
   * may contain any character. Some characters, including `` ` ``, must be
   * escaped using a `\`. For example, `` `x&y` `` represents `x&y` and
   * `` `bak\`tik` `` represents `` bak`tik ``.
   */
  fields?: {[key: string]: OldValueField};
  /**
   * The resource name of the document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`
   */
  name?: string;
  /**
   * The time at which the document was last changed.
   *
   * This value is initially set to the `create_time` then increases
   * monotonically with each change to the document. It can also be
   * compared to values from other documents and the `read_time` of a query.
   */
  updateTime?: Date | string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {DocumentEventData} The object with type annotations
 */
export const toDocumentEventData = (json: object) => {
  return json as DocumentEventData;
};
