"use strict";
// Copyright 2022 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
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
                    let TestStateEnum;
                    (function (TestStateEnum) {
                        TestStateEnum[TestStateEnum["TEST_STATE_UNSPECIFIED"] = 0] = "TEST_STATE_UNSPECIFIED";
                        TestStateEnum[TestStateEnum["VALIDATING"] = 1] = "VALIDATING";
                        TestStateEnum[TestStateEnum["PENDING"] = 2] = "PENDING";
                        TestStateEnum[TestStateEnum["FINISHED"] = 3] = "FINISHED";
                        TestStateEnum[TestStateEnum["ERROR"] = 4] = "ERROR";
                        TestStateEnum[TestStateEnum["INVALID"] = 5] = "INVALID";
                    })(TestStateEnum = v1.TestStateEnum || (v1.TestStateEnum = {}));
                    /**
                     * Outcome summary for a finished test matrix.
                     */
                    let OutcomeSummaryEnum;
                    (function (OutcomeSummaryEnum) {
                        OutcomeSummaryEnum[OutcomeSummaryEnum["OUTCOME_SUMMARY_UNSPECIFIED"] = 0] = "OUTCOME_SUMMARY_UNSPECIFIED";
                        OutcomeSummaryEnum[OutcomeSummaryEnum["SUCCESS"] = 1] = "SUCCESS";
                        OutcomeSummaryEnum[OutcomeSummaryEnum["FAILURE"] = 2] = "FAILURE";
                        OutcomeSummaryEnum[OutcomeSummaryEnum["INCONCLUSIVE"] = 3] = "INCONCLUSIVE";
                        OutcomeSummaryEnum[OutcomeSummaryEnum["SKIPPED"] = 4] = "SKIPPED";
                    })(OutcomeSummaryEnum = v1.OutcomeSummaryEnum || (v1.OutcomeSummaryEnum = {}));
                })(v1 = testlab.v1 || (testlab.v1 = {}));
            })(testlab = firebase.testlab || (firebase.testlab = {}));
            let remoteconfig;
            (function (remoteconfig) {
                let v1;
                (function (v1) {
                    /**
                     * What type of update was associated with the Remote Config template version.
                     */
                    let RemoteConfigUpdateOriginEnum;
                    (function (RemoteConfigUpdateOriginEnum) {
                        RemoteConfigUpdateOriginEnum[RemoteConfigUpdateOriginEnum["REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED"] = 0] = "REMOTE_CONFIG_UPDATE_ORIGIN_UNSPECIFIED";
                        RemoteConfigUpdateOriginEnum[RemoteConfigUpdateOriginEnum["CONSOLE"] = 1] = "CONSOLE";
                        RemoteConfigUpdateOriginEnum[RemoteConfigUpdateOriginEnum["REST_API"] = 2] = "REST_API";
                        RemoteConfigUpdateOriginEnum[RemoteConfigUpdateOriginEnum["ADMIN_SDK_NODE"] = 3] = "ADMIN_SDK_NODE";
                    })(RemoteConfigUpdateOriginEnum = v1.RemoteConfigUpdateOriginEnum || (v1.RemoteConfigUpdateOriginEnum = {}));
                    /**
                     * Where the Remote Config update action originated.
                     */
                    let RemoteConfigUpdateTypeEnum;
                    (function (RemoteConfigUpdateTypeEnum) {
                        RemoteConfigUpdateTypeEnum[RemoteConfigUpdateTypeEnum["REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED"] = 0] = "REMOTE_CONFIG_UPDATE_TYPE_UNSPECIFIED";
                        RemoteConfigUpdateTypeEnum[RemoteConfigUpdateTypeEnum["INCREMENTAL_UPDATE"] = 1] = "INCREMENTAL_UPDATE";
                        RemoteConfigUpdateTypeEnum[RemoteConfigUpdateTypeEnum["FORCED_UPDATE"] = 2] = "FORCED_UPDATE";
                        RemoteConfigUpdateTypeEnum[RemoteConfigUpdateTypeEnum["ROLLBACK"] = 3] = "ROLLBACK";
                    })(RemoteConfigUpdateTypeEnum = v1.RemoteConfigUpdateTypeEnum || (v1.RemoteConfigUpdateTypeEnum = {}));
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
                    let MqttStateEnum;
                    (function (MqttStateEnum) {
                        MqttStateEnum[MqttStateEnum["MQTT_STATE_UNSPECIFIED"] = 0] = "MQTT_STATE_UNSPECIFIED";
                        MqttStateEnum[MqttStateEnum["MQTT_ENABLED"] = 1] = "MQTT_ENABLED";
                        MqttStateEnum[MqttStateEnum["MQTT_DISABLED"] = 2] = "MQTT_DISABLED";
                    })(MqttStateEnum = v1.MqttStateEnum || (v1.MqttStateEnum = {}));
                    /**
                     * Indicates whether DeviceService (HTTP) is enabled or disabled for the
                     * registry. See the field description for details.
                     */
                    let HttpStateEnum;
                    (function (HttpStateEnum) {
                        HttpStateEnum[HttpStateEnum["HTTP_STATE_UNSPECIFIED"] = 0] = "HTTP_STATE_UNSPECIFIED";
                        HttpStateEnum[HttpStateEnum["HTTP_ENABLED"] = 1] = "HTTP_ENABLED";
                        HttpStateEnum[HttpStateEnum["HTTP_DISABLED"] = 2] = "HTTP_DISABLED";
                    })(HttpStateEnum = v1.HttpStateEnum || (v1.HttpStateEnum = {}));
                    /**
                     * *Beta Feature**
                     *
                     * The logging verbosity for device activity. Specifies which events should be
                     * written to logs. For example, if the LogLevel is ERROR, only events that
                     * terminate in errors will be logged. LogLevel is inclusive; enabling INFO
                     * logging will also enable ERROR logging.
                     */
                    let LogLevelEnum;
                    (function (LogLevelEnum) {
                        LogLevelEnum[LogLevelEnum["LOG_LEVEL_UNSPECIFIED"] = 0] = "LOG_LEVEL_UNSPECIFIED";
                        LogLevelEnum[LogLevelEnum["NONE"] = 10] = "NONE";
                        LogLevelEnum[LogLevelEnum["ERROR"] = 20] = "ERROR";
                        LogLevelEnum[LogLevelEnum["INFO"] = 30] = "INFO";
                        LogLevelEnum[LogLevelEnum["DEBUG"] = 40] = "DEBUG";
                    })(LogLevelEnum = v1.LogLevelEnum || (v1.LogLevelEnum = {}));
                    /**
                     * Gateway type.
                     */
                    let GatewayTypeEnum;
                    (function (GatewayTypeEnum) {
                        GatewayTypeEnum[GatewayTypeEnum["GATEWAY_TYPE_UNSPECIFIED"] = 0] = "GATEWAY_TYPE_UNSPECIFIED";
                        GatewayTypeEnum[GatewayTypeEnum["GATEWAY"] = 1] = "GATEWAY";
                        GatewayTypeEnum[GatewayTypeEnum["NON_GATEWAY"] = 2] = "NON_GATEWAY";
                    })(GatewayTypeEnum = v1.GatewayTypeEnum || (v1.GatewayTypeEnum = {}));
                    /**
                     * The gateway authorization/authentication method. This setting determines how
                     * Cloud IoT Core authorizes/authenticate devices to access the gateway.
                     */
                    let GatewayAuthMethodEnum;
                    (function (GatewayAuthMethodEnum) {
                        GatewayAuthMethodEnum[GatewayAuthMethodEnum["GATEWAY_AUTH_METHOD_UNSPECIFIED"] = 0] = "GATEWAY_AUTH_METHOD_UNSPECIFIED";
                        GatewayAuthMethodEnum[GatewayAuthMethodEnum["ASSOCIATION_ONLY"] = 1] = "ASSOCIATION_ONLY";
                        GatewayAuthMethodEnum[GatewayAuthMethodEnum["DEVICE_AUTH_TOKEN_ONLY"] = 2] = "DEVICE_AUTH_TOKEN_ONLY";
                        GatewayAuthMethodEnum[GatewayAuthMethodEnum["ASSOCIATION_AND_DEVICE_AUTH_TOKEN"] = 3] = "ASSOCIATION_AND_DEVICE_AUTH_TOKEN";
                    })(GatewayAuthMethodEnum = v1.GatewayAuthMethodEnum || (v1.GatewayAuthMethodEnum = {}));
                    /**
                     * The supported formats for the public key.
                     */
                    let PublicKeyCertificateFormatEnum;
                    (function (PublicKeyCertificateFormatEnum) {
                        PublicKeyCertificateFormatEnum[PublicKeyCertificateFormatEnum["UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT"] = 0] = "UNSPECIFIED_PUBLIC_KEY_CERTIFICATE_FORMAT";
                        PublicKeyCertificateFormatEnum[PublicKeyCertificateFormatEnum["X509_CERTIFICATE_PEM"] = 1] = "X509_CERTIFICATE_PEM";
                    })(PublicKeyCertificateFormatEnum = v1.PublicKeyCertificateFormatEnum || (v1.PublicKeyCertificateFormatEnum = {}));
                    /**
                     * The supported formats for the public key.
                     */
                    let PublicKeyFormatEnum;
                    (function (PublicKeyFormatEnum) {
                        PublicKeyFormatEnum[PublicKeyFormatEnum["UNSPECIFIED_PUBLIC_KEY_FORMAT"] = 0] = "UNSPECIFIED_PUBLIC_KEY_FORMAT";
                        PublicKeyFormatEnum[PublicKeyFormatEnum["RSA_PEM"] = 3] = "RSA_PEM";
                        PublicKeyFormatEnum[PublicKeyFormatEnum["RSA_X509_PEM"] = 1] = "RSA_X509_PEM";
                        PublicKeyFormatEnum[PublicKeyFormatEnum["ES256_PEM"] = 2] = "ES256_PEM";
                        PublicKeyFormatEnum[PublicKeyFormatEnum["ES256_X509_PEM"] = 4] = "ES256_X509_PEM";
                    })(PublicKeyFormatEnum = v1.PublicKeyFormatEnum || (v1.PublicKeyFormatEnum = {}));
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
                        let StatusEnum;
                        (function (StatusEnum) {
                            StatusEnum[StatusEnum["STATUS_UNKNOWN"] = 0] = "STATUS_UNKNOWN";
                            StatusEnum[StatusEnum["QUEUED"] = 1] = "QUEUED";
                            StatusEnum[StatusEnum["WORKING"] = 2] = "WORKING";
                            StatusEnum[StatusEnum["SUCCESS"] = 3] = "SUCCESS";
                            StatusEnum[StatusEnum["FAILURE"] = 4] = "FAILURE";
                            StatusEnum[StatusEnum["INTERNAL_ERROR"] = 5] = "INTERNAL_ERROR";
                            StatusEnum[StatusEnum["TIMEOUT"] = 6] = "TIMEOUT";
                            StatusEnum[StatusEnum["CANCELLED"] = 7] = "CANCELLED";
                            StatusEnum[StatusEnum["EXPIRED"] = 9] = "EXPIRED";
                        })(StatusEnum = BuildEventData.StatusEnum || (BuildEventData.StatusEnum = {}));
                    })(BuildEventData = v1.BuildEventData || (v1.BuildEventData = {}));
                    let Hash;
                    (function (Hash) {
                        /**
                         * Specifies the hash algorithm, if any.
                         */
                        let HashTypeEnum;
                        (function (HashTypeEnum) {
                            HashTypeEnum[HashTypeEnum["NONE"] = 0] = "NONE";
                            HashTypeEnum[HashTypeEnum["SHA256"] = 1] = "SHA256";
                            HashTypeEnum[HashTypeEnum["MD5"] = 2] = "MD5";
                        })(HashTypeEnum = Hash.HashTypeEnum || (Hash.HashTypeEnum = {}));
                    })(Hash = v1.Hash || (v1.Hash = {}));
                    let BuildOptions;
                    (function (BuildOptions) {
                        /**
                         * Specifies the manner in which the build should be verified, if at all.
                         */
                        let VerifyOptionEnum;
                        (function (VerifyOptionEnum) {
                            VerifyOptionEnum[VerifyOptionEnum["NOT_VERIFIED"] = 0] = "NOT_VERIFIED";
                            VerifyOptionEnum[VerifyOptionEnum["VERIFIED"] = 1] = "VERIFIED";
                        })(VerifyOptionEnum = BuildOptions.VerifyOptionEnum || (BuildOptions.VerifyOptionEnum = {}));
                        /**
                         * Supported VM sizes.
                         */
                        let MachineTypeEnum;
                        (function (MachineTypeEnum) {
                            MachineTypeEnum[MachineTypeEnum["UNSPECIFIED"] = 0] = "UNSPECIFIED";
                            MachineTypeEnum[MachineTypeEnum["N1_HIGHCPU_8"] = 1] = "N1_HIGHCPU_8";
                            MachineTypeEnum[MachineTypeEnum["N1_HIGHCPU_32"] = 2] = "N1_HIGHCPU_32";
                        })(MachineTypeEnum = BuildOptions.MachineTypeEnum || (BuildOptions.MachineTypeEnum = {}));
                        /**
                         * Specifies the behavior when there is an error in the substitution checks.
                         */
                        let SubstitutionOptionEnum;
                        (function (SubstitutionOptionEnum) {
                            SubstitutionOptionEnum[SubstitutionOptionEnum["MUST_MATCH"] = 0] = "MUST_MATCH";
                            SubstitutionOptionEnum[SubstitutionOptionEnum["ALLOW_LOOSE"] = 1] = "ALLOW_LOOSE";
                        })(SubstitutionOptionEnum = BuildOptions.SubstitutionOptionEnum || (BuildOptions.SubstitutionOptionEnum = {}));
                        /**
                         * Specifies the behavior when writing build logs to Google Cloud Storage.
                         */
                        let LogStreamingOptionEnum;
                        (function (LogStreamingOptionEnum) {
                            LogStreamingOptionEnum[LogStreamingOptionEnum["STREAM_DEFAULT"] = 0] = "STREAM_DEFAULT";
                            LogStreamingOptionEnum[LogStreamingOptionEnum["STREAM_ON"] = 1] = "STREAM_ON";
                            LogStreamingOptionEnum[LogStreamingOptionEnum["STREAM_OFF"] = 2] = "STREAM_OFF";
                        })(LogStreamingOptionEnum = BuildOptions.LogStreamingOptionEnum || (BuildOptions.LogStreamingOptionEnum = {}));
                        /**
                         * Specifies the logging mode.
                         */
                        let LoggingModeEnum;
                        (function (LoggingModeEnum) {
                            LoggingModeEnum[LoggingModeEnum["LOGGING_UNSPECIFIED"] = 0] = "LOGGING_UNSPECIFIED";
                            LoggingModeEnum[LoggingModeEnum["LEGACY"] = 1] = "LEGACY";
                            LoggingModeEnum[LoggingModeEnum["GCS_ONLY"] = 2] = "GCS_ONLY";
                        })(LoggingModeEnum = BuildOptions.LoggingModeEnum || (BuildOptions.LoggingModeEnum = {}));
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
                    let LogSeverityEnum;
                    (function (LogSeverityEnum) {
                        LogSeverityEnum[LogSeverityEnum["DEFAULT"] = 0] = "DEFAULT";
                        LogSeverityEnum[LogSeverityEnum["DEBUG"] = 100] = "DEBUG";
                        LogSeverityEnum[LogSeverityEnum["INFO"] = 200] = "INFO";
                        LogSeverityEnum[LogSeverityEnum["NOTICE"] = 300] = "NOTICE";
                        LogSeverityEnum[LogSeverityEnum["WARNING"] = 400] = "WARNING";
                        LogSeverityEnum[LogSeverityEnum["ERROR"] = 500] = "ERROR";
                        LogSeverityEnum[LogSeverityEnum["CRITICAL"] = 600] = "CRITICAL";
                        LogSeverityEnum[LogSeverityEnum["ALERT"] = 700] = "ALERT";
                        LogSeverityEnum[LogSeverityEnum["EMERGENCY"] = 800] = "EMERGENCY";
                    })(LogSeverityEnum = v1.LogSeverityEnum || (v1.LogSeverityEnum = {}));
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
