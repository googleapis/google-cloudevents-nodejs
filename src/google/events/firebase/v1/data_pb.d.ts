// package: google.events.firebase.v1
// file: google/events/firebase/v1/data.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_struct_pb from "google-protobuf/google/protobuf/struct_pb";

export class DocumentEventData extends jspb.Message {
  hasData(): boolean;
  clearData(): void;
  getData(): google_protobuf_struct_pb.Value | undefined;
  setData(value?: google_protobuf_struct_pb.Value): void;

  hasDelta(): boolean;
  clearDelta(): void;
  getDelta(): google_protobuf_struct_pb.Value | undefined;
  setDelta(value?: google_protobuf_struct_pb.Value): void;

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
    data?: google_protobuf_struct_pb.Value.AsObject,
    delta?: google_protobuf_struct_pb.Value.AsObject,
    wildcardsMap: Array<[string, string]>,
  }
}

