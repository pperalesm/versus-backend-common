import { v4 as uuid } from "uuid";

export abstract class KafkaEvent {
  uuid: string;
  type: string;
  payload: Record<string, any>;

  constructor() {
    this.uuid = uuid();
  }

  toString(): string {
    return JSON.stringify(this);
  }
}
