// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Data
import { users } from '../data/users'

// Utilities
import { findUserIndex } from '../utilities/finder'


const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.put('/pay', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const userIndex: number = findUserIndex(req.body.cpf)

        users[userIndex] = {
            ...users[userIndex],
            statements: [
                ...users[userIndex].statements,
                {
                    value: -req.body.value,
                    date: req.body.payday || Date.now(),
                    description: req.body.description || ""
                }
            ]
        }

        res.status(200).send(`Transfer was successful.`)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

router.put('/transfer', (req: Request, res: Response) => {
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
                    value: -req.body.value,
                    date: Date.now(),
                    description: `Transfer to ${req.body.recipientName}.`
                }
            ]
        }

        const recepientIndex: number = users.findIndex((userInfo) => {
            return userInfo.cpf === req.body.recipientCpf
        })

        if (recepientIndex === -1) {
            errorCode = 422
            throw new Error("Invalid CPF.")
        }

        users[recepientIndex] = {
            ...users[recepientIndex],
            statements: [
                ...users[recepientIndex].statements,
                {
                    value: req.body.value,
                    date: Date.now(),
                    description: `Transfer from ${req.body.name}.`
                }
            ]
        }

        res.status(200).send(`Transfer was successful.`)

    } catch (error) {
        res.status(errorCode).send(error.message)
    }
})

export default router