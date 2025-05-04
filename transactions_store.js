// Uma classe que armazena e gerencia todas as transactions existentes
// Inserir uma nova transaction
// Buscar uma transaction pelo id
// Retornar saldo total
// editar uma transaction, buscando pelo id e podendo editar todos os campos sem ser o id e o insertedAt
// Deletar uma transaction
// Retornar apenas o total de despesas ou receitas
// filtrar transactions baseado no nome
// filtro de apartir de x valor, exemplo: retornar todas as transactions acima de 200 reais
// filtro de retornar apenas receitas ou despesas
//
// Para armazenar as transactions voce irá usar um array em memoria

import { Transaction } from "./transaction.js";

export class TransactionsStore {
  constructor() {
    this.store = [];
  }

  /**
  * @param {Transaction} transaction
  */

  insert(transaction){
   return this.store.push(transaction)
  }

  searchById(id){
    return this.store.find(transaction => transaction.id == id)
  }

  totalAmount(){
    return this.store.reduce((accumulator, currentValue) => accumulator + currentValue.value, 0)
  }

  softDelete(id){
    const transaction_to_delete = this.searchById(id)
    transaction_to_delete.delete()
  }
  
  hardDelete(id){
    const index = this.store.findIndex(transaction => transaction.id == id)
    this.store.splice(index, 1)
  }

  editById(){}

  expensesAmount(){}

  incomeAmount(){}

  searchByName(){}

  filterByValue(){}

  filterByType(){}
}

const store = new TransactionsStore();

const transaction = new Transaction({
  name: "Supermercado",
  description: "Priquito",
  realizedAt: new Date(),
  value: 15000,
});
store.insert(transaction)

const transaction2 = new Transaction ({
  name: "adega",
  description: "teste",
  realizedAt: new Date(),
  value: -20,
});
store.insert(transaction2)

//console.log(store.store)
//const amount = store.totalAmount()
//const transaction_found = store.searchById(transaction2.id)
//const transaction_deleted = store.softDelete(transaction2.id)
//const transaction_removed = this.store.hardDelete(transaction2.id)
