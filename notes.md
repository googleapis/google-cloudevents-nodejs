Problem: protobuf.js codegen is not close to what we want


Protobuf.js codegen options that get pretty close to what we want for a simple proto:

```bash
./node_modules/.bin/pbjs \
  -t static \
  --no-create \
  --no-encode \
  --no-decode \
  --no-verify \
  --no-convert \
  --no-delimited \
  --no-service \
  simple.proto \
  | node_modules/.bin/pbts -
```

sample output:

```typescript
import * as $protobuf from "protobufjs";
/** Properties of a Foo. */
export interface IFoo {

    /** Something about bar. */
    bar?: (string|null);
}

/** Represents a Foo. */
export class Foo implements IFoo {

    /**
     * Constructs a new Foo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IFoo);

    /** Something about bar. */
    public bar: string;

    /**
     * Gets the default type url for Foo
     * @param [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns The default type url
     */
    public static getTypeUrl(typeUrlPrefix?: string): string;
}
```


Ouput type: json
```
pbjs -t json simple.proto
{
  "nested": {
    "Foo": {
      "fields": {
        "bar": {
          "type": "string",
          "id": 1
        }
      }
    }
  }
}
```


## Running on all proto files:


./node_modules/.bin/pbjs \
  -t static \
  --no-create \
  --no-encode \
  --no-decode \
  --no-verify \
  --no-convert \
  --no-delimited \
  --no-service \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/testlab/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/testlab/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/remoteconfig/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/remoteconfig/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/firebasealerts/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/firebasealerts/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/firebasealerts/v1/cloud_event_payload.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/database/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/database/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/auth/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/auth/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/analytics/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/firebase/analytics/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloudevent.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/storage/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/storage/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/scheduler/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/scheduler/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/pubsub/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/pubsub/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/firestore/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/firestore/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/cloudbuild/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/cloudbuild/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/audit/v1/events.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/proto/google/events/cloud/audit/v1/data.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/timeofday.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/quaternion.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/postal_address.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/month.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/money.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/latlng.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/fraction.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/expr.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/dayofweek.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/datetime.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/date.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/color.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/type/calendar_period.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/rpc/status.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/rpc/error_details.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/rpc/context/attribute_context.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/rpc/code.proto \
/usr/local/google/home/mattrobertson/gcf/events/google-cloudevents/third_party/googleapis/google/api/monitored_resource.proto \
| node_modules/.bin/pbts -


Problem: protobuf.js does not parse line comments


```
// This will get ignored
message Foo {
```

```
/**
 * This will get parsed properly
 */
message Foo {
```
