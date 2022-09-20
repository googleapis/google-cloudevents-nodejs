"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GoogleCloudEventTypes = exports.google = void 0;
var google;
(function (google) {
    let events;
    (function (events) {
        let firebase;
        (function (firebase) {
            let testlab;
            (function (testlab) {
                let v1;
                (function (v1) {
                    /**
                     * Possible test states for a test matrix.
                     */
                    let TestState;
                    (function (TestState) {
                        TestState[TestState["TEST_STATE_UNSPECIFIED"] = 0] = "TEST_STATE_UNSPECIFIED";
                        TestState[TestState["VALIDATING"] = 1] = "VALIDATING";
                        TestState[TestState["PENDING"] = 2] = "PENDING";
                        TestState[TestState["FINISHED"] = 3] = "FINISHED";
                        TestState[TestState["ERROR"] = 4] = "ERROR";
                        TestState[TestState["INVALID"] = 5] = "INVALID";
                    })(TestState = v1.TestState || (v1.TestState = {}));
                    /**
                     * Outcome summary for a finished test matrix.
                     */
                    let OutcomeSummary;
                    (function (OutcomeSummary) {
                        OutcomeSummary[OutcomeSummary["OUTCOME_SUMMARY_UNSPECIFIED"] = 0] = "OUTCOME_SUMMARY_UNSPECIFIED";
                        OutcomeSummary[OutcomeSummary["SUCCESS"] = 1] = "SUCCESS";
                        OutcomeSummary[OutcomeSummary["FAILURE"] = 2] = "FAILURE";
                        OutcomeSummary[OutcomeSummary["INCONCLUSIVE"] = 3] = "INCONCLUSIVE";
                        OutcomeSummary[OutcomeSummary["SKIPPED"] = 4] = "SKIPPED";
                    })(OutcomeSummary = v1.OutcomeSummary || (v1.OutcomeSummary = {}));
                })(v1 = testlab.v1 || (testlab.v1 = {}));
            })(testlab = firebase.testlab || (firebase.testlab = {}));
            let remoteconfig;
            (function (remoteconfig) {
                let v1;
                (function (v1) {
                    /**
                     * What type of update was associated with the Remote Config template version.
                     */
                    let RemoteConfigUpdateOrigin;
                    (function (RemoteConfigUpdateOrigin) {
                        RemoteConfigUpdateOrigin[RemoteConfigUpdateOrigin["REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED"] = 0] = "REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED";
                        RemoteConfigUpdateOrigin[RemoteConfigUpdateOrigin["CONSOLE"] = 1] = "CONSOLE";
                        RemoteConfigUpdateOrigin[RemoteConfigUpdateOrigin["REST_API"] = 2] = "REST_API";
                        RemoteConfigUpdateOrigin[RemoteConfigUpdateOrigin["ADMIN_SDK_NODE"] = 3] = "ADMIN_SDK_NODE";
                    })(RemoteConfigUpdateOrigin = v1.RemoteConfigUpdateOrigin || (v1.RemoteConfigUpdateOrigin = {}));
                    /**
                     * Where the Remote Config update action originated.
                     */
                    let RemoteConfigUpdateType;
                    (function (RemoteConfigUpdateType) {
                        RemoteConfigUpdateType[RemoteConfigUpdateType["REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED"] = 0] = "REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED";
                        RemoteConfigUpdateType[RemoteConfigUpdateType["INCREMENTAL_UPDATE"] = 1] = "INCREMENTAL_UPDATE";
                        RemoteConfigUpdateType[RemoteConfigUpdateType["FORCED_UPDATE"] = 2] = "FORCED_UPDATE";
                        RemoteConfigUpdateType[RemoteConfigUpdateType["ROLLBACK"] = 3] = "ROLLBACK";
                    })(RemoteConfigUpdateType = v1.RemoteConfigUpdateType || (v1.RemoteConfigUpdateType = {}));
                })(v1 = remoteconfig.v1 || (remoteconfig.v1 = {}));
            })(remoteconfig = firebase.remoteconfig || (firebase.remoteconfig = {}));
        })(firebase = events.firebase || (events.firebase = {}));
        let cloud;
        (function (cloud) {
            let iot;
            (function (iot) {
                let v1;
                (function (v1) {
                    /**
                     * Indicates whether an MQTT connection is enabled or disabled. See the field
                     * description for details.
                     */
                    let MqttState;
                    (function (MqttState) {
                        MqttState[MqttState["MQTT_STATE_UNSPECIFIED"] = 0] = "MQTT_STATE_UNSPECIFIED";
                        MqttState[MqttState["MQTT_ENABLED"] = 1] = "MQTT_ENABLED";
                        MqttState[MqttState["MQTT_DISABLED"] = 2] = "MQTT_DISABLED";
                    })(MqttState = v1.MqttState || (v1.MqttState = {}));
                    /**
                     * Indicates whether DeviceService (HTTP) is enabled or disabled for the
                     * registry. See the field description for details.
                     */
                    let HttpState;
                    (function (HttpState) {
                        HttpState[HttpState["HTTP_STATE_UNSPECIFIED"] = 0] = "HTTP_STATE_UNSPECIFIED";
                        HttpState[HttpState["HTTP_ENABLED"] = 1] = "HTTP_ENABLED";
                        HttpState[HttpState["HTTP_DISABLED"] = 2] = "HTTP_DISABLED";
                    })(HttpState = v1.HttpState || (v1.HttpState = {}));
                    /**
                     * *Beta Feature**
                     *
                     * The logging verbosity for device activity. Specifies which events should be
                     * written to logs. For example, if the LogLevel is ERROR, only events that
                     * terminate in errors will be logged. LogLevel is inclusive; enabling INFO
                     * logging will also enable ERROR logging.
                     */
                    let LogLevel;
                    (function (LogLevel) {
                        LogLevel[LogLevel["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
                        LogLevel[LogLevel["NONE"] = 10] = "NONE";
                        LogLevel[LogLevel["ERROR"] = 20] = "ERROR";
                        LogLevel[LogLevel["INFO"] = 30] = "INFO";
                        LogLevel[LogLevel["DEBUG"] = 40] = "DEBUG";
                    })(LogLevel = v1.LogLevel || (v1.LogLevel = {}));
                    /**
                     * Gateway type.
                     */
                    let GatewayType;
                    (function (GatewayType) {
                        GatewayType[GatewayType["GATEWAY_TYPE_UNSPECIFIED"] = 0] = "GATEWAY_TYPE_UNSPECIFIED";
                        GatewayType[GatewayType["GATEWAY"] = 1] = "GATEWAY";
                        GatewayType[GatewayType["NON_GATEWAY"] = 2] = "NON_GATEWAY";
                    })(GatewayType = v1.GatewayType || (v1.GatewayType = {}));
                    /**
                     * The gateway authorization/authentication method. This setting determines how
                     * Cloud IoT Core authorizes/authenticate devices to access the gateway.
                     */
                    let GatewayAuthMethod;
                    (function (GatewayAuthMethod) {
                        GatewayAuthMethod[GatewayAuthMethod["GATEWAY_AUTH_METHOD_UNSPECIFIED"] = 0] = "GATEWAY_AUTH_METHOD_UNSPECIFIED";
                        GatewayAuthMethod[GatewayAuthMethod["ASSOCIATION_ONLY"] = 1] = "ASSOCIATION_ONLY";
                        GatewayAuthMethod[GatewayAuthMethod["DEVICE_AUTH_TOKEN_ONLY"] = 2] = "DEVICE_AUTH_TOKEN_ONLY";
                        GatewayAuthMethod[GatewayAuthMethod["ASSOCIATION_AND_DEVICE_AUTH_TOKEN"] = 3] = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN";
                    })(GatewayAuthMethod = v1.GatewayAuthMethod || (v1.GatewayAuthMethod = {}));
                    /**
                     * The supported formats for the public key.
                     */
                    let PublicKeyCertificateFormat;
                    (function (PublicKeyCertificateFormat) {
                        PublicKeyCertificateFormat[PublicKeyCertificateFormat["UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"] = 0] = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT";
                        PublicKeyCertificateFormat[PublicKeyCertificateFormat["X509_CERTIFICATE_PEM"] = 1] = "X509_CERTIFICATE_PEM";
                    })(PublicKeyCertificateFormat = v1.PublicKeyCertificateFormat || (v1.PublicKeyCertificateFormat = {}));
                    /**
                     * The supported formats for the public key.
                     */
                    let PublicKeyFormat;
                    (function (PublicKeyFormat) {
                        PublicKeyFormat[PublicKeyFormat["UNSPECIFIED_PUBLIC_KEY_FORMAT"] = 0] = "UNSPECIFIED_PUBLIC_KEY_FORMAT";
                        PublicKeyFormat[PublicKeyFormat["RSA_PEM"] = 3] = "RSA_PEM";
                        PublicKeyFormat[PublicKeyFormat["RSA_X509_PEM"] = 1] = "RSA_X509_PEM";
                        PublicKeyFormat[PublicKeyFormat["ES256_PEM"] = 2] = "ES256_PEM";
                        PublicKeyFormat[PublicKeyFormat["ES256_X509_PEM"] = 4] = "ES256_X509_PEM";
                    })(PublicKeyFormat = v1.PublicKeyFormat || (v1.PublicKeyFormat = {}));
                })(v1 = iot.v1 || (iot.v1 = {}));
            })(iot = cloud.iot || (cloud.iot = {}));
            let cloudbuild;
            (function (cloudbuild) {
                let v1;
                (function (v1) {
                    let BuildEventData;
                    (function (BuildEventData) {
                        /**
                         * Possible status of a build or build step.
                         */
                        let Status;
                        (function (Status) {
                            Status[Status["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
                            Status[Status["QUEUED"] = 1] = "QUEUED";
                            Status[Status["WORKING"] = 2] = "WORKING";
                            Status[Status["SUCCESS"] = 3] = "SUCCESS";
                            Status[Status["FAILURE"] = 4] = "FAILURE";
                            Status[Status["INTERNAL_ERROR"] = 5] = "INTERNAL_ERROR";
                            Status[Status["TIMEOUT"] = 6] = "TIMEOUT";
                            Status[Status["CANCELLED"] = 7] = "CANCELLED";
                            Status[Status["EXPIRED"] = 9] = "EXPIRED";
                        })(Status = BuildEventData.Status || (BuildEventData.Status = {}));
                    })(BuildEventData = v1.BuildEventData || (v1.BuildEventData = {}));
                    let Hash;
                    (function (Hash) {
                        /**
                         * Specifies the hash algorithm, if any.
                         */
                        let HashType;
                        (function (HashType) {
                            HashType[HashType["NONE"] = 0] = "NONE";
                            HashType[HashType["SHA256"] = 1] = "SHA256";
                            HashType[HashType["MD5"] = 2] = "MD5";
                        })(HashType = Hash.HashType || (Hash.HashType = {}));
                    })(Hash = v1.Hash || (v1.Hash = {}));
                    let BuildOptions;
                    (function (BuildOptions) {
                        /**
                         * Specifies the manner in which the build should be verified, if at all.
                         */
                        let VerifyOption;
                        (function (VerifyOption) {
                            VerifyOption[VerifyOption["NOT_VERIFIED"] = 0] = "NOT_VERIFIED";
                            VerifyOption[VerifyOption["VERIFIED"] = 1] = "VERIFIED";
                        })(VerifyOption = BuildOptions.VerifyOption || (BuildOptions.VerifyOption = {}));
                        /**
                         * Supported VM sizes.
                         */
                        let MachineType;
                        (function (MachineType) {
                            MachineType[MachineType["UNSPECIFIED"] = 0] = "UNSPECIFIED";
                            MachineType[MachineType["N1_HIGHCPU_8"] = 1] = "N1_HIGHCPU_8";
                            MachineType[MachineType["N1_HIGHCPU_32"] = 2] = "N1_HIGHCPU_32";
                        })(MachineType = BuildOptions.MachineType || (BuildOptions.MachineType = {}));
                        /**
                         * Specifies the behavior when there is an error in the substitution checks.
                         */
                        let SubstitutionOption;
                        (function (SubstitutionOption) {
                            SubstitutionOption[SubstitutionOption["MUST_MATCH"] = 0] = "MUST_MATCH";
                            SubstitutionOption[SubstitutionOption["ALLOW_LOOSE"] = 1] = "ALLOW_LOOSE";
                        })(SubstitutionOption = BuildOptions.SubstitutionOption || (BuildOptions.SubstitutionOption = {}));
                        /**
                         * Specifies the behavior when writing build logs to Google Cloud Storage.
                         */
                        let LogStreamingOption;
                        (function (LogStreamingOption) {
                            LogStreamingOption[LogStreamingOption["STREAM_DEFAULT"] = 0] = "STREAM_DEFAULT";
                            LogStreamingOption[LogStreamingOption["STREAM_ON"] = 1] = "STREAM_ON";
                            LogStreamingOption[LogStreamingOption["STREAM_OFF"] = 2] = "STREAM_OFF";
                        })(LogStreamingOption = BuildOptions.LogStreamingOption || (BuildOptions.LogStreamingOption = {}));
                        /**
                         * Specifies the logging mode.
                         */
                        let LoggingMode;
                        (function (LoggingMode) {
                            LoggingMode[LoggingMode["LOGGING_UNSPECIFIED"] = 0] = "LOGGING_UNSPECIFIED";
                            LoggingMode[LoggingMode["LEGACY"] = 1] = "LEGACY";
                            LoggingMode[LoggingMode["GCS_ONLY"] = 2] = "GCS_ONLY";
                        })(LoggingMode = BuildOptions.LoggingMode || (BuildOptions.LoggingMode = {}));
                    })(BuildOptions = v1.BuildOptions || (v1.BuildOptions = {}));
                })(v1 = cloudbuild.v1 || (cloudbuild.v1 = {}));
            })(cloudbuild = cloud.cloudbuild || (cloud.cloudbuild = {}));
            let audit;
            (function (audit) {
                let v1;
                (function (v1) {
                    /**
                     * The severity of the event described in a log entry, expressed as one of the
                     * standard severity levels listed below.  For your reference, the levels are
                     * assigned the listed numeric values. The effect of using numeric values other
                     * than those listed is undefined.
                     * Copied from
                     * https://github.com/googleapis/googleapis/blob/master/google/logging/type/log_severity.proto
                     */
                    let LogSeverity;
                    (function (LogSeverity) {
                        LogSeverity[LogSeverity["DEFAULT"] = 0] = "DEFAULT";
                        LogSeverity[LogSeverity["DEBUG"] = 100] = "DEBUG";
                        LogSeverity[LogSeverity["INFO"] = 200] = "INFO";
                        LogSeverity[LogSeverity["NOTICE"] = 300] = "NOTICE";
                        LogSeverity[LogSeverity["WARNING"] = 400] = "WARNING";
                        LogSeverity[LogSeverity["ERROR"] = 500] = "ERROR";
                        LogSeverity[LogSeverity["CRITICAL"] = 600] = "CRITICAL";
                        LogSeverity[LogSeverity["ALERT"] = 700] = "ALERT";
                        LogSeverity[LogSeverity["EMERGENCY"] = 800] = "EMERGENCY";
                    })(LogSeverity = v1.LogSeverity || (v1.LogSeverity = {}));
                })(v1 = audit.v1 || (audit.v1 = {}));
            })(audit = cloud.audit || (cloud.audit = {}));
        })(cloud = events.cloud || (events.cloud = {}));
    })(events = google.events || (google.events = {}));
})(google = exports.google || (exports.google = {}));
;
;
/**
 * Keep a set of of all known GoogleCloudEvent types to be used in the type predicates
 * provided by this library.
 */
exports.GoogleCloudEventTypes = new Set(['google.firebase.testlab.testMatrix.v1.completed', 'google.firebase.remoteconfig.remoteConfig.v1.updated', 'google.firebase.firebasealerts.alerts.v1.published', 'google.firebase.database.ref.v1.created', 'google.firebase.database.ref.v1.updated', 'google.firebase.database.ref.v1.deleted', 'google.firebase.database.ref.v1.written', 'google.firebase.auth.user.v1.created', 'google.firebase.auth.user.v1.deleted', 'google.firebase.analytics.log.v1.written', 'google.cloud.storage.object.v1.finalized', 'google.cloud.storage.object.v1.archived', 'google.cloud.storage.object.v1.deleted', 'google.cloud.storage.object.v1.metadataUpdated', 'google.cloud.scheduler.job.v1.executed', 'google.cloud.pubsub.topic.v1.messagePublished', 'google.cloud.iot.v1.DeviceManager.CreateDevice', 'google.cloud.iot.v1.DeviceManager.UpdateDevice', 'google.cloud.iot.v1.DeviceManager.DeleteDevice', 'google.cloud.iot.v1.DeviceManager.CreateDeviceRegistry', 'google.cloud.iot.v1.DeviceManager.UpdateDeviceRegistry', 'google.cloud.iot.v1.DeviceManager.DeleteDeviceRegistry', 'google.cloud.firestore.document.v1.created', 'google.cloud.firestore.document.v1.updated', 'google.cloud.firestore.document.v1.deleted', 'google.cloud.firestore.document.v1.written', 'google.cloud.cloudbuild.build.v1.statusChanged', 'google.cloud.audit.log.v1.written']);
