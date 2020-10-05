// To parse this data:
//
//   import { Convert, LogEntryData } from "./file";
//
//   const logEntryData = Convert.toLogEntryData(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

/**
 * This event is triggered when a new audit log entry is written.
 */
export interface LogEntryData {
    /**
     * A unique identifier for the log entry.
     */
    insertId?: string;
    /**
     * A set of user-defined (key, value) data that provides additional information about the
     * log entry.
     */
    labels?: { [key: string]: any };
    /**
     * The resource name of the log to which this log entry belongs.
     */
    logName?: string;
    /**
     * Information about an operation associated with the log entry, if applicable.
     */
    operation?: LogEntryOperation;
    /**
     * The log entry payload, which is always an AuditLog for Cloud Audit Log events.
     */
    protoPayload?: AuditLog;
    /**
     * The time the log entry was received by Logging.
     */
    receiveTimestamp?: string;
    /**
     * The monitored resource that produced this log entry. Example: a log entry that reports a
     * database error would be associated with the monitored resource designating the particular
     * database that reported the error.
     */
    resource?: MonitoredResource;
    /**
     * The severity of the log entry.
     */
    severity?: string;
    /**
     * The span ID within the trace associated with the log entry, if any. For Trace spans, this
     * is the same format that the Trace API v2 uses: a 16-character hexadecimal encoding of an
     * 8-byte array, such as `000000000000004a`.
     */
    spanId?: string;
    /**
     * The time the event described by the log entry occurred.
     */
    timestamp?: string;
    /**
     * Resource name of the trace associated with the log entry, if any. If it contains a
     * relative resource name, the name is assumed to be relative to `//tracing.googleapis.com`.
     * Example: `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
     */
    trace?: string;
}

/**
 * Information about an operation associated with the log entry, if applicable.
 *
 * Additional information about a potentially long-running operation with which a log entry
 * is associated.
 */
export interface LogEntryOperation {
    /**
     * True if this is the first log entry in the operation.
     */
    first?: boolean;
    /**
     * An arbitrary operation identifier. Log entries with the same identifier are assumed to be
     * part of the same operation.
     */
    id?: string;
    /**
     * True if this is the last log entry in the operation.
     */
    last?: boolean;
    /**
     * An arbitrary producer identifier. The combination of `id` and `producer` must be globally
     * unique. Examples for `producer`: `"MyDivision.MyBigCompany.com"`,
     * `"github.com/MyProject/MyApplication"`.
     */
    producer?: string;
}

/**
 * The log entry payload, which is always an AuditLog for Cloud Audit Log events.
 */
export interface AuditLog {
    /**
     * Authentication information.
     */
    authenticationInfo?: AuthenticationInfo;
    /**
     * Authorization information. If there are multiple resources or permissions involved, then
     * there is one AuthorizationInfo element for each {resource, permission} tuple.
     */
    authorizationInfo?: AuthorizationInfo[];
    /**
     * Other service-specific data about the request, response, and other information associated
     * with the current audited event.
     */
    metadata?: { [key: string]: any };
    /**
     * The name of the service method or operation. For example
     * "google.datastore.v1.Datastore.RunQuery"
     */
    methodName?: string;
    /**
     * The number of items returned from a List or Query API method, if applicable.
     */
    numResponseItems?: number;
    /**
     * The operation request. This may not include all request parameters, such as those that
     * are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should
     * never include user-generated data, such as file contents. When the JSON object
     * represented here has a proto equivalent, the proto name will be indicated in the `@type`
     * property.
     */
    request?: { [key: string]: any };
    /**
     * Metadata about the operation.
     */
    requestMetadata?: RequestMetadata;
    /**
     * The resource location information.
     */
    resourceLocation?: ResourceLocation;
    /**
     * The resource or collection that is the target of the operation. For example
     * "shelves/SHELF_ID/books"
     */
    resourceName?: string;
    /**
     * The resource's original state before mutation.
     */
    resourceOriginalState?: { [key: string]: any };
    /**
     * The operation response. This may not include all response elements, such as those that
     * are too large, privacy-sensitive, or duplicated elsewhere in the log record. It should
     * never include user-generated data, such as file contents. When the JSON object
     * represented here has a proto equivalent, the proto name will be indicated in the `@type`
     * property.
     */
    response?: { [key: string]: any };
    /**
     * Deprecated, use `metadata` field instead. Other service-specific data about the request,
     * response, and other activities. When the JSON object represented here has a proto
     * equivalent, the proto name will be indicated in the `@type` property.
     */
    serviceData?: { [key: string]: any };
    /**
     * The name of the API service performing the operation. For example,
     * `"datastore.googleapis.com"`.
     */
    serviceName?: string;
    /**
     * The status of the overall operation.
     */
    status?: Status;
}

