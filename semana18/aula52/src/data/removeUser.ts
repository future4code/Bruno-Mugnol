// Database connection
import { connection } from './configurations/connection'


const removeUser = async (user_id: string): Promise<void> => {
    try {
        await connection.raw(`
            DELETE FROM Users
                WHERE
                    user_id = "${user_id}"
            ;
        `)

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default removeUser
