// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectUserById from '../data/selectUserById'

// Services
import { getTokenData } from '../services/authenticator'

const getLoggedUser = async (req: Request, res: Response) => {
    
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        res.statusCode = 400

        const user = await selectUserById(getTokenData(token))

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found. Token is invalid.")
        }

        res.status(200).send({
            id: user.id,
            email: user.email
        })
        
    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

export default getLoggedUser