/**
 * Authentication information.
 *
 * Authentication information for the operation.
 */
export interface AuthenticationInfo {
    /**
     * The authority selector specified by the requestor, if any. It is not guaranteed that the
     * principal was allowed to use this authority.
     */
    authoritySelector?: string;
    /**
     * The email address of the authenticated user (or service account on behalf of third party
     * principal) making the request. For privacy reasons, the principal email address is
     * redacted for all read-only operations that fail with a "permission denied" error.
     */
    principalEmail?: string;
    /**
     * String representation of identity of requesting party. Populated for both first and third
     * party identities.
     */
    principalSubject?: string;
    /**
     * Identity delegation history of an authenticated service account that makes the request.
     * It contains information on the real authorities that try to access GCP resources by
     * delegating on a service account. When multiple authorities present, they are guaranteed
     * to be sorted based on the original ordering of the identity delegation events.
     */
    serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
    /**
     * The name of the service account key used to create or exchange credentials for
     * authenticating the service account making the request. This is a scheme-less URI full
     * resource name.
     */
    serviceAccountKeyName?: string;
    /**
     * The third party identification (if any) of the authenticated user making the request.
     * When the JSON object represented here has a proto equivalent, the proto name will be
     * indicated in the @type property.
     */
    thirdPartyPrincipal?: { [key: string]: any };
}

/**
 * Identity delegation history of an authenticated service account
 */
export interface ServiceAccountDelegationInfo {
    /**
     * The email address of a Google account.
     */
    principalEmail?: string;
    /**
     * Metadata about the service that uses the service account.
     */
    serviceMetadata?: { [key: string]: any };
    /**
     * Metadata about third party identity.
     */
    thirdPartyClaims?: { [key: string]: any };
}

/**
 * Authorization information. If there are multiple resources or permissions involved, then
 * there is one AuthorizationInfo element for each {resource, permission} tuple.
 */
export interface AuthorizationInfo {
    /**
     * Whether or not authorization for resource and permission was granted.
     */
    granted?: boolean;
    /**
     * The required IAM permission.
     */
    permission?: string;
    /**
     * The resource being accessed, as a REST-style string.
     */
    resource?: string;
    /**
     * Resource attributes used in IAM condition evaluation. This field contains resource
     * attributes like resource type and resource name. To get the whole view of the attributes
     * used in IAM condition evaluation, the user must also look into
     * AuditLog.requestMetadata.requestAttributes.
     */
    resourceAttributes?: Resource;
}

/**
 * Resource attributes used in IAM condition evaluation. This field contains resource
 * attributes like resource type and resource name. To get the whole view of the attributes
 * used in IAM condition evaluation, the user must also look into
 * AuditLog.requestMetadata.requestAttributes.
 */
export interface Resource {
    labels?:  { [key: string]: any };
    name?:    string;
    service?: string;
    type?:    string;
}

/**
 * Metadata about the operation.
 */
