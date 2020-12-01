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
## Example Usage

Require or import the module. Here is an example JS and TS file:

### JS

```js
const {toLogEntryData} = require('@google/events/cloud/audit/v1/LogEntryData');

const data = {
  // ...
};

const jsExample = toLogEntryData(data);
console.log(jsExample);
```

### TS

```ts
import {LogEntryData} from '@google/events/cloud/audit/v1/LogEntryData';

const data = {
  // ...
};

const tsExample: LogEntryData = data;
console.log(tsExample);
```

## Reference

The [`reference.md`](reference.md) file has detailed examples for how to use every event data type.
