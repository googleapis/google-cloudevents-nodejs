// To parse this data:
//
//   import { Convert, LogEntryData } from "./file";
//
//   const logEntryData = Convert.toLogEntryData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface LogEntryDataObject {
    /**
     * This event is triggered when a new audit log entry is written.
     */
    AuditLogWrittenEvent?: AuditLogWrittenEvent;
}

/**
 * This event is triggered when a new audit log entry is written.
 */
export interface AuditLogWrittenEvent {
    insert_id?:         string;
    labels?:            { [key: string]: any };
    log_name?:          string;
    operation?:         LogEntryOperation;
    proto_payload?:     AuditLog;
    receive_timestamp?: string;
    resource?:          MonitoredResource;
    severity?:          number;
    span_id?:           string;
    timestamp?:         string;
    trace?:             string;
}

export interface LogEntryOperation {
    first?:    boolean;
    id?:       string;
    last?:     boolean;
    producer?: string;
}

export interface AuditLog {
    authentication_info?:     AuthenticationInfo;
    authorization_info?:      AuthorizationInfo[];
    metadata?:                { [key: string]: any };
    method_name?:             string;
    num_response_items?:      number;
    request?:                 { [key: string]: any };
    request_metadata?:        RequestMetadata;
    resource_location?:       ResourceLocation;
    resource_name?:           string;
    resource_original_state?: { [key: string]: any };
    response?:                { [key: string]: any };
    service_data?:            { [key: string]: any };
    service_name?:            string;
    status?:                  Status;
}

export interface AuthenticationInfo {
    authority_selector?:              string;
    principal_email?:                 string;
    principal_subject?:               string;
    service_account_delegation_info?: ServiceAccountDelegationInfo[];
    service_account_key_name?:        string;
    third_party_principal?:           { [key: string]: any };
}

export interface ServiceAccountDelegationInfo {
    principal_email?:    string;
    service_metadata?:   { [key: string]: any };
    third_party_claims?: { [key: string]: any };
}

export interface AuthorizationInfo {
    granted?:             boolean;
    permission?:          string;
    resource?:            string;
    resource_attributes?: Resource;
}

export interface Resource {
    labels?:  { [key: string]: any };
    name?:    string;
    service?: string;
    type?:    string;
}

export interface RequestMetadata {
    caller_ip?:                  string;
    caller_network?:             string;
    caller_supplied_user_agent?: string;
    destination_attributes?:     Peer;
    request_attributes?:         Request;
}

export interface Peer {
    ip?:          string;
    labels?:      { [key: string]: any };
    port?:        number;
    principal?:   string;
    region_code?: string;
}

export interface Request {
    auth?:     Auth;
    headers?:  { [key: string]: any };
    host?:     string;
    id?:       string;
    method?:   string;
    path?:     string;
    protocol?: string;
    query?:    string;
    reason?:   string;
    scheme?:   string;
    size?:     number;
    time?:     string;
}

export interface Auth {
    access_levels?: string[];
    audiences?:     string[];
    claims?:        { [key: string]: any };
    presenter?:     string;
    principal?:     string;
}

export interface ResourceLocation {
    current_locations?:  string[];
    original_locations?: string[];
}

export interface Status {
    code?:    number;
    details?: any;
    message?: string;
}

export interface MonitoredResource {
    labels?: { [key: string]: any };
    type?:   string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toLogEntryData(json: string): any[] | boolean | number | number | null | LogEntryDataObject | string {
        return cast(JSON.parse(json), u(a("any"), true, 3.14, 0, null, r("LogEntryDataObject"), ""));
    }

