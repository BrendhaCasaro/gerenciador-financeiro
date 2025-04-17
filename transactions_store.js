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

class TransactionsStore {
  constructor() {
    this.store = [];
  }

  insert(){}

  searchById(){}

  totalAmount(){}

  delete(){}

  editById(){}

  expensesAmount(){}

  incomeAmount(){}

  searchByName(){}

  filterByValue(){}

  filterByType(){}
}


