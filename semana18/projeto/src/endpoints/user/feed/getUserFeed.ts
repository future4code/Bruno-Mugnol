// Types from Express.js library
import { Request, Response } from 'express'
import selectRecipesFromUserFeed from '../../../data/selects/selectRecipesFromUserFeed'

// Database function

// Services
import { getTokenData } from '../../../services/authenticator'

const getUserFeed = async (req: Request, res: Response): Promise<void> => {

    try {
        res.statusCode = 422
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        const tokenData = getTokenData(token)

        const feed = await selectRecipesFromUserFeed(tokenData.id)

        res.status(200).send({
            status: {
                code: 200,
                message: `Feed retrieved.`
            },
            feed
        })

    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}

export default getUserFeed
