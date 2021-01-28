// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectInfoById from '../../../data/selectInfoById'

// Services
import { getTokenData } from '../../../services/authenticator'

const getLoggedUser = async (req: Request, res: Response) => {

    try {
        const token = req.headers.authorization as string
        console.log("token")

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        res.statusCode = 400

        const tokenData = getTokenData(token)
        console.log("token data", tokenData)
        const user = await selectInfoById(tokenData.user_id)

        if (!user) {
            res.statusCode = 404
            throw new Error("User not found. Token is invalid.")
        }

        if (user.role != "normal") {
            res.statusCode = 401
            throw new Error("Admin users don't have a profile page.")
        }

        res.status(200).send({
            id: user.user_id,
            email: user.email,
            role: user.role,
            address: user.address
        })

    } catch (error) {
        res.send({ message: error.message || error.sqlMessage })
    }
}

export default getLoggedUser
