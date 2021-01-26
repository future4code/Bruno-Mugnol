// Database connection
import { connection } from './configurations/connection'


// Types
import { User } from './types/types'

const insertUser = async ({id, email, password}: User): Promise<any> => {
    try {
        await connection.raw(`
            INSERT INTO Users (id, email, password)
                VALUES (
                    "${id}",
                    "${email}",
                    "${password}"
            );
        `)

        return {id}

    } catch (error) {
        throw new Error(error.sqlMessage)
    } 
}

export default insertUser
