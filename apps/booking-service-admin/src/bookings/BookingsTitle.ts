import { Bookings as TBookings } from "../api/bookings/Bookings";

export const BOOKINGS_TITLE_FIELD = "status";

export const BookingsTitle = (record: TBookings): string => {
  return record.status?.toString() || String(record.id);
};
