import { CloudEvent } from '../src/cloudevent';
export declare namespace google {
    namespace events {
        namespace firebase {
            namespace testlab {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a TestMatrix is completed
                     */
                    interface TestMatrixCompletedEvent extends CloudEvent<google.events.firebase.testlab.v1.TestMatrixEventData> {
                        type: 'google.firebase.testlab.testMatrix.v1.completed' | string;
                    }
                    /**
                     * The data within all Firebase test matrix events.
                     */
                    interface TestMatrixEventData {
                        /**
                         * Time the test matrix was created.
                         */
                        createTime?: string;
                        /**
                         * State of the test matrix.
                         */
                        state?: TestState;
                        /**
                         * Code that describes why the test matrix is considered invalid. Only set for
                         * matrices in the INVALID state.
                         */
                        invalidMatrixDetails?: string;
                        /**
                         * Outcome summary of the test matrix.
                         */
                        outcomeSummary?: OutcomeSummary;
                        /**
                         * Locations where test results are stored.
                         */
                        resultStorage?: ResultStorage;
                        /**
                         * Information provided by the client that created the test matrix.
                         */
                        clientInfo?: ClientInfo;
                        /**
                         * ID of the test matrix this event belongs to.
                         */
                        testMatrixId?: string;
                    }
                    /**
                     * Information about the client which invoked the test.
                     */
                    interface ClientInfo {
                        /**
                         * Client name, such as "gcloud".
                         */
                        client?: string;
                        /**
                         * Map of detailed information about the client.
                         */
                        details?: Record<string, string>;
                    }
                    /**
                     * Locations where test results are stored.
                     */
                    interface ResultStorage {
                        /**
                         * Tool Results history resource containing test results. Format is
                         * `projects/{project_id}/histories/{history_id}`.
                         * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
                         * for more information.
                         */
                        toolResultsHistory?: string;
                        /**
                         * Tool Results execution resource containing test results. Format is
                         * `projects/{project_id}/histories/{history_id}/executions/{execution_id}`.
                         * Optional, can be omitted in erroneous test states.
                         * See https://firebase.google.com/docs/test-lab/reference/toolresults/rest
                         * for more information.
                         */
                        toolResultsExecution?: string;
                        /**
                         * URI to the test results in the Firebase Web Console.
                         */
                        resultsUri?: string;
                        /**
                         * Location in Google Cloud Storage where test results are written to.
                         * In the form "gs://bucket/path/to/somewhere".
                         */
                        gcsPath?: string;
                    }
                    /**
                     * Possible test states for a test matrix.
                     */
                    enum TestState {
                        TEST_STATE_UNSPECIFIED = 0,
                        VALIDATING = 1,
                        PENDING = 2,
                        FINISHED = 3,
                        ERROR = 4,
                        INVALID = 5
                    }
                    /**
                     * Outcome summary for a finished test matrix.
                     */
                    enum OutcomeSummary {
                        OUTCOME_SUMMARY_UNSPECIFIED = 0,
                        SUCCESS = 1,
                        FAILURE = 2,
                        INCONCLUSIVE = 3,
                        SKIPPED = 4
                    }
                }
            }
            namespace remoteconfig {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a Remote Config is updated
                     */
                    interface RemoteConfigUpdatedEvent extends CloudEvent<google.events.firebase.remoteconfig.v1.RemoteConfigEventData> {
                        type: 'google.firebase.remoteconfig.remoteConfig.v1.updated' | string;
                    }
                    /**
                     * The data within all Firebase Remote Config events.
                     */
                    interface RemoteConfigEventData {
                        /**
                         * The version number of the version's corresponding Remote Config template.
                         */
                        versionNumber?: number;
                        /**
                         * When the Remote Config template was written to the Remote Config server.
                         */
                        updateTime?: string;
                        /**
                         * Aggregation of all metadata fields about the account that performed the
                         * update.
                         */
                        updateUser?: RemoteConfigUser;
                        /**
                         * The user-provided description of the corresponding Remote Config template.
                         */
                        description?: string;
                        /**
                         * Where the update action originated.
                         */
                        updateOrigin?: RemoteConfigUpdateOrigin;
                        /**
                         * What type of update was made.
                         */
                        updateType?: RemoteConfigUpdateType;
                        /**
                         * Only present if this version is the result of a rollback, and will be the
                         * version number of the Remote Config template that was rolled-back to.
                         */
                        rollbackSource?: number;
                    }
                    /**
                     * All the fields associated with the person/service account
                     * that wrote a Remote Config template.
                     */
                    interface RemoteConfigUser {
                        /**
                         * Display name.
                         */
                        name?: string;
                        /**
                         * Email address.
                         */
                        email?: string;
                        /**
                         * Image URL.
                         */
                        imageUrl?: string;
                    }
                    /**
                     * What type of update was associated with the Remote Config template version.
                     */
                    enum RemoteConfigUpdateOrigin {
                        REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED = 0,
                        CONSOLE = 1,
                        REST_API = 2,
                        ADMIN_SDK_NODE = 3
                    }
                    /**
                     * Where the Remote Config update action originated.
                     */
                    enum RemoteConfigUpdateType {
                        REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED = 0,
                        INCREMENTAL_UPDATE = 1,
                        FORCED_UPDATE = 2,
                        ROLLBACK = 3
                    }
                }
            }
            namespace firebasealerts {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a alert has been published by Firebase Alerts.
                     */
                    interface AlertPublishedEvent extends CloudEvent<google.events.firebase.firebasealerts.v1.AlertData> {
                        type: 'google.firebase.firebasealerts.alerts.v1.published' | string;
                    }
                    /**
                     * The data within all Firebase Alerts.
                     */
                    interface AlertData {
                        /**
                         * Time that the event has created
                         */
                        createTime?: string;
                        /**
                         * Time that the event has ended. Optional, only present for alertsthat are
                         * ongoing
                         */
                        endTime?: string;
                        /**
                         * Payload of the event, which includes the details of the specific alert.
                         * It's a map of keys of String type and values of various types
                         */
                        payload?: Record<string, any>;
                    }
                    /**
                     * Basic information of the Crashlytics issue
                     */
                    interface CrashlyticsIssue {
                        id?: string;
                        title?: string;
                        subtitle?: string;
                        appVersion?: string;
                    }
                    interface CrashlyticsNewFatalIssuePayload {
                        /**
                         * Basic information of the Crashlytics issue
                         */
                        issue?: CrashlyticsIssue;
                    }
                    interface CrashlyticsNewNonfatalIssuePayload {
                        /**
                         * Basic information of the Crashlytics issue
                         */
                        issue?: CrashlyticsIssue;
                    }
                    interface CrashlyticsRegressionAlertPayload {
                        /**
                         * The type of the Crashlytics issue, e.g. new fatal, new nonfatal, ANR
                         */
                        type?: string;
                        /**
                         * Basic information of the Crashlytics issue
                         */
                        issue?: CrashlyticsIssue;
                        /**
                         * The time that the Crashlytics issues was most recently resolved before it
                         * began to reoccur
                         */
                        resolveTime?: string;
                    }
                    interface CrashlyticsVelocityAlertPayload {
                        /**
                         * Basic information of the Crashlytics issue
                         */
                        issue?: CrashlyticsIssue;
                        /**
                         * The time that the Crashlytics issue gets created
                         */
                        createTime?: string;
                        /**
                         * The number of user sessions for the given app version that had this
                         * specific crash issue in the time period used to trigger the velocity alert,
                         * which is currently 1h
                         */
                        crashCount?: number;
                        /**
                         * The percentage of user sessions for the given app version that had this
                         * specific crash issue in the time period used to trigger the velocity alert,
                         * which is currently 1h
                         */
                        crashPercentage?: number;
                        /**
                         * The first app version where this issue was seen, and not necessarily the
                         * version that has triggered the alert
                         */
                        firstVersion?: string;
                    }
                    interface CrashlyticsStabilityDigestPayload {
                        /**
                         * The date that the digest gets created, issues in the digest should
                         * have the same date as the digest date
                         */
                        digestDate?: string;
                        /**
                         * A stability digest contains several trending Crashlytics issues
                         */
                        trendingIssues?: CrashlyticsStabilityDigestPayload.TrendingIssueDetails[];
                    }
                    namespace CrashlyticsStabilityDigestPayload {
                        interface TrendingIssueDetails {
                            /**
                             * The type of the Crashlytics issue, e.g. new fatal, new nonfatal, ANR
                             */
                            type?: string;
                            /**
                             * Basic information of the Crashlytics issue
                             */
                            issue?: any;
                            /**
                             * The number of crashes that occurred with the issue
                             */
                            eventCount?: number;
                            /**
                             * The number of distinct users that were affected by the issue
                             */
                            userCount?: number;
                        }
                    }
                    interface CrashlyticsNewAnrIssuePayload {
                        issue?: CrashlyticsIssue;
                    }
                    interface CrashlyticsMissingSymbolsPayload {
                        appVersion?: string;
                        uuid?: string;
                    }
                    interface FireperfThresholdAlertPayload {
                        /**
                         * Name of the trace or network request this alert is for (e.g.
                         * my_custom_trace, firebase.com/api/123)
                         */
                        eventName?: string;
                        /**
                         * The resource type this alert is for (i.e. trace, network request, screen
                         * rendering, etc.)
                         */
                        eventType?: string;
                        /**
                         * The metric type this alert is for (i.e. success rate, response time,
                         * duration, etc.)
                         */
                        metricType?: string;
                        /**
                         * The number of events checked for this alert condition
                         */
                        numSamples?: number;
                        /**
                         * The threshold value of the alert condition without units (e.g. "75", "2.1")
                         */
                        thresholdValue?: number;
                        /**
                         * The unit for the alert threshold (e.g. "percent", "seconds")
                         */
                        thresholdUnit?: string;
                        /**
                         * The percentile of the alert condition, can be 0 if percentile is not
                         * applicable to the alert condition; range: [0, 100]
                         */
                        conditionPercentile?: number;
                        /**
                         * The app version this alert was triggered for, can be empty if the alert is
                         * for a network request (because the alert was checked against data from all
                         * versions of app) or a web app (where the app is versionless)
                         */
                        appVersion?: string;
                        /**
                         * The value that violated the alert condition (e.g. "76.5", "3")
                         */
                        violationValue?: number;
                        /**
                         * The unit for the violation value (e.g. "percent", "seconds")
                         */
                        violationUnit?: string;
                        /**
                         * The link to Fireconsole to investigate more into this alert
                         */
                        investigateUri?: string;
                    }
                    interface AppDistroNewTesterIosDevicePayload {
                        testerName?: string;
                        testerEmail?: string;
                        testerDeviceModelName?: string;
                        testerDeviceIdentifier?: string;
                    }
                    interface AppDistroInAppFeedbackPayload {
                        /**
                         * Resource name. Format:
                         * projects/{project_number}/apps/{app_id}/releases/{release_id}/feedbackReports/{feedback_id}
                         */
                        feedbackReport?: string;
                        /**
                         * Deep link back to the Firebase console.
                         */
                        feedbackConsoleUri?: string;
                        /**
                         * Name of the tester.
                         */
                        testerName?: string;
                        /**
                         * Email address of the tester.
                         */
                        testerEmail?: string;
                        /**
                         * Version consisting of `versionName` and `versionCode` for Android and
                         * `CFBundleShortVersionString` and `CFBundleVersion` for iOS.
                         */
                        appVersion?: string;
                        /**
                         * Text entered by the tester.
                         */
                        text?: string;
                        /**
                         * URI to download screenshot.  This URI is fast expiring.
                         */
                        screenshotUri?: string;
                    }
                    interface BillingPlanUpdatePayload {
                        /**
                         * A Firebase plan
                         */
                        billingPlan?: string;
                        /**
                         * The email address of the person that triggered billing plan change
                         */
                        principalEmail?: string;
                        /**
                         * The type of the notification, e.g. upgrade, downgrade
                         */
                        notificationType?: string;
                    }
                    interface BillingPlanAutomatedUpdatePayload {
                        /**
                         * A Firebase plan
                         */
                        billingPlan?: string;
                        /**
                         * The type of the notification, e.g. upgrade, downgrade
                         */
                        notificationType?: string;
                    }
                }
            }
            namespace database {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a ref is created in the Firebase Realtime
                     * Database.
                     */
                    interface ReferenceCreatedEvent extends CloudEvent<google.events.firebase.database.v1.ReferenceEventData> {
                        type: 'google.firebase.database.ref.v1.created' | string;
                    }
                    /**
                     * The CloudEvent raised when a reference is updated in the Firebase Realtime
                     * Database.
                     */
                    interface ReferenceUpdatedEvent extends CloudEvent<google.events.firebase.database.v1.ReferenceEventData> {
                        type: 'google.firebase.database.ref.v1.updated' | string;
                    }
                    /**
                     * The CloudEvent raised when a reference is deleted in the Firebase Realtime
                     * Database.
                     */
                    interface ReferenceDeletedEvent extends CloudEvent<google.events.firebase.database.v1.ReferenceEventData> {
                        type: 'google.firebase.database.ref.v1.deleted' | string;
                    }
                    /**
                     * The CloudEvent raised when a reference is written (created, updated or
                     * deleted) in the Firebase Realtime Database.
                     */
                    interface ReferenceWrittenEvent extends CloudEvent<google.events.firebase.database.v1.ReferenceEventData> {
                        type: 'google.firebase.database.ref.v1.written' | string;
                    }
                    /**
                     * The data within all Firebase Real Time Database reference events.
                     */
                    interface ReferenceEventData {
                        /**
                         * The original data for the reference.
                         */
                        data?: any;
                        /**
                         * The change in the reference data.
                         */
                        delta?: any;
                    }
                }
            }
            namespace auth {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a Firebase user is created.
                     */
                    interface UserCreatedEvent extends CloudEvent<google.events.firebase.auth.v1.AuthEventData> {
                        type: 'google.firebase.auth.user.v1.created' | string;
                    }
                    /**
                     * The CloudEvent raised when a Firebase user is deleted.
                     */
                    interface UserDeletedEvent extends CloudEvent<google.events.firebase.auth.v1.AuthEventData> {
                        type: 'google.firebase.auth.user.v1.deleted' | string;
                    }
                    /**
                     * The data within all Firebase Auth events.
                     */
                    interface AuthEventData {
                        /**
                         * The user identifier in the Firebase app.
                         */
                        uid?: string;
                        /**
                         * The user's primary email, if set.
                         */
                        email?: string;
                        /**
                         * Whether or not the user's primary email is verified.
                         */
                        emailVerified?: boolean;
                        /**
                         * The user's display name.
                         */
                        displayName?: string;
                        /**
                         * The user's photo URL.
                         */
                        photo_URL?: string;
                        /**
                         * Whether the user is disabled.
                         */
                        disabled?: boolean;
                        /**
                         * Additional metadata about the user.
                         */
                        metadata?: UserMetadata;
                        /**
                         * User's info at the providers
                         */
                        providerData?: UserInfo[];
                        /**
                         * The user's phone number.
                         */
                        phoneNumber?: string;
                        /**
                         * User's custom claims, typically used to define user roles and propagated
                         * to an authenticated user's ID token.
                         */
                        customClaims?: Record<string, any>;
                    }
                    /**
                     * Additional metadata about the user.
                     */
                    interface UserMetadata {
                        /**
                         * The date the user was created.
                         */
                        createTime?: string;
                        /**
                         * The date the user last signed in.
                         */
                        lastSignInTime?: string;
                    }
                    /**
                     * User's info at the identity provider
                     */
                    interface UserInfo {
                        /**
                         * The user identifier for the linked provider.
                         */
                        uid?: string;
                        /**
                         * The email for the linked provider.
                         */
                        email?: string;
                        /**
                         * The display name for the linked provider.
                         */
                        displayName?: string;
                        /**
                         * The photo URL for the linked provider.
                         */
                        photo_URL?: string;
                        /**
                         * The linked provider ID (e.g. "google.com" for the Google provider).
                         */
                        providerId?: string;
                    }
                }
            }
            namespace analytics {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a Firebase Analytics log is written.
                     */
                    interface AnalyticsLogWrittenEvent extends CloudEvent<google.events.firebase.analytics.v1.AnalyticsLogData> {
                        type: 'google.firebase.analytics.log.v1.written' | string;
                    }
                    /**
                     * The data within Firebase Analytics log events.
                     */
                    interface AnalyticsLogData {
                        /**
                         * User related dimensions.
                         */
                        userDim?: UserDimensions;
                        /**
                         * A repeated record of event related dimensions.
                         */
                        eventDim?: EventDimensions[];
                    }
                    /**
                     * Message containing information about the user associated with the event.
                     */
                    interface UserDimensions {
                        /**
                         * The user ID set via the setUserId API.
                         */
                        userId?: string;
                        /**
                         * The time (in microseconds) at which the user first opened the app.
                         */
                        firstOpenTimestampMicros?: number;
                        /**
                         * A repeated record of user properties set with the setUserProperty API.
                         * https://firebase.google.com/docs/analytics/android/properties
                         */
                        userProperties?: Record<string, UserPropertyValue>;
                        /**
                         * Device information.
                         */
                        deviceInfo?: DeviceInfo;
                        /**
                         * User's geographic information.
                         */
                        geoInfo?: GeoInfo;
                        /**
                         * App information.
                         */
                        appInfo?: AppInfo;
                        /**
                         * Information about marketing campaign which acquired the user.
                         */
                        trafficSource?: TrafficSource;
                        /**
                         * Information regarding the bundle in which these events were uploaded.
                         */
                        bundleInfo?: ExportBundleInfo;
                        /**
                         * Lifetime Value information about this user.
                         */
                        ltvInfo?: LtvInfo;
                    }
                    /**
                     * Predefined (eg: LTV) or custom properties (eg: birthday) stored on client
                     * side and associated with subsequent HitBundles.
                     */
                    interface UserPropertyValue {
                        /**
                         * Last set value of user property.
                         */
                        value?: AnalyticsValue;
                        /**
                         * UTC client time when user property was last set.
                         */
                        setTimestampUsec?: number;
                        /**
                         * Index for user property (one-based).
                         */
                        index?: number;
                    }
                    /**
                     * Value for Event Params and UserProperty can be of type string or int or
                     * float or double.
                     */
                    interface AnalyticsValue {
                        stringValue?: string;
                        intValue?: number;
                        floatValue?: number;
                        doubleValue?: number;
                    }
                    /**
                     * Message containing device informations.
                     */
                    interface DeviceInfo {
                        /**
                         * Device category.
                         * Eg. tablet or mobile.
                         */
                        deviceCategory?: string;
                        /**
                         * Device brand name.
                         * Eg. Samsung, HTC, etc.
                         */
                        mobileBrandName?: string;
                        /**
                         * Device model name.
                         * Eg. GT-I9192
                         */
                        mobileModelName?: string;
                        /**
                         * Device marketing name.
                         * Eg. Galaxy S4 Mini
                         */
                        mobileMarketingName?: string;
                        /**
                         * Device model.
                         * Eg. GT-I9192
                         */
                        deviceModel?: string;
                        /**
                         * Device OS version when data capture ended.
                         * Eg. 4.4.2
                         */
                        platformVersion?: string;
                        /**
                         * Vendor specific device identifier. This is IDFV on iOS. Not used for
                         * Android.
                         * Example: "599F9C00-92DC-4B5C-9464-7971F01F8370"
                         */
                        deviceId?: string;
                        /**
                         * The type of the resettable_device_id is always IDFA on iOS and AdId
                         * on Android.
                         * Example: "71683BF9-FA3B-4B0D-9535-A1F05188BAF3"
                         */
                        resettableDeviceId?: string;
                        /**
                         * The user language.
                         * Eg. "en-us", "en-za", "zh-tw", "jp"
                         */
                        userDefaultLanguage?: string;
                        /**
                         * The timezone of the device when data was uploaded as seconds skew from UTC.
                         */
                        deviceTimeZoneOffsetSeconds?: number;
                        /**
                         * The device's Limit Ad Tracking setting.
                         * When true, we cannot use device_id for remarketing, demographics or
                         * influencing ads serving behaviour. However, we can use device_id for
                         * conversion tracking and campaign attribution.
                         */
                        limitedAdTracking?: boolean;
                    }
                    /**
                     * Message which contains App Information.
                     */
                    interface AppInfo {
                        /**
                         * The app's version name
                         * Examples: "1.0", "4.3.1.1.213361", "2.3 (1824253)", "v1.8b22p6"
                         */
                        appVersion?: string;
                        /**
                         * Unique id for this instance of the app.
                         * Example: "71683BF9FA3B4B0D9535A1F05188BAF3"
                         */
                        appInstanceId?: string;
                        /**
                         * The identifier of the store that installed the app.
                         * Eg. "com.sec.android.app.samsungapps", "com.amazon.venezia",
                         * "com.nokia.nstore"
                         */
                        appStore?: string;
                        /**
                         * The app platform.
                         * Eg "ANDROID", "IOS".
                         */
                        appPlatform?: string;
                        /**
                         * Unique application identifier within an app store.
                         */
                        appId?: string;
                    }
                    /**
                     * User's geographic informaiton.
                     */
                    interface GeoInfo {
                        /**
                         * The geographic continent.
                         * Eg. Americas
                         */
                        continent?: string;
                        /**
                         * The geographic country.
                         * Eg. Brazil
                         */
                        country?: string;
                        /**
                         * The geographic region.
                         * Eg. State of Sao Paulo
                         */
                        region?: string;
                        /**
                         * The geographic city.
                         * Eg. Sao Paulo
                         */
                        city?: string;
                    }
                    /**
                     * Mesage containing marketing campaign information which acquired the user.
                     */
                    interface TrafficSource {
                        /**
                         * The name of the campaign which acquired the user.
                         */
                        userAcquiredCampaign?: string;
                        /**
                         * The name of the network which acquired the user.
                         */
                        userAcquiredSource?: string;
                        /**
                         * The name of the medium which acquired the user.
                         */
                        userAcquiredMedium?: string;
                    }
                    /**
                     * Message containing information regarding the bundle in which these
                     * events were uploaded.
                     */
                    interface ExportBundleInfo {
                        /**
                         * Monotonically increasing index for each bundle set by SDK.
                         */
                        bundleSequenceId?: number;
                        /**
                         * Timestamp offset between collection time and upload time.
                         */
                        serverTimestampOffsetMicros?: number;
                    }
                    /**
                     * Lifetime Value information about this user.
                     */
                    interface LtvInfo {
                        /**
                         * The Lifetime Value revenue of this user.
                         */
                        revenue?: number;
                        /**
                         * The currency corresponding to the revenue.
                         */
                        currency?: string;
                    }
                    /**
                     * Message containing information pertaining to the event.
                     */
                    interface EventDimensions {
                        /**
                         * The date on which this event was logged.
                         * (YYYYMMDD format in the registered timezone of your app.)
                         */
                        date?: string;
                        /**
                         * The name of this event.
                         */
                        name?: string;
                        /**
                         * A repeated record of the parameters associated with this event.
                         */
                        params?: Record<string, AnalyticsValue>;
                        /**
                         * UTC client time when the event happened.
                         */
                        timestampMicros?: number;
                        /**
                         * UTC client time when the previous event happened.
                         */
                        previousTimestampMicros?: number;
                        /**
                         * Value param in USD.
                         */
                        valueInUsd?: number;
                    }
                }
            }
        }
        namespace cloud {
            namespace storage {
                namespace v1 {
                    /**
                     * The CloudEvent raised when an object is finalized in Google Cloud Storage.
                     */
                    interface ObjectFinalizedEvent extends CloudEvent<google.events.cloud.storage.v1.StorageObjectData> {
                        type: 'google.cloud.storage.object.v1.finalized' | string;
                    }
                    /**
                     * The CloudEvent raised when an object is archived in Google Cloud Storage.
                     */
                    interface ObjectArchivedEvent extends CloudEvent<google.events.cloud.storage.v1.StorageObjectData> {
                        type: 'google.cloud.storage.object.v1.archived' | string;
                    }
                    /**
                     * The CloudEvent raised when an object is deleted  in Google Cloud Storage.
                     */
                    interface ObjectDeletedEvent extends CloudEvent<google.events.cloud.storage.v1.StorageObjectData> {
                        type: 'google.cloud.storage.object.v1.deleted' | string;
                    }
                    /**
                     * The CloudEvent raised when an object's metadata is updated  in Google Cloud
                     * Storage.
                     */
                    interface ObjectMetadataUpdatedEvent extends CloudEvent<google.events.cloud.storage.v1.StorageObjectData> {
                        type: 'google.cloud.storage.object.v1.metadataUpdated' | string;
                    }
                    /**
                     * An object within Google Cloud Storage.
                     */
                    interface StorageObjectData {
                        /**
                         * Content-Encoding of the object data, matching
                         * [https://tools.ietf.org/html/rfc7231#section-3.1.2.2][RFC 7231 §3.1.2.2]
                         */
                        contentEncoding?: string;
                        /**
                         * Content-Disposition of the object data, matching
                         * [https://tools.ietf.org/html/rfc6266][RFC 6266].
                         */
                        contentDisposition?: string;
                        /**
                         * Cache-Control directive for the object data, matching
                         * [https://tools.ietf.org/html/rfc7234#section-5.2"][RFC 7234 §5.2].
                         */
                        cacheControl?: string;
                        /**
                         * Content-Language of the object data, matching
                         * [https://tools.ietf.org/html/rfc7231#section-3.1.3.2][RFC 7231 §3.1.3.2].
                         */
                        contentLanguage?: string;
                        /**
                         * The version of the metadata for this object at this generation. Used for
                         * preconditions and for detecting changes in metadata. A metageneration
                         * number is only meaningful in the context of a particular generation of a
                         * particular object.
                         */
                        metageneration?: number;
                        /**
                         * The deletion time of the object. Will be returned if and only if this
                         * version of the object has been deleted.
                         */
                        timeDeleted?: string;
                        /**
                         * Content-Type of the object data, matching
                         * [https://tools.ietf.org/html/rfc7231#section-3.1.1.5][RFC 7231 §3.1.1.5].
                         * If an object is stored without a Content-Type, it is served as
                         * `application/octet-stream`.
                         */
                        contentType?: string;
                        /**
                         * Content-Length of the object data in bytes, matching
                         * [https://tools.ietf.org/html/rfc7230#section-3.3.2][RFC 7230 §3.3.2].
                         */
                        size?: number;
                        /**
                         * The creation time of the object.
                         * Attempting to set this field will result in an error.
                         */
                        timeCreated?: string;
                        /**
                         * CRC32c checksum. For more information about using the CRC32c
                         * checksum, see
                         * [https://cloud.google.com/storage/docs/hashes-etags#_JSONAPI][Hashes and
                         * ETags: Best Practices].
                         */
                        crc32c?: string;
                        /**
                         * Number of underlying components that make up this object. Components are
                         * accumulated by compose operations.
                         * Attempting to set this field will result in an error.
                         */
                        componentCount?: number;
                        /**
                         * MD5 hash of the data; encoded using base64 as per
                         * [https://tools.ietf.org/html/rfc4648#section-4][RFC 4648 §4]. For more
                         * information about using the MD5 hash, see
                         * [https://cloud.google.com/storage/docs/hashes-etags#_JSONAPI][Hashes and
                         * ETags: Best Practices].
                         */
                        md5Hash?: string;
                        /**
                         * HTTP 1.1 Entity tag for the object. See
                         * [https://tools.ietf.org/html/rfc7232#section-2.3][RFC 7232 §2.3].
                         */
                        etag?: string;
                        /**
                         * The modification time of the object metadata.
                         */
                        updated?: string;
                        /**
                         * Storage class of the object.
                         */
                        storageClass?: string;
                        /**
                         * Cloud KMS Key used to encrypt this object, if the object is encrypted by
                         * such a key.
                         */
                        kmsKeyName?: string;
                        /**
                         * The time at which the object's storage class was last changed.
                         */
                        timeStorageClassUpdated?: string;
                        /**
                         * Whether an object is under temporary hold.
                         */
                        temporaryHold?: boolean;
                        /**
                         * A server-determined value that specifies the earliest time that the
                         * object's retention period expires.
                         */
                        retentionExpirationTime?: string;
                        /**
                         * User-provided metadata, in key/value pairs.
                         */
                        metadata?: Record<string, string>;
                        /**
                         * Whether an object is under event-based hold.
                         */
                        eventBasedHold?: boolean;
                        /**
                         * The name of the object.
                         */
                        name?: string;
                        /**
                         * The ID of the object, including the bucket name, object name, and
                         * generation number.
                         */
                        id?: string;
                        /**
                         * The name of the bucket containing this object.
                         */
                        bucket?: string;
                        /**
                         * The content generation of this object. Used for object versioning.
                         * Attempting to set this field will result in an error.
                         */
                        generation?: number;
                        /**
                         * Metadata of customer-supplied encryption key, if the object is encrypted by
                         * such a key.
                         */
                        customerEncryption?: StorageObjectData.CustomerEncryption;
                        /**
                         * Media download link.
                         */
                        mediaLink?: string;
                        /**
                         * The link to this object.
                         */
                        selfLink?: string;
                        /**
                         * The kind of item this is. For objects, this is always "storage#object".
                         */
                        kind?: string;
                    }
                    namespace StorageObjectData {
                        /**
                         * Describes the customer-specified mechanism used to store the data at rest.
                         */
                        interface CustomerEncryption {
                            /**
                             * The encryption algorithm.
                             */
                            encryptionAlgorithm?: string;
                            /**
                             * SHA256 hash value of the encryption key.
                             */
                            keySha256?: string;
                        }
                    }
                }
            }
            namespace scheduler {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a Scheduler job is executed.
                     */
                    interface JobExecutedEvent extends CloudEvent<google.events.cloud.scheduler.v1.SchedulerJobData> {
                        type: 'google.cloud.scheduler.job.v1.executed' | string;
                    }
                    /**
                     * Scheduler job data.
                     */
                    interface SchedulerJobData {
                        /**
                         * The custom data the user specified when creating the scheduler source.
                         */
                        customData?: string;
                    }
                }
            }
            namespace pubsub {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a PubSub message is published for a topic.
                     */
                    interface MessagePublishedEvent extends CloudEvent<google.events.cloud.pubsub.v1.MessagePublishedData> {
                        type: 'google.cloud.pubsub.topic.v1.messagePublished' | string;
                    }
                    /**
                     * The event data when a message is published to a topic.
                     */
                    interface MessagePublishedData {
                        /**
                         * The message that was published.
                         */
                        message?: PubsubMessage;
                        /**
                         * The resource name of the subscription for which this event was
                         * generated. The format of the value is
                         * `projects/{project-id}/subscriptions/{subscription-id}`.
                         */
                        subscription?: string;
                    }
                    /**
                     * A message published to a topic.
                     */
                    interface PubsubMessage {
                        /**
                         * The binary data in the message.
                         */
                        data?: string;
                        /**
                         * Attributes for this message.
                         */
                        attributes?: Record<string, string>;
                        /**
                         * ID of this message, assigned by the server when the message is published.
                         * Guaranteed to be unique within the topic.
                         */
                        messageId?: string;
                        /**
                         * The time at which the message was published, populated by the server when
                         * it receives the `Publish` call.
                         */
                        publishTime?: string;
                        /**
                         * If non-empty, identifies related messages for which publish order should be
                         * respected.
                         */
                        orderingKey?: string;
                    }
                }
            }
            namespace iot {
                namespace v1 {
                    /**
                     * CreateDevice event.
                     */
                    interface CreateDeviceEvent extends CloudEvent<google.events.cloud.iot.v1.DeviceEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.CreateDevice' | string;
                    }
                    /**
                     * UpdateDevice event.
                     */
                    interface UpdateDeviceEvent extends CloudEvent<google.events.cloud.iot.v1.DeviceEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.UpdateDevice' | string;
                    }
                    /**
                     * DeleteDevice event.
                     */
                    interface DeleteDeviceEvent extends CloudEvent<google.events.cloud.iot.v1.DeviceEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.DeleteDevice' | string;
                    }
                    /**
                     * CreateDeviceRegistry event.
                     */
                    interface CreateDeviceRegistryEvent extends CloudEvent<google.events.cloud.iot.v1.RegistryEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry' | string;
                    }
                    /**
                     * UpdateDeviceRegistry event.
                     */
                    interface UpdateDeviceRegistryEvent extends CloudEvent<google.events.cloud.iot.v1.RegistryEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry' | string;
                    }
                    /**
                     * DeleteDeviceRegistry event.
                     */
                    interface DeleteDeviceRegistryEvent extends CloudEvent<google.events.cloud.iot.v1.RegistryEventData> {
                        type: 'google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry' | string;
                    }
                    /**
                     * The device resource.
                     */
                    interface Device {
                        /**
                         * The user-defined device identifier. The device ID must be unique
                         * within a device registry.
                         */
                        id?: string;
                        /**
                         * The resource path name. For example,
                         * `projects/p1/locations/us-central1/registries/registry0/devices/dev0` or
                         * `projects/p1/locations/us-central1/registries/registry0/devices/{num_id}`.
                         * When `name` is populated as a response from the service, it always ends
                         * in the device numeric ID.
                         */
                        name?: string;
                        /**
                         * [Output only] A server-defined unique numeric ID for the device. This is a
                         * more compact way to identify devices, and it is globally unique.
                         */
                        numId?: any;
                        /**
                         * The credentials used to authenticate this device. To allow credential
                         * rotation without interruption, multiple device credentials can be bound to
                         * this device. No more than 3 credentials can be bound to a single device at
                         * a time. When new credentials are added to a device, they are verified
                         * against the registry credentials. For details, see the description of the
                         * `DeviceRegistry.credentials` field.
                         */
                        credentials?: DeviceCredential[];
                        /**
                         * [Output only] The last time an MQTT `PINGREQ` was received. This field
                         * applies only to devices connecting through MQTT. MQTT clients usually only
                         * send `PINGREQ` messages if the connection is idle, and no other messages
                         * have been sent. Timestamps are periodically collected and written to
                         * storage; they may be stale by a few minutes.
                         */
                        lastHeartbeatTime?: string;
                        /**
                         * [Output only] The last time a telemetry event was received. Timestamps are
                         * periodically collected and written to storage; they may be stale by a few
                         * minutes.
                         */
                        lastEventTime?: string;
                        /**
                         * [Output only] The last time a state event was received. Timestamps are
                         * periodically collected and written to storage; they may be stale by a few
                         * minutes.
                         */
                        lastStateTime?: string;
                        /**
                         * [Output only] The last time a cloud-to-device config version acknowledgment
                         * was received from the device. This field is only for configurations
                         * sent through MQTT.
                         */
                        lastConfigAckTime?: string;
                        /**
                         * [Output only] The last time a cloud-to-device config version was sent to
                         * the device.
                         */
                        lastConfigSendTime?: string;
                        /**
                         * If a device is blocked, connections or requests from this device will fail.
                         * Can be used to temporarily prevent the device from connecting if, for
                         * example, the sensor is generating bad data and needs maintenance.
                         */
                        blocked?: boolean;
                        /**
                         * [Output only] The time the most recent error occurred, such as a failure to
                         * publish to Cloud Pub/Sub. This field is the timestamp of
                         * 'last_error_status'.
                         */
                        lastErrorTime?: string;
                        /**
                         * [Output only] The error message of the most recent error, such as a failure
                         * to publish to Cloud Pub/Sub. 'last_error_time' is the timestamp of this
                         * field. If no errors have occurred, this field has an empty message
                         * and the status code 0 == OK. Otherwise, this field is expected to have a
                         * status code other than OK.
                         */
                        lastErrorStatus?: any;
                        /**
                         * The most recent device configuration, which is eventually sent from
                         * Cloud IoT Core to the device. If not present on creation, the
                         * configuration will be initialized with an empty payload and version value
                         * of `1`. To update this field after creation, use the
                         * `DeviceManager.ModifyCloudToDeviceConfig` method.
                         */
                        config?: DeviceConfig;
                        /**
                         * [Output only] The state most recently received from the device. If no state
                         * has been reported, this field is not present.
                         */
                        state?: DeviceState;
                        /**
                         * *Beta Feature**
                         *
                         * The logging verbosity for device activity. If unspecified,
                         * DeviceRegistry.log_level will be used.
                         */
                        logLevel?: LogLevel;
                        /**
                         * The metadata key-value pairs assigned to the device. This metadata is not
                         * interpreted or indexed by Cloud IoT Core. It can be used to add contextual
                         * information for the device.
                         *
                         * Keys must conform to the regular expression [a-zA-Z][a-zA-Z0-9-_.+~%]+ and
                         * be less than 128 bytes in length.
                         *
                         * Values are free-form strings. Each value must be less than or equal to 32
                         * KB in size.
                         *
                         * The total size of all keys and values must be less than 256 KB, and the
                         * maximum number of key-value pairs is 500.
                         */
                        metadata?: Record<string, string>;
                        /**
                         * Gateway-related configuration and state.
                         */
                        gatewayConfig?: GatewayConfig;
                    }
                    /**
                     * Gateway-related configuration and state.
                     */
                    interface GatewayConfig {
                        /**
                         * Indicates whether the device is a gateway.
                         */
                        gatewayType?: GatewayType;
                        /**
                         * Indicates how to authorize and/or authenticate devices to access the
                         * gateway.
                         */
                        gatewayAuthMethod?: GatewayAuthMethod;
                        /**
                         * [Output only] The ID of the gateway the device accessed most recently.
                         */
                        lastAccessedGatewayId?: string;
                        /**
                         * [Output only] The most recent time at which the device accessed the gateway
                         * specified in `last_accessed_gateway`.
                         */
                        lastAccessedGatewayTime?: string;
                    }
                    /**
                     * A container for a group of devices.
                     */
                    interface DeviceRegistry {
                        /**
                         * The identifier of this device registry. For example, `myRegistry`.
                         */
                        id?: string;
                        /**
                         * The resource path name. For example,
                         * `projects/example-project/locations/us-central1/registries/my-registry`.
                         */
                        name?: string;
                        /**
                         * The configuration for notification of telemetry events received from the
                         * device. All telemetry events that were successfully published by the
                         * device and acknowledged by Cloud IoT Core are guaranteed to be
                         * delivered to Cloud Pub/Sub. If multiple configurations match a message,
                         * only the first matching configuration is used. If you try to publish a
                         * device telemetry event using MQTT without specifying a Cloud Pub/Sub topic
                         * for the device's registry, the connection closes automatically. If you try
                         * to do so using an HTTP connection, an error is returned. Up to 10
                         * configurations may be provided.
                         */
                        eventNotificationConfigs?: EventNotificationConfig[];
                        /**
                         * The configuration for notification of new states received from the device.
                         * State updates are guaranteed to be stored in the state history, but
                         * notifications to Cloud Pub/Sub are not guaranteed. For example, if
                         * permissions are misconfigured or the specified topic doesn't exist, no
                         * notification will be published but the state will still be stored in Cloud
                         * IoT Core.
                         */
                        stateNotificationConfig?: StateNotificationConfig;
                        /**
                         * The MQTT configuration for this device registry.
                         */
                        mqttConfig?: MqttConfig;
                        /**
                         * The DeviceService (HTTP) configuration for this device registry.
                         */
                        httpConfig?: HttpConfig;
                        /**
                         * *Beta Feature**
                         *
                         * The default logging verbosity for activity from devices in this registry.
                         * The verbosity level can be overridden by Device.log_level.
                         */
                        logLevel?: LogLevel;
                        /**
                         * The credentials used to verify the device credentials. No more than 10
                         * credentials can be bound to a single registry at a time. The verification
                         * process occurs at the time of device creation or update. If this field is
                         * empty, no verification is performed. Otherwise, the credentials of a newly
                         * created device or added credentials of an updated device should be signed
                         * with one of these registry credentials.
                         *
                         * Note, however, that existing devices will never be affected by
                         * modifications to this list of credentials: after a device has been
                         * successfully created in a registry, it should be able to connect even if
                         * its registry credentials are revoked, deleted, or modified.
                         */
                        credentials?: RegistryCredential[];
                    }
                    /**
                     * The configuration of MQTT for a device registry.
                     */
                    interface MqttConfig {
                        /**
                         * If enabled, allows connections using the MQTT protocol. Otherwise, MQTT
                         * connections to this registry will fail.
                         */
                        mqttEnabledState?: MqttState;
                    }
                    /**
                     * Indicates whether an MQTT connection is enabled or disabled. See the field
                     * description for details.
                     */
                    enum MqttState {
                        MQTT_STATE_UNSPECIFIED = 0,
                        MQTT_ENABLED = 1,
                        MQTT_DISABLED = 2
                    }
                    /**
                     * The configuration of the HTTP bridge for a device registry.
                     */
                    interface HttpConfig {
                        /**
                         * If enabled, allows devices to use DeviceService via the HTTP protocol.
                         * Otherwise, any requests to DeviceService will fail for this registry.
                         */
                        httpEnabledState?: HttpState;
                    }
                    /**
                     * Indicates whether DeviceService (HTTP) is enabled or disabled for the
                     * registry. See the field description for details.
                     */
                    enum HttpState {
                        HTTP_STATE_UNSPECIFIED = 0,
                        HTTP_ENABLED = 1,
                        HTTP_DISABLED = 2
                    }
                    /**
                     * *Beta Feature**
                     *
                     * The logging verbosity for device activity. Specifies which events should be
                     * written to logs. For example, if the LogLevel is ERROR, only events that
                     * terminate in errors will be logged. LogLevel is inclusive; enabling INFO
                     * logging will also enable ERROR logging.
                     */
                    enum LogLevel {
                        LOG_LEVEL_UNSPECIFIED = 0,
                        NONE = 10,
                        ERROR = 20,
                        INFO = 30,
                        DEBUG = 40
                    }
                    /**
                     * Gateway type.
                     */
                    enum GatewayType {
                        GATEWAY_TYPE_UNSPECIFIED = 0,
                        GATEWAY = 1,
                        NON_GATEWAY = 2
                    }
                    /**
                     * The gateway authorization/authentication method. This setting determines how
                     * Cloud IoT Core authorizes/authenticate devices to access the gateway.
                     */
                    enum GatewayAuthMethod {
                        GATEWAY_AUTH_METHOD_UNSPECIFIED = 0,
                        ASSOCIATION_ONLY = 1,
                        DEVICE_AUTH_TOKEN_ONLY = 2,
                        ASSOCIATION_AND_DEVICE_AUTH_TOKEN = 3
                    }
                    /**
                     * The configuration for forwarding telemetry events.
                     */
                    interface EventNotificationConfig {
                        /**
                         * If the subfolder name matches this string exactly, this configuration will
                         * be used. The string must not include the leading '/' character. If empty,
                         * all strings are matched. This field is used only for telemetry events;
                         * subfolders are not supported for state changes.
                         */
                        subfolderMatches?: string;
                        /**
                         * A Cloud Pub/Sub topic name. For example,
                         * `projects/myProject/topics/deviceEvents`.
                         */
                        pubsubTopicName?: string;
                    }
                    /**
                     * The configuration for notification of new states received from the device.
                     */
                    interface StateNotificationConfig {
                        /**
                         * A Cloud Pub/Sub topic name. For example,
                         * `projects/myProject/topics/deviceEvents`.
                         */
                        pubsubTopicName?: string;
                    }
                    /**
                     * A server-stored registry credential used to validate device credentials.
                     */
                    interface RegistryCredential {
                        /**
                         * A public key certificate used to verify the device credentials.
                         */
                        publicKeyCertificate?: PublicKeyCertificate;
                    }
                    /**
                     * Details of an X.509 certificate. For informational purposes only.
                     */
                    interface X509CertificateDetails {
                        /**
                         * The entity that signed the certificate.
                         */
                        issuer?: string;
                        /**
                         * The entity the certificate and public key belong to.
                         */
                        subject?: string;
                        /**
                         * The time the certificate becomes valid.
                         */
                        startTime?: string;
                        /**
                         * The time the certificate becomes invalid.
                         */
                        expiryTime?: string;
                        /**
                         * The algorithm used to sign the certificate.
                         */
                        signatureAlgorithm?: string;
                        /**
                         * The type of public key in the certificate.
                         */
                        publicKeyType?: string;
                    }
                    /**
                     * A public key certificate format and data.
                     */
                    interface PublicKeyCertificate {
                        /**
                         * The certificate format.
                         */
                        format?: PublicKeyCertificateFormat;
                        /**
                         * The certificate data.
                         */
                        certificate?: string;
                        /**
                         * [Output only] The certificate details. Used only for X.509 certificates.
                         */
                        x509Details?: X509CertificateDetails;
                    }
                    /**
                     * The supported formats for the public key.
                     */
                    enum PublicKeyCertificateFormat {
                        UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT = 0,
                        X509_CERTIFICATE_PEM = 1
                    }
                    /**
                     * A server-stored device credential used for authentication.
                     */
                    interface DeviceCredential {
                        /**
                         * A public key used to verify the signature of JSON Web Tokens (JWTs).
                         * When adding a new device credential, either via device creation or via
                         * modifications, this public key credential may be required to be signed by
                         * one of the registry level certificates. More specifically, if the
                         * registry contains at least one certificate, any new device credential
                         * must be signed by one of the registry certificates. As a result,
                         * when the registry contains certificates, only X.509 certificates are
                         * accepted as device credentials. However, if the registry does
                         * not contain a certificate, self-signed certificates and public keys will
                         * be accepted. New device credentials must be different from every
                         * registry-level certificate.
                         */
                        publicKey?: PublicKeyCredential;
                        /**
                         * [Optional] The time at which this credential becomes invalid. This
                         * credential will be ignored for new client authentication requests after
                         * this timestamp; however, it will not be automatically deleted.
                         */
                        expirationTime?: string;
                    }
                    /**
                     * A public key format and data.
                     */
                    interface PublicKeyCredential {
                        /**
                         * The format of the key.
                         */
                        format?: PublicKeyFormat;
                        /**
                         * The key data.
                         */
                        key?: string;
                    }
                    /**
                     * The supported formats for the public key.
                     */
                    enum PublicKeyFormat {
                        UNSPECIFIED_PUBLIC_KEY_FORMAT = 0,
                        RSA_PEM = 3,
                        RSA_X509_PEM = 1,
                        ES256_PEM = 2,
                        ES256_X509_PEM = 4
                    }
                    /**
                     * The device configuration. Eventually delivered to devices.
                     */
                    interface DeviceConfig {
                        /**
                         * [Output only] The version of this update. The version number is assigned by
                         * the server, and is always greater than 0 after device creation. The
                         * version must be 0 on the `CreateDevice` request if a `config` is
                         * specified; the response of `CreateDevice` will always have a value of 1.
                         */
                        version?: number;
                        /**
                         * [Output only] The time at which this configuration version was updated in
                         * Cloud IoT Core. This timestamp is set by the server.
                         */
                        cloudUpdateTime?: string;
                        /**
                         * [Output only] The time at which Cloud IoT Core received the
                         * acknowledgment from the device, indicating that the device has received
                         * this configuration version. If this field is not present, the device has
                         * not yet acknowledged that it received this version. Note that when
                         * the config was sent to the device, many config versions may have been
                         * available in Cloud IoT Core while the device was disconnected, and on
                         * connection, only the latest version is sent to the device. Some
                         * versions may never be sent to the device, and therefore are never
                         * acknowledged. This timestamp is set by Cloud IoT Core.
                         */
                        deviceAckTime?: string;
                        /**
                         * The device configuration data.
                         */
                        binaryData?: string;
                    }
                    /**
                     * The device state, as reported by the device.
                     */
                    interface DeviceState {
                        /**
                         * [Output only] The time at which this state version was updated in Cloud
                         * IoT Core.
                         */
                        updateTime?: string;
                        /**
                         * The device state data.
                         */
                        binaryData?: string;
                    }
                    /**
                     * The data within all Cloud IoT Device events.
                     */
                    interface DeviceEventData {
                        /**
                         * Optional. The Device event payload. Unset for deletion events.
                         */
                        payload?: Device;
                    }
                    /**
                     * The data within all Cloud IoT Registry events.
                     */
                    interface RegistryEventData {
                        /**
                         * Optional. The Registry event payload. Unset for deletion events.
                         */
                        payload?: DeviceRegistry;
                    }
                }
            }
            namespace firestore {
                namespace v1 {
                    /**
                     * The CloudEvent raised when a Firestore document is created.
                     */
                    interface DocumentCreatedEvent extends CloudEvent<google.events.cloud.firestore.v1.DocumentEventData> {
                        type: 'google.cloud.firestore.document.v1.created' | string;
                    }
                    /**
                     * The CloudEvent raised when a Firestore document is updated.
                     */
                    interface DocumentUpdatedEvent extends CloudEvent<google.events.cloud.firestore.v1.DocumentEventData> {
                        type: 'google.cloud.firestore.document.v1.updated' | string;
                    }
                    /**
                     * The CloudEvent raised when a Firestore document is deleted.
                     */
                    interface DocumentDeletedEvent extends CloudEvent<google.events.cloud.firestore.v1.DocumentEventData> {
                        type: 'google.cloud.firestore.document.v1.deleted' | string;
                    }
                    /**
                     * The CloudEvent raised when a Firestore document is created, updated or
                     * deleted.
                     */
                    interface DocumentWrittenEvent extends CloudEvent<google.events.cloud.firestore.v1.DocumentEventData> {
                        type: 'google.cloud.firestore.document.v1.written' | string;
                    }
                    /**
                     * The data within all Firestore document events.
                     */
                    interface DocumentEventData {
                        /**
                         * A Document object containing a post-operation document snapshot.
                         * This is not populated for delete events.
                         */
                        value?: Document;
                        /**
                         * A Document object containing a pre-operation document snapshot.
                         * This is only populated for update and delete events.
                         */
                        oldValue?: Document;
                        /**
                         * A DocumentMask object that lists changed fields.
                         * This is only populated for update events.
                         */
                        updateMask?: DocumentMask;
                    }
                    /**
                     * A set of field paths on a document.
                     */
                    interface DocumentMask {
                        /**
                         * The list of field paths in the mask.
                         * See [Document.fields][google.cloud.firestore.v1.events.Document.fields]
                         * for a field path syntax reference.
                         */
                        fieldPaths?: string[];
                    }
                    /**
                     * A Firestore document.
                     */
                    interface Document {
                        /**
                         * The resource name of the document. For example:
                         * `projects/{project_id}/databases/{database_id}/documents/{document_path}`
                         */
                        name?: string;
                        /**
                         * The document's fields.
                         *
                         * The map keys represent field names.
                         *
                         * A simple field name contains only characters `a` to `z`, `A` to `Z`,
                         * `0` to `9`, or `_`, and must not start with `0` to `9`. For example,
                         * `foo_bar_17`.
                         *
                         * Field names matching the regular expression `__.*__` are reserved. Reserved
                         * field names are forbidden except in certain documented contexts. The map
                         * keys, represented as UTF-8, must not exceed 1,500 bytes and cannot be
                         * empty.
                         *
                         * Field paths may be used in other contexts to refer to structured fields
                         * defined here. For `map_value`, the field path is represented by the simple
                         * or quoted field names of the containing fields, delimited by `.`. For
                         * example, the structured field
                         * `"foo" : { map_value: { "x&y" : { string_value: "hello" }}}` would be
                         * represented by the field path `foo.x&y`.
                         *
                         * Within a field path, a quoted field name starts and ends with `` ` `` and
                         * may contain any character. Some characters, including `` ` ``, must be
                         * escaped using a `\`. For example, `` `x&y` `` represents `x&y` and
                         * `` `bak\`tik` `` represents `` bak`tik ``.
                         */
                        fields?: Record<string, Value>;
                        /**
                         * The time at which the document was created.
                         *
                         * This value increases monotonically when a document is deleted then
                         * recreated. It can also be compared to values from other documents and
                         * the `read_time` of a query.
                         */
                        createTime?: string;
                        /**
                         * The time at which the document was last changed.
                         *
                         * This value is initially set to the `create_time` then increases
                         * monotonically with each change to the document. It can also be
                         * compared to values from other documents and the `read_time` of a query.
                         */
                        updateTime?: string;
                    }
                    /**
                     * A message that can hold any of the supported value types.
                     */
                    interface Value {
                        /**
                         * A null value.
                         */
                        nullValue?: null;
                        /**
                         * A boolean value.
                         */
                        booleanValue?: boolean;
                        /**
                         * An integer value.
                         */
                        integerValue?: number;
                        /**
                         * A double value.
                         */
                        doubleValue?: number;
                        /**
                         * A timestamp value.
                         *
                         * Precise only to microseconds. When stored, any additional precision is
                         * rounded down.
                         */
                        timestampValue?: string;
                        /**
                         * A string value.
                         *
                         * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
                         * Only the first 1,500 bytes of the UTF-8 representation are considered by
                         * queries.
                         */
                        stringValue?: string;
                        /**
                         * A bytes value.
                         *
                         * Must not exceed 1 MiB - 89 bytes.
                         * Only the first 1,500 bytes are considered by queries.
                         */
                        bytesValue?: string;
                        /**
                         * A reference to a document. For example:
                         * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
                         */
                        referenceValue?: string;
                        /**
                         * A geo point value representing a point on the surface of Earth.
                         */
                        geoPointValue?: any;
                        /**
                         * An array value.
                         *
                         * Cannot directly contain another array value, though can contain an
                         * map which contains another array.
                         */
                        arrayValue?: ArrayValue;
                        /**
                         * A map value.
                         */
                        mapValue?: MapValue;
                    }
                    /**
                     * An array value.
                     */
                    interface ArrayValue {
                        /**
                         * Values in the array.
                         */
                        values?: Value[];
                    }
                    /**
                     * A map value.
                     */
                    interface MapValue {
                        /**
                         * The map's fields.
                         *
                         * The map keys represent field names. Field names matching the regular
                         * expression `__.*__` are reserved. Reserved field names are forbidden except
                         * in certain documented contexts. The map keys, represented as UTF-8, must
                         * not exceed 1,500 bytes and cannot be empty.
                         */
                        fields?: Record<string, Value>;
                    }
                }
            }
            namespace cloudbuild {
                namespace v1 {
                    /**
                     * The CloudEvent raised when your build's state changes.
                     */
                    interface CloudBuildEvent extends CloudEvent<google.events.cloud.cloudbuild.v1.BuildEventData> {
                        type: 'google.cloud.cloudbuild.build.v1.statusChanged' | string;
                    }
                    /**
                     * Build event data for Google Cloud Platform API operations.
                     */
                    interface BuildEventData {
                        /**
                         * Unique identifier of the build.
                         */
                        id?: string;
                        /**
                         * ID of the project.
                         */
                        projectId?: string;
                        /**
                         * Status of the build.
                         */
                        status?: BuildEventData.Status;
                        /**
                         * Customer-readable message about the current status.
                         */
                        statusDetail?: string;
                        /**
                         * The location of the source files to build.
                         */
                        source?: Source;
                        /**
                         * The operations to be performed on the workspace.
                         */
                        steps?: BuildStep[];
                        /**
                         * Results of the build.
                         */
                        results?: Results;
                        /**
                         * Time at which the request to create the build was received.
                         */
                        createTime?: string;
                        /**
                         * Time at which execution of the build was started.
                         */
                        startTime?: string;
                        /**
                         * Time at which execution of the build was finished.
                         *
                         * The difference between finish_time and start_time is the duration of the
                         * build's execution.
                         */
                        finishTime?: string;
                        /**
                         * Amount of time that this build should be allowed to run, to second
                         * granularity. If this amount of time elapses, work on the build will cease
                         * and the build status will be `TIMEOUT`.
                         */
                        timeout?: string;
                        /**
                         * A list of images to be pushed upon the successful completion of all build
                         * steps.
                         *
                         * The images are pushed using the builder service account's credentials.
                         *
                         * The digests of the pushed images will be stored in the `Build` resource's
                         * results field.
                         *
                         * If any of the images fail to be pushed, the build status is marked
                         * `FAILURE`.
                         */
                        images?: string[];
                        /**
                         * TTL in queue for this build. If provided and the build is enqueued longer
                         * than this value, the build will expire and the build status will be
                         * `EXPIRED`.
                         *
                         * The TTL starts ticking from create_time.
                         */
                        queueTtl?: string;
                        /**
                         * Artifacts produced by the build that should be uploaded upon
                         * successful completion of all build steps.
                         */
                        artifacts?: Artifacts;
                        /**
                         * Google Cloud Storage bucket where logs should be written (see
                         * [Bucket Name
                         * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
                         * Logs file names will be of the format `${logs_bucket}/log-${build_id}.txt`.
                         */
                        logsBucket?: string;
                        /**
                         * A permanent fixed identifier for source.
                         */
                        sourceProvenance?: SourceProvenance;
                        /**
                         * The ID of the `BuildTrigger` that triggered this build, if it
                         * was triggered automatically.
                         */
                        buildTriggerId?: string;
                        /**
                         * Special options for this build.
                         */
                        options?: BuildOptions;
                        /**
                         * URL to logs for this build in Google Cloud Console.
                         */
                        logUrl?: string;
                        /**
                         * Substitutions data for `Build` resource.
                         */
                        substitutions?: Record<string, string>;
                        /**
                         * Tags for annotation of a `Build`. These are not docker tags.
                         */
                        tags?: string[];
                        /**
                         * Secrets to decrypt using Cloud Key Management Service.
                         */
                        secrets?: Secret[];
                        /**
                         * Stores timing information for phases of the build. Valid keys
                         * are:
                         *
                         * * BUILD: time to execute all build steps
                         * * PUSH: time to push all specified images.
                         * * FETCHSOURCE: time to fetch source.
                         *
                         * If the build does not specify source or images,
                         * these keys will not be included.
                         */
                        timing?: Record<string, TimeSpan>;
                    }
                    namespace BuildEventData {
                        /**
                         * Possible status of a build or build step.
                         */
                        enum Status {
                            STATUS_UNKNOWN = 0,
                            QUEUED = 1,
                            WORKING = 2,
                            SUCCESS = 3,
                            FAILURE = 4,
                            INTERNAL_ERROR = 5,
                            TIMEOUT = 6,
                            CANCELLED = 7,
                            EXPIRED = 9
                        }
                    }
                    interface Source {
                        /**
                         * If provided, get the source from this location in Google Cloud Storage.
                         */
                        storageSource?: StorageSource;
                        /**
                         * If provided, get the source from this location in a Cloud Source
                         * Repository.
                         */
                        repoSource?: RepoSource;
                    }
                    /**
                     * Location of the source in an archive file in Google Cloud Storage.
                     */
                    interface StorageSource {
                        /**
                         * Google Cloud Storage bucket containing the source (see
                         * [Bucket Name
                         * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
                         */
                        bucket?: string;
                        /**
                         * Google Cloud Storage object containing the source.
                         */
                        object?: string;
                        /**
                         * Google Cloud Storage generation for the object. If the generation is
                         * omitted, the latest generation will be used.
                         */
                        generation?: number;
                    }
                    /**
                     * Location of the source in a Google Cloud Source Repository.
                     */
                    interface RepoSource {
                        /**
                         * ID of the project that owns the Cloud Source Repository.
                         */
                        projectId?: string;
                        /**
                         * Name of the Cloud Source Repository.
                         */
                        repoName?: string;
                        /**
                         * Regex matching branches to build.
                         *
                         * The syntax of the regular expressions accepted is the syntax accepted by
                         * RE2 and described at https://github.com/google/re2/wiki/Syntax
                         */
                        branchName?: string;
                        /**
                         * Regex matching tags to build.
                         *
                         * The syntax of the regular expressions accepted is the syntax accepted by
                         * RE2 and described at https://github.com/google/re2/wiki/Syntax
                         */
                        tagName?: string;
                        /**
                         * Explicit commit SHA to build.
                         */
                        commitSha?: string;
                        /**
                         * Directory, relative to the source root, in which to run the build.
                         *
                         * This must be a relative path. If a step's `dir` is specified and is an
                         * absolute path, this value is ignored for that step's execution.
                         */
                        dir?: string;
                        /**
                         * Only trigger a build if the revision regex does NOT match the revision
                         * regex.
                         */
                        invertRegex?: boolean;
                        /**
                         * Substitutions to use in a triggered build.
                         * Should only be used with RunBuildTrigger
                         */
                        substitutions?: Record<string, string>;
                    }
                    /**
                     * A step in the build pipeline.
                     */
                    interface BuildStep {
                        /**
                         * The name of the container image that will run this particular
                         * build step.
                         *
                         * If the image is available in the host's Docker daemon's cache, it
                         * will be run directly. If not, the host will attempt to pull the image
                         * first, using the builder service account's credentials if necessary.
                         *
                         * The Docker daemon's cache will already have the latest versions of all of
                         * the officially supported build steps
                         * ([https://github.com/GoogleCloudPlatform/cloud-builders](https://github.com/GoogleCloudPlatform/cloud-builders)).
                         * The Docker daemon will also have cached many of the layers for some popular
                         * images, like "ubuntu", "debian", but they will be refreshed at the time you
                         * attempt to use them.
                         *
                         * If you built an image in a previous build step, it will be stored in the
                         * host's Docker daemon's cache and is available to use as the name for a
                         * later build step.
                         */
                        name?: string;
                        /**
                         * A list of environment variable definitions to be used when running a step.
                         *
                         * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
                         * being given the value "VALUE".
                         */
                        env?: string[];
                        /**
                         * A list of arguments that will be presented to the step when it is started.
                         *
                         * If the image used to run the step's container has an entrypoint, the `args`
                         * are used as arguments to that entrypoint. If the image does not define
                         * an entrypoint, the first element in args is used as the entrypoint,
                         * and the remainder will be used as arguments.
                         */
                        args?: string[];
                        /**
                         * Working directory to use when running this step's container.
                         *
                         * If this value is a relative path, it is relative to the build's working
                         * directory. If this value is absolute, it may be outside the build's working
                         * directory, in which case the contents of the path may not be persisted
                         * across build step executions, unless a `volume` for that path is specified.
                         *
                         * If the build specifies a `RepoSource` with `dir` and a step with a `dir`,
                         * which specifies an absolute path, the `RepoSource` `dir` is ignored for
                         * the step's execution.
                         */
                        dir?: string;
                        /**
                         * Unique identifier for this build step, used in `wait_for` to
                         * reference this build step as a dependency.
                         */
                        id?: string;
                        /**
                         * The ID(s) of the step(s) that this build step depends on.
                         * This build step will not start until all the build steps in `wait_for`
                         * have completed successfully. If `wait_for` is empty, this build step will
                         * start when all previous build steps in the `Build.Steps` list have
                         * completed successfully.
                         */
                        waitFor?: string[];
                        /**
                         * Entrypoint to be used instead of the build step image's default entrypoint.
                         * If unset, the image's default entrypoint is used.
                         */
                        entrypoint?: string;
                        /**
                         * A list of environment variables which are encrypted using a Cloud Key
                         * Management Service crypto key. These values must be specified in the
                         * build's `Secret`.
                         */
                        secretEnv?: string[];
                        /**
                         * List of volumes to mount into the build step.
                         *
                         * Each volume is created as an empty volume prior to execution of the
                         * build step. Upon completion of the build, volumes and their contents are
                         * discarded.
                         *
                         * Using a named volume in only one step is not valid as it is indicative
                         * of a build request with an incorrect configuration.
                         */
                        volumes?: Volume[];
                        /**
                         * Stores timing information for executing this build step.
                         */
                        timing?: TimeSpan;
                        /**
                         * Stores timing information for pulling this build step's
                         * builder image only.
                         */
                        pullTiming?: TimeSpan;
                        /**
                         * Time limit for executing this build step. If not defined, the step has no
                         * time limit and will be allowed to continue to run until either it completes
                         * or the build itself times out.
                         */
                        timeout?: string;
                        /**
                         * Status of the build step. At this time, build step status is
                         * only updated on build completion; step status is not updated in real-time
                         * as the build progresses.
                         */
                        status?: any;
                    }
                    /**
                     * Volume describes a Docker container volume which is mounted into build steps
                     * in order to persist files across build step execution.
                     */
                    interface Volume {
                        /**
                         * Name of the volume to mount.
                         *
                         * Volume names must be unique per build step and must be valid names for
                         * Docker volumes. Each named volume must be used by at least two build steps.
                         */
                        name?: string;
                        /**
                         * Path at which to mount the volume.
                         *
                         * Paths must be absolute and cannot conflict with other volume paths on the
                         * same build step or with certain reserved volume paths.
                         */
                        path?: string;
                    }
                    /**
                     * Artifacts created by the build pipeline.
                     */
                    interface Results {
                        /**
                         * Container images that were built as a part of the build.
                         */
                        images?: BuiltImage[];
                        /**
                         * List of build step digests, in the order corresponding to build step
                         * indices.
                         */
                        buildStepImages?: string[];
                        /**
                         * Path to the artifact manifest. Only populated when artifacts are uploaded.
                         */
                        artifactManifest?: string;
                        /**
                         * Number of artifacts uploaded. Only populated when artifacts are uploaded.
                         */
                        numArtifacts?: number;
                        /**
                         * List of build step outputs, produced by builder images, in the order
                         * corresponding to build step indices.
                         *
                         * [Cloud Builders](https://cloud.google.com/cloud-build/docs/cloud-builders)
                         * can produce this output by writing to `$BUILDER_OUTPUT/output`.
                         * Only the first 4KB of data is stored.
                         */
                        buildStepOutputs?: string[];
                        /**
                         * Time to push all non-container artifacts.
                         */
                        artifactTiming?: TimeSpan;
                    }
                    /**
                     * An image built by the pipeline.
                     */
                    interface BuiltImage {
                        /**
                         * Name used to push the container image to Google Container Registry, as
                         * presented to `docker push`.
                         */
                        name?: string;
                        /**
                         * Docker Registry 2.0 digest.
                         */
                        digest?: string;
                        /**
                         * Stores timing information for pushing the specified image.
                         */
                        pushTiming?: TimeSpan;
                    }
                    /**
                     * Artifacts produced by a build that should be uploaded upon
                     * successful completion of all build steps.
                     */
                    interface Artifacts {
                        /**
                         * A list of images to be pushed upon the successful completion of all build
                         * steps.
                         *
                         * The images will be pushed using the builder service account's credentials.
                         *
                         * The digests of the pushed images will be stored in the Build resource's
                         * results field.
                         *
                         * If any of the images fail to be pushed, the build is marked FAILURE.
                         */
                        images?: string[];
                        /**
                         * A list of objects to be uploaded to Cloud Storage upon successful
                         * completion of all build steps.
                         *
                         * Files in the workspace matching specified paths globs will be uploaded to
                         * the specified Cloud Storage location using the builder service account's
                         * credentials.
                         *
                         * The location and generation of the uploaded objects will be stored in the
                         * Build resource's results field.
                         *
                         * If any objects fail to be pushed, the build is marked FAILURE.
                         */
                        objects?: Artifacts.ArtifactObjects;
                    }
                    namespace Artifacts {
                        /**
                         * Files in the workspace to upload to Cloud Storage upon successful
                         * completion of all build steps.
                         */
                        interface ArtifactObjects {
                            /**
                             * Cloud Storage bucket and optional object path, in the form
                             * "gs://bucket/path/to/somewhere/". (see [Bucket Name
                             * Requirements](https://cloud.google.com/storage/docs/bucket-naming#requirements)).
                             *
                             * Files in the workspace matching any path pattern will be uploaded to
                             * Cloud Storage with this location as a prefix.
                             */
                            location?: string;
                            /**
                             * Path globs used to match files in the build's workspace.
                             */
                            paths?: string[];
                            /**
                             * Stores timing information for pushing all artifact objects.
                             */
                            timing?: any;
                        }
                    }
                    /**
                     * Start and end times for a build execution phase.
                     */
                    interface TimeSpan {
                        /**
                         * Start of time span.
                         */
                        startTime?: string;
                        /**
                         * End of time span.
                         */
                        endTime?: string;
                    }
                    /**
                     * Provenance of the source. Ways to find the original source, or verify that
                     * some source was used for this build.
                     */
                    interface SourceProvenance {
                        /**
                         * A copy of the build's `source.storage_source`, if exists, with any
                         * generations resolved.
                         */
                        resolvedStorageSource?: StorageSource;
                        /**
                         * A copy of the build's `source.repo_source`, if exists, with any
                         * revisions resolved.
                         */
                        resolvedRepoSource?: RepoSource;
                        /**
                         * Hash(es) of the build source, which can be used to verify that
                         * the original source integrity was maintained in the build. Note that
                         * `FileHashes` will only be populated if `BuildOptions` has requested a
                         * `SourceProvenanceHash`.
                         *
                         * The keys to this map are file paths used as build source and the values
                         * contain the hash values for those files.
                         *
                         * If the build source came in a single package such as a gzipped tarfile
                         * (`.tar.gz`), the `FileHash` will be for the single path to that file.
                         */
                        fileHashes?: Record<string, FileHashes>;
                    }
                    /**
                     * Container message for hashes of byte content of files, used in
                     * SourceProvenance messages to verify integrity of source input to the build.
                     */
                    interface FileHashes {
                        /**
                         * Collection of file hashes.
                         */
                        fileHash?: Hash[];
                    }
                    /**
                     * Container message for hash values.
                     */
                    interface Hash {
                        /**
                         * The type of hash that was performed.
                         */
                        type?: Hash.HashType;
                        /**
                         * The hash value.
                         */
                        value?: string;
                    }
                    namespace Hash {
                        /**
                         * Specifies the hash algorithm, if any.
                         */
                        enum HashType {
                            NONE = 0,
                            SHA256 = 1,
                            MD5 = 2
                        }
                    }
                    /**
                     * Pairs a set of secret environment variables containing encrypted
                     * values with the Cloud KMS key to use to decrypt the value.
                     */
                    interface Secret {
                        /**
                         * Cloud KMS key name to use to decrypt these envs.
                         */
                        kmsKeyName?: string;
                        /**
                         * Map of environment variable name to its encrypted value.
                         *
                         * Secret environment variables must be unique across all of a build's
                         * secrets, and must be used by at least one build step. Values can be at most
                         * 64 KB in size. There can be at most 100 secret values across all of a
                         * build's secrets.
                         */
                        secretEnv?: Record<string, string>;
                    }
                    /**
                     * Optional arguments to enable specific features of builds.
                     */
                    interface BuildOptions {
                        /**
                         * Requested hash for SourceProvenance.
                         */
                        sourceProvenanceHash?: string[];
                        /**
                         * Requested verifiability options.
                         */
                        requestedVerifyOption?: BuildOptions.VerifyOption;
                        /**
                         * Compute Engine machine type on which to run the build.
                         */
                        machineType?: BuildOptions.MachineType;
                        /**
                         * Requested disk size for the VM that runs the build. Note that this is *NOT*
                         * "disk free"; some of the space will be used by the operating system and
                         * build utilities. Also note that this is the minimum disk size that will be
                         * allocated for the build -- the build may run with a larger disk than
                         * requested. At present, the maximum disk size is 1000GB; builds that request
                         * more than the maximum are rejected with an error.
                         */
                        diskSizeGb?: number;
                        /**
                         * Option to specify behavior when there is an error in the substitution
                         * checks.
                         */
                        substitutionOption?: BuildOptions.SubstitutionOption;
                        /**
                         * Option to define build log streaming behavior to Google Cloud
                         * Storage.
                         */
                        logStreamingOption?: BuildOptions.LogStreamingOption;
                        /**
                         * Option to specify a `WorkerPool` for the build.
                         * Format: projects/{project}/locations/{location}/workerPools/{workerPool}
                         */
                        workerPool?: string;
                        /**
                         * Option to specify the logging mode, which determines where the logs are
                         * stored.
                         */
                        logging?: BuildOptions.LoggingMode;
                        /**
                         * A list of global environment variable definitions that will exist for all
                         * build steps in this build. If a variable is defined in both globally and in
                         * a build step, the variable will use the build step value.
                         *
                         * The elements are of the form "KEY=VALUE" for the environment variable "KEY"
                         * being given the value "VALUE".
                         */
                        env?: string[];
                        /**
                         * A list of global environment variables, which are encrypted using a Cloud
                         * Key Management Service crypto key. These values must be specified in the
                         * build's `Secret`. These variables will be available to all build steps
                         * in this build.
                         */
                        secretEnv?: string[];
                        /**
                         * Global list of volumes to mount for ALL build steps
                         *
                         * Each volume is created as an empty volume prior to starting the build
                         * process. Upon completion of the build, volumes and their contents are
                         * discarded. Global volume names and paths cannot conflict with the volumes
                         * defined a build step.
                         *
                         * Using a global volume in a build with only one step is not valid as
                         * it is indicative of a build request with an incorrect configuration.
                         */
                        volumes?: Volume[];
                    }
                    namespace BuildOptions {
                        /**
                         * Specifies the manner in which the build should be verified, if at all.
                         */
                        enum VerifyOption {
                            NOT_VERIFIED = 0,
                            VERIFIED = 1
                        }
                        /**
                         * Supported VM sizes.
                         */
                        enum MachineType {
                            UNSPECIFIED = 0,
                            N1_HIGHCPU_8 = 1,
                            N1_HIGHCPU_32 = 2
                        }
                        /**
                         * Specifies the behavior when there is an error in the substitution checks.
                         */
                        enum SubstitutionOption {
                            MUST_MATCH = 0,
                            ALLOW_LOOSE = 1
                        }
                        /**
                         * Specifies the behavior when writing build logs to Google Cloud Storage.
                         */
                        enum LogStreamingOption {
                            STREAM_DEFAULT = 0,
                            STREAM_ON = 1,
                            STREAM_OFF = 2
                        }
                        /**
                         * Specifies the logging mode.
                         */
                        enum LoggingMode {
                            LOGGING_UNSPECIFIED = 0,
                            LEGACY = 1,
                            GCS_ONLY = 2
                        }
                    }
                }
            }
            namespace audit {
                namespace v1 {
                    /**
                     * The CloudEvent raised when an audit log entry is written.
                     */
                    interface AuditLogWrittenEvent extends CloudEvent<google.events.cloud.audit.v1.LogEntryData> {
                        type: 'google.cloud.audit.log.v1.written' | string;
                    }
                    /**
                     * The data within all Cloud Audit Logs log entry events.
                     */
                    interface LogEntryData {
                        /**
                         * The resource name of the log to which this log entry belongs.
                         */
                        logName?: string;
                        /**
                         * The monitored resource that produced this log entry.
                         *
                         * Example: a log entry that reports a database error would be associated with
                         * the monitored resource designating the particular database that reported
                         * the error.
                         */
                        resource?: any;
                        /**
                         * The log entry payload, which is always an AuditLog for Cloud Audit Log
                         * events.
                         */
                        protoPayload?: AuditLog;
                        /**
                         * A unique identifier for the log entry.
                         */
                        insertId?: string;
                        /**
                         * A set of user-defined (key, value) data that provides additional
                         * information about the log entry.
                         */
                        labels?: Record<string, string>;
                        /**
                         * Information about an operation associated with the log entry, if
                         * applicable.
                         */
                        operation?: LogEntryOperation;
                        /**
                         * The time the event described by the log entry occurred.
                         */
                        timestamp?: string;
                        /**
                         * The time the log entry was received by Logging.
                         */
                        receiveTimestamp?: string;
                        /**
                         * The severity of the log entry.
                         */
                        severity?: LogSeverity;
                        /**
                         * Resource name of the trace associated with the log entry, if any. If it
                         * contains a relative resource name, the name is assumed to be relative to
                         * `//tracing.googleapis.com`. Example:
                         * `projects/my-projectid/traces/06796866738c859f2f19b7cfb3214824`
                         */
                        trace?: string;
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
                        split?: LogSplit;
                    }
                    /**
                     * Additional information about a potentially long-running operation with which
                     * a log entry is associated.
                     */
                    interface LogEntryOperation {
                        /**
                         * An arbitrary operation identifier. Log entries with the same
                         * identifier are assumed to be part of the same operation.
                         */
                        id?: string;
                        /**
                         * An arbitrary producer identifier. The combination of `id` and
                         * `producer` must be globally unique. Examples for `producer`:
                         * `"MyDivision.MyBigCompany.com"`, `"github.com/MyProject/MyApplication"`.
                         */
                        producer?: string;
                        /**
                         * True if this is the first log entry in the operation.
                         */
                        first?: boolean;
                        /**
                         * True if this is the last log entry in the operation.
                         */
                        last?: boolean;
                    }
                    /**
                     * The severity of the event described in a log entry, expressed as one of the
                     * standard severity levels listed below.  For your reference, the levels are
                     * assigned the listed numeric values. The effect of using numeric values other
                     * than those listed is undefined.
                     * Copied from
                     * https://github.com/googleapis/googleapis/blob/master/google/logging/type/log_severity.proto
                     */
                    enum LogSeverity {
                        DEFAULT = 0,
                        DEBUG = 100,
                        INFO = 200,
                        NOTICE = 300,
                        WARNING = 400,
                        ERROR = 500,
                        CRITICAL = 600,
                        ALERT = 700,
                        EMERGENCY = 800
                    }
                    /**
                     * Common audit log format for Google Cloud Platform API operations.
                     * Copied from
                     * https://github.com/googleapis/googleapis/blob/master/google/cloud/audit/audit_log.proto,
                     * but changing service_data from Any to Struct.
                     */
                    interface AuditLog {
                        /**
                         * The name of the API service performing the operation. For example,
                         * `"datastore.googleapis.com"`.
                         */
                        serviceName?: string;
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
                         * The resource or collection that is the target of the operation.
                         * The name is a scheme-less URI, not including the API service name.
                         * For example:
                         *
                         * "shelves/SHELF_ID/books"
                         * "shelves/SHELF_ID/books/BOOK_ID"
                         */
                        resourceName?: string;
                        /**
                         * The resource location information.
                         */
                        resourceLocation?: ResourceLocation;
                        /**
                         * The resource's original state before mutation. Present only for
                         * operations which have successfully modified the targeted resource(s).
                         * In general, this field should contain all changed fields, except those
                         * that are already been included in `request`, `response`, `metadata` or
                         * `service_data` fields.
                         * When the JSON object represented here has a proto equivalent,
                         * the proto name will be indicated in the `@type` property.
                         */
                        resourceOriginalState?: Record<string, any>;
                        /**
                         * The number of items returned from a List or Query API method,
                         * if applicable.
                         */
                        numResponseItems?: number;
                        /**
                         * The status of the overall operation.
                         */
                        status?: any;
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
                         * Metadata about the operation.
                         */
                        requestMetadata?: RequestMetadata;
                        /**
                         * The operation request. This may not include all request parameters,
                         * such as those that are too large, privacy-sensitive, or duplicated
                         * elsewhere in the log record.
                         * It should never include user-generated data, such as file contents.
                         * When the JSON object represented here has a proto equivalent, the proto
                         * name will be indicated in the `@type` property.
                         */
                        request?: Record<string, any>;
                        /**
                         * The operation response. This may not include all response elements,
                         * such as those that are too large, privacy-sensitive, or duplicated
                         * elsewhere in the log record.
                         * It should never include user-generated data, such as file contents.
                         * When the JSON object represented here has a proto equivalent, the proto
                         * name will be indicated in the `@type` property.
                         */
                        response?: Record<string, any>;
                        /**
                         * Other service-specific data about the request, response, and other
                         * information associated with the current audited event.
                         */
                        metadata?: Record<string, any>;
                        /**
                         * Deprecated: Use `metadata` field instead.
                         * Other service-specific data about the request, response, and other
                         * activities.
                         * When the JSON object represented here has a proto equivalent, the proto
                         * name will be indicated in the `@type` property.
                         */
                        serviceData?: Record<string, any>;
                    }
                    /**
                     * Authentication information for the operation.
                     */
                    interface AuthenticationInfo {
                        /**
                         * The email address of the authenticated user (or service account on behalf
                         * of third party principal) making the request. For third party identity
                         * callers, the `principal_subject` field is populated instead of this field.
                         * For privacy reasons, the principal email address is sometimes redacted.
                         * For more information, see [Caller identities in audit
                         * logs](https://cloud.google.com/logging/docs/audit#user-id).
                         */
                        principalEmail?: string;
                        /**
                         * The authority selector specified by the requestor, if any.
                         * It is not guaranteed that the principal was allowed to use this authority.
                         */
                        authoritySelector?: string;
                        /**
                         * The third party identification (if any) of the authenticated user making
                         * the request.
                         * When the JSON object represented here has a proto equivalent, the proto
                         * name will be indicated in the `@type` property.
                         */
                        thirdPartyPrincipal?: Record<string, any>;
                        /**
                         * The name of the service account key used to create or exchange
                         * credentials for authenticating the service account making the request.
                         * This is a scheme-less URI full resource name. For example:
                         *
                         * "//iam.googleapis.com/projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{key}"
                         */
                        serviceAccountKeyName?: string;
                        /**
                         * Identity delegation history of an authenticated service account that makes
                         * the request. It contains information on the real authorities that try to
                         * access GCP resources by delegating on a service account. When multiple
                         * authorities present, they are guaranteed to be sorted based on the original
                         * ordering of the identity delegation events.
                         */
                        serviceAccountDelegationInfo?: ServiceAccountDelegationInfo[];
                        /**
                         * String representation of identity of requesting party.
                         * Populated for both first and third party identities.
                         */
                        principalSubject?: string;
                    }
                    /**
                     * Authorization information for the operation.
                     */
                    interface AuthorizationInfo {
                        /**
                         * The resource being accessed, as a REST-style string. For example:
                         *
                         * bigquery.googleapis.com/projects/PROJECTID/datasets/DATASETID
                         */
                        resource?: string;
                        /**
                         * The required IAM permission.
                         */
                        permission?: string;
                        /**
                         * Whether or not authorization for `resource` and `permission`
                         * was granted.
                         */
                        granted?: boolean;
                        /**
                         * Resource attributes used in IAM condition evaluation. This field contains
                         * resource attributes like resource type and resource name.
                         *
                         * To get the whole view of the attributes used in IAM
                         * condition evaluation, the user must also look into
                         * `AuditLogData.request_metadata.request_attributes`.
                         */
                        resourceAttributes?: any;
                    }
                    /**
                     * Metadata about the request.
                     */
                    interface RequestMetadata {
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
                         * Request attributes used in IAM condition evaluation. This field contains
                         * request attributes like request time and access levels associated with
                         * the request.
                         *
                         *
                         * To get the whole view of the attributes used in IAM
                         * condition evaluation, the user must also look into
                         * `AuditLog.authentication_info.resource_attributes`.
                         */
                        requestAttributes?: any;
                        /**
                         * The destination of a network activity, such as accepting a TCP connection.
                         * In a multi hop network activity, the destination represents the receiver of
                         * the last hop. Only two fields are used in this message, Peer.port and
                         * Peer.ip. These fields are optionally populated by those services utilizing
                         * the IAM condition feature.
                         */
                        destinationAttributes?: any;
                    }
                    /**
                     * Location information about a resource.
                     */
                    interface ResourceLocation {
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
                     * Identity delegation history of an authenticated service account.
                     */
                    interface ServiceAccountDelegationInfo {
                        /**
                         * First party (Google) identity as the real authority.
                         */
                        firstPartyPrincipal?: ServiceAccountDelegationInfo.FirstPartyPrincipal;
                        /**
                         * Third party identity as the real authority.
                         */
                        thirdPartyPrincipal?: ServiceAccountDelegationInfo.ThirdPartyPrincipal;
                    }
                    namespace ServiceAccountDelegationInfo {
                        /**
                         * First party identity principal.
                         */
                        interface FirstPartyPrincipal {
                            /**
                             * The email address of a Google account.
                             */
                            principalEmail?: string;
                            /**
                             * Metadata about the service that uses the service account.
                             */
                            serviceMetadata?: Record<string, any>;
                        }
                        /**
                         * Third party identity principal.
                         */
                        interface ThirdPartyPrincipal {
                            /**
                             * Metadata about third party identity.
                             */
                            thirdPartyClaims?: Record<string, any>;
                        }
                    }
                    /**
                     * Additional information used to correlate multiple LogEntries. Used when a
                     * single LogEntry would exceed the Google Cloud Logging size limit and is split
                     * across multiple entries.
                     */
                    interface LogSplit {
                        /**
                         * A globally unique identifier for all LogEntries in a sequence of split
                         * logs. All LogEntries with the same |LogSplit.uid| are assumed to be part of
                         * the same sequence of split logs.
                         */
                        uid?: string;
                        /**
                         * The index of this LogEntry in the sequence of split logs. LogEntries are
                         * given |index| values 0, 1, ..., n-1 for a sequence of n entries.
                         */
                        index?: number;
                        /**
                         * The total number of logs that the original LogEntry was split into.
                         */
                        totalSplits?: number;
                    }
                }
            }
        }
    }
}
/**
 * A mapped type that defines which CloudEvent types correspond to which data
 * payload schemas. This is an internal implementation detail of the @google/events
 * library, it is not exposed in the public API.
 *
 * @see https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
 */
