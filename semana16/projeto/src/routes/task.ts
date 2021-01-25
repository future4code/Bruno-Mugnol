// Libraries
import express, { Router, Request, Response } from 'express'
import dayjs from 'dayjs'
import cors from 'cors'

// Query functions
import { createTask, getTaskById } from '../data/query'
import { verifyBodyKeys, verifyNumber, verifyString } from '../utilities/verifier'

// Types
import { newTask } from '../types'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())


// Create a task
router.put("/", async (req: Request, res: Response) => {
    let errorCode = 400
    const validBody = ["title", "description", "dueDate", "creatorId"]

    try {
        errorCode = 422
        verifyString({
            title: req.body.title,
            description: req.body.description,
            dueDate: req.body.dueDate
        })
        verifyNumber(req.body.creatorId)
        verifyBodyKeys(req.body, validBody)

        const [day, month, year] = req.body.dueDate.split("/")
        const dueDate = `${year}-${month}-${day}`

        const reqBody: newTask = {
            title: req.body.title,
            description: req.body.description,
            dueDate: dayjs(dueDate).format('YYYY-MM-DD'),
            creatorId: Number(req.body.creatorId)
        }

        await createTask(reqBody)

        res.status(200).send("User created successfully.")

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


router.get("/:id", async (req: Request, res: Response) => {
    let errorCode = 400
    const taskId = req.params.id

    try {
        errorCode = 422
        verifyNumber(taskId)

        const result = await getTaskById(Number(taskId))

        if (!result.length) {
            errorCode = 404
            throw new Error(`Task ID not found`)
        }

        const formattedResult = {
            ...result,
            dueDate: dayjs(result.dueDate).format('DD/MM/YYYY')
        }

        res.status(200).send(formattedResult[0])

    } catch (error) {
        res.status(errorCode).send(error.sqlMessage || error.message)
    }
})


export default router