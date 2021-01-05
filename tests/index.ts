import { expect } from 'chai';
import { MessagePublishedData } from '../cloud/pubsub/v1/MessagePublishedData';

describe('Event Types', () => {
  it('should work with a basic Pub/Sub sample', () => {
    const pubsubData = Buffer.from('Pub/Sub data').toString('base64');
    /**	
     * A Pub/Sub message as an object, for example what you'd see from a POST request.	
     */
    const obj = {
      message: {
        data: pubsubData,
        messageId: 'my-message-id',
        publishTime: "2020-08-14T20:50:04.994Z",
      },
      subscription: 'projects/my-project/subscriptions/cre-us-central1-pubsub-trigger-5-sub-000'
    };

    const tsExample: MessagePublishedData = obj;
    expect(tsExample?.message?.data).to.equal(pubsubData);
  });
});