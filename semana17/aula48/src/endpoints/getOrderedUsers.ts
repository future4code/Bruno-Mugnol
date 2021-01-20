// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectOrderedUsers from '../data/selectOrderedUsers'


const getOrderedUsers = async (req: Request, res: Response): Promise<void> => {
    const validOrders = ["id", "name", "type"]
    const validOrderTypes = ["ASC", "DESC"]

    try {
        const {
            orderBy = "id",
            orderType = "ASC"
        } = req.query

        if (!validOrders.includes(orderBy as string)) {
            res.statusCode = 422
            throw new Error(`Invalid "orderBy" query: must be "name" or "type".`)
        }

        if (!validOrderTypes.includes((orderType as string).toUpperCase())) {
            res.statusCode = 422
            throw new Error(`Invalid "orderType" query: must be "ASC" or "DESC"`)
        }


        const result = await selectOrderedUsers(orderBy as string, (orderType as string).toUpperCase())


        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getOrderedUsers
