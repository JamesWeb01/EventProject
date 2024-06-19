import { EventsCreateNestedManyWithoutVenuesItemsInput } from "./EventsCreateNestedManyWithoutVenuesItemsInput";

export type VenuesCreateInput = {
  capacity?: number | null;
  eventsItems?: EventsCreateNestedManyWithoutVenuesItemsInput;
  location?: string | null;
  name?: string | null;
};
