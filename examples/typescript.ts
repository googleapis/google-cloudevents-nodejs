// Import types
import {MessagePublishedData, toMessagePublishedData} from '../src/google/events/cloud/pubsub/v1';

const obj = {
    message: {
        data: atob('Pub/Sub data'),
        messageId: 'my-message-id',
        publishTime: "2020-08-14T20:50:04.994Z",
    },
    subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
};

// TypeScript example
const tsExample: MessagePublishedData = obj;
console.log(tsExample.message.messageId);

// JavaScript example (cast to type)
const jsExample = toMessagePublishedData(obj)
console.log(jsExample.message.messageId);
