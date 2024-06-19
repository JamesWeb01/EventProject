import { Module } from "@nestjs/common";
import { EventsModuleBase } from "./base/events.module.base";
import { EventsService } from "./events.service";
import { EventsController } from "./events.controller";
import { EventsResolver } from "./events.resolver";

@Module({
  imports: [EventsModuleBase],
  controllers: [EventsController],
  providers: [EventsService, EventsResolver],
  exports: [EventsService],
})
export class EventsModule {}
