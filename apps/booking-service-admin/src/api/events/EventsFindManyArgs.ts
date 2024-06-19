import { EventsWhereInput } from "./EventsWhereInput";
import { EventsOrderByInput } from "./EventsOrderByInput";

export type EventsFindManyArgs = {
  where?: EventsWhereInput;
  orderBy?: Array<EventsOrderByInput>;
  skip?: number;
  take?: number;
};
