// Database connection
import { connection } from "./config";

const selectOrderedUsers = async (orderBy: string, orderType: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            ORDER BY ${orderBy} ${orderType};
        `)

        return result[0]

    } catch (error) {
        throw new Error (error.message || error.sqlMessage)
    }
}

export default selectOrderedUsers
