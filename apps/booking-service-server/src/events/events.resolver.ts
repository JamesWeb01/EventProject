import * as graphql from "@nestjs/graphql";
import { EventsResolverBase } from "./base/events.resolver.base";
import { Events } from "./base/Events";
import { EventsService } from "./events.service";

@graphql.Resolver(() => Events)
export class EventsResolver extends EventsResolverBase {
  constructor(protected readonly service: EventsService) {
    super(service);
  }
}
