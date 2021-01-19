// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectPaginatedUsers from '../data/selectPaginatedUsers'


const getPaginatedUsers = async (req: Request, res: Response): Promise<void> => {
    const validQuery = ["pageNumber"]

    try {
        const { pageNumber = "1" } = req.query

        if (isNaN(Number(pageNumber)) || Number(pageNumber) < 1) {
            res.statusCode = 422
            throw new Error(`"pageNumber must be a number bigger than zero.`)
        }

        if (!validQuery.includes(Object.keys(req.query)[0] as string)) {
            res.statusCode = 422
            throw new Error("Invalid query.")
        }

        const result = await selectPaginatedUsers(Number(pageNumber))

        if (!result.length) {
            res.statusCode = 404
            throw new Error("Page not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getPaginatedUsers
