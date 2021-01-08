import express, { Router, Request, Response } from 'express'
import cors from 'cors'

import { users, User } from '../data/users'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/create', (req: Request, res: Response) => {
    let errorCode = 400

    try {
        const newUser:User = {
            name:  req.body.name as string,
            cpf: req.body.cpf as number,
            birthdate: req.body.birthdate as number,
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