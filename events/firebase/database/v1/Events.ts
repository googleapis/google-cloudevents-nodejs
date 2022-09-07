/**
 * The CloudEvent raised when a ref is created in the Firebase Realtime
 * Database.
 */
export interface ReferenceCreatedEvent {
  /**
   * The data associated with the event.
   */
  data: ReferenceEventData;
  type: "google.firebase.database.ref.v1.created";
}

/**
 * The CloudEvent raised when a reference is updated in the Firebase Realtime
 * Database.
 */
export interface ReferenceUpdatedEvent {
  /**
   * The data associated with the event.
   */
  data: ReferenceEventData;
  type: "google.firebase.database.ref.v1.updated";
}

/**
 * The CloudEvent raised when a reference is deleted in the Firebase Realtime
 * Database.
 */
export interface ReferenceDeletedEvent {
  /**
   * The data associated with the event.
   */
  data: ReferenceEventData;
  type: "google.firebase.database.ref.v1.deleted";
}

/**
 * The CloudEvent raised when a reference is written (created, updated or
 * deleted) in the Firebase Realtime Database.
 */
export interface ReferenceWrittenEvent {
  /**
   * The data associated with the event.
   */
  data: ReferenceEventData;
  type: "google.firebase.database.ref.v1.written";
}

/**
 * The data within all Firebase Real Time Database reference events.
 */
export interface ReferenceEventData {
  /**
   * The original data for the reference.
   */
  data: any;

  /**
   * The change in the reference data.
   */
  delta: any;
}