// Database connection
import { connection } from './configurations/connection'

// Types
import { recipe } from '../types/types'

const selectRecipesFromUserId = async (userId: string): Promise<recipe[]> => {
    try {
        const result = await connection.raw(`
            SELECT r.* FROM Users u
                JOIN Recipes r ON r.creator_id = u.id
                WHERE u.id = "${userId}"
            ;
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectRecipesFromUserId
