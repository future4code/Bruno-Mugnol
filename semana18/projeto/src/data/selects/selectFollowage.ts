// Database connection
import { connection } from '../configurations/connection'

// Types
import { followRelation } from '../../types/types'

const selectFollowRelation = async ({ follower_id, followee_id }: followRelation): Promise<followRelation[]> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Followage
                WHERE
                    follower_id = "${follower_id}"
                    AND
                    followee_id = "${followee_id}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectFollowRelation
