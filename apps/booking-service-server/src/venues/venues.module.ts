import { Module } from "@nestjs/common";
import { VenuesModuleBase } from "./base/venues.module.base";
import { VenuesService } from "./venues.service";
import { VenuesController } from "./venues.controller";
import { VenuesResolver } from "./venues.resolver";

@Module({
  imports: [VenuesModuleBase],
  controllers: [VenuesController],
  providers: [VenuesService, VenuesResolver],
  exports: [VenuesService],
})
export class VenuesModule {}