export interface RequestMetadata {
    /**
     * The IP address of the caller. For caller from internet, this will be public IPv4 or IPv6
     * address. For caller from a Compute Engine VM with external IP address, this will be the
     * VM's external IP address. For caller from a Compute Engine VM without external IP
     * address, if the VM is in the same organization (or project) as the accessed resource,
     * `callerIp` will be the VM's internal IPv4 address, otherwise the `callerIp` will be
     * redacted to "gce-internal-ip". See https://cloud.google.com/compute/docs/vpc/ for more
     * information."
     */
    callerIp?: string;
    /**
     * The network of the caller.
     */
    callerNetwork?: string;
    /**
     * The user agent of the caller. This information is not authenticated and should be treated
     * accordingly.
     */
    callerSuppliedUserAgent?: string;
    /**
     * The destination of a network activity, such as accepting a TCP connection.
     */
    destinationAttributes?: Peer;
    /**
     * Request attributes used in IAM condition evaluation. This field contains request
     * attributes like request time and access levels associated with the request.
     */
    requestAttributes?: Request;
}

/**
 * The destination of a network activity, such as accepting a TCP connection.
 */
export interface Peer {
    ip?:         string;
    labels?:     { [key: string]: any };
    port?:       number;
    principal?:  string;
    regionCode?: string;
}

/**
 * Request attributes used in IAM condition evaluation. This field contains request
 * attributes like request time and access levels associated with the request.
 */
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
    accessLevels?: string[];
    audiences?:    string[];
    claims?:       { [key: string]: any };
    presenter?:    string;
    principal?:    string;
}

/**
 * The resource location information.
 *
 * Location information about a resource.
 */
export interface ResourceLocation {
    /**
     * The locations of a resource after the execution of the operation. Requests to create or
     * delete a location based resource must populate the 'currentLocations' field and not the
     * 'originalLocations' field.
     */
    currentLocations?: string[];
    /**
     * The locations of a resource prior to the execution of the operation. Requests that mutate
     * the resource's location must populate both the 'originalLocations' as well as the
     * 'currentLocations' fields. For example:
     */
    originalLocations?: string[];
}

/**
 * The status of the overall operation.
 */
export interface Status {
    /**
     * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
     */
    code?: number;
    /**
     * A list of messages that carry the error details.  There is a common set of message types
     * for APIs to use.
     */
    details?: any;
    /**
     * A developer-facing error message, which should be in English. Any user-facing error
     * message should be localized and sent in the
     * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
     */
    message?: string;
}

/**
 * The monitored resource that produced this log entry. Example: a log entry that reports a
 * database error would be associated with the monitored resource designating the particular
 * database that reported the error.
 *
 * The monitored resource that produced this log entry.
 */
export interface MonitoredResource {
    /**
     * Values for all of the labels listed in the associated monitored resource descriptor. For
     * example, Compute Engine VM instances use the labels `"projectId"`, `"instanceId"`, and
     * `"zone"`.
     */
    labels?: { [key: string]: any };
    /**
     * Required. The monitored resource type. For example, the type of a Compute Engine VM
     * instance is `gceInstance`.
     */
    type?: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toLogEntryData(json: string): LogEntryData {
        return cast(JSON.parse(json), r("LogEntryData"));
    }

