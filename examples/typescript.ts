// Import types
import {MessagePublishedData} from '../src/google/events/cloud/pubsub/v1/data_pb';

// Annotate objects with types
const pubsubData: MessagePublishedData.AsObject = {
    message: {
        data: atob('Pub/Sub data'),
        attributesMap: undefined,
        messageId: 'my-message-id'
    },
    subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
}

console.log(pubsubData.message.data);
