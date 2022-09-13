import {google, GoogleCloudEvent, GoogleCloudEventsUnion, GoogleCloudEventTypes, GoogleCloudEventTypesToDataType } from '../events/events';

/**
 * Check if a given a CloudEvent is a known GoogleCloudEvent.
 *
 * @param event the CloudEvent to check the type of
 * @returns true if this event is a GoogleCloudEvent of the provided type, false otherwise
 */
export function isGoogleEvent(
  event: any,
): event is GoogleCloudEventsUnion;
/**
 * Check if a given a CloudEvent is a known Google CloudEvent of a given type.
 *
 * @param event the CloudEvent to check the type of
 * @param eventType one of the know GoogleCloudEvent literal types
 * @returns true if this event is a GoogleCloudEvent of the provided type, false otherwise
 */
export function isGoogleEvent<T extends keyof GoogleCloudEventTypesToDataType>(
  event: any,
  eventType: T
): event is GoogleCloudEvent<T>;

export function isGoogleEvent(
  event: any,
  eventType?: keyof GoogleCloudEventTypesToDataType
): event is GoogleCloudEventsUnion {
  if (!event) {
    return false;
  }
  if (eventType) {
    return event.type === eventType;
  }
  return GoogleCloudEventTypes.has(event.type);
}

export {CloudEvent} from './cloudevent';
export {GoogleCloudEvent, GoogleCloudEventsUnion, google};
