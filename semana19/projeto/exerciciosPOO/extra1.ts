// Exercício 1
// a) O construtor serve para inicializar instâncias com um valor escolhido. Chamamos passando como parâmetro de uma classe: UserAccount("012.345.678-9", "bob", 420)

// b) Uma.

// c) Através de métodos públicos.


// Exercício 2

class UserAccount {
    private balance: number = 0;
    private transactions: Transaction[] = [];


    constructor(
        private cpf: string,
        private name: string,
        private age: number,
    ) { }


    // Getters
    public getAge = (): number => this.age
    public getCpf = (): string => this.cpf
    public getName = (): string => this.name
    public getBalance = (): number => this.balance
    public getTransactions = (): Transaction[] => this.transactions


    // Setters
    public setNewTransaction = (newTransaction: Transaction): void => {
        this.transactions = [...this.transactions, newTransaction]
        this.balance += newTransaction.getValue()
    }

}


class Transaction {
    constructor(
        private date: string,
        private value: number,
        private description: string) { }

    public getDate = (): string => this.date
    public getValue = (): number => this.value
    public getDescription = (): string => this.description
}


const account = new UserAccount("012.345.678-9", "bob", 420)

account.setNewTransaction(new Transaction("2021-02-04", 1000, "Paguei um mico"))
account.setNewTransaction(new Transaction("2021-02-05", 350, "Pagamento futurístico"))
account.setNewTransaction(new Transaction("1998-05-15", 15, "Pagamento atrasado"))

// console.log("Balance:", account.getBalance())
// console.log("Transactions:", account.getTransactions())


// Exercício 3

class Bank {
    constructor(
        private accounts: UserAccount[]
    ) { }

    public getAccounts = (): UserAccount[] => this.accounts

    public addAccount = (newUserAccount: UserAccount): void => {
        this.accounts = [... this.accounts, newUserAccount]
    }
}

const bank = new Bank([account, new UserAccount("654.987.321-45", "billy", 55)])

console.log(bank.getAccounts()[0].getTransactions())