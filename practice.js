//Напиши скрипт управління особистим кабінетом інтернет банку
//Є об'єкт account у якому необхідно реалізувати
//методи для роботи з балансом та історією транзакцій
// Типів транзакцій лише два.
// Можна покласти чи зняти гроші з рахунку
// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };
//Кожна транзакція це об'єкт з властивостями id, type, amount

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

const account = {
//поточний баланс рахунку
balance: 0,
//Історія транзакцій
transactions: [],
//Метод створює та повертає об'єкт транзакцій, //Приймає суму та тип транзакцій
createTransaction (type, amount) {
    return {type, amount, id: Math.random}
},
//Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
deposit (amount) {
    const transaction = this.createTransaction(Transaction.DEPOSIT, amount);
    this.balance+=amount;
    this.transactions.push(transaction);
    console.log(`amount ${amount} is added`)
},
//Метод відповідає за зняття суми з балансу.
  //Приймає суму транцякції.
  //Викликає createTransaction для створення об'єкта транзакції
  //після чого додає їх у історію транзакцій
  //Якщо amount більше ніж поточний баланс, виводимо повідомлення про те,
  //що недостатньо коштів на рахунку

withdraw (amount) {
    if (this.balance < amount) {
        console.log('not enough money');
return;
    }
    const transaction = this.createTransaction(Transaction.WITHDRAW, amount);
    this.balance-=amount;
    this.transactions.push(transaction);
    console.log(`amount ${amount} is minused, amount ${this.balance} is left`)
},
//Метод повертає поточний баланс
getBalance () {
    console.log(this.balance);
    return this.balance;
},
//Метод шукає та повертає об'єкт транзакції по id
getTransactionDetails(id) {},

//Метод повертає кількість засобів певного типу
  //транзакції з усієї історії транзакцій
  getTransactionType(type) {},
}