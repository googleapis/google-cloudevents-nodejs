/**
 * The CloudEvent raised when a PubSub message is published for a topic.
 */
export interface MessagePublishedEvent {
  /**
   * The data associated with the event.
   */
  data: MessagePublishedData;
  type: "google.cloud.pubsub.topic.v1.messagePublished";
}

/**
 * The event data when a message is published to a topic.
 */
export interface MessagePublishedData {
  /**
   * The message that was published.
   */
  message: PubsubMessage;

  /**
   * The resource name of the subscription for which this event was
   * generated. The format of the value is
   * `projects/{project-id}/subscriptions/{subscription-id}`.
   */
  subscription: string;
}

/**
 * A message published to a topic.
 */
export interface PubsubMessage {
  /**
   * The binary data in the message.
   */
  data: string;

  /**
   * Attributes for this message.
   */
  attributes: string;

  /**
   * ID of this message, assigned by the server when the message is published.
   * Guaranteed to be unique within the topic.
   */
  messageId: string;

  /**
   * The time at which the message was published, populated by the server when
   * it receives the `Publish` call.
   */
  publishTime: string;

  /**
   * If non-empty, identifies related messages for which publish order should be
   * respected.
   */
  orderingKey: string;
}