import { Bookings } from "../bookings/Bookings";
import { Venues } from "../venues/Venues";

export type Events = {
  bookingsItems?: Array<Bookings>;
  createdAt: Date;
  date: Date | null;
  description: string | null;
  id: string;
  price: number | null;
  title: string | null;
  updatedAt: Date;
  venue?: Venues | null;
};
