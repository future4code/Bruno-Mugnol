// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../../data/insertUser'

// Services
import { generateHash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'
import { verifyEmail, verifyKeys, verifyLength, verifyString } from '../../services/validators'


const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBody = ["name", "email", "password"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBody)
        verifyString(req.body)

        const { name, email, password } = req.body

        verifyEmail(email)
        verifyLength(password, "Password", 6)

        const encryptedPassword: string = await generateHash(password)

        await insertUser({
            id: generateId(),
            name, email,
            password: encryptedPassword
        })

        res.status(200).send("User created successfully.")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser
