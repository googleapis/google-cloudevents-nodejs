// package: google.events.cloud.pubsub.v1
// file: google/events/cloud/pubsub/v1/data.proto

import * as jspb from "google-protobuf";

export class MessagePublishedData extends jspb.Message {
  hasMessage(): boolean;
  clearMessage(): void;
  getMessage(): PubsubMessage | undefined;
  setMessage(value?: PubsubMessage): void;

  getSubscription(): string;
  setSubscription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessagePublishedData.AsObject;
  static toObject(includeInstance: boolean, msg: MessagePublishedData): MessagePublishedData.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MessagePublishedData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessagePublishedData;
  static deserializeBinaryFromReader(message: MessagePublishedData, reader: jspb.BinaryReader): MessagePublishedData;
}

export namespace MessagePublishedData {
  export type AsObject = {
    message?: PubsubMessage.AsObject,
    subscription: string,
  }
}

export class PubsubMessage extends jspb.Message {
  getData(): Uint8Array | string;
  getData_asU8(): Uint8Array;
  getData_asB64(): string;
  setData(value: Uint8Array | string): void;

  getAttributesMap(): jspb.Map<string, string>;
  clearAttributesMap(): void;
  getMessageId(): string;
  setMessageId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PubsubMessage.AsObject;
  static toObject(includeInstance: boolean, msg: PubsubMessage): PubsubMessage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PubsubMessage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PubsubMessage;
  static deserializeBinaryFromReader(message: PubsubMessage, reader: jspb.BinaryReader): PubsubMessage;
}

export namespace PubsubMessage {
  export type AsObject = {
    data: Uint8Array | string,
    attributesMap: Array<[string, string]>,
    messageId: string,
  }
}

