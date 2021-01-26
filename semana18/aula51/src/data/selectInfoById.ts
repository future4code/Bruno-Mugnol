// Database connection
import { connection } from './configurations/connection'


const selectInfoById = async (id: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, email, role FROM Users
                WHERE
                    id = "${id}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectInfoById
