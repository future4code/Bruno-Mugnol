export type BankStatement = {
    value: number,
    date: number,
    description?: string
}

export type User = {
    name: string,
    CPF: number,
    birthdate: number,
    balance: number,
    statements: BankStatement[]
}

export const users: User[] = [
    {
        name: "Bob",
        CPF: 98765432100,
        birthdate: 787197700000,
        balance: 10000,
        statements: [
            {
                value: 100,
                date: 1155438000000
            },
            {
                value: -233,
                date: 0
            }
        ]
    },
    {
        name: "Billy",
        CPF: 98765432101,
        birthdate: 787197600000,
        balance: 100,
        statements: [
            {
                value: 100,
                date: 1155438000000
            },
            {
                value: -233,
                date: 0
            }
        ]
    }
]