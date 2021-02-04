// Exercício 1
// a) O construtor serve para inicializar instâncias com um valor escolhido. Chamamos passando como parâmetro de uma classe: UserAccount("012.345.678-9", "bob", 420)
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
// b) Uma.
// c) Através de métodos públicos.
// Exercício 2
var UserAccount = /** @class */ (function () {
    function UserAccount(cpf, name, age) {
        var _this = this;
        this.cpf = cpf;
        this.name = name;
        this.age = age;
        this.balance = 0;
        this.transactions = [];
        // Getters
        this.getAge = function () { return _this.age; };
        this.getCpf = function () { return _this.cpf; };
        this.getName = function () { return _this.name; };
        this.getBalance = function () { return _this.balance; };
        this.getTransactions = function () { return _this.transactions; };
        // Setters
        this.setNewTransaction = function (newTransaction) {
            _this.transactions = __spreadArrays(_this.transactions, [newTransaction]);
            _this.balance += newTransaction.getValue();
        };
    }
    return UserAccount;
}());
var Transaction = /** @class */ (function () {
    function Transaction(date, value, description) {
        var _this = this;
        this.date = date;
        this.value = value;
        this.description = description;
        this.getDate = function () { return _this.date; };
        this.getValue = function () { return _this.value; };
        this.getDescription = function () { return _this.description; };
    }
    return Transaction;
}());
var account = new UserAccount("012.345.678-9", "bob", 420);
account.setNewTransaction(new Transaction("2021-02-04", 1000, "Paguei um mico"));
account.setNewTransaction(new Transaction("2021-02-05", 350, "Pagamento futurístico"));
account.setNewTransaction(new Transaction("1998-05-15", 15, "Pagamento atrasado"));
// console.log("Balance:", account.getBalance())
// console.log("Transactions:", account.getTransactions())
// Exercício 3
var Bank = /** @class */ (function () {
    function Bank(accounts) {
        var _this = this;
        this.accounts = accounts;
        this.getAccounts = function () { return _this.accounts; };
    }
    return Bank;
}());
var bank = new Bank([account, new UserAccount("654.987.321-45", "billy", 55)]);
console.log(bank.getAccounts()[0].getTransactions());