export declare type GoogleCloudEventTypesToDataType = {
    'google.firebase.testlab.testMatrix.v1.completed': google.events.firebase.testlab.v1.TestMatrixEventData;
    'google.firebase.remoteconfig.remoteConfig.v1.updated': google.events.firebase.remoteconfig.v1.RemoteConfigEventData;
    'google.firebase.firebasealerts.alerts.v1.published': google.events.firebase.firebasealerts.v1.AlertData;
    'google.firebase.database.ref.v1.created': google.events.firebase.database.v1.ReferenceEventData;
    'google.firebase.database.ref.v1.updated': google.events.firebase.database.v1.ReferenceEventData;
    'google.firebase.database.ref.v1.deleted': google.events.firebase.database.v1.ReferenceEventData;
    'google.firebase.database.ref.v1.written': google.events.firebase.database.v1.ReferenceEventData;
    'google.firebase.auth.user.v1.created': google.events.firebase.auth.v1.AuthEventData;
    'google.firebase.auth.user.v1.deleted': google.events.firebase.auth.v1.AuthEventData;
    'google.firebase.analytics.log.v1.written': google.events.firebase.analytics.v1.AnalyticsLogData;
    'google.cloud.storage.object.v1.finalized': google.events.cloud.storage.v1.StorageObjectData;
    'google.cloud.storage.object.v1.archived': google.events.cloud.storage.v1.StorageObjectData;
    'google.cloud.storage.object.v1.deleted': google.events.cloud.storage.v1.StorageObjectData;
    'google.cloud.storage.object.v1.metadataUpdated': google.events.cloud.storage.v1.StorageObjectData;
    'google.cloud.scheduler.job.v1.executed': google.events.cloud.scheduler.v1.SchedulerJobData;
    'google.cloud.pubsub.topic.v1.messagePublished': google.events.cloud.pubsub.v1.MessagePublishedData;
    'google.cloud.iot.v1.DeviceManager.CreateDevice': google.events.cloud.iot.v1.DeviceEventData;
    'google.cloud.iot.v1.DeviceManager.UpdateDevice': google.events.cloud.iot.v1.DeviceEventData;
    'google.cloud.iot.v1.DeviceManager.DeleteDevice': google.events.cloud.iot.v1.DeviceEventData;
    'google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry': google.events.cloud.iot.v1.RegistryEventData;
    'google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry': google.events.cloud.iot.v1.RegistryEventData;
    'google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry': google.events.cloud.iot.v1.RegistryEventData;
    'google.cloud.firestore.document.v1.created': google.events.cloud.firestore.v1.DocumentEventData;
    'google.cloud.firestore.document.v1.updated': google.events.cloud.firestore.v1.DocumentEventData;
    'google.cloud.firestore.document.v1.deleted': google.events.cloud.firestore.v1.DocumentEventData;
    'google.cloud.firestore.document.v1.written': google.events.cloud.firestore.v1.DocumentEventData;
    'google.cloud.cloudbuild.build.v1.statusChanged': google.events.cloud.cloudbuild.v1.BuildEventData;
    'google.cloud.audit.log.v1.written': google.events.cloud.audit.v1.LogEntryData;
};
/**
 * A GoogleCloudEvent is known CloudEvent type which a well defined data payload schema.
 */
