import { BookingsUpdateManyWithoutEventsItemsInput } from "./BookingsUpdateManyWithoutEventsItemsInput";
import { VenuesWhereUniqueInput } from "../venues/VenuesWhereUniqueInput";

export type EventsUpdateInput = {
  bookingsItems?: BookingsUpdateManyWithoutEventsItemsInput;
  date?: Date | null;
  description?: string | null;
  price?: number | null;
  title?: string | null;
  venue?: VenuesWhereUniqueInput | null;
};
