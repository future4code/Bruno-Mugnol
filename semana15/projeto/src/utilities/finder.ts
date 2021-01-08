import { users } from '../data/users'

export const findUserIndex = (cpf: number): number => {
    const index: number = users.findIndex((user) => {
        return user.cpf === cpf
    })

    if (index === -1) {
        throw new Error("Invalid CPF.")
    } else {
        return index
    }
}