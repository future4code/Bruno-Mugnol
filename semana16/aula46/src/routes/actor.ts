// Libraries
import express, { Router, Request, Response } from 'express'
import cors from 'cors'

// Query functions
import {
    createActor,
    deleteActor,
    updateSalary,
    getActorById, getGenderCount
} from '../query/queryActor'

const router: Router = express.Router()
router.use(express.json())
router.use(cors())


router.put("/", async (req: Request, res: Response) => {
    try {
        await createActor(req.body)

        res.status(200).send("Actor's added successfully.")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


router.post("/", async (req:Request, res: Response) => {
    try {
        await updateSalary(req.body)

        res.status(200).send("Actor's salary updated successfully.")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})

router.get("/", async (req: Request, res: Response) => {
    try {
        const gender = req.query.gender as "male" | "female"
        const result = await getGenderCount(gender)

        res.status(200).send({ gender, count: result.gender_count })

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


router.get("/:id", async (req: Request, res: Response) => {
    try {
        const result = await getActorById(req.params.id)

        res.status(200).send(result)

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})


router.delete("/:id", async (req: Request, res: Response) => {
    try {
        await deleteActor({id: req.params.id})

        res.status(200).send("Actor deleted successfully.")

    } catch (error) {
        res.status(400).send(error.sqlMessage || error.message)
    }
})



export default router