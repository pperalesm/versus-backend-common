export abstract class KafkaEvent {
  type: string;
  payload: Record<string, any>;

  toString(): string {
    return JSON.stringify(this);
  }
}
