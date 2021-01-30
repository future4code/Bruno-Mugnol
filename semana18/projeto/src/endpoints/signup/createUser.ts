// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../../data/insertUser'

// Services
import { generateHash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'
import { getTokenData } from '../../services/authenticator'
import { verifyAdmin, verifyEmail, verifyKeys, verifyLength, verifyString } from '../../services/validators'

// Types
import { USER_ROLES } from '../../types/types'

const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBody = ["name", "email", "password", "role"]
    const unrequiredBody = ["role"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBody, unrequiredBody)
        verifyString(req.body)

        const { name, email, password, role = USER_ROLES.NORMAL } = req.body

        if (role !== USER_ROLES.NORMAL && role !== USER_ROLES.ADMIN) {
            throw new Error(`'${role}' is an invalid value for 'role'. Valid values are 'normal' and 'admin'.`)
        }

        verifyEmail(email)
        verifyLength(password, "Password", 6)

        const token = req.headers.authorization

        if (role === USER_ROLES.ADMIN) {
            res.statusCode = 401
            verifyAdmin(token)
        }

        const encryptedPassword: string = await generateHash(password)

        await insertUser({
            id: generateId(),
            name, email, role,
            password: encryptedPassword
        })

        res.status(200).send("User created successfully.")

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser
