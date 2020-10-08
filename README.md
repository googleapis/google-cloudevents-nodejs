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

## Example – JavaScript

This module can be used with JavaScript projects to provide autocompletion to your objects.

The steps are:

- Require `to[MyDataMessage]` from the Google Events library with the path to your event
    - Replace `MyDataMessage` with your event type. See https://github.com/googleapis/google-cloudevents for all event types.
- Call `to[MyDataMessage]` on your object.
- Observe autocompletion for the wrapped object.

### Code

From [JavaScript example](./examples/javascript.js).

```js
const {toMessagePublishedData} = require('@google/events/cloud/pubsub/v1/MessagePublishedData');

/**
 * A Pub/Sub message as an object, for example what you'd see from a POST request.
 */
const obj = {
    message: {
        data: Buffer.from('Pub/Sub data').toString('base64'),
        messageId: 'my-message-id',
        publishTime: "2020-08-14T20:50:04.994Z",
    },
    subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
};

const jsExample = toMessagePublishedData(obj);
console.log(jsExample.message.data);
```

## Example – TypeScript

This module can be used with TypeScript projects to provide autocompletion.

The steps are:

- Require `[MyDataMessage]` from the Google Events library with the path to your event
    - Replace `MyDataMessage` with your event type. See https://github.com/googleapis/google-cloudevents for all event types.
- When creating an object, use the type, such as `const typedObj: MessagePublishedData = obj;`
- Observe autocompletion for the typed object.

### Code

From [TypeScript example](./examples/typescript.ts):

```ts
import {MessagePublishedData} from '@google/events/cloud/pubsub/v1/MessagePublishedData';

/**
 * A Pub/Sub message as an object, for example what you'd see from a POST request.
 */
const obj = {
    message: {
        data: atob('Pub/Sub data'),
        messageId: 'my-message-id',
        publishTime: "2020-08-14T20:50:04.994Z",
    },
    subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
};

const tsExample: MessagePublishedData = obj;
console.log(tsExample.message.data);
```

---

Read [`.github/CONTRIBUTING.md`](.github/CONTRIBUTING.md) for instructions on developing and contributing to this repo.