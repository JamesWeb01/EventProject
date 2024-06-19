import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { EventsWhereUniqueInput } from "../events/EventsWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type BookingsWhereInput = {
  bookingDate?: DateTimeNullableFilter;
  event?: EventsWhereUniqueInput;
  id?: StringFilter;
  numberOfTickets?: IntNullableFilter;
  status?: StringNullableFilter;
  userId?: IntNullableFilter;
};
