import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EventsServiceBase } from "./base/events.service.base";

@Injectable()
export class EventsService extends EventsServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
