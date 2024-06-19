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
import { BookingsCreateNestedManyWithoutEventsItemsInput } from "./BookingsCreateNestedManyWithoutEventsItemsInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsNumber,
} from "class-validator";
import { Type } from "class-transformer";
import { VenuesWhereUniqueInput } from "../../venues/base/VenuesWhereUniqueInput";

@InputType()
class EventsCreateInput {
  @ApiProperty({
    required: false,
    type: () => BookingsCreateNestedManyWithoutEventsItemsInput,
  })
  @ValidateNested()
  @Type(() => BookingsCreateNestedManyWithoutEventsItemsInput)
  @IsOptional()
  @Field(() => BookingsCreateNestedManyWithoutEventsItemsInput, {
    nullable: true,
  })
  bookingsItems?: BookingsCreateNestedManyWithoutEventsItemsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  date?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  price?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: false,
    type: () => VenuesWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => VenuesWhereUniqueInput)
  @IsOptional()
  @Field(() => VenuesWhereUniqueInput, {
    nullable: true,
  })
  venue?: VenuesWhereUniqueInput | null;
}

export { EventsCreateInput as EventsCreateInput };
