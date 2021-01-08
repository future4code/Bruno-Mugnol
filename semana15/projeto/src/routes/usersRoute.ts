import express, { Router, Request, Response } from 'express'
import cors from 'cors'

import { users } from '../data/users'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.get('/', (req: Request, res: Response) => {
    res.status(200).send(users)
})

export default router