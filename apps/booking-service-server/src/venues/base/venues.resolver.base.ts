/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Venues } from "./Venues";
import { VenuesCountArgs } from "./VenuesCountArgs";
import { VenuesFindManyArgs } from "./VenuesFindManyArgs";
import { VenuesFindUniqueArgs } from "./VenuesFindUniqueArgs";
import { CreateVenuesArgs } from "./CreateVenuesArgs";
import { UpdateVenuesArgs } from "./UpdateVenuesArgs";
import { DeleteVenuesArgs } from "./DeleteVenuesArgs";
import { EventsFindManyArgs } from "../../events/base/EventsFindManyArgs";
import { Events } from "../../events/base/Events";
import { VenuesService } from "../venues.service";
@graphql.Resolver(() => Venues)
export class VenuesResolverBase {
  constructor(protected readonly service: VenuesService) {}

  async _venuesItemsMeta(
    @graphql.Args() args: VenuesCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Venues])
  async venuesItems(
    @graphql.Args() args: VenuesFindManyArgs
  ): Promise<Venues[]> {
    return this.service.venuesItems(args);
  }

  @graphql.Query(() => Venues, { nullable: true })
  async venues(
    @graphql.Args() args: VenuesFindUniqueArgs
  ): Promise<Venues | null> {
    const result = await this.service.venues(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Venues)
  async createVenues(@graphql.Args() args: CreateVenuesArgs): Promise<Venues> {
    return await this.service.createVenues({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Venues)
  async updateVenues(
    @graphql.Args() args: UpdateVenuesArgs
  ): Promise<Venues | null> {
    try {
      return await this.service.updateVenues({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Venues)
  async deleteVenues(
    @graphql.Args() args: DeleteVenuesArgs
  ): Promise<Venues | null> {
    try {
      return await this.service.deleteVenues(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Events], { name: "eventsItems" })
  async findEventsItems(
    @graphql.Parent() parent: Venues,
    @graphql.Args() args: EventsFindManyArgs
  ): Promise<Events[]> {
    const results = await this.service.findEventsItems(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}