export interface GoogleCloudEvent<T extends keyof GoogleCloudEventTypesToDataType> extends CloudEvent<GoogleCloudEventTypesToDataType[T]> {
}
/**
 * This interface is used to create the GoogleCloudEventsUnion type. Is it more rigid than
 * the GoogleCloudEvent above because it constrains the 'type' field a one of the known
 * Google event types. This is useful when working with the union type but can be too strict
 * when working with individual events because it prevents assignment from untyped CloudEvent
 * in Typescript.
 */
export interface GoogleCloudEventUnionType<T extends keyof GoogleCloudEventTypesToDataType> extends GoogleCloudEvent<T> {
    type: T;
}
/**
 * A union type of all known Google CloudEvents.
 *
 * see https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types
 * and https://www.typescriptlang.org/docs/handbook/2/narrowing.html#discriminated-unions
 */
export declare type GoogleCloudEventsUnion = GoogleCloudEventUnionType<'google.firebase.testlab.testMatrix.v1.completed'> | GoogleCloudEventUnionType<'google.firebase.remoteconfig.remoteConfig.v1.updated'> | GoogleCloudEventUnionType<'google.firebase.firebasealerts.alerts.v1.published'> | GoogleCloudEventUnionType<'google.firebase.database.ref.v1.created'> | GoogleCloudEventUnionType<'google.firebase.database.ref.v1.updated'> | GoogleCloudEventUnionType<'google.firebase.database.ref.v1.deleted'> | GoogleCloudEventUnionType<'google.firebase.database.ref.v1.written'> | GoogleCloudEventUnionType<'google.firebase.auth.user.v1.created'> | GoogleCloudEventUnionType<'google.firebase.auth.user.v1.deleted'> | GoogleCloudEventUnionType<'google.firebase.analytics.log.v1.written'> | GoogleCloudEventUnionType<'google.cloud.storage.object.v1.finalized'> | GoogleCloudEventUnionType<'google.cloud.storage.object.v1.archived'> | GoogleCloudEventUnionType<'google.cloud.storage.object.v1.deleted'> | GoogleCloudEventUnionType<'google.cloud.storage.object.v1.metadataUpdated'> | GoogleCloudEventUnionType<'google.cloud.scheduler.job.v1.executed'> | GoogleCloudEventUnionType<'google.cloud.pubsub.topic.v1.messagePublished'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.CreateDevice'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.UpdateDevice'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.DeleteDevice'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry'> | GoogleCloudEventUnionType<'google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry'> | GoogleCloudEventUnionType<'google.cloud.firestore.document.v1.created'> | GoogleCloudEventUnionType<'google.cloud.firestore.document.v1.updated'> | GoogleCloudEventUnionType<'google.cloud.firestore.document.v1.deleted'> | GoogleCloudEventUnionType<'google.cloud.firestore.document.v1.written'> | GoogleCloudEventUnionType<'google.cloud.cloudbuild.build.v1.statusChanged'> | GoogleCloudEventUnionType<'google.cloud.audit.log.v1.written'>;
/**
 * Keep a set of of all known GoogleCloudEvent types to be used in the type predicates
 * provided by this library.
 */
export declare const GoogleCloudEventTypes: Set<string>;
