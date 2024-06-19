import { BookingsCreateNestedManyWithoutEventsItemsInput } from "./BookingsCreateNestedManyWithoutEventsItemsInput";
import { VenuesWhereUniqueInput } from "../venues/VenuesWhereUniqueInput";

export type EventsCreateInput = {
  bookingsItems?: BookingsCreateNestedManyWithoutEventsItemsInput;
  date?: Date | null;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  venue?: VenuesWhereUniqueInput | null;
};
