// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Query functions
import { createUser, editUser, getUserById } from '../data/query'
import { verifyBodyKeys, verifyNumber, verifyString } from '../utilities/verifier'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

// Create user
router.put("/", async (req: Request, res: Response) => {
    let errorCode = 400
    const validBody = ["name", "nickname", "email"]

    try {
        errorCode = 422
        verifyString(req.body)
        verifyBodyKeys(req.body, validBody)

        const reqBody = {
            username: req.body.name,
            nickname: req.body.nickname,
            email: req.body.email
        }

        await createUser(reqBody)
        
        res.status(200).send("User created successfully.")
        
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})

// Get user by ID
router.get("/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    const userId = req.params.id

    try {
        errorCode = 422
        verifyNumber(userId)

        const result = await getUserById(Number(userId))
        
        if (!result.length) {
            errorCode = 404
            throw new Error(`User ID not found`)
        }

        res.status(200).send(result[0])

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})

// Edit user by ID
router.put("/edit/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    const userId = req.params.id
    const validBody = ["name", "nickname"]

    try {
        errorCode = 422
        verifyNumber(userId)
        verifyString(req.body)
        verifyBodyKeys(req.body, validBody)

        const reqBody = {
            username: req.body.name,
            nickname: req.body.nickname
        }

        await editUser(Number(userId), reqBody)
        
        res.status(200).send("User edited successfully.")
        
    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})

export default router