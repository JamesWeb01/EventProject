import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { VenuesServiceBase } from "./base/venues.service.base";

@Injectable()
export class VenuesService extends VenuesServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
