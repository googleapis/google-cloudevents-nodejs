// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

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

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {LogEntryData} The object with type annotations
 */
export const toLogEntryData = (json: object) => {
  return json as LogEntryData;
};