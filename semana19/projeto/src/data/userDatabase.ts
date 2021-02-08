import { User } from '../business/entities/types'
import { connection } from './configurations/connection'

export const insertUser = async (newUser: User): Promise<void> => {
    await connection('labook_users')
        .insert({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            password: newUser.password
        })
}

export const selectUserByEmail = async (email: string): Promise<User> => {
    const result = await connection("labook_users")
        .select("*")
        .where({ email })

    return result[0]
}