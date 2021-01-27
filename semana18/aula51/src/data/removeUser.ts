// Database connection
import { connection } from './configurations/connection'


const removeUser = async (id: string): Promise<void> => {
    try {
        await connection.raw(`
            DELETE FROM Users
                WHERE
                    id = "${id}"
            ;
        `)

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default removeUser
