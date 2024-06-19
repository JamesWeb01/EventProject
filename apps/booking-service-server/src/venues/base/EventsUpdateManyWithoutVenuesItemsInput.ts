/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { EventsWhereUniqueInput } from "../../events/base/EventsWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class EventsUpdateManyWithoutVenuesItemsInput {
  @Field(() => [EventsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventsWhereUniqueInput],
  })
  connect?: Array<EventsWhereUniqueInput>;

  @Field(() => [EventsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventsWhereUniqueInput],
  })
  disconnect?: Array<EventsWhereUniqueInput>;

  @Field(() => [EventsWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [EventsWhereUniqueInput],
  })
  set?: Array<EventsWhereUniqueInput>;
}

export { EventsUpdateManyWithoutVenuesItemsInput as EventsUpdateManyWithoutVenuesItemsInput };
