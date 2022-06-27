import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema({ expireAfterSeconds: 604800 })
export class BrokerEvent {
  id?: string;

  @Prop({ unique: true })
  uuid?: string;

  constructor({ id, uuid }: { id?: string; uuid?: string }) {
    this.id = id;
    this.uuid = uuid;
  }
}

export type BrokerEventDocument = BrokerEvent & Document;

export const BrokerEventSchema = SchemaFactory.createForClass(BrokerEvent);
