export type Transaction = {
    value: number,
    date: number,
    description?: string
}

export type User = {
    name: string,
    cpf: number,
    birthdate: number,
    balance: number,
    statements: Transaction[]
}

export const users: User[] = [
    {
        name: "Bob",
        cpf: 98765432100,
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
        cpf: 98765432101,
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