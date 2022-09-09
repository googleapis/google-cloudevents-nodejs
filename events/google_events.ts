import {google} from './events'
export type GoogleCloudEventTypesToDataType = {
    "google.firebase.testlab.testMatrix.v1.completed": google.events.firebase.testlab.v1.TestMatrixCompletedEvent.data;
    "google.firebase.remoteconfig.remoteConfig.v1.updated": google.events.firebase.remoteconfig.v1.RemoteConfigUpdatedEvent.data;
    "google.firebase.firebasealerts.alerts.v1.published": google.events.firebase.firebasealerts.v1.AlertPublishedEvent.data;
    "google.firebase.database.ref.v1.created": google.events.firebase.database.v1.ReferenceCreatedEvent.data;
    "google.firebase.database.ref.v1.updated": google.events.firebase.database.v1.ReferenceUpdatedEvent.data;
    "google.firebase.database.ref.v1.deleted": google.events.firebase.database.v1.ReferenceDeletedEvent.data;
    "google.firebase.database.ref.v1.written": google.events.firebase.database.v1.ReferenceWrittenEvent.data;
    "google.firebase.auth.user.v1.created": google.events.firebase.auth.v1.UserCreatedEvent.data;
    "google.firebase.auth.user.v1.deleted": google.events.firebase.auth.v1.UserDeletedEvent.data;
    "google.firebase.analytics.log.v1.written": google.events.firebase.analytics.v1.AnalyticsLogWrittenEvent.data;
    "google.cloud.storage.object.v1.finalized": google.events.cloud.storage.v1.ObjectFinalizedEvent.data;
    "google.cloud.storage.object.v1.archived": google.events.cloud.storage.v1.ObjectArchivedEvent.data;
    "google.cloud.storage.object.v1.deleted": google.events.cloud.storage.v1.ObjectDeletedEvent.data;
    "google.cloud.storage.object.v1.metadataUpdated": google.events.cloud.storage.v1.ObjectMetadataUpdatedEvent.data;
    "google.cloud.scheduler.job.v1.executed": google.events.cloud.scheduler.v1.JobExecutedEvent.data;
    "google.cloud.pubsub.topic.v1.messagePublished": google.events.cloud.pubsub.v1.MessagePublishedEvent.data;
    "google.cloud.firestore.document.v1.created": google.events.cloud.firestore.v1.DocumentCreatedEvent.data;
    "google.cloud.firestore.document.v1.updated": google.events.cloud.firestore.v1.DocumentUpdatedEvent.data;
    "google.cloud.firestore.document.v1.deleted": google.events.cloud.firestore.v1.DocumentDeletedEvent.data;
    "google.cloud.firestore.document.v1.written": google.events.cloud.firestore.v1.DocumentWrittenEvent.data;
    "google.cloud.cloudbuild.build.v1.statusChanged": google.events.cloud.cloudbuild.v1.CloudBuildEvent.data;
    "google.cloud.audit.log.v1.written": google.events.cloud.audit.v1.AuditLogWrittenEvent.data;
  };