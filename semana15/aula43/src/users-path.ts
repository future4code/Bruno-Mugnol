import express, { Request, Response } from 'express'
import cors from 'cors'

import { users, User } from './users'

const router = express.Router()
router.use(express.json())
router.use(cors())


router.get('/', (req: Request, res: Response) => {
    let errorCode = 400
    const validQueries = ["ADMIN", "NORMAL"]

    try {
        if (!Object.keys(req.query).length) {
            res.status(200).send(users)
        }

        const searchQuery: string = (req.query.type as string).toUpperCase()

        if (!validQueries.includes(searchQuery)) {
            errorCode = 422
            throw new Error("Invalid query parameter")
        }

        const result: User[] = users.filter((user) => {
            return user.type.toUpperCase() === searchQuery
        })

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.get('/search', (req: Request, res: Response) => {
    let errorCode = 400
    const validQueries = ["name"]

    try {
        const searchQuery: string = req.query.name as string

        for (let key in req.query) {
            if (!validQueries.includes(key)) {
                errorCode = 422
                throw new Error("Invalid query parameter")
            }
        }

        const result: User[] = users.filter((user) => {
            return user.name.toLowerCase().includes(searchQuery.toLowerCase())
        })

        if (!result.length) {
            errorCode = 404
            throw new Error("User not found.")
        }

        res.status(200).send(result)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

export default router