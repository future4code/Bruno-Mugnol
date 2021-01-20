// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import completeSelection from '../data/completeSelection'

// Type
import CompleteSelection from '../types/CompleteSelection'



const getCompleteSelection = async (req: Request, res: Response): Promise<void> => {
    const validTypes = ["", "CX", "OPERATIONS", "TEACHER"]
    const validQueries = ["name", "type", "orderby", "ordertype", "page", "perpage"]
    const validOrderBy = ["id", "name", "type"]
    const validOrderTypes = ["ASC", "DESC"]

    try {
        const {
            name = "",
            type = "",
            orderby = "id",
            ordertype = "DESC",
            page = "1",
            perpage = "5"
        } = req.query

        // Type validation
        if (!validTypes.includes((type as string).toUpperCase())
        ) {
            res.statusCode = 422
            throw new Error(`Invalid "type" query: must either be empty or be "CX", "Teacher" or "Operations".`)
        }

        // Page validation
        if (isNaN(Number(page)) || Number(page) < 1) {
            res.statusCode = 422
            throw new Error(`"page must be a number bigger than zero.`)
        }

        // PerPage validation
        if (isNaN(Number(perpage)) || Number(perpage) < 1) {
            res.statusCode = 422
            throw new Error(`"perpage must be a number bigger than zero.`)
        }

        // OrderBy validation
        if (!validOrderBy.includes(orderby as string)) {
            res.statusCode = 422
            throw new Error(`Invalid "orderby" query: must be "name" or "type".`)
        }

        // OrderType validation
        if (!validOrderTypes.includes((ordertype as string).toUpperCase())) {
            res.statusCode = 422
            throw new Error(`Invalid "ordertype" query: must be "ASC" or "DESC"`)
        }

        // Query keyname validation
        for (let key in req.query) {
            if (!validQueries.includes(key as string)) {
                res.statusCode = 422
                throw new Error(`"${key}" query is invalid.`)
            }
        }

        const options: CompleteSelection = {
            nameSearch: name as string,
            typeSearch: type as string,
            orderBy: orderby as string,
            orderType: ordertype as string,
            pageNumber: page as string,
            perPage: perpage as string
        }

        const result = await completeSelection(options)

        if (!result.length) {
            res.statusCode = 404
            throw new Error("User not found in this page.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default getCompleteSelection
