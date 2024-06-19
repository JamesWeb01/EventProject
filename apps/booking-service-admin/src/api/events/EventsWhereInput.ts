import { BookingsListRelationFilter } from "../bookings/BookingsListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { VenuesWhereUniqueInput } from "../venues/VenuesWhereUniqueInput";

export type EventsWhereInput = {
  bookingsItems?: BookingsListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  price?: FloatNullableFilter;
  title?: StringNullableFilter;
  venue?: VenuesWhereUniqueInput;
};
