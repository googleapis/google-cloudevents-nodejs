// package: google.events.cloud.scheduler.v1
// file: google/events/cloud/scheduler/v1/data.proto

import * as jspb from "google-protobuf";

export class SchedulerJobData extends jspb.Message {
  getCustomData(): Uint8Array | string;
  getCustomData_asU8(): Uint8Array;
  getCustomData_asB64(): string;
  setCustomData(value: Uint8Array | string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SchedulerJobData.AsObject;
  static toObject(includeInstance: boolean, msg: SchedulerJobData): SchedulerJobData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SchedulerJobData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SchedulerJobData;
  static deserializeBinaryFromReader(message: SchedulerJobData, reader: jspb.BinaryReader): SchedulerJobData;
}

export namespace SchedulerJobData {
  export type AsObject = {
    customData: Uint8Array | string,
  }
}

