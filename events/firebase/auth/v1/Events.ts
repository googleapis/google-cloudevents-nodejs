/**
 * The CloudEvent raised when a Firebase user is created.
 */
export interface UserCreatedEvent {
  /**
   * The data associated with the event.
   */
  data: AuthEventData;
  type: "google.firebase.auth.user.v1.created";
}

/**
 * The CloudEvent raised when a Firebase user is deleted.
 */
export interface UserDeletedEvent {
  /**
   * The data associated with the event.
   */
  data: AuthEventData;
  type: "google.firebase.auth.user.v1.deleted";
}

/**
 * The data within all Firebase Auth events.
 */
export interface AuthEventData {
  /**
   * The user identifier in the Firebase app.
   */
  uid: string;

  /**
   * The user's primary email, if set.
   */
  email: string;

  /**
   * Whether or not the user's primary email is verified.
   */
  emailVerified: boolean;

  /**
   * The user's display name.
   */
  displayName: string;

  /**
   * The user's photo URL.
   */
  photo_URL: string;

  /**
   * Whether the user is disabled.
   */
  disabled: boolean;

  /**
   * Additional metadata about the user.
   */
  metadata: UserMetadata;

  /**
   * User's info at the providers
   */
  providerData: UserInfo;

  /**
   * The user's phone number.
   */
  phoneNumber: string;

  /**
   * User's custom claims, typically used to define user roles and propagated
   * to an authenticated user's ID token.
   */
  customClaims: any;
}

/**
 * Additional metadata about the user.
 */
export interface UserMetadata {
  /**
   * The date the user was created.
   */
  createTime: string;

  /**
   * The date the user last signed in.
   */
  lastSignInTime: string;
}

/**
 * User's info at the identity provider
 */
export interface UserInfo {
  /**
   * The user identifier for the linked provider.
   */
  uid: string;

  /**
   * The email for the linked provider.
   */
  email: string;

  /**
   * The display name for the linked provider.
   */
  displayName: string;

  /**
   * The photo URL for the linked provider.
   */
  photo_URL: string;

  /**
   * The linked provider ID (e.g. "google.com" for the Google provider).
   */
  providerId: string;
}