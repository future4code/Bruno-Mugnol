// Database connection
import { user } from '../types/types'
import { connection } from './configurations/connection'

const insertUser = async ({ id, name, email, password, role }: user): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Users (id, name, email, password, role)
            VALUES (
                "${id}",
                "${name}",
                "${email}",
                "${password}",
                "${role}"
            )
        `)


    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default insertUser
