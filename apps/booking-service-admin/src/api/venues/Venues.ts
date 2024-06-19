import { Events } from "../events/Events";

export type Venues = {
  capacity: number | null;
  createdAt: Date;
  eventsItems?: Array<Events>;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};
