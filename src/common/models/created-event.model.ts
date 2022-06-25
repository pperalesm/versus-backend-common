import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class CreatedEvent extends KafkaEvent {
  payload: { item: Record<string, any> };

  constructor(item: Record<string, any>) {
    super();
    this.type = CommonConstants.CREATED_EVENT;
    this.payload = { item: item };
  }
}
