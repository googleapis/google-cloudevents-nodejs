/**
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * The data within all Cloud Audit Logs log entry events.
 */
export interface LogEntryData {
  /**
   * A unique identifier for the log entry.
   */
  insertId?: string;
  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels?: {[key: string]: string};
  /**
   * The resource name of the log to which this log entry belongs.
   */
  logName?: string;
  /**
   * Information about an operation associated with the log entry, if
   * applicable.
   */
  operation?: Operation;
  /**
   * The log entry payload, which is always an AuditLog for Cloud Audit Log
   * events.
   */
  protoPayload?: ProtoPayload;
  /**
   * The time the log entry was received by Logging.
   */
  receiveTimestamp?: Date | string;
  /**
   * The monitored resource that produced this log entry.
   *
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource?: ResourceObject;
  /**
   * The severity of the log entry.
   */
  severity?: InsertID | number;
  /**
   * The span ID within the trace associated with the log entry, if any.
   *
   * For Trace spans, this is the same format that the Trace API v2 uses: a
   * 16-character hexadecimal encoding of an 8-byte array, such as
   * `000000000000004a`.
   */
  spanId?: string;
  /**
   * Information indicating this LogEntry is part of a sequence of multiple logs
   * split from a single LogEntry.
   */
  split?: Split;
  /**
   * The time the event described by the log entry occurred.
   */
  timestamp?: Date | string;
  /**
   * Resource name of the trace associated with the log entry, if any. If it
   * contains a relative resource name, the name is assumed to be relative to
   * `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace?: string;
}

/**
 * Information about an operation associated with the log entry, if
 * applicable.
 *
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface Operation {
  /**
   * True if this is the first log entry in the operation.
   */
  first?: boolean;
  /**
   * An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id?: string;
  /**
   * True if this is the last log entry in the operation.
   */
  last?: boolean;
  /**
   * An arbitrary producer identifier. The combination of `id` and
   * `producer` must be globally unique. Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer?: string;
}

/**
 * The log entry payload, which is always an AuditLog for Cloud Audit Log
 * events.
 *
 * Common audit log format for Google Cloud Platform API operations.
 * Copied from
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/audit/audit_log.proto,
 * but changing service_data from Any to Struct.
 */
export interface ProtoPayload {
  /**
   * Authentication information.
   */
  authenticationInfo?: AuthenticationInfo;
  /**
   * Authorization information. If there are multiple
   * resources or permissions involved, then there is
   * one AuthorizationInfo element for each {resource, permission} tuple.
   */
  authorizationInfo?: AuthorizationInfo[];
  /**
   * Other service-specific data about the request, response, and other
   * information associated with the current audited event.
   */
  metadata?: {[key: string]: any};
  /**
   * The name of the service method or operation.
   * For API calls, this should be the name of the API method.
   * For example,
   *
   * "google.datastore.v1.Datastore.RunQuery"
   * "google.logging.v1.LoggingService.DeleteLog"
   */
  methodName?: string;
  /**
   * The number of items returned from a List or Query API method,
   * if applicable.
   */
  numResponseItems?: number;
  /**
   * The operation request. This may not include all request parameters,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  request?: {[key: string]: any};
  /**
   * Metadata about the operation.
   */
  requestMetadata?: RequestMetadata;
  /**
   * The resource location information.
   */
  resourceLocation?: ResourceLocation;
  /**
   * The resource or collection that is the target of the operation.
   * The name is a scheme-less URI, not including the API service name.
   * For example:
   *
   * "shelves/SHELF_ID/books"
   * "shelves/SHELF_ID/books/BOOK_ID"
   */
  resourceName?: string;
  /**
   * The resource's original state before mutation. Present only for
   * operations which have successfully modified the targeted resource(s).
   * In general, this field should contain all changed fields, except those
   * that are already been included in `request`, `response`, `metadata` or
   * `service_data` fields.
   * When the JSON object represented here has a proto equivalent,
   * the proto name will be indicated in the `@type` property.
   */
  resourceOriginalState?: {[key: string]: any};
  /**
   * The operation response. This may not include all response elements,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  response?: {[key: string]: any};
  /**
   * Deprecated: Use `metadata` field instead.
   * Other service-specific data about the request, response, and other
   * activities.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  serviceData?: {[key: string]: any};
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
   * The authority selector specified by the requestor, if any.
   * It is not guaranteed that the principal was allowed to use this authority.
   */
  authoritySelector?: string;
  /**
   * The email address of the authenticated user (or service account on behalf
   * of third party principal) making the request. For privacy reasons, the
   * principal email address is redacted for all read-only operations that fail
   * with a "permission denied" error.
   */
  principalEmail?: string;
  /**
   * String representation of identity of requesting party.
   * Populated for both first and third party identities.
   */
  principalSubject?: string;
  /**
   * Identity delegation history of an authenticated service account that makes
   * the request. It contains information on the real authorities that try to
   * access GCP resources by delegating on a service account. When multiple
   * authorities present, they are guaranteed to be sorted based on the original
   * ordering of the identity delegation events.
   */
  serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
  /**
   * The name of the service account key used to create or exchange
   * credentials for authenticating the service account making the request.
   * This is a scheme-less URI full resource name. For example:
   *
   * "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
   */
  serviceAccountKeyName?: string;
  /**
   * The third party identification (if any) of the authenticated user making
   * the request.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  thirdPartyPrincipal?: {[key: string]: any};
}

/**
 * Identity delegation history of an authenticated service account.
 */
export interface ServiceAccountDelegationInfo {
  /**
   * First party (Google) identity as the real authority.
   */
  firstPartyPrincipal?: FirstPartyPrincipal;
  /**
   * Third party identity as the real authority.
   */
  thirdPartyPrincipal?: ThirdPartyPrincipal;
}

/**
 * First party (Google) identity as the real authority.
 *
 * First party identity principal.
 */
export interface FirstPartyPrincipal {
  /**
   * The email address of a Google account.
   */
  principalEmail?: string;
  /**
   * Metadata about the service that uses the service account.
   */
  serviceMetadata?: {[key: string]: any};
}

/**
 * Third party identity as the real authority.
 *
 * Third party identity principal.
 */
export interface ThirdPartyPrincipal {
  /**
   * Metadata about third party identity.
   */
  thirdPartyClaims?: {[key: string]: any};
}

/**
 * Authorization information for the operation.
 */
export interface AuthorizationInfo {
  /**
   * Whether or not authorization for `resource` and `permission`
   * was granted.
   */
  granted?: boolean;
  /**
   * The required IAM permission.
   */
  permission?: string;
  /**
   * The resource being accessed, as a REST-style string. For example:
   *
   * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
   */
  resource?: string;
  /**
   * Resource attributes used in IAM condition evaluation. This field contains
   * resource attributes like resource type and resource name.
   *
   * To get the whole view of the attributes used in IAM
   * condition evaluation, the user must also look into
   * `AuditLogData.request_metadata.request_attributes`.
   */
  resourceAttributes?: ResourceAttributesObject;
}

/**
 * Resource attributes used in IAM condition evaluation. This field contains
 * resource attributes like resource type and resource name.
 *
 * To get the whole view of the attributes used in IAM
 * condition evaluation, the user must also look into
 * `AuditLogData.request_metadata.request_attributes`.
 *
 * This message defines core attributes for a resource. A resource is an
 * addressable (named) entity provided by the destination service. For
 * example, a file stored on a network storage service.
 */
export interface ResourceAttributesObject {
  /**
   * The labels or tags on the resource, such as AWS resource tags and
   * Kubernetes resource labels.
   */
  labels?: {[key: string]: string};
  /**
   * The stable identifier (name) of a resource on the `service`. A resource
   * can be logically identified as "//{resource.service}/{resource.name}".
   * The differences between a resource name and a URI are:
   *
   * *   Resource name is a logical identifier, independent of network
   * protocol and API version. For example,
   * `//pubsub.googleapis.com/projects/123/topics/news-feed`.
   * *   URI often includes protocol and version information, so it can
   * be used directly by applications. For example,
   * `https://pubsub.googleapis.com/v1/projects/123/topics/news-feed`.
   *
   * See https://cloud.google.com/apis/design/resource_names for details.
   */
  name?: string;
  /**
   * The name of the service that this resource belongs to, such as
   * `pubsub.googleapis.com`. The service may be different from the DNS
   * hostname that actually serves the request.
   */
  service?: string;
  /**
   * The type of the resource. The syntax is platform-specific because
   * different platforms define their resources differently.
   *
   * For Google APIs, the type format must be "{service}/{kind}".
   */
  type?: string;
}

/**
 * Metadata about the operation.
 *
 * Metadata about the request.
 */
export interface RequestMetadata {
  /**
   * The IP address of the caller.
   * For caller from internet, this will be public IPv4 or IPv6 address.
   * For caller from a Compute Engine VM with external IP address, this
   * will be the VM's external IP address. For caller from a Compute
   * Engine VM without external IP address, if the VM is in the same
   * organization (or project) as the accessed resource, `caller_ip` will
   * be the VM's internal IPv4 address, otherwise the `caller_ip` will be
   * redacted to "gce-internal-ip".
   * See https://cloud.google.com/compute/docs/vpc/ for more information.
   */
  callerIp?: string;
  /**
   * The network of the caller.
   * Set only if the network host project is part of the same GCP organization
   * (or project) as the accessed resource.
   * See https://cloud.google.com/compute/docs/vpc/ for more information.
   * This is a scheme-less URI full resource name. For example:
   *
   * "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
   */
  callerNetwork?: string;
  /**
   * The user agent of the caller.
   * This information is not authenticated and should be treated accordingly.
   * For example:
   *
   * +   `google-api-python-client/1.4.0`:
   * The request was made by the Google API client for Python.
   * +   `Cloud SDK Command Line Tool apitools-client/1.0 gcloud/0.9.62`:
   * The request was made by the Google Cloud SDK CLI (gcloud).
   * +   `AppEngine-Google; (+http://code.google.com/appengine; appid:
   * s~my-project`:
   * The request was made from the `my-project` App Engine app.
   */
  callerSuppliedUserAgent?: string;
  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop. Only two fields are used in this message, Peer.port and
   * Peer.ip. These fields are optionally populated by those services utilizing
   * the IAM condition feature.
   */
  destinationAttributes?: DestinationAttributes;
  /**
   * Request attributes used in IAM condition evaluation. This field contains
   * request attributes like request time and access levels associated with
   * the request.
   *
   *
   * To get the whole view of the attributes used in IAM
   * condition evaluation, the user must also look into
   * `AuditLog.authentication_info.resource_attributes`.
   */
  requestAttributes?: Request;
}

/**
 * The destination of a network activity, such as accepting a TCP connection.
 * In a multi hop network activity, the destination represents the receiver of
 * the last hop. Only two fields are used in this message, Peer.port and
 * Peer.ip. These fields are optionally populated by those services utilizing
 * the IAM condition feature.
 *
 * This message defines attributes for a node that handles a network request.
 * The node can be either a service or an application that sends, forwards,
 * or receives the request. Service peers should fill in
 * `principal` and `labels` as appropriate.
 */
export interface DestinationAttributes {
  /**
   * The IP address of the peer.
   */
  ip?: string;
  /**
   * The labels associated with the peer.
   */
  labels?: {[key: string]: string};
  /**
   * The network port of the peer.
   */
  port?: number;
  /**
   * The identity of this peer. Similar to `Request.auth.principal`, but
   * relative to the peer instead of the request. For example, the
   * idenity associated with a load balancer that forwared the request.
   */
  principal?: string;
  /**
   * The CLDR country/region code associated with the above IP address.
   * If the IP address is private, the `region_code` should reflect the
   * physical location where this peer is running.
   */
  regionCode?: string;
}

/**
 * Request attributes used in IAM condition evaluation. This field contains
 * request attributes like request time and access levels associated with
 * the request.
 *
 *
 * To get the whole view of the attributes used in IAM
 * condition evaluation, the user must also look into
 * `AuditLog.authentication_info.resource_attributes`.
 *
 * This message defines attributes for an HTTP request. If the actual
 * request is not an HTTP request, the runtime system should try to map
 * the actual request to an equivalent HTTP request.
 */
export interface Request {
  /**
   * The request authentication. May be absent for unauthenticated requests.
   * Derived from the HTTP request `Authorization` header or equivalent.
   */
  auth?: Auth;
  /**
   * The HTTP request headers. If multiple headers share the same key, they
   * must be merged according to the HTTP spec. All header keys must be
   * lowercased, because HTTP header keys are case-insensitive.
   */
  headers?: {[key: string]: string};
  /**
   * The HTTP request `Host` header value.
   */
  host?: string;
  /**
   * The unique ID for a request, which can be propagated to downstream
   * systems. The ID should have low probability of collision
   * within a single day for a specific service.
   */
  id?: string;
  /**
   * The HTTP request method, such as `GET`, `POST`.
   */
  method?: string;
  /**
   * The HTTP URL path.
   */
  path?: string;
  /**
   * The network protocol used with the request, such as "http/1.1",
   * "spdy/3", "h2", "h2c", "webrtc", "tcp", "udp", "quic". See
   *
   * https://www.iana.org/assignments/tls-extensiontype-values/tls-extensiontype-values.xhtml#alpn-protocol-ids
   * for details.
   */
  protocol?: string;
  /**
   * The HTTP URL query in the format of `name1=value1&name2=value2`, as it
   * appears in the first line of the HTTP request. No decoding is performed.
   */
  query?: string;
  /**
   * A special parameter for request reason. It is used by security systems
   * to associate auditing information with a request.
   */
  reason?: string;
  /**
   * The HTTP URL scheme, such as `http` and `https`.
   */
  scheme?: string;
  /**
   * The HTTP request size in bytes. If unknown, it must be -1.
   */
  size?: number;
  /**
   * The timestamp when the `destination` service receives the first byte of
   * the request.
   */
  time?: Date | string;
}

/**
 * The request authentication. May be absent for unauthenticated requests.
 * Derived from the HTTP request `Authorization` header or equivalent.
 *
 * This message defines request authentication attributes. Terminology is
 * based on the JSON Web Token (JWT) standard, but the terms also
 * correlate to concepts in other standards.
 */
export interface Auth {
  /**
   * A list of access level resource names that allow resources to be
   * accessed by authenticated requester. It is part of Secure GCP processing
   * for the incoming request. An access level string has the format:
   * "//{api_service_name}/accessPolicies/{policy_id}/accessLevels/{short_name}"
   *
   * Example:
   * "//accesscontextmanager.googleapis.com/accessPolicies/MY_POLICY_ID/accessLevels/MY_LEVEL"
   */
  accessLevels?: string[];
  /**
   * The intended audience(s) for this authentication information. Reflects
   * the audience (`aud`) claim within a JWT. The audience
   * value(s) depends on the `issuer`, but typically include one or more of
   * the following pieces of information:
   *
   * *  The services intended to receive the credential such as
   * ["pubsub.googleapis.com", "storage.googleapis.com"]
   * *  A set of service-based scopes. For example,
   * ["https://www.googleapis.com/auth/cloud-platform"]
   * *  The client id of an app, such as the Firebase project id for JWTs
   * from Firebase Auth.
   *
   * Consult the documentation for the credential issuer to determine the
   * information provided.
   */
  audiences?: string[];
  /**
   * Structured claims presented with the credential. JWTs include
   * `{key: value}` pairs for standard and private claims. The following
   * is a subset of the standard required and optional claims that would
   * typically be presented for a Google-based JWT:
   *
   * {'iss': 'accounts.google.com',
   * 'sub': '113289723416554971153',
   * 'aud': ['123456789012', 'pubsub.googleapis.com'],
   * 'azp': '123456789012.apps.googleusercontent.com',
   * 'email': 'jsmith@example.com',
   * 'iat': 1353601026,
   * 'exp': 1353604926}
   *
   * SAML assertions are similarly specified, but with an identity provider
   * dependent structure.
   */
  claims?: {[key: string]: any};
  /**
   * The authorized presenter of the credential. Reflects the optional
   * Authorized Presenter (`azp`) claim within a JWT or the
   * OAuth client id. For example, a Google Cloud Platform client id looks
   * as follows: "123456789012.apps.googleusercontent.com".
   */
  presenter?: string;
  /**
   * The authenticated principal. Reflects the issuer (`iss`) and subject
   * (`sub`) claims within a JWT. The issuer and subject should be `/`
   * delimited, with `/` percent-encoded within the subject fragment. For
   * Google accounts, the principal format is:
   * "https://accounts.google.com/{id}"
   */
  principal?: string;
}

/**
 * The resource location information.
 *
 * Location information about a resource.
 */
export interface ResourceLocation {
  /**
   * The locations of a resource after the execution of the operation.
   * Requests to create or delete a location based resource must populate
   * the 'current_locations' field and not the 'original_locations' field.
   * For example:
   *
   * "europe-west1-a"
   * "us-east1"
   * "nam3"
   */
  currentLocations?: string[];
  /**
   * The locations of a resource prior to the execution of the operation.
   * Requests that mutate the resource's location must populate both the
   * 'original_locations' as well as the 'current_locations' fields.
   * For example:
   *
   * "europe-west1-a"
   * "us-east1"
   * "nam3"
   */
  originalLocations?: string[];
}

/**
 * The status of the overall operation.
 *
 * The `Status` type defines a logical error model that is suitable for
 * different programming environments, including REST APIs and RPC APIs. It is
 * used by [gRPC](https://github.com/grpc). Each `Status` message contains
 * three pieces of data: error code, error message, and error details.
 *
 * You can find out more about this error model and how to work with it in the
 * [API Design Guide](https://cloud.google.com/apis/design/errors).
 */
export interface Status {
  /**
   * The status code, which should be an enum value of [google.rpc.Code][google.rpc.Code].
   */
  code?: number;
  /**
   * A list of messages that carry the error details.  There is a common set of
   * message types for APIs to use.
   */
  details?: Detail[];
  /**
   * A developer-facing error message, which should be in English. Any
   * user-facing error message should be localized and sent in the
   * [google.rpc.Status.details][google.rpc.Status.details] field, or localized by the client.
   */
  message?: string;
}

/**
 * `Any` contains an arbitrary serialized protocol buffer message along with a
 * URL that describes the type of the serialized message.
 *
 * Protobuf library provides support to pack/unpack Any values in the form
 * of utility functions or additional generated methods of the Any type.
 *
 * Example 1: Pack and unpack a message in C++.
 *
 * Foo foo = ...;
 * Any any;
 * any.PackFrom(foo);
 * ...
 * if (any.UnpackTo(&foo)) {
 * ...
 * }
 *
 * Example 2: Pack and unpack a message in Java.
 *
 * Foo foo = ...;
 * Any any = Any.pack(foo);
 * ...
 * if (any.is(Foo.class)) {
 * foo = any.unpack(Foo.class);
 * }
 *
 * Example 3: Pack and unpack a message in Python.
 *
 * foo = Foo(...)
 * any = Any()
 * any.Pack(foo)
 * ...
 * if any.Is(Foo.DESCRIPTOR):
 * any.Unpack(foo)
 * ...
 *
 * Example 4: Pack and unpack a message in Go
 *
 * foo := &pb.Foo{...}
 * any, err := ptypes.MarshalAny(foo)
 * ...
 * foo := &pb.Foo{}
 * if err := ptypes.UnmarshalAny(any, foo); err != nil {
 * ...
 * }
 *
 * The pack methods provided by protobuf library will by default use
 * 'type.googleapis.com/full.type.name' as the type URL and the unpack
 * methods only use the fully qualified type name after the last '/'
 * in the type URL, for example "foo.bar.com/x/y.z" will yield type
 * name "y.z".
 *
 *
 * JSON
 * ====
 * The JSON representation of an `Any` value uses the regular
 * representation of the deserialized, embedded message, with an
 * additional field `@type` which contains the type URL. Example:
 *
 * package google.profile;
 * message Person {
 * string first_name = 1;
 * string last_name = 2;
 * }
 *
 * {
 * "@type": "type.googleapis.com/google.profile.Person",
 * "firstName": <string>,
 * "lastName": <string>
 * }
 *
 * If the embedded message type is well-known and has a custom JSON
 * representation, that representation will be embedded adding a field
 * `value` which holds the custom JSON in addition to the `@type`
 * field. Example (for message [google.protobuf.Duration][]):
 *
 * {
 * "@type": "type.googleapis.com/google.protobuf.Duration",
 * "value": "1.212s"
 * }
 */
export interface Detail {
  /**
   * A URL/resource name that uniquely identifies the type of the serialized
   * protocol buffer message. This string must contain at least
   * one "/" character. The last segment of the URL's path must represent
   * the fully qualified name of the type (as in
   * `path/google.protobuf.Duration`). The name should be in a canonical form
   * (e.g., leading "." is not accepted).
   *
   * In practice, teams usually precompile into the binary all types that they
   * expect it to use in the context of Any. However, for URLs which use the
   * scheme `http`, `https`, or no scheme, one can optionally set up a type
   * server that maps type URLs to message definitions as follows:
   *
   * * If no scheme is provided, `https` is assumed.
   * * An HTTP GET on the URL must yield a [google.protobuf.Type][]
   * value in binary format, or produce an error.
   * * Applications are allowed to cache lookup results based on the
   * URL, or have them precompiled into a binary to avoid any
   * lookup. Therefore, binary compatibility needs to be preserved
   * on changes to types. (Use versioned type names to manage
   * breaking changes.)
   *
   * Note: this functionality is not currently available in the official
   * protobuf release, and it is not used for type URLs beginning with
   * type.googleapis.com.
   *
   * Schemes other than `http`, `https` (or the empty scheme) might be
   * used with implementation specific semantics.
   */
  typeUrl?: string;
  /**
   * Must be a valid serialized protocol buffer of the above specified type.
   */
  value?: string;
}

/**
 * The monitored resource that produced this log entry.
 *
 * Example: a log entry that reports a database error would be associated with
 * the monitored resource designating the particular database that reported
 * the error.
 *
 * Note: this is a much-reduced version of the proto at
 * https://github.com/googleapis/googleapis/blob/master/google/api/monitored_resource.proto
 * to avoid other dependencies leaking into events.
 *
 * An object representing a resource that can be used for monitoring, logging,
 * billing, or other purposes.
 */
export interface ResourceObject {
  /**
   * Values for all of the labels listed in the associated monitored
   * resource descriptor. For example, Compute Engine VM instances use the
   * labels `"project_id"`, `"instance_id"`, and `"zone"`.
   */
  labels?: {[key: string]: string};
  /**
   * Required. The monitored resource type. For example, the type of a
   * Compute Engine VM instance is `gce_instance`.
   */
  type?: string;
}

export enum InsertID {
  Alert = 'ALERT',
  Critical = 'CRITICAL',
  Debug = 'DEBUG',
  Default = 'DEFAULT',
  Emergency = 'EMERGENCY',
  Error = 'ERROR',
  Info = 'INFO',
  Notice = 'NOTICE',
  Warning = 'WARNING',
}

/**
 * Information indicating this LogEntry is part of a sequence of multiple logs
 * split from a single LogEntry.
 *
 * Additional information used to correlate multiple LogEntries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is split
 * across multiple entries.
 */
export interface Split {
  /**
   * The index of this LogEntry in the sequence of split logs. LogEntries are
   * given |index| values 0, 1, ..., n-1 for a sequence of n entries.
   */
  index?: number;
  /**
   * The total number of logs that the original LogEntry was split into.
   */
  totalSplits?: number;
  /**
   * A globally unique identifier for all LogEntries in a sequence of split
   * logs. All LogEntries with the same |LogSplit.uid| are assumed to be part of
   * the same sequence of split logs.
   */
  uid?: string;
}

/**
 * Cast a raw JSON object to a typed event (useful for IDE autocompletion).
 * @param {object} json The JSON object
 * @return {LogEntryData} The object with type annotations
 */
export const toLogEntryData = (json: object) => {
  return json as LogEntryData;
};
