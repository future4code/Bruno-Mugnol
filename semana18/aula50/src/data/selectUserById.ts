// Database connection
import { connection } from './configurations/connection'

// Types
import { AuthData } from '../services/authenticator'

const selectUserById = async ({ id }: AuthData): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Users
                WHERE
                    id = "${id}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectUserById
