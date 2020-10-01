// To parse this data:
//
//   import { Convert, MessagePublishedData } from "./file";
//
//   const messagePublishedData = Convert.toMessagePublishedData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * A message that is published by publishers and consumed by subscribers.
 */
export interface MessagePublishedData {
    /**
     * The message that was published.
     */
    message?: PubsubMessage;
    /**
     * The resource name of the subscription for which this event was generated. The format of
     * the value is `projects/{project-id}/subscriptions/{subscription-id}`.
     */
    subscription?: string;
}

/**
 * The message that was published.
 *
 * A message published to a topic.
 */
export interface PubsubMessage {
    /**
     * Attributes for this message. If this field is empty, the message must contain non-empty
     * data. This can be used to filter messages on the subscription.
     */
    attributes?: { [key: string]: any };
    /**
     * The message data field. If this field is empty, the message must contain at least one
     * attribute. A base64-encoded string.
     */
    data?: string;
    /**
     * ID of this message, assigned by the server when the message is published. Guaranteed to
     * be unique within the topic. This value may be read by a subscriber that receives a
     * PubsubMessage via a subscriptions.pull call or a push delivery. It must not be populated
     * by the publisher in a topics.publish call.
     */
    messageId?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toMessagePublishedData(json: string): MessagePublishedData {
        return cast(JSON.parse(json), r("MessagePublishedData"));
    }

    public static messagePublishedDataToJson(value: MessagePublishedData): string {
        return JSON.stringify(uncast(value, r("MessagePublishedData")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
    if (key) {
        throw Error(`Invalid value for key "${key}". Expected type ${JSON.stringify(typ)} but got ${JSON.stringify(val)}`);
    }
    throw Error(`Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`, );
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases, val);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue("array", val);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue("Date", val);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue("object", val);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, prop.key);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val);
    }
    if (typ === false) return invalidValue(typ, val);
    while (typeof typ === "object" && typ.ref !== undefined) {
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "MessagePublishedData": o([
        { json: "message", js: "message", typ: u(undefined, r("PubsubMessage")) },
        { json: "subscription", js: "subscription", typ: u(undefined, "") },
    ], "any"),
    "PubsubMessage": o([
        { json: "attributes", js: "attributes", typ: u(undefined, m("any")) },
        { json: "data", js: "data", typ: u(undefined, "") },
        { json: "messageId", js: "messageId", typ: u(undefined, "") },
    ], "any"),
};

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {MessagePublishedData} The object with type annotations
 */
export const toMessagePublishedData = (json: object) => {
  return json as MessagePublishedData;
};