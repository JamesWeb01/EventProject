/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { BookingsWhereInput } from "./BookingsWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { BookingsOrderByInput } from "./BookingsOrderByInput";

@ArgsType()
class BookingsFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => BookingsWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => BookingsWhereInput, { nullable: true })
  @Type(() => BookingsWhereInput)
  where?: BookingsWhereInput;

  @ApiProperty({
    required: false,
    type: [BookingsOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [BookingsOrderByInput], { nullable: true })
  @Type(() => BookingsOrderByInput)
  orderBy?: Array<BookingsOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { BookingsFindManyArgs as BookingsFindManyArgs };
