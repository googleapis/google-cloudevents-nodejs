/**
 * The CloudEvent raised when a Remote Config is updated
 */
export interface RemoteConfigUpdatedEvent {
  /**
   * The data associated with the event.
   */
  data: RemoteConfigEventData;
  type: "google.firebase.remoteconfig.remoteConfig.v1.updated";
}

/**
 * The data within all Firebase Remote Config events.
 */
export interface RemoteConfigEventData {
  /**
   * The version number of the version's corresponding Remote Config template.
   */
  versionNumber: number;

  /**
   * When the Remote Config template was written to the Remote Config server.
   */
  updateTime: string;

  /**
   * Aggregation of all metadata fields about the account that performed the
   * update.
   */
  updateUser: RemoteConfigUser;

  /**
   * The user-provided description of the corresponding Remote Config template.
   */
  description: string;

  /**
   * Where the update action originated.
   */
  updateOrigin: RemoteConfigUpdateOrigin;

  /**
   * What type of update was made.
   */
  updateType: RemoteConfigUpdateType;

  /**
   * Only present if this version is the result of a rollback, and will be the
   * version number of the Remote Config template that was rolled-back to.
   */
  rollbackSource: number;
}

/**
 * All the fields associated with the person/service account
 * that wrote a Remote Config template.
 */
export interface RemoteConfigUser {
  /**
   * Display name.
   */
  name: string;

  /**
   * Email address.
   */
  email: string;

  /**
   * Image URL.
   */
  imageUrl: string;
}

/**
 * What type of update was associated with the Remote Config template version.
 */
export enum RemoteConfigUpdateOrigin {
  REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED = 0,
  CONSOLE = 1,
  REST_API = 2,
  ADMIN_SDK_NODE = 3,
}

/**
 * Where the Remote Config update action originated.
 */
export enum RemoteConfigUpdateType {
  REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED = 0,
  INCREMENTAL_UPDATE = 1,
  FORCED_UPDATE = 2,
  ROLLBACK = 3,
}