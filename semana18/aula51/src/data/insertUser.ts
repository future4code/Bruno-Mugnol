// Database connection
import { connection } from './configurations/connection'


// Types
import { User } from '../types/types'
import { AuthData } from '../services/authenticator'

const insertUser = async ({id, email, password, role}: User): Promise<AuthData> => {
    try {
        await connection.raw(`
            INSERT INTO Users (id, email, password, role)
                VALUES (
                    "${id}",
                    "${email}",
                    "${password}",
                    "${role}"
            );
        `)

        return {id, role}

    } catch (error) {
        throw new Error(error.sqlMessage)
    } 
}

export default insertUser
