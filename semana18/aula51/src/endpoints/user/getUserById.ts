// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectInfoById from '../../data/selectInfoById'

// Services
import { getTokenData } from '../../services/authenticator'


const getUserById = async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string

        res.statusCode = 401
        
        if (!token) {
            throw new Error("Unauthorized access: invalid token.")
        }
        getTokenData(token)

        if (!req.params.id) {
            throw new Error("Please inform an ID through path params.")
        }

        const user = await selectInfoById(req.params.id)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send({
            id: user.id,
            email: user.email
        })

    } catch (error) {
        
    }
}

export default getUserById
