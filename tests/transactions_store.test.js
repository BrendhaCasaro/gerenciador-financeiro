import { TransactionsStore } from "./transactions_store.js";
import { Transaction } from "./transaction.js";
import { it, expect, describe } from "vitest";

describe("Transactions store methods", () => {
  it("should confirm if the array store was created", () => {
    const store = new TransactionsStore();

    expect(store.store).toBeTruthy();
  });

  it("should confirm if a new transaction was insert in array store", () => {
    const transaction = new Transaction({
      name: "transaction teste",
      value: 0,
      realizedAt: new Date(),
      description: "transaction de testes",
    });

    const store = new TransactionsStore();
    const arrayLength = store.store.length;
    store.insert(transaction);

    expect(arrayLength + 1);
  });

  it("should return the correctly transaction passing the ID", () => {
    const transaction = new Transaction({
      name: "transaction teste",
      value: 0,
      realizedAt: new Date(),
      description: "transaction de testes",
    });
    const store = new TransactionsStore();
    store.insert(transaction);

    const transactionFound = store.searchById(transaction.id);

    expect(transactionFound.id).toEqual(transaction.id);
  });

  it("should return the amount of all transactions", () => {
    const transaction = new Transaction({
      name: "transaction teste",
      value: 50,
      realizedAt: new Date(),
      description: "transaction de testes",
    });

    const transaction2 = new Transaction({
      name: "transaction teste",
      value: 100,
      realizedAt: new Date(),
      description: "transaction de testes",
    });
    const store = new TransactionsStore();
    store.insert(transaction);
    store.insert(transaction2);

    const amount = store.store.reduce(
      (accumulator, currentValue) => accumulator + currentValue.value,
      0,
    );

    expect(store.totalAmount()).toBe(amount);
  });

  it("should change deletedAt to the current date", () => {
    const transaction = new Transaction({
      name: "transaction teste",
      value: 50,
      realizedAt: new Date(),
      description: "transaction de testes",
    });
    const store = new TransactionsStore();
    store.insert(transaction);

    store.softDelete(transaction.id);

    expect(store.store[0].deletedAt).toEqual(new Date());
  });
});
