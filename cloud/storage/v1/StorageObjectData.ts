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
 * An object within Google Cloud Storage.
 */
export interface StorageObjectData {
  /**
   * The name of the bucket containing this object.
   */
  bucket?: string;
  /**
   * Cache-Control directive for the object data, matching
   * [https://tools.ietf.org/html/rfc7234#section-5.2"][RFC 7234 §5.2].
   */
  cacheControl?: string;
  /**
   * Number of underlying components that make up this object. Components are
   * accumulated by compose operations.
   * Attempting to set this field will result in an error.
   */
  componentCount?: number;
  /**
   * Content-Disposition of the object data, matching
   * [https://tools.ietf.org/html/rfc6266][RFC 6266].
   */
  contentDisposition?: string;
  /**
   * Content-Encoding of the object data, matching
   * [https://tools.ietf.org/html/rfc7231#section-3.1.2.2][RFC 7231 §3.1.2.2]
   */
  contentEncoding?: string;
  /**
   * Content-Language of the object data, matching
   * [https://tools.ietf.org/html/rfc7231#section-3.1.3.2][RFC 7231 §3.1.3.2].
   */
  contentLanguage?: string;
  /**
   * Content-Type of the object data, matching
   * [https://tools.ietf.org/html/rfc7231#section-3.1.1.5][RFC 7231 §3.1.1.5].
   * If an object is stored without a Content-Type, it is served as
   * `application/octet-stream`.
   */
  contentType?: string;
  /**
   * CRC32c checksum. For more information about using the CRC32c
   * checksum, see
   * [https://cloud.google.com/storage/docs/hashes-etags#_JSONAPI][Hashes and
   * ETags: Best Practices].
   */
  crc32c?: string;
  /**
   * Metadata of customer-supplied encryption key, if the object is encrypted by
   * such a key.
   */
  customerEncryption?: CustomerEncryption;
  /**
   * HTTP 1.1 Entity tag for the object. See
   * [https://tools.ietf.org/html/rfc7232#section-2.3][RFC 7232 §2.3].
   */
  etag?: string;
  /**
   * Whether an object is under event-based hold.
   */
  eventBasedHold?: boolean;
  /**
   * The content generation of this object. Used for object versioning.
   * Attempting to set this field will result in an error.
   */
  generation?: number;
  /**
   * The ID of the object, including the bucket name, object name, and
   * generation number.
   */
  id?: string;
  /**
   * The kind of item this is. For objects, this is always "storage#object".
   */
  kind?: string;
  /**
   * Cloud KMS Key used to encrypt this object, if the object is encrypted by
   * such a key.
   */
  kmsKeyName?: string;
  /**
   * MD5 hash of the data; encoded using base64 as per
   * [https://tools.ietf.org/html/rfc4648#section-4][RFC 4648 §4]. For more
   * information about using the MD5 hash, see
   * [https://cloud.google.com/storage/docs/hashes-etags#_JSONAPI][Hashes and
   * ETags: Best Practices].
   */
  md5Hash?: string;
  /**
   * Media download link.
   */
  mediaLink?: string;
  /**
   * User-provided metadata, in key/value pairs.
   */
  metadata?: {[key: string]: string};
  /**
   * The version of the metadata for this object at this generation. Used for
   * preconditions and for detecting changes in metadata. A metageneration
   * number is only meaningful in the context of a particular generation of a
   * particular object.
   */
  metageneration?: number;
  /**
   * The name of the object.
   */
  name?: string;
  /**
   * A server-determined value that specifies the earliest time that the
   * object's retention period expires.
   */
  retentionExpirationTime?: Date | string;
  /**
   * The link to this object.
   */
  selfLink?: string;
  /**
   * Content-Length of the object data in bytes, matching
   * [https://tools.ietf.org/html/rfc7230#section-3.3.2][RFC 7230 §3.3.2].
   */
  size?: number;
  /**
   * Storage class of the object.
   */
  storageClass?: string;
  /**
   * Whether an object is under temporary hold.
   */
  temporaryHold?: boolean;
  /**
   * The creation time of the object.
   * Attempting to set this field will result in an error.
   */
  timeCreated?: Date | string;
  /**
   * The deletion time of the object. Will be returned if and only if this
   * version of the object has been deleted.
   */
  timeDeleted?: Date | string;
  /**
   * The time at which the object's storage class was last changed.
   */
  timeStorageClassUpdated?: Date | string;
  /**
   * The modification time of the object metadata.
   */
  updated?: Date | string;
}

/**
 * Metadata of customer-supplied encryption key, if the object is encrypted by
 * such a key.
 */
export interface CustomerEncryption {
  /**
   * The encryption algorithm.
   */
  encryptionAlgorithm?: string;
  /**
   * SHA256 hash value of the encryption key.
   */
  keySha256?: string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {StorageObjectData} The object with type annotations
 */
export const toStorageObjectData = (json: object) => {
  return json as StorageObjectData;
};
