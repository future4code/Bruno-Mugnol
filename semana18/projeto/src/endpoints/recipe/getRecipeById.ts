// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectRecipeById from '../../data/selectRecipeById'

// Services
import { getTokenData } from '../../services/authenticator'

// Types
import { recipe } from '../../types/types'

const getRecipeById = async (req: Request, res: Response): Promise<void> => {

    try {
        res.statusCode = 422
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        getTokenData(token)

        const recipeId: string = req.params.id

        const recipe: recipe = await selectRecipeById(recipeId)

        res.status(200).send({
            status: {
                code: 200,
                message: `Recipe fetched.`
            },
            recipe
        })

    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}

export default getRecipeById
