import { InputType, Field } from "@nestjs/graphql";
import { IsDate } from "class-validator";

@InputType()
export class DateRange {
  @Field(() => Date)
  @IsDate()
  min: Date;

  @Field(() => Date)
  @IsDate()
  max: Date;
}
