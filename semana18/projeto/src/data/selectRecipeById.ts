// Database connection
import { connection } from './configurations/connection'

// Types
import { recipe } from '../types/types'

const selectRecipeById = async (recipeId: string): Promise<recipe> => {
    try {
        const result = await connection.raw(`
            SELECT * FROM Recipes
                WHERE id = "${recipeId}"
            ;
        `)

        return result[0][0]

    } catch (error) {
        throw new Error(error.sqlMessage)
    }
}

export default selectRecipeById
