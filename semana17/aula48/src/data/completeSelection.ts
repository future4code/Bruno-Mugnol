// Database connection
import { connection } from "./config";

// Type
import CompleteSelection from "../types/CompleteSelection";

const completeSelection = async (options: CompleteSelection): Promise<any> => {
    try {
        const result = await connection.raw(`
            SELECT id, name, email, type
            FROM aula48_exercicio
            WHERE
                name LIKE "%${options.nameSearch}%" AND
                type LIKE "%${options.typeSearch}%"
            ORDER BY ${options.orderBy} ${options.orderType}
            LIMIT ${Number(options.perPage)}
            OFFSET ${Number(options.perPage) * (Number(options.pageNumber) - 1)};
        `)

        return result[0]

    } catch (error) {
        throw new Error (error.message || error.sqlMessage)
    }
}

export default completeSelection
