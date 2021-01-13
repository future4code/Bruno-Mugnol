import express, { Request, Response } from 'express'
import cors from 'cors'

import { users } from './users'
import { validateReq, validateNumber } from './validators'

const router = express.Router()
router.use(express.json())
router.use(cors())


router.post('/create', (req: Request, res: Response) => {
    let errorCode = 400

    const validBody = ["name", "email", "type", "age"]
    const validTypes = ["ADMIN", "NORMAL"]

    try {
        errorCode = 422

        if (!validTypes.includes(req.body.type as string)) {
            throw new Error("Invalid type value in requisition body.")
        }

        validateReq(req.body, validBody)
        validateNumber(req.body.age, "age")

        users.push({
            id: Date.now(),
            name: req.body.name as string,
            email: req.body.email as string,
            type: req.body.type as "ADMIN" | "NORMAL",
            age: req.body.age as number
        })

        res.status(200).send("User created successfully.")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.put('/:id/edit', (req: Request, res: Response) => {
    let errorCode = 400
    const userId: number = Number(req.params.id)
    const validBody = ["name"]

    try {
        errorCode = 422

        validateNumber(req.params.id, "user ID")
        validateReq(req.body, validBody)

        const userIndex: number = users.findIndex((user) => {
            return user.id === Number(req.params.id)
        })

        if (userIndex === -1) {
            errorCode = 404
            throw new Error("User ID not found.")
        }

        users[userIndex] = {
            ...users[userIndex],
            name: `${req.body.name} - ALTERED`
        }

        res.status(200).send("Username edited successfully")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.patch('/:id/patch', (req: Request, res: Response) => {
    let errorCode = 400
    const validBody = ["name"]

    try {
        errorCode = 422

        validateNumber(req.params.id, "user ID")
        validateReq(req.body, validBody)

        const userIndex: number = users.findIndex((user) => {
            return user.id === Number(req.params.id)
        })

        if (userIndex === -1) {
            errorCode = 404
            throw new Error("User ID not found.")
        }

        users[userIndex] = {
            ...users[userIndex],
            name: `${req.body.name} - REALTERED`
        }

        res.status(200).send("Username patched successfully")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.delete('/:id/delete', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        validateNumber(req.params.id, "user ID")

        const userIndex: number = users.findIndex((user) => {
            return user.id === Number(req.params.id)
        })

        if (userIndex === -1) {
            errorCode = 404
            throw new Error("User ID not found.")
        }

        users.splice(userIndex, 1)

        res.status(200).send("Username deleted successfully")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

export default router