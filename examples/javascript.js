const {toMessagePublishedData} = require('@google/events/src/google/events/cloud/pubsub/v1');

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