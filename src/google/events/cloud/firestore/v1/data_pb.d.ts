// package: google.events.cloud.firestore.v1
// file: google/events/cloud/firestore/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_type_latlng_pb from "../../../../../google/type/latlng_pb";

export class DocumentEventData extends jspb.Message {
  hasValue(): boolean;
  clearValue(): void;
  getValue(): Document | undefined;
  setValue(value?: Document): void;

  hasOldValue(): boolean;
  clearOldValue(): void;
  getOldValue(): Document | undefined;
  setOldValue(value?: Document): void;

  hasUpdateMask(): boolean;
  clearUpdateMask(): void;
  getUpdateMask(): DocumentMask | undefined;
  setUpdateMask(value?: DocumentMask): void;

  getWildcardsMap(): jspb.Map<string, string>;
  clearWildcardsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentEventData.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentEventData): DocumentEventData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentEventData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentEventData;
  static deserializeBinaryFromReader(message: DocumentEventData, reader: jspb.BinaryReader): DocumentEventData;
}

export namespace DocumentEventData {
  export type AsObject = {
    value?: Document.AsObject,
    oldValue?: Document.AsObject,
    updateMask?: DocumentMask.AsObject,
    wildcardsMap: Array<[string, string]>,
  }
}

export class DocumentMask extends jspb.Message {
  clearFieldPathsList(): void;
  getFieldPathsList(): Array<string>;
  setFieldPathsList(value: Array<string>): void;
  addFieldPaths(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DocumentMask.AsObject;
  static toObject(includeInstance: boolean, msg: DocumentMask): DocumentMask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DocumentMask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DocumentMask;
  static deserializeBinaryFromReader(message: DocumentMask, reader: jspb.BinaryReader): DocumentMask;
}

export namespace DocumentMask {
  export type AsObject = {
    fieldPathsList: Array<string>,
  }
}

export class Document extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;
  hasCreateTime(): boolean;
  clearCreateTime(): void;
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasUpdateTime(): boolean;
  clearUpdateTime(): void;
  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Document.AsObject;
  static toObject(includeInstance: boolean, msg: Document): Document.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Document, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Document;
  static deserializeBinaryFromReader(message: Document, reader: jspb.BinaryReader): Document;
}

export namespace Document {
  export type AsObject = {
    name: string,
    fieldsMap: Array<[string, Value.AsObject]>,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

export class Value extends jspb.Message {
  hasNullValue(): boolean;
  clearNullValue(): void;
  getNullValue(): google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap];
  setNullValue(value: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap]): void;

  hasBooleanValue(): boolean;
  clearBooleanValue(): void;
  getBooleanValue(): boolean;
  setBooleanValue(value: boolean): void;

  hasIntegerValue(): boolean;
  clearIntegerValue(): void;
  getIntegerValue(): number;
  setIntegerValue(value: number): void;

  hasDoubleValue(): boolean;
  clearDoubleValue(): void;
  getDoubleValue(): number;
  setDoubleValue(value: number): void;

  hasTimestampValue(): boolean;
  clearTimestampValue(): void;
  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): void;

  hasStringValue(): boolean;
  clearStringValue(): void;
  getStringValue(): string;
  setStringValue(value: string): void;

  hasBytesValue(): boolean;
  clearBytesValue(): void;
  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): void;

  hasReferenceValue(): boolean;
  clearReferenceValue(): void;
  getReferenceValue(): string;
  setReferenceValue(value: string): void;

  hasGeoPointValue(): boolean;
  clearGeoPointValue(): void;
  getGeoPointValue(): google_type_latlng_pb.LatLng | undefined;
  setGeoPointValue(value?: google_type_latlng_pb.LatLng): void;

  hasArrayValue(): boolean;
  clearArrayValue(): void;
  getArrayValue(): ArrayValue | undefined;
  setArrayValue(value?: ArrayValue): void;

  hasMapValue(): boolean;
  clearMapValue(): void;
  getMapValue(): MapValue | undefined;
  setMapValue(value?: MapValue): void;

  getValueTypeCase(): Value.ValueTypeCase;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValueMap[keyof google_protobuf_struct_pb.NullValueMap],
    booleanValue: boolean,
    integerValue: number,
    doubleValue: number,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    stringValue: string,
    bytesValue: Uint8Array | string,
    referenceValue: string,
    geoPointValue?: google_type_latlng_pb.LatLng.AsObject,
    arrayValue?: ArrayValue.AsObject,
    mapValue?: MapValue.AsObject,
  }

  export enum ValueTypeCase {
    VALUE_TYPE_NOT_SET = 0,
    NULL_VALUE = 11,
    BOOLEAN_VALUE = 1,
    INTEGER_VALUE = 2,
    DOUBLE_VALUE = 3,
    TIMESTAMP_VALUE = 10,
    STRING_VALUE = 17,
    BYTES_VALUE = 18,
    REFERENCE_VALUE = 5,
    GEO_POINT_VALUE = 8,
    ARRAY_VALUE = 9,
    MAP_VALUE = 6,
  }
}

export class ArrayValue extends jspb.Message {
  clearValuesList(): void;
  getValuesList(): Array<Value>;
  setValuesList(value: Array<Value>): void;
  addValues(value?: Value, index?: number): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ArrayValue.AsObject;
  static toObject(includeInstance: boolean, msg: ArrayValue): ArrayValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ArrayValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ArrayValue;
  static deserializeBinaryFromReader(message: ArrayValue, reader: jspb.BinaryReader): ArrayValue;
}

export namespace ArrayValue {
  export type AsObject = {
    valuesList: Array<Value.AsObject>,
  }
}

export class MapValue extends jspb.Message {
  getFieldsMap(): jspb.Map<string, Value>;
  clearFieldsMap(): void;
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MapValue.AsObject;
  static toObject(includeInstance: boolean, msg: MapValue): MapValue.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MapValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MapValue;
  static deserializeBinaryFromReader(message: MapValue, reader: jspb.BinaryReader): MapValue;
}

export namespace MapValue {
  export type AsObject = {
    fieldsMap: Array<[string, Value.AsObject]>,
  }
}

