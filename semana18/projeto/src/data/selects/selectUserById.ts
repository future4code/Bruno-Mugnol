// Database connection
import { connection } from '../configurations/connection'

// Types
import { recipe } from '../../types/types'

const selectUserById = async (userId: string): Promise<recipe[]> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email FROM Users
                WHERE id = "${userId}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectUserById
