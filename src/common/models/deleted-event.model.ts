import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class DeletedEvent extends KafkaEvent {
  type = CommonConstants.DELETED_EVENT;
  payload: { item: Record<string, any> };

  constructor(item: Record<string, any>) {
    super();
    this.payload = { item: item };
  }
}
