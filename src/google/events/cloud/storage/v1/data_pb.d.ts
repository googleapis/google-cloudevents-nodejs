// package: google.events.cloud.storage.v1
// file: google/events/cloud/storage/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";

export class StorageObjectData extends jspb.Message {
  getContentEncoding(): string;
  setContentEncoding(value: string): void;

  getContentDisposition(): string;
  setContentDisposition(value: string): void;

  getCacheControl(): string;
  setCacheControl(value: string): void;

  getContentLanguage(): string;
  setContentLanguage(value: string): void;

  getMetageneration(): number;
  setMetageneration(value: number): void;

  hasTimeDeleted(): boolean;
  clearTimeDeleted(): void;
  getTimeDeleted(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeDeleted(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getContentType(): string;
  setContentType(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  hasTimeCreated(): boolean;
  clearTimeCreated(): void;
  getTimeCreated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeCreated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getCrc32c(): string;
  setCrc32c(value: string): void;

  getComponentCount(): number;
  setComponentCount(value: number): void;

  getMd5Hash(): string;
  setMd5Hash(value: string): void;

  getEtag(): string;
  setEtag(value: string): void;

  hasUpdated(): boolean;
  clearUpdated(): void;
  getUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getStorageClass(): string;
  setStorageClass(value: string): void;

  getKmsKeyName(): string;
  setKmsKeyName(value: string): void;

  hasTimeStorageClassUpdated(): boolean;
  clearTimeStorageClassUpdated(): void;
  getTimeStorageClassUpdated(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimeStorageClassUpdated(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemporaryHold(): boolean;
  setTemporaryHold(value: boolean): void;

  hasRetentionExpirationTime(): boolean;
  clearRetentionExpirationTime(): void;
  getRetentionExpirationTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setRetentionExpirationTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getMetadataMap(): jspb.Map<string, string>;
  clearMetadataMap(): void;
  getEventBasedHold(): boolean;
  setEventBasedHold(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  getId(): string;
  setId(value: string): void;

  getBucket(): string;
  setBucket(value: string): void;

  getGeneration(): number;
  setGeneration(value: number): void;

  hasCustomerEncryption(): boolean;
  clearCustomerEncryption(): void;
  getCustomerEncryption(): StorageObjectData.CustomerEncryption | undefined;
  setCustomerEncryption(value?: StorageObjectData.CustomerEncryption): void;

  getMediaLink(): string;
  setMediaLink(value: string): void;

  getSelfLink(): string;
  setSelfLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StorageObjectData.AsObject;
  static toObject(includeInstance: boolean, msg: StorageObjectData): StorageObjectData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StorageObjectData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StorageObjectData;
  static deserializeBinaryFromReader(message: StorageObjectData, reader: jspb.BinaryReader): StorageObjectData;
}

export namespace StorageObjectData {
  export type AsObject = {
    contentEncoding: string,
    contentDisposition: string,
    cacheControl: string,
    contentLanguage: string,
    metageneration: number,
    timeDeleted?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    contentType: string,
    size: number,
    timeCreated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    crc32c: string,
    componentCount: number,
    md5Hash: string,
    etag: string,
    updated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    storageClass: string,
    kmsKeyName: string,
    timeStorageClassUpdated?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temporaryHold: boolean,
    retentionExpirationTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    metadataMap: Array<[string, string]>,
    eventBasedHold: boolean,
    name: string,
    id: string,
    bucket: string,
    generation: number,
    customerEncryption?: StorageObjectData.CustomerEncryption.AsObject,
    mediaLink: string,
    selfLink: string,
  }

  export class CustomerEncryption extends jspb.Message {
    getEncryptionAlgorithm(): string;
    setEncryptionAlgorithm(value: string): void;

    getKeySha256(): string;
    setKeySha256(value: string): void;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CustomerEncryption.AsObject;
    static toObject(includeInstance: boolean, msg: CustomerEncryption): CustomerEncryption.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CustomerEncryption, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CustomerEncryption;
    static deserializeBinaryFromReader(message: CustomerEncryption, reader: jspb.BinaryReader): CustomerEncryption;
  }

  export namespace CustomerEncryption {
    export type AsObject = {
      encryptionAlgorithm: string,
      keySha256: string,
    }
  }
}

