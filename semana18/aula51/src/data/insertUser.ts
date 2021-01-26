// Database connection
import { connection } from './configurations/connection'


// Types
import { User } from '../types/types'
import { AuthData } from '../services/authenticator'

const insertUser = async ({id, email, password}: User): Promise<AuthData> => {
    try {
        await connection.raw(`
            INSERT INTO Users (id, email, password)
                VALUES (
                    "${id}",
                    "${email}",
                    "${password}"
            );
        `)

        return {id, role: "normal"}

    } catch (error) {
        throw new Error(error.sqlMessage)
    } 
}

export default insertUser
