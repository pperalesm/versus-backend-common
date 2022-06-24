import { CommonConstants } from "../common-constants";
import { KafkaEvent } from "../abstractions/kafka-event.abstract";

export class UpdatedEvent extends KafkaEvent {
  type = CommonConstants.UPDATED_EVENT;
  payload: { oldItem: Record<string, any>; newItem: Record<string, any> };

  constructor(oldItem: Record<string, any>, newItem: Record<string, any>) {
    super();
    this.payload = { oldItem: oldItem, newItem: newItem };
  }
}
