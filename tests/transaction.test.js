import { Transaction } from "../transaction.js";
import { it, expect } from "vitest";

it("should instantiate a transaction correctly", () => {
  const transaction = new Transaction({
    name: "transaction teste",
    value: 0,
    realizedAt: new Date(),
    description: "transaction de testes",
  });
  expect(transaction.id).toBeTruthy();
  expect(transaction.deletedAt).toBeNull();
  expect(transaction.insertedAt).toBeTruthy();
  expect(transaction).toBeInstanceOf(Transaction);
});

it("should change deletedAt to current date", () => {
  const transaction = new Transaction({
    name: "transaction teste",
    value: 0,
    realizedAt: new Date(),
    description: "transaction de testes",
  });
  transaction.delete();
  expect(transaction.deletedAt).toBeTruthy();
});

// "test": "NODE_OPTIONS=\"$NODE_OPTIONS --experimental-vm-modules\" npx jest",
