import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class UpdatedEvent extends KafkaEvent {
  payload: { oldItem: Record<string, any>; newItem: Record<string, any> };

  constructor(oldItem: Record<string, any>, newItem: Record<string, any>) {
    super();
    this.type = CommonConstants.UPDATED_EVENT;
    this.payload = { oldItem: oldItem, newItem: newItem };
  }
}
