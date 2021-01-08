import express, { Router, Request, Response } from 'express'
import cors from 'cors'

import { users } from './users'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())

router.post('/create', (req: Request, res: Response) => {

    //new Date("mm/dd/yyyy").getTime()

})

export default router