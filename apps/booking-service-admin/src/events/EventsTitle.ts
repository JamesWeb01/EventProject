import { Events as TEvents } from "../api/events/Events";

export const EVENTS_TITLE_FIELD = "title";

export const EventsTitle = (record: TEvents): string => {
  return record.title?.toString() || String(record.id);
};
