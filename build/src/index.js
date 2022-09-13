"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.google = exports.isGoogleEvent = void 0;
const events_1 = require("../events/events");
Object.defineProperty(exports, "google", { enumerable: true, get: function () { return events_1.google; } });
function isGoogleEvent(event, eventType) {
    if (!event) {
        return false;
    }
    if (eventType) {
        return event.type === eventType;
    }
    return events_1.GoogleCloudEventTypes.has(event.type);
}
exports.isGoogleEvent = isGoogleEvent;
