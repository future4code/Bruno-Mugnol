// Database connection
import { connection } from "./config";

const selectTypeFiltered = async (type: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE type LIKE "%${type}%";
        `)

        return result[0]

    } catch (error) {
        throw new Error (error.message || error.sqlMessage)
    }
}

export default selectTypeFiltered
