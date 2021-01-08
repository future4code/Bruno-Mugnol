import express, { Request, Response } from 'express'
import cors from 'cors'

import { users, User } from './users'

const router = express.Router()
router.use(express.json())
router.use(cors())


router.post('/create', (req: Request, res: Response) => {
    let errorCode = 400

    const validBody = ["name", "email", "type", "age"]
    const validTypes = ["ADMIN", "NORMAL"]

    try {
        if (Object.keys(req.body).length < 4) {
            errorCode = 422
            throw new Error("Missing key(s) in requisition body.")
        } else if (Object.keys(req.body).length > 4) {
            errorCode = 422
            throw new Error("Found extra key(s) in requisition body.")
        }

        for (let key in req.body) {
            if (!validBody.includes(key)) {
                errorCode = 422
                throw new Error("Invalid key in requisition body.")
            }

            if (!req.body[key]) {
                errorCode = 422
                throw new Error("Empty value in a required key.")
            }
        }

        if (!validTypes.includes(req.body.type as string)) {
            errorCode = 422
            throw new Error("Invalid type value in requisition body.")
        }

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
        if (isNaN(userId)) {
            errorCode = 422
            throw new Error("User ID is invalid.")
        }

        if (Object.keys(req.body).length < 1){
            errorCode = 422
            throw new Error("Missing key(s) in requisition body.")
        } else if (Object.keys(req.body).length > 1) {
            errorCode = 422
            throw new Error("Found extra key(s) in requisition body.")
        }
        
        for (let key in req.body) {
            if (!validBody.includes(key)) {
                errorCode = 422
                throw new Error("Invalid key in requisition body.")
            }

            if (!req.body[key]) {
                errorCode = 422
                throw new Error("Empty value in a required key.")
            }
        }

        const userIndex: number = users.findIndex((user) => {
            return user.id === userId
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
    const userId: number = Number(req.params.id)
    const validBody = ["name"]

    try {
        if (isNaN(userId)) {
            errorCode = 422
            throw new Error("User ID is invalid.")
        }

        if (Object.keys(req.body).length < 1){
            errorCode = 422
            throw new Error("Missing key(s) in requisition body.")
        } else if (Object.keys(req.body).length > 1) {
            errorCode = 422
            throw new Error("Found extra key(s) in requisition body.")
        }
        
        for (let key in req.body) {
            if (!validBody.includes(key)) {
                errorCode = 422
                throw new Error("Invalid key in requisition body.")
            }

            if (!req.body[key]) {
                errorCode = 422
                throw new Error("Empty value in a required key.")
            }
        }

        const userIndex: number = users.findIndex((user) => {
            return user.id === userId
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
    const userId: number = Number(req.params.id)

    try {
        if (isNaN(userId)) {
            errorCode = 422
            throw new Error("User ID is invalid.")
        }

        const userIndex: number = users.findIndex((user) => {
            return user.id === userId
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