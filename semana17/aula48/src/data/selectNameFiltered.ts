// Database connection
import { connection } from "./config";

const selectNameFiltered = async (name: string): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE name LIKE "%${name}%";
        `)

        return result[0]

    } catch (error) {
        throw new Error (error.message || error.sqlMessage)
    }
}

export default selectNameFiltered
