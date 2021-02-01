// Database connection
import { connection } from '../configurations/connection'

// Types
import { followRelation } from '../../types/types'

const insertFollowRelation = async ({ follower_id, followee_id }: followRelation): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Followage (follower_id, followee_id)
            VALUES (
                "${follower_id}",
                "${followee_id}"
            )
        `)


    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default insertFollowRelation
