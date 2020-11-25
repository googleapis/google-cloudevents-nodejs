# Google CloudEvents – Node.js [![npm version](https://badge.fury.io/js/%40google%2Fevents.svg)](https://www.npmjs.com/package/@google/events) [![github ci](https://github.com/googleapis/google-cloudevents-nodejs/workflows/ci/badge.svg)](https://github.com/googleapis/google-cloudevents-nodejs/actions?query=workflow%3Aci)

This repository contains types for CloudEvents issued by Google,
enabling you to have autocompletion in **JavaScript** or **TypeScript** projects.

> Note: This repo is auto-generated from schemas in https://github.com/googleapis/google-cloudevents

## Prerequisites

- Node 10+

## Install

Install the library from `npm`:

```sh
npm i @google/events
```

## Features

This library is meant to provide types for Node projects accepting CloudEvent data, typically sent through a HTTP request's `POST` body.

For every event type, this library contains:

- Exports a JavaScript function `to[DataType]`.
- Exports a TypeScript type interface `DataType`.

This provides autocompletion and inline IDE documentation for event types.

## Usage

The following sections provide usage information per event type.

<!-- GENERATED START -->
### Cloud Audit Logs

Generic log entry, used as a wrapper for Cloud Audit Logs in events.
 This is copied from
 https://github.com/googleapis/googleapis/blob/master/google/logging/v2/log_entry.proto
 and adapted appropriately.

#### CloudEvent Types:

- `google.cloud.audit.log.v1.written`

#### JS

```js
const {toLogEntryData} = require('@google/events/cloud/audit/v1/LogEntryData');

const data = {
  // ...
};

const jsExample = toLogEntryData(data);
console.log(jsExample);
```

#### TS

```ts
import {LogEntryData} from '@google/events/cloud/audit/v1/LogEntryData';

const data = {
  // ...
};

const tsExample: LogEntryData = data;
console.log(tsExample);
```

### Cloud Build

Build event data
 Common build format for Google Cloud Platform API operations.
 Copied from
 https://github.com/googleapis/googleapis/blob/master/google/devtools/cloudbuild/v1/cloudbuild.proto.

#### CloudEvent Types:

- `google.cloud.cloudbuild.build.v1.statusChanged`

#### JS

```js
const {toBuildEventData} = require('@google/events/cloud/cloudbuild/v1/BuildEventData');

const data = {
  // ...
};

const jsExample = toBuildEventData(data);
console.log(jsExample);
```

#### TS

```ts
import {BuildEventData} from '@google/events/cloud/cloudbuild/v1/BuildEventData';

const data = {
  // ...
};

const tsExample: BuildEventData = data;
console.log(tsExample);
```

### Cloud Firestore

The data within all Firestore document events.

#### CloudEvent Types:

- `google.cloud.firestore.document.v1.created`
- `google.cloud.firestore.document.v1.updated`
- `google.cloud.firestore.document.v1.deleted`
- `google.cloud.firestore.document.v1.written`

#### JS

```js
const {toDocumentEventData} = require('@google/events/cloud/firestore/v1/DocumentEventData');

const data = {
  // ...
};

const jsExample = toDocumentEventData(data);
console.log(jsExample);
```

#### TS

```ts
import {DocumentEventData} from '@google/events/cloud/firestore/v1/DocumentEventData';

const data = {
  // ...
};

const tsExample: DocumentEventData = data;
console.log(tsExample);
```

### Cloud Pub/Sub

The data received in an event when a message is published to a topic.

#### CloudEvent Types:

- `google.cloud.pubsub.topic.v1.messagePublished`

#### JS

```js
const {toMessagePublishedData} = require('@google/events/cloud/pubsub/v1/MessagePublishedData');

const data = {
  // ...
};

const jsExample = toMessagePublishedData(data);
console.log(jsExample);
```

#### TS

```ts
import {MessagePublishedData} from '@google/events/cloud/pubsub/v1/MessagePublishedData';

const data = {
  // ...
};

const tsExample: MessagePublishedData = data;
console.log(tsExample);
```

### Cloud Scheduler

Scheduler job data.

#### CloudEvent Types:

- `google.cloud.scheduler.job.v1.executed`

#### JS

```js
const {toSchedulerJobData} = require('@google/events/cloud/scheduler/v1/SchedulerJobData');

const data = {
  // ...
};

const jsExample = toSchedulerJobData(data);
console.log(jsExample);
```

#### TS

```ts
import {SchedulerJobData} from '@google/events/cloud/scheduler/v1/SchedulerJobData';

const data = {
  // ...
};

const tsExample: SchedulerJobData = data;
console.log(tsExample);
```

### Cloud Storage

An object within Google Cloud Storage.

#### CloudEvent Types:

- `google.cloud.storage.object.v1.finalized`
- `google.cloud.storage.object.v1.archived`
- `google.cloud.storage.object.v1.deleted`
- `google.cloud.storage.object.v1.metadataUpdated`

#### JS

```js
const {toStorageObjectData} = require('@google/events/cloud/storage/v1/StorageObjectData');

const data = {
  // ...
};

const jsExample = toStorageObjectData(data);
console.log(jsExample);
```

#### TS

```ts
import {StorageObjectData} from '@google/events/cloud/storage/v1/StorageObjectData';

const data = {
  // ...
};

const tsExample: StorageObjectData = data;
console.log(tsExample);
```

### Google Analytics for Firebase

The data within Firebase Analytics log events.

#### CloudEvent Types:

- `google.firebase.analytics.log.v1.written`

#### JS

```js
const {toAnalyticsLogData} = require('@google/events/firebase/analytics/v1/AnalyticsLogData');

const data = {
  // ...
};

const jsExample = toAnalyticsLogData(data);
console.log(jsExample);
```

#### TS

```ts
import {AnalyticsLogData} from '@google/events/firebase/analytics/v1/AnalyticsLogData';

const data = {
  // ...
};

const tsExample: AnalyticsLogData = data;
console.log(tsExample);
```

### Firebase Authentication

The data within all Firebase Auth events

#### CloudEvent Types:

- `google.firebase.auth.user.v1.created`
- `google.firebase.auth.user.v1.deleted`

#### JS

```js
const {toAuthEventData} = require('@google/events/firebase/auth/v1/AuthEventData');

const data = {
  // ...
};

const jsExample = toAuthEventData(data);
console.log(jsExample);
```

#### TS

```ts
import {AuthEventData} from '@google/events/firebase/auth/v1/AuthEventData';

const data = {
  // ...
};

const tsExample: AuthEventData = data;
console.log(tsExample);
```

### Firebase Realtime Database

The data within all Firebase Real Time Database reference events.

#### CloudEvent Types:

- `google.firebase.database.ref.v1.created`
- `google.firebase.database.ref.v1.updated`
- `google.firebase.database.ref.v1.deleted`
- `google.firebase.database.ref.v1.written`

#### JS

```js
const {toReferenceEventData} = require('@google/events/firebase/database/v1/ReferenceEventData');

const data = {
  // ...
};

const jsExample = toReferenceEventData(data);
console.log(jsExample);
```

#### TS

```ts
import {ReferenceEventData} from '@google/events/firebase/database/v1/ReferenceEventData';

const data = {
  // ...
};

const tsExample: ReferenceEventData = data;
console.log(tsExample);
```

### Firebase Remote Config

The data within all Firebase Remote Config events.

#### CloudEvent Types:

- `google.firebase.remoteconfig.remoteConfig.v1.updated`

#### JS

```js
const {toRemoteConfigEventData} = require('@google/events/firebase/remoteconfig/v1/RemoteConfigEventData');

const data = {
  // ...
};

const jsExample = toRemoteConfigEventData(data);
console.log(jsExample);
```

#### TS

```ts
import {RemoteConfigEventData} from '@google/events/firebase/remoteconfig/v1/RemoteConfigEventData';

const data = {
  // ...
};

const tsExample: RemoteConfigEventData = data;
console.log(tsExample);
```

<!-- GENERATED END -->