    public static logEntryDataToJson(value: any[] | boolean | number | number | null | LogEntryDataObject | string): string {
        return JSON.stringify(uncast(value, u(a("any"), true, 3.14, 0, null, r("LogEntryDataObject"), "")), null, 2);
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
    "LogEntryDataObject": o([
        { json: "AuditLogWrittenEvent", js: "AuditLogWrittenEvent", typ: u(undefined, r("AuditLogWrittenEvent")) },
    ], "any"),
    "AuditLogWrittenEvent": o([
        { json: "insert_id", js: "insert_id", typ: u(undefined, "") },
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "log_name", js: "log_name", typ: u(undefined, "") },
        { json: "operation", js: "operation", typ: u(undefined, r("LogEntryOperation")) },
        { json: "proto_payload", js: "proto_payload", typ: u(undefined, r("AuditLog")) },
        { json: "receive_timestamp", js: "receive_timestamp", typ: u(undefined, "") },
        { json: "resource", js: "resource", typ: u(undefined, r("MonitoredResource")) },
        { json: "severity", js: "severity", typ: u(undefined, 0) },
        { json: "span_id", js: "span_id", typ: u(undefined, "") },
        { json: "timestamp", js: "timestamp", typ: u(undefined, "") },
        { json: "trace", js: "trace", typ: u(undefined, "") },
    ], "any"),
    "LogEntryOperation": o([
        { json: "first", js: "first", typ: u(undefined, true) },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "last", js: "last", typ: u(undefined, true) },
        { json: "producer", js: "producer", typ: u(undefined, "") },
    ], "any"),
    "AuditLog": o([
        { json: "authentication_info", js: "authentication_info", typ: u(undefined, r("AuthenticationInfo")) },
        { json: "authorization_info", js: "authorization_info", typ: u(undefined, a(r("AuthorizationInfo"))) },
        { json: "metadata", js: "metadata", typ: u(undefined, m("any")) },
        { json: "method_name", js: "method_name", typ: u(undefined, "") },
        { json: "num_response_items", js: "num_response_items", typ: u(undefined, 0) },
        { json: "request", js: "request", typ: u(undefined, m("any")) },
        { json: "request_metadata", js: "request_metadata", typ: u(undefined, r("RequestMetadata")) },
        { json: "resource_location", js: "resource_location", typ: u(undefined, r("ResourceLocation")) },
        { json: "resource_name", js: "resource_name", typ: u(undefined, "") },
        { json: "resource_original_state", js: "resource_original_state", typ: u(undefined, m("any")) },
        { json: "response", js: "response", typ: u(undefined, m("any")) },
        { json: "service_data", js: "service_data", typ: u(undefined, m("any")) },
        { json: "service_name", js: "service_name", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ], "any"),
    "AuthenticationInfo": o([
        { json: "authority_selector", js: "authority_selector", typ: u(undefined, "") },
        { json: "principal_email", js: "principal_email", typ: u(undefined, "") },
        { json: "principal_subject", js: "principal_subject", typ: u(undefined, "") },
        { json: "service_account_delegation_info", js: "service_account_delegation_info", typ: u(undefined, a(r("ServiceAccountDelegationInfo"))) },
        { json: "service_account_key_name", js: "service_account_key_name", typ: u(undefined, "") },
        { json: "third_party_principal", js: "third_party_principal", typ: u(undefined, m("any")) },
    ], "any"),
    "ServiceAccountDelegationInfo": o([
        { json: "principal_email", js: "principal_email", typ: u(undefined, "") },
        { json: "service_metadata", js: "service_metadata", typ: u(undefined, m("any")) },
        { json: "third_party_claims", js: "third_party_claims", typ: u(undefined, m("any")) },
    ], "any"),
    "AuthorizationInfo": o([
        { json: "granted", js: "granted", typ: u(undefined, true) },
        { json: "permission", js: "permission", typ: u(undefined, "") },
        { json: "resource", js: "resource", typ: u(undefined, "") },
        { json: "resource_attributes", js: "resource_attributes", typ: u(undefined, r("Resource")) },
    ], "any"),
    "Resource": o([
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "service", js: "service", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], "any"),
    "RequestMetadata": o([
        { json: "caller_ip", js: "caller_ip", typ: u(undefined, "") },
        { json: "caller_network", js: "caller_network", typ: u(undefined, "") },
        { json: "caller_supplied_user_agent", js: "caller_supplied_user_agent", typ: u(undefined, "") },
        { json: "destination_attributes", js: "destination_attributes", typ: u(undefined, r("Peer")) },
        { json: "request_attributes", js: "request_attributes", typ: u(undefined, r("Request")) },
    ], "any"),
    "Peer": o([
        { json: "ip", js: "ip", typ: u(undefined, "") },
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "port", js: "port", typ: u(undefined, 0) },
        { json: "principal", js: "principal", typ: u(undefined, "") },
        { json: "region_code", js: "region_code", typ: u(undefined, "") },
    ], "any"),
    "Request": o([
        { json: "auth", js: "auth", typ: u(undefined, r("Auth")) },
        { json: "headers", js: "headers", typ: u(undefined, m("any")) },
        { json: "host", js: "host", typ: u(undefined, "") },
        { json: "id", js: "id", typ: u(undefined, "") },
        { json: "method", js: "method", typ: u(undefined, "") },
        { json: "path", js: "path", typ: u(undefined, "") },
        { json: "protocol", js: "protocol", typ: u(undefined, "") },
        { json: "query", js: "query", typ: u(undefined, "") },
        { json: "reason", js: "reason", typ: u(undefined, "") },
        { json: "scheme", js: "scheme", typ: u(undefined, "") },
        { json: "size", js: "size", typ: u(undefined, 0) },
        { json: "time", js: "time", typ: u(undefined, "") },
    ], "any"),
    "Auth": o([
        { json: "access_levels", js: "access_levels", typ: u(undefined, a("")) },
        { json: "audiences", js: "audiences", typ: u(undefined, a("")) },
        { json: "claims", js: "claims", typ: u(undefined, m("any")) },
        { json: "presenter", js: "presenter", typ: u(undefined, "") },
        { json: "principal", js: "principal", typ: u(undefined, "") },
    ], "any"),
    "ResourceLocation": o([
        { json: "current_locations", js: "current_locations", typ: u(undefined, a("")) },
        { json: "original_locations", js: "original_locations", typ: u(undefined, a("")) },
    ], "any"),
    "Status": o([
        { json: "code", js: "code", typ: u(undefined, 0) },
        { json: "details", js: "details", typ: u(undefined, "any") },
        { json: "message", js: "message", typ: u(undefined, "") },
    ], "any"),
    "MonitoredResource": o([
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], "any"),
};

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {AuditLogWrittenEvent} The object with type annotations
 */
export const toAuditLogWrittenEvent = (json: object) => {
  return json as AuditLogWrittenEvent;
};