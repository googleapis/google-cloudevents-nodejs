# Google CloudEvents Node.js

This is a prototype rebuild of this library using protobuf as the source of truth in place of the JSON-Schema definition.

This repository contains types for CloudEvents issued by Google,
enabling you to have autocompletion in **JavaScript** or **TypeScript** projects.

> Note: This repo is auto-generated from schemas in https://github.com/googleapis/google-cloudevents

## Prerequisites

- Node 14+

## Usage

Install the library from `npm`:

```sh
npm i @google/events
```

TODO: describe import paths once they are finalized

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

The output Typescript is written to [`out.ts`](./out.ts).

## Type Generator Details

Currently, the `snowpea` type generator just enumerates all the necessary `.proto` files in the `google-events` and `protoc` repos then runs the [`pbjs` and `pbts` code generator tools](https://github.com/protobufjs/protobuf.js/tree/master/cli).

This is roughly equivalent to the following command:

```
pbjs \
  -t static \
  --no-create \
  --no-encode \
  --no-decode \
  --no-verify \
  --no-convert \
  --no-delimited \
  --no-service \
  <proto files> \
  | pbts -
```

## Type Generator Issues

### Generated codes does not really match what we need:

1.  Code includes an interface and concrete class definition. We only need the interface.

    **Proposed solution:** sift through the generated code and remove the classes.

2.  There is no export structure. Currently everything is using typescript namespaces. This is not
    an idiomatic way to provide a JS library.

    **Proposed solution:** ???

3.  No CE type to data payload mapping. The code generated for CloudEvent types don't include the event  
    types that they are associated with.

    **Proposed solution:** Use protobuf.js to `load` the event protos, extract this information and code
    gen it manually with something like babel.

4.  Generated code includes many extraneous types (from the standard lib) that should not be required by
    Eventarc customers.

    **Proposed solution:** Remove them???

### Comments are not preserved

All the comments in the google-event protos are line comments, but proto.js seems to only parse block comments.

**Proposed solution:** pre-process the files to replace line comments with block comments. E.g. find blocks of lines that start with `//` comments and replace them with `*`.
