import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class DeletedEvent extends KafkaEvent {
  payload: { item: Record<string, any> };

  constructor(item: Record<string, any>) {
    super();
    this.type = CommonConstants.DELETED_EVENT;
    this.payload = { item: item };
  }
}
