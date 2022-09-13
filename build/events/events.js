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
exports.GoogleCloudEventTypes = new Set(['google.firebase.testlab.testMatrix.v1.completed', 'google.firebase.remoteconfig.remoteConfig.v1.updated', 'google.firebase.firebasealerts.alerts.v1.published', 'google.firebase.database.ref.v1.created', 'google.firebase.database.ref.v1.updated', 'google.firebase.database.ref.v1.deleted', 'google.firebase.database.ref.v1.written', 'google.firebase.auth.user.v1.created', 'google.firebase.auth.user.v1.deleted', 'google.firebase.analytics.log.v1.written', 'google.cloud.storage.object.v1.finalized', 'google.cloud.storage.object.v1.archived', 'google.cloud.storage.object.v1.deleted', 'google.cloud.storage.object.v1.metadataUpdated', 'google.cloud.scheduler.job.v1.executed', 'google.cloud.pubsub.topic.v1.messagePublished', 'google.cloud.firestore.document.v1.created', 'google.cloud.firestore.document.v1.updated', 'google.cloud.firestore.document.v1.deleted', 'google.cloud.firestore.document.v1.written', 'google.cloud.cloudbuild.build.v1.statusChanged', 'google.cloud.audit.log.v1.written']);
