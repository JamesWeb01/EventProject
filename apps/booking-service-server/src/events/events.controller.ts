import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { EventsService } from "./events.service";
import { EventsControllerBase } from "./base/events.controller.base";

@swagger.ApiTags("events")
@common.Controller("events")
export class EventsController extends EventsControllerBase {
  constructor(protected readonly service: EventsService) {
    super(service);
  }
}
