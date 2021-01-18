// Types from Express.js library
import { Request, Response } from 'express'

// Database connection
import { connection } from '../data/config'

// Database function
import getUsersData from '../data/getUsersData'


const getUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const result = await getUsersData()

        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getUsers
