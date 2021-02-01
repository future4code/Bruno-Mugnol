// Database connection
import { connection } from '../configurations/connection'

// Types
import { recipe } from '../../types/types'

const selectRecipesFromUserFeed = async (userId: string): Promise<recipe[]> => {
    try {
        const result = await connection.raw(`
            SELECT fu.name as 'from', r.title, r.description FROM Users u
                JOIN Followage f ON f.follower_id = u.id
                JOIN Recipes r ON r.creator_id = f.followee_id
                JOIN Users fu ON r.creator_id = fu.id
            ;
        `)

        return result[0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectRecipesFromUserFeed
