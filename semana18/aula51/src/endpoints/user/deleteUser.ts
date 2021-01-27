// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import removeUser from '../../data/removeUser'
import selectInfoById from '../../data/selectInfoById'

// Services
import { getTokenData } from '../../services/authenticator'

const deleteUser = async (req: Request, res: Response) => {
    
    try {
        const token = req.headers.authorization as string

        if (!token) {
            res.statusCode = 401
            throw new Error("Unauthorized access.")
        }

        res.statusCode = 400

        const tokenData = getTokenData(token)
        const user = await selectInfoById(tokenData.id)
        
        if (!user) {
            res.statusCode = 404
            throw new Error("User not found. Token is invalid.")
        }

        if (user.role != "admin") {
            res.statusCode = 401
            throw new Error("Unauthorized. You don't have administrator privileges.")
        }

        if (!req.params.id) {
            throw new Error("Please inform ID of the user to be removed through path params.")
        }

        const delUser = await selectInfoById(req.params.id)

        if (!delUser) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        await removeUser(req.params.id)

        res.status(200).send(`User ${delUser.email} deleted successfully`)

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

export default deleteUser
