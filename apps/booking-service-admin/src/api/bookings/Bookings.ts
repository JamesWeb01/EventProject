import { Events } from "../events/Events";

export type Bookings = {
  bookingDate: Date | null;
  createdAt: Date;
  event?: Events | null;
  id: string;
  numberOfTickets: number | null;
  status: string | null;
  updatedAt: Date;
  userId: number | null;
};
