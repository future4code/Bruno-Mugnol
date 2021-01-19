// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectAllUsers from '../data/selectAllUsers'


const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await selectAllUsers()

        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getAllUsers
