// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Data
import { users, User } from '../data/users'

// Utilities
import { convertToTimestamp } from '../utilities/converters'
import { isString } from 'class-validator'
import { verifyObjectLength, verifyString } from '../utilities/verifiers'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/create', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        errorCode = 422
        verifyObjectLength(req.body, 5)
        verifyString(req.body.birthdate, 10)

        if (!convertToTimestamp(req.body.birthdate)) {
            throw new Error("Wrong format. Please follow the format: DD/MM/YYYY")
        }

        const newUser: User = {
            name: req.body.name as string,
            cpf: req.body.cpf as number,
            birthdate: convertToTimestamp(req.body.birthdate),
            balance: 0,
            statements: []
        }

        users.push(newUser)
        res.status(201).send("User created successfully.")

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

export default router