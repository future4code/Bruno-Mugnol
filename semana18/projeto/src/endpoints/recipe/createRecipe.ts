// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertRecipe from '../../data/inserts/insertRecipe'
import { getTokenData } from '../../services/authenticator'

// Services
import { generateId } from '../../services/idGenerator'
import { verifyKeys, verifyString } from '../../services/validators'

// Libraries
import dayjs from 'dayjs'


const createRecipe = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["title", "description"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { title, description } = req.body

        const token = req.headers.authorization

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        const tokenData = getTokenData(token)
        const recipeId: string = generateId()

        await insertRecipe({
            id: recipeId,
            title, description,
            created_at: dayjs().format('YYYY-MM-DD'),
            creator_id: tokenData.id
        })

        res.status(201).send({
            status: {
                code: 201,
                message: `Recipe created successfully.`
            },
            recipeId
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createRecipe
