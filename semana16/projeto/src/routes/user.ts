// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Query functions


const router: Router = express.Router()
router.use(express.json())
router.use(cors())



export default router