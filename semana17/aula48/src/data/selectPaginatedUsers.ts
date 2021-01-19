// Database connection
import { connection } from "./config";

const selectPaginatedUsers = async (pageNumber: number): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            LIMIT 5
            OFFSET ${5 * (pageNumber - 1)};
        `)

        return result[0]

    } catch (error) {
        throw new Error (error.message || error.sqlMessage)
    }
}

export default selectPaginatedUsers
