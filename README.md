# Google CloudEvents Node.js

> Note: This is branch contains a re-write of this library using protobuf as the source of truth in place of the JSON-Schema definition.

This repository contains types for CloudEvents issued by Google,
enabling you to have autocompletion in **JavaScript** or **TypeScript** projects.

The types in this repo are auto-generated from schemas in https://github.com/googleapis/google-cloudevents

## Prerequisites

- Node 14+

## Usage

### Install the `@google/events` package

Install the Google CloudEvents Node.js library using `npm`:

```sh
npm install googleapis/google-cloudevents-nodejs#snowpea --save
```

### Narrowing Google Cloud Event Types

The `isGoogleEvent` function is a [type predicate](https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates)
that can be used to narrow a CloudEvent to a particular [Eventarc event type](https://cloud.google.com/eventarc/docs/reference/supported-events).

```typescript
import {isGoogleEvent} from '@google/event';

function MyEventHandler(cloudEvent) {
  if (isGoogleEvent(cloudEvent, 'google.firebase.auth.user.v1.created')) {
    console.log(cloudEvent.data.uid);
  }
}
```

If you do not provide the even type argument, `isGoogleEvent` will return `true` if the event is
any supported Eventarc even type. This is useful for event handler functions that may accept
multiple event types:

```typescript
import {isGoogleEvent} from '@google/event';

function MyEventHandler(cloudEvent) {
  if (isGoogleEvent(cloudEvent)) {
    switch (cloudEvent.type) {
      case 'google.firebase.auth.user.v1.created':
        console.log(cloudEvent.data.uid);
        break;
      case 'google.cloud.storage.object.v1.archived':
        console.log(ce.data.name);
        break;
      default:
        console.log(cloudEvent.type);
    }
  }
}
```

### Typescript Type Annotations

The `GoogleCloudEvent` type can be used to annotate CloudEvent types in Typescript. It accepts an [Eventarc event type](https://cloud.google.com/eventarc/docs/reference/supported-events)
as a string literal type parameter:

```typescript
import {GoogleCloudEvent} from '@google/event';

function MyEventHandler(
  cloudEvent: GoogleCloudEvent<'google.cloud.storage.object.v1.archived'>
) {
  console.log(ce.data.name);
}
```

If you need to annotate a variable that can take on multiple event types, the `GoogleCloudEventsUnion` is a [union](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#union-types) of all known even types supported by Eventarc:

```typescript
import {GoogleCloudEventsUnion} from '@google/event';

function MyEventHandler(cloudEvent: GoogleCloudEventsUnion) {
  switch (cloudEvent.type) {
    case 'google.firebase.auth.user.v1.created':
      console.log(cloudEvent.data.uid);
      break;
    case 'google.cloud.storage.object.v1.archived':
      console.log(ce.data.name);
      break;
    default:
      console.log(cloudEvent.type);
  }
}
```

## Running the Type Generator

The refreshed code generator is a simple script in [`tools/snowpea.ts`](tools/snowpea.ts). It can be run using the following steps:

1. Install dependencies

```sh
npm install
```

2. Run the generator:

```sh
npm run snowpea
```

The output Typescript is written to [`events/events.ts`](./`events/events.ts).

3. Build the generated typescript and hand crafted code:

```sh
npm run build
```

## Type Generator Details

Currently, the `snowpea` type generator enumerates all the `.proto` files in the `google-events` and `protoc` repos, then uses protobuf.js to load them into `Root` namespace. Typescript interface definitions are generated from the protobuf.js namespace object using the [Babel javascript compiler](https://babeljs.io/).
