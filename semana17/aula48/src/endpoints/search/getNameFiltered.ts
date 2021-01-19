// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectNameFiltered from '../../data/selectNameFiltered'


const getNameFiltered = async (req: Request, res: Response): Promise<void> => {
    try {
        const {
            name = ""
        } = req.query

        const result = await selectNameFiltered(name as string)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getNameFiltered
