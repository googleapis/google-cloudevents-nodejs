/**
 * The CloudEvent raised when an audit log entry is written.
 */
export interface AuditLogWrittenEvent {
  /**
   * The data associated with the event.
   */
  data: LogEntryData;
  type: "google.cloud.audit.log.v1.written";
}

/**
 * The data within all Cloud Audit Logs log entry events.
 */
export interface LogEntryData {
  /**
   * The resource name of the log to which this log entry belongs.
   */
  logName: string;

  /**
   * The monitored resource that produced this log entry.
   * 
   * Example: a log entry that reports a database error would be associated with
   * the monitored resource designating the particular database that reported
   * the error.
   */
  resource: any;

  /**
   * The log entry payload, which is always an AuditLog for Cloud Audit Log
   * events.
   */
  protoPayload: AuditLog;

  /**
   * A unique identifier for the log entry.
   */
  insertId: string;

  /**
   * A set of user-defined (key, value) data that provides additional
   * information about the log entry.
   */
  labels: string;

  /**
   * Information about an operation associated with the log entry, if
   * applicable.
   */
  operation: LogEntryOperation;

  /**
   * The time the event described by the log entry occurred.
   */
  timestamp: string;

  /**
   * The time the log entry was received by Logging.
   */
  receiveTimestamp: string;

  /**
   * The severity of the log entry.
   */
  severity: LogSeverity;

  /**
   * Resource name of the trace associated with the log entry, if any. If it
   * contains a relative resource name, the name is assumed to be relative to
   * `//tracing.googleapis.com`. Example:
   * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
   */
  trace: string;

  /**
   * The span ID within the trace associated with the log entry, if any.
   * 
   * For Trace spans, this is the same format that the Trace API v2 uses: a
   * 16-character hexadecimal encoding of an 8-byte array, such as
   * `000000000000004a`.
   */
  spanId: string;

  /**
   * Information indicating this LogEntry is part of a sequence of multiple logs
   * split from a single LogEntry.
   */
  split: LogSplit;
}

/**
 * Additional information about a potentially long-running operation with which
 * a log entry is associated.
 */
export interface LogEntryOperation {
  /**
   * An arbitrary operation identifier. Log entries with the same
   * identifier are assumed to be part of the same operation.
   */
  id: string;

  /**
   * An arbitrary producer identifier. The combination of `id` and
   * `producer` must be globally unique. Examples for `producer`:
   * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
   */
  producer: string;

  /**
   * True if this is the first log entry in the operation.
   */
  first: boolean;

  /**
   * True if this is the last log entry in the operation.
   */
  last: boolean;
}

/**
 * The severity of the event described in a log entry, expressed as one of the
 * standard severity levels listed below.  For your reference, the levels are
 * assigned the listed numeric values. The effect of using numeric values other
 * than those listed is undefined.
 * Copied from
 * https://github.com/googleapis/googleapis/blob/master/google/logging/type/log_severity.proto
 */
export enum LogSeverity {
  DEFAULT = 0,
  DEBUG = 100,
  INFO = 200,
  NOTICE = 300,
  WARNING = 400,
  ERROR = 500,
  CRITICAL = 600,
  ALERT = 700,
  EMERGENCY = 800,
}

/**
 * Common audit log format for Google Cloud Platform API operations.
 * Copied from
 * https://github.com/googleapis/googleapis/blob/master/google/cloud/audit/audit_log.proto,
 * but changing service_data from Any to Struct.
 */
export interface AuditLog {
  /**
   * The name of the API service performing the operation. For example,
   * `"datastore.googleapis.com"`.
   */
  serviceName: string;

  /**
   * The name of the service method or operation.
   * For API calls, this should be the name of the API method.
   * For example,
   * 
   * "google.datastore.v1.Datastore.RunQuery"
   * "google.logging.v1.LoggingService.DeleteLog"
   */
  methodName: string;

  /**
   * The resource or collection that is the target of the operation.
   * The name is a scheme-less URI, not including the API service name.
   * For example:
   * 
   * "shelves/SHELF_ID/books"
   * "shelves/SHELF_ID/books/BOOK_ID"
   */
  resourceName: string;

  /**
   * The resource location information.
   */
  resourceLocation: ResourceLocation;

  /**
   * The resource's original state before mutation. Present only for
   * operations which have successfully modified the targeted resource(s).
   * In general, this field should contain all changed fields, except those
   * that are already been included in `request`, `response`, `metadata` or
   * `service_data` fields.
   * When the JSON object represented here has a proto equivalent,
   * the proto name will be indicated in the `@type` property.
   */
  resourceOriginalState: any;

  /**
   * The number of items returned from a List or Query API method,
   * if applicable.
   */
  numResponseItems: number;

  /**
   * The status of the overall operation.
   */
  status: any;

  /**
   * Authentication information.
   */
  authenticationInfo: AuthenticationInfo;

