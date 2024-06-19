import * as graphql from "@nestjs/graphql";
import { VenuesResolverBase } from "./base/venues.resolver.base";
import { Venues } from "./base/Venues";
import { VenuesService } from "./venues.service";

@graphql.Resolver(() => Venues)
export class VenuesResolver extends VenuesResolverBase {
  constructor(protected readonly service: VenuesService) {
    super(service);
  }
}
