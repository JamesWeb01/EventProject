import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { VenuesService } from "./venues.service";
import { VenuesControllerBase } from "./base/venues.controller.base";

@swagger.ApiTags("venues")
@common.Controller("venues")
export class VenuesController extends VenuesControllerBase {
  constructor(protected readonly service: VenuesService) {
    super(service);
  }
}
