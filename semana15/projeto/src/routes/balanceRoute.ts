import express, { Router, Request, Response } from 'express'
import cors from 'cors'

import { users, User } from '../data/users'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const userIndex: number = users.findIndex((userInfo) => {
            return userInfo.cpf === req.body.cpf
        })

        if (userIndex === -1) {
            errorCode = 422
            throw new Error("Invalid CPF.")
        }

        res.status(200).send({ balance: users[userIndex].balance })

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.put('/deposit', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const userIndex: number = users.findIndex((userInfo) => {
            return userInfo.cpf === req.body.cpf
        })

        if (userIndex === -1) {
            errorCode = 422
            throw new Error("Invalid CPF.")
        }

        users[userIndex] = {
            ...users[userIndex],
            statements: [
                ...users[userIndex].statements,
                {
                    value: req.body.value,
                    date: Date.now(),
                    description: "Self made deposit."
                }
            ]
        }

        res.status(200).send(`Deposit was successful.`)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

export default router