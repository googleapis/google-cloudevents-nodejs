
/**
 * The object interface for a CloudEvent.
 * @see https://github.com/cloudevents/spec/blob/v1.0/spec.md
 */
export interface CloudEvent<T=unknown> {
  
  /**
   * Identifier for the event.
   */
  id: string;

  /**
   * The version of the CloudEvents specification which the event uses.
   */
  specversion: string;

  /**
   * Identifies the context in which an event happened.
   */
  source: string;

  /**
   * The type of event.
   */
  type: string;

  /**
   * The content type of the data string.
   */
  datacontenttype?: string;

  /**
   * The schema that `data` adheres to. If present, MUST be a non-empty URI.
   */
  dataschema?: string;

  /**
   * Describes the subject of the event in the context of the source.
   */
  subject?: string;
  /**
   * Timestamp of when the event happened.
   */
  time?: string;
  /**
   * The event payload.
   */
  data?: T;
}
