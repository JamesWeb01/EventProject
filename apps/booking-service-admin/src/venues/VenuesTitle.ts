import { Venues as TVenues } from "../api/venues/Venues";

export const VENUES_TITLE_FIELD = "name";

export const VenuesTitle = (record: TVenues): string => {
  return record.name?.toString() || String(record.id);
};