    public static logEntryDataToJson(value: LogEntryData): string {
        return JSON.stringify(uncast(value, r("LogEntryData")), null, 2);
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
    "LogEntryData": o([
        { json: "insertId", js: "insertId", typ: u(undefined, "") },
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "logName", js: "logName", typ: u(undefined, "") },
        { json: "operation", js: "operation", typ: u(undefined, r("LogEntryOperation")) },
        { json: "protoPayload", js: "protoPayload", typ: u(undefined, r("AuditLog")) },
        { json: "receiveTimestamp", js: "receiveTimestamp", typ: u(undefined, "") },
        { json: "resource", js: "resource", typ: u(undefined, r("MonitoredResource")) },
        { json: "severity", js: "severity", typ: u(undefined, "") },
        { json: "spanId", js: "spanId", typ: u(undefined, "") },
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
        { json: "authenticationInfo", js: "authenticationInfo", typ: u(undefined, r("AuthenticationInfo")) },
        { json: "authorizationInfo", js: "authorizationInfo", typ: u(undefined, a(r("AuthorizationInfo"))) },
        { json: "metadata", js: "metadata", typ: u(undefined, m("any")) },
        { json: "methodName", js: "methodName", typ: u(undefined, "") },
        { json: "numResponseItems", js: "numResponseItems", typ: u(undefined, 0) },
        { json: "request", js: "request", typ: u(undefined, m("any")) },
        { json: "requestMetadata", js: "requestMetadata", typ: u(undefined, r("RequestMetadata")) },
        { json: "resourceLocation", js: "resourceLocation", typ: u(undefined, r("ResourceLocation")) },
        { json: "resourceName", js: "resourceName", typ: u(undefined, "") },
        { json: "resourceOriginalState", js: "resourceOriginalState", typ: u(undefined, m("any")) },
        { json: "response", js: "response", typ: u(undefined, m("any")) },
        { json: "serviceData", js: "serviceData", typ: u(undefined, m("any")) },
        { json: "serviceName", js: "serviceName", typ: u(undefined, "") },
        { json: "status", js: "status", typ: u(undefined, r("Status")) },
    ], "any"),
    "AuthenticationInfo": o([
        { json: "authoritySelector", js: "authoritySelector", typ: u(undefined, "") },
        { json: "principalEmail", js: "principalEmail", typ: u(undefined, "") },
        { json: "principalSubject", js: "principalSubject", typ: u(undefined, "") },
        { json: "serviceAccountDelegationInfo", js: "serviceAccountDelegationInfo", typ: u(undefined, a(r("ServiceAccountDelegationInfo"))) },
        { json: "serviceAccountKeyName", js: "serviceAccountKeyName", typ: u(undefined, "") },
        { json: "thirdPartyPrincipal", js: "thirdPartyPrincipal", typ: u(undefined, m("any")) },
    ], "any"),
    "ServiceAccountDelegationInfo": o([
        { json: "principalEmail", js: "principalEmail", typ: u(undefined, "") },
        { json: "serviceMetadata", js: "serviceMetadata", typ: u(undefined, m("any")) },
        { json: "thirdPartyClaims", js: "thirdPartyClaims", typ: u(undefined, m("any")) },
    ], "any"),
    "AuthorizationInfo": o([
        { json: "granted", js: "granted", typ: u(undefined, true) },
        { json: "permission", js: "permission", typ: u(undefined, "") },
        { json: "resource", js: "resource", typ: u(undefined, "") },
        { json: "resourceAttributes", js: "resourceAttributes", typ: u(undefined, r("Resource")) },
    ], "any"),
    "Resource": o([
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "name", js: "name", typ: u(undefined, "") },
        { json: "service", js: "service", typ: u(undefined, "") },
        { json: "type", js: "type", typ: u(undefined, "") },
    ], "any"),
    "RequestMetadata": o([
        { json: "callerIp", js: "callerIp", typ: u(undefined, "") },
        { json: "callerNetwork", js: "callerNetwork", typ: u(undefined, "") },
        { json: "callerSuppliedUserAgent", js: "callerSuppliedUserAgent", typ: u(undefined, "") },
        { json: "destinationAttributes", js: "destinationAttributes", typ: u(undefined, r("Peer")) },
        { json: "requestAttributes", js: "requestAttributes", typ: u(undefined, r("Request")) },
    ], "any"),
    "Peer": o([
        { json: "ip", js: "ip", typ: u(undefined, "") },
        { json: "labels", js: "labels", typ: u(undefined, m("any")) },
        { json: "port", js: "port", typ: u(undefined, 0) },
        { json: "principal", js: "principal", typ: u(undefined, "") },
        { json: "regionCode", js: "regionCode", typ: u(undefined, "") },
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
        { json: "accessLevels", js: "accessLevels", typ: u(undefined, a("")) },
        { json: "audiences", js: "audiences", typ: u(undefined, a("")) },
        { json: "claims", js: "claims", typ: u(undefined, m("any")) },
        { json: "presenter", js: "presenter", typ: u(undefined, "") },
        { json: "principal", js: "principal", typ: u(undefined, "") },
    ], "any"),
    "ResourceLocation": o([
        { json: "currentLocations", js: "currentLocations", typ: u(undefined, a("")) },
        { json: "originalLocations", js: "originalLocations", typ: u(undefined, a("")) },
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
 * @return {LogEntryData} The object with type annotations
 */
export const toLogEntryData = (json: object) => {
  return json as LogEntryData;
};