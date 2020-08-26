// Generated from https://app.quicktype.io/
export interface MessagePublishedData {
    message: Message;
    subscription: string;
}

export interface Message {
    attributes?: Attributes;
    data: string;
    messageId: string;
    publishTime: Date | string;
}

export interface Attributes { [key: string]: string; }

export const toMessagePublishedData = (json: object) => {
    return json as MessagePublishedData;
};