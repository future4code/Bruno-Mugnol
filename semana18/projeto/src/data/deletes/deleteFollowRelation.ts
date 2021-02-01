// Database connection
import { connection } from '../configurations/connection'

// Types
import { followRelation } from '../../types/types'

const deleteFollowRelation = async ({ follower_id, followee_id }: followRelation): Promise<void> => {
    try {
        await connection.raw(`
            DELETE FROM Followage
                WHERE
                    follower_id = "${follower_id}"
                    AND
                    followee_id = "${followee_id}"
            ;
        `)


    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default deleteFollowRelation
