// Database connection
import { connection } from '../configurations/connection'

// Types
import { recipe } from '../../types/types'

const insertRecipe = async ({ id, title, description, created_at, creator_id }: recipe): Promise<void> => {
    try {
        await connection.raw(`
            INSERT INTO Recipes (id, title, description, created_at, creator_id)
            VALUES (
                "${id}",
                "${title}",
                "${description}",
                "${created_at}",
                "${creator_id}"
            )
        `)


    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default insertRecipe