  /**
   * Authorization information. If there are multiple
   * resources or permissions involved, then there is
   * one AuthorizationInfo element for each {resource, permission} tuple.
   */
  authorizationInfo: AuthorizationInfo;

  /**
   * Metadata about the operation.
   */
  requestMetadata: RequestMetadata;

  /**
   * The operation request. This may not include all request parameters,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  request: any;

  /**
   * The operation response. This may not include all response elements,
   * such as those that are too large, privacy-sensitive, or duplicated
   * elsewhere in the log record.
   * It should never include user-generated data, such as file contents.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  response: any;

  /**
   * Other service-specific data about the request, response, and other
   * information associated with the current audited event.
   */
  metadata: any;

  /**
   * Deprecated: Use `metadata` field instead.
   * Other service-specific data about the request, response, and other
   * activities.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  serviceData: any;
}

/**
 * Authentication information for the operation.
 */
export interface AuthenticationInfo {
  /**
   * The email address of the authenticated user (or service account on behalf
   * of third party principal) making the request. For third party identity
   * callers, the `principal_subject` field is populated instead of this field.
   * For privacy reasons, the principal email address is sometimes redacted.
   * For more information, see [Caller identities in audit
   * logs](https://cloud.google.com/logging/docs/audit#user-id).
   */
  principalEmail: string;

  /**
   * The authority selector specified by the requestor, if any.
   * It is not guaranteed that the principal was allowed to use this authority.
   */
  authoritySelector: string;

  /**
   * The third party identification (if any) of the authenticated user making
   * the request.
   * When the JSON object represented here has a proto equivalent, the proto
   * name will be indicated in the `@type` property.
   */
  thirdPartyPrincipal: any;

  /**
   * The name of the service account key used to create or exchange
   * credentials for authenticating the service account making the request.
   * This is a scheme-less URI full resource name. For example:
   * 
   * "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
   */
  serviceAccountKeyName: string;

  /**
   * Identity delegation history of an authenticated service account that makes
   * the request. It contains information on the real authorities that try to
   * access GCP resources by delegating on a service account. When multiple
   * authorities present, they are guaranteed to be sorted based on the original
   * ordering of the identity delegation events.
   */
  serviceAccountDelegationInfo: ServiceAccountDelegationInfo;

  /**
   * String representation of identity of requesting party.
   * Populated for both first and third party identities.
   */
  principalSubject: string;
}

/**
 * Authorization information for the operation.
 */
export interface AuthorizationInfo {
  /**
   * The resource being accessed, as a REST-style string. For example:
   * 
   * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
   */
  resource: string;

  /**
   * The required IAM permission.
   */
  permission: string;

  /**
   * Whether or not authorization for `resource` and `permission`
   * was granted.
   */
  granted: boolean;

  /**
   * Resource attributes used in IAM condition evaluation. This field contains
   * resource attributes like resource type and resource name.
   * 
   * To get the whole view of the attributes used in IAM
   * condition evaluation, the user must also look into
   * `AuditLogData.request_metadata.request_attributes`.
   */
  resourceAttributes: any;
}

/**
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
  callerIp: string;

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
  callerSuppliedUserAgent: string;

  /**
   * The network of the caller.
   * Set only if the network host project is part of the same GCP organization
   * (or project) as the accessed resource.
   * See https://cloud.google.com/compute/docs/vpc/ for more information.
   * This is a scheme-less URI full resource name. For example:
   * 
   * "//compute.googleapis.com/projects/PROJECT_ID/global/networks/NETWORK_ID"
   */
  callerNetwork: string;

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
  requestAttributes: any;

  /**
   * The destination of a network activity, such as accepting a TCP connection.
   * In a multi hop network activity, the destination represents the receiver of
   * the last hop. Only two fields are used in this message, Peer.port and
   * Peer.ip. These fields are optionally populated by those services utilizing
   * the IAM condition feature.
   */
  destinationAttributes: any;
}

/**
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
  currentLocations: string;

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
  originalLocations: string;
}

/**
 * Identity delegation history of an authenticated service account.
 */
export interface ServiceAccountDelegationInfo {
  /**
   * First party (Google) identity as the real authority.
   */
  firstPartyPrincipal: any;

  /**
   * Third party identity as the real authority.
   */
  thirdPartyPrincipal: any;
}

/**
 * Additional information used to correlate multiple LogEntries. Used when a
 * single LogEntry would exceed the Google Cloud Logging size limit and is split
 * across multiple entries.
 */
export interface LogSplit {
  /**
   * A globally unique identifier for all LogEntries in a sequence of split
   * logs. All LogEntries with the same |LogSplit.uid| are assumed to be part of
   * the same sequence of split logs.
   */
  uid: string;

  /**
   * The index of this LogEntry in the sequence of split logs. LogEntries are
   * given |index| values 0, 1, ..., n-1 for a sequence of n entries.
   */
  index: number;

  /**
   * The total number of logs that the original LogEntry was split into.
   */
  totalSplits: number;
}