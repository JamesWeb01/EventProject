/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, ValidateNested, IsString } from "class-validator";
import { EventsUpdateManyWithoutVenuesItemsInput } from "./EventsUpdateManyWithoutVenuesItemsInput";
import { Type } from "class-transformer";

@InputType()
class VenuesUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  capacity?: number | null;

  @ApiProperty({
    required: false,
    type: () => EventsUpdateManyWithoutVenuesItemsInput,
  })
  @ValidateNested()
  @Type(() => EventsUpdateManyWithoutVenuesItemsInput)
  @IsOptional()
  @Field(() => EventsUpdateManyWithoutVenuesItemsInput, {
    nullable: true,
  })
  eventsItems?: EventsUpdateManyWithoutVenuesItemsInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  location?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;
}

export { VenuesUpdateInput as VenuesUpdateInput };
