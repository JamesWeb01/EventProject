import { EventsWhereUniqueInput } from "../events/EventsWhereUniqueInput";

export type BookingsCreateInput = {
  bookingDate?: Date | null;
  event?: EventsWhereUniqueInput | null;
  numberOfTickets?: number | null;
  status?: string | null;
  userId?: number | null;
};
