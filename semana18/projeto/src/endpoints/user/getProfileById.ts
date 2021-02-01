// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectUserById from '../../data/selectUserById'

// Services
import { getTokenData } from '../../services/authenticator'

const getProfileById = async (req: Request, res: Response): Promise<void> => {

    try {
        res.statusCode = 422
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        getTokenData(token)

        const id: string = req.params.id

        const user = await selectUserById(id)

        res.status(200).send({
            status: {
                code: 200,
                message: `User fetched.`
            },
            user
        })

    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}

export default getProfileById
