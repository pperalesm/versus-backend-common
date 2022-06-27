import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ timestamps: { createdAt: true, updatedAt: false } })
export class BrokerEvent {
  id?: string;

  @Prop({ unique: true })
  uuid?: string;

  createdAt?: Date;

  constructor({
    id,
    uuid,
    createdAt,
  }: {
    id?: string;
    uuid?: string;
    createdAt?: Date;
  }) {
    this.id = id;
    this.uuid = uuid;
    this.createdAt = createdAt;
  }
}

export type BrokerEventDocument = BrokerEvent & Document;

export const BrokerEventSchema = SchemaFactory.createForClass(BrokerEvent);
