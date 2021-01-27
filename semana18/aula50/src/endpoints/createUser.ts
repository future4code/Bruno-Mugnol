// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../data/insertUser'

// Services
import { generateId } from '../services/idGenerator'
import { generateToken } from '../services/authenticator'
import { verifyBodyKeys, verifyEmail, verifyLength, verifyString } from '../services/validators'


const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["email", "password"]

    try {
        res.statusCode = 422

        verifyBodyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { email, password } = req.body

        verifyLength(password, "Password", 6)
        verifyEmail(email)

        const id = generateId()

        const result = await insertUser({id, email, password})

        res.status(201).send({
            status: {
                code: 201,
                message:`User created successfully.`
            },
            user_id: result.id,
            token: generateToken(result.id)
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser