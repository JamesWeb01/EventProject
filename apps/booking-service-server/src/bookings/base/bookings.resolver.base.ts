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
import { Bookings } from "./Bookings";
import { BookingsCountArgs } from "./BookingsCountArgs";
import { BookingsFindManyArgs } from "./BookingsFindManyArgs";
import { BookingsFindUniqueArgs } from "./BookingsFindUniqueArgs";
import { CreateBookingsArgs } from "./CreateBookingsArgs";
import { UpdateBookingsArgs } from "./UpdateBookingsArgs";
import { DeleteBookingsArgs } from "./DeleteBookingsArgs";
import { Events } from "../../events/base/Events";
import { BookingsService } from "../bookings.service";
@graphql.Resolver(() => Bookings)
export class BookingsResolverBase {
  constructor(protected readonly service: BookingsService) {}

  async _bookingsItemsMeta(
    @graphql.Args() args: BookingsCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Bookings])
  async bookingsItems(
    @graphql.Args() args: BookingsFindManyArgs
  ): Promise<Bookings[]> {
    return this.service.bookingsItems(args);
  }

  @graphql.Query(() => Bookings, { nullable: true })
  async bookings(
    @graphql.Args() args: BookingsFindUniqueArgs
  ): Promise<Bookings | null> {
    const result = await this.service.bookings(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Bookings)
  async createBookings(
    @graphql.Args() args: CreateBookingsArgs
  ): Promise<Bookings> {
    return await this.service.createBookings({
      ...args,
      data: {
        ...args.data,

        event: args.data.event
          ? {
              connect: args.data.event,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => Bookings)
  async updateBookings(
    @graphql.Args() args: UpdateBookingsArgs
  ): Promise<Bookings | null> {
    try {
      return await this.service.updateBookings({
        ...args,
        data: {
          ...args.data,

          event: args.data.event
            ? {
                connect: args.data.event,
              }
            : undefined,
        },
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

  @graphql.Mutation(() => Bookings)
  async deleteBookings(
    @graphql.Args() args: DeleteBookingsArgs
  ): Promise<Bookings | null> {
    try {
      return await this.service.deleteBookings(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Events, {
    nullable: true,
    name: "event",
  })
  async getEvent(@graphql.Parent() parent: Bookings): Promise<Events | null> {
    const result = await this.service.getEvent(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}