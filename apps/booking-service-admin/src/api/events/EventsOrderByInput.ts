import { SortOrder } from "../../util/SortOrder";

export type EventsOrderByInput = {
  createdAt?: SortOrder;
  date?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  venueId?: SortOrder;
};
