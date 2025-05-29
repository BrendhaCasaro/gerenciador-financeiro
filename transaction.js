import { randomUUID } from "node:crypto";

export class Transaction {
  constructor({ name, description, value, realizedAt }) {
    this.id = randomUUID();
    this.name = name;
    this.description = description;
    this.value = value;
    this.insertedAt = new Date();
    this.realizedAt = realizedAt;
    this.deletedAt = null;
  }

  delete() {
    this.deletedAt = new Date();
  }
}
