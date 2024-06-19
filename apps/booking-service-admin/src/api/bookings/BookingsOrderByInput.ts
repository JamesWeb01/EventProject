import { SortOrder } from "../../util/SortOrder";

export type BookingsOrderByInput = {
  bookingDate?: SortOrder;
  createdAt?: SortOrder;
  eventId?: SortOrder;
  id?: SortOrder;
  numberOfTickets?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
