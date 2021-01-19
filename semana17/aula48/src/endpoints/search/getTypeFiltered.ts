// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectTypeFiltered from '../../data/selectTypeFiltered'


const getTypeFiltered = async (req: Request, res: Response): Promise<void> => {
    try {
        const type = req.params.type

        const result = await selectTypeFiltered(type as string)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getTypeFiltered
