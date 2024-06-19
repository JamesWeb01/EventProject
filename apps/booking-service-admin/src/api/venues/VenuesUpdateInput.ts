import { EventsUpdateManyWithoutVenuesItemsInput } from "./EventsUpdateManyWithoutVenuesItemsInput";

export type VenuesUpdateInput = {
  capacity?: number | null;
  eventsItems?: EventsUpdateManyWithoutVenuesItemsInput;
  location?: string | null;
  name?: string | null;
};
