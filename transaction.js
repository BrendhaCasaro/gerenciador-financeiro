import { randomUUID }  from 'node:crypto';


class Transaction {
  constructor(name, description, value, realizedAt) {
    this.id = randomUUID()
    this.name = name
    this.description = description
    this.value = value
    this.insertedAt = new Date()
    this.realizedAt = realizedAt
  }
}

const t = new Transaction({
  name: "brendha",
  value: 1235,
  description: "ji123",
  insertedAt: new Date()
})
console.log(t)
