/**
 * The CloudEvent raised when a alert has been published by Firebase Alerts.
 */
export interface AlertPublishedEvent {
  /**
   * The data associated with the event.
   */
  data: AlertData;
  type: "google.firebase.firebasealerts.alerts.v1.published";
}

/**
 * The data within all Firebase Alerts.
 */
export interface AlertData {
  /**
   * Time that the event has created
   */
  createTime: string;

  /**
   * Time that the event has ended. Optional, only present for alertsthat are
   * ongoing
   */
  endTime: string;

  /**
   * Payload of the event, which includes the details of the specific alert.
   * It's a map of keys of String type and values of various types
   */
  payload: any;
}

/**
 * Basic information of the Crashlytics issue
 */
export interface CrashlyticsIssue {
  id: string;
  title: string;
  subtitle: string;
  appVersion: string;
}
export interface CrashlyticsNewFatalIssuePayload {
  /**
   * Basic information of the Crashlytics issue
   */
  issue: CrashlyticsIssue;
}
export interface CrashlyticsNewNonfatalIssuePayload {
  /**
   * Basic information of the Crashlytics issue
   */
  issue: CrashlyticsIssue;
}
export interface CrashlyticsRegressionAlertPayload {
  /**
   * The type of the Crashlytics issue, e.g. new fatal, new nonfatal, ANR
   */
  type: string;

  /**
   * Basic information of the Crashlytics issue
   */
  issue: CrashlyticsIssue;

  /**
   * The time that the Crashlytics issues was most recently resolved before it
   * began to reoccur
   */
  resolveTime: string;
}
export interface CrashlyticsVelocityAlertPayload {
  /**
   * Basic information of the Crashlytics issue
   */
  issue: CrashlyticsIssue;

  /**
   * The time that the Crashlytics issue gets created
   */
  createTime: string;

  /**
   * The number of user sessions for the given app version that had this
   * specific crash issue in the time period used to trigger the velocity alert,
   * which is currently 1h
   */
  crashCount: number;

  /**
   * The percentage of user sessions for the given app version that had this
   * specific crash issue in the time period used to trigger the velocity alert,
   * which is currently 1h
   */
  crashPercentage: number;

  /**
   * The first app version where this issue was seen, and not necessarily the
   * version that has triggered the alert
   */
  firstVersion: string;
}
export interface CrashlyticsStabilityDigestPayload {
  /**
   * The date that the digest gets created, issues in the digest should
   * have the same date as the digest date
   */
  digestDate: any;

  /**
   * A stability digest contains several trending Crashlytics issues
   */
  trendingIssues: any;
}
export interface CrashlyticsNewAnrIssuePayload {
  issue: CrashlyticsIssue;
}
export interface AppDistroNewTesterIosDevicePayload {
  testerName: string;
  testerEmail: string;
  testerDeviceModelName: string;
  testerDeviceIdentifier: string;
}
export interface AppDistroInAppFeedbackPayload {
  /**
   * Resource name. Format:
   * projects/{project_number}/apps/{app_id}/releases/{release_id}/feedbackReports/{feedback_id}
   */
  feedbackReport: string;

  /**
   * Deep link back to the Firebase console.
   */
  feedbackConsoleUri: string;

  /**
   * Name of the tester.
   */
  testerName: string;

  /**
   * Email address of the tester.
   */
  testerEmail: string;

  /**
   * Version consisting of `versionName` and `versionCode` for Android and
   * `CFBundleShortVersionString` and `CFBundleVersion` for iOS.
   */
  appVersion: string;

  /**
   * Text entered by the tester.
   */
  text: string;

  /**
   * URI to download screenshot.  This URI is fast expiring.
   */
  screenshotUri: string;
}
export interface BillingPlanUpdatePayload {
  /**
   * A Firebase plan
   */
  billingPlan: string;

  /**
   * The email address of the person that triggered billing plan change
   */
  principalEmail: string;

  /**
   * The type of the notification, e.g. upgrade, downgrade
   */
  notificationType: string;
}
export interface BillingPlanAutomatedUpdatePayload {
  /**
   * A Firebase plan
   */
  billingPlan: string;

  /**
   * The type of the notification, e.g. upgrade, downgrade
   */
  notificationType: string;
}