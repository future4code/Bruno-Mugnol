class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string
    ) {
        console.log("Chamando o construtor da classe User")
    }

    public getId = (): string => this.id
    public getName = (): string => this.name
    public getEmail = (): string => this.email
}

const firstUser = new User('1', 'astrodev@labenu.com.br', 'Astrodev', '123456')


class Costumer extends User {
    public purchaseTotal: number = 0

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        private creditCard: string
        ) {
            super(id, name, email, password)
            console.log("Chamando o construtor da classe Customer")
        }

    public getCreditCard = () => this.creditCard
}

const newCostumer = new Costumer("1", "bob", "bob@my.boy", "123456", "nubanko666")
console.log(newCostumer.getCreditCard())


class Employee extends User {
    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        protected admissionDate: string,
        protected baseSalary: number
    ) {
        super(id, name, email, password)
    }
}