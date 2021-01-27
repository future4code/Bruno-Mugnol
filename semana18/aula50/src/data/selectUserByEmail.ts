// Database connection
import { connection } from './configurations/connection'

const selectUserByEmail = async (email: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Users
                WHERE
                    email = "${email}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    } 
}

export default selectUserByEmail
