import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class CreatedEvent extends KafkaEvent {
  type = CommonConstants.CREATED_EVENT;
  payload: { item: Record<string, any> };

  constructor(item: Record<string, any>) {
    super();
    this.payload = { item: item };
  }
}
