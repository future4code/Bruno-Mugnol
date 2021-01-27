// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../../data/insertUser'

// Services
import { generateHash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'
import { generateToken } from '../../services/authenticator'
import {
    verifyBodyKeys,
    verifyEmail,
    verifyLength,
    verifyRole,
    verifyString
} from '../../services/validators'


const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["email", "password", "role"]

    try {
        res.statusCode = 422

        verifyBodyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { email, password, role } = req.body

        verifyLength(password, "Password", 6)
        verifyEmail(email)
        verifyRole(role)

        const id = generateId()
        const hashedPassword = await generateHash(password)

        const result = await insertUser({ id, email, password: hashedPassword, role })

        res.status(201).send({
            status: {
                code: 201,
                message: `User created successfully.`
            },
            user_id: result.id,
            token: generateToken({
                id: result.id,
                role: result.role
            })
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser