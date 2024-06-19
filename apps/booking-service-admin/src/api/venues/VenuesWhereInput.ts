import { IntNullableFilter } from "../../util/IntNullableFilter";
import { EventsListRelationFilter } from "../events/EventsListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type VenuesWhereInput = {
  capacity?: IntNullableFilter;
  eventsItems?: EventsListRelationFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  name?: StringNullableFilter;
};
