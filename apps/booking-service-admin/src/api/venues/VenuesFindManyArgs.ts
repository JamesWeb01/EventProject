import { VenuesWhereInput } from "./VenuesWhereInput";
import { VenuesOrderByInput } from "./VenuesOrderByInput";

export type VenuesFindManyArgs = {
  where?: VenuesWhereInput;
  orderBy?: Array<VenuesOrderByInput>;
  skip?: number;
  take?: number;
};
