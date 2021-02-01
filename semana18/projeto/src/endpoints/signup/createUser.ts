// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../../data/insertUser'
import { generateToken } from '../../services/authenticator'

// Services
import { generateHash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'
import { verifyAdmin, verifyEmail, verifyKeys, verifyLength, verifyString } from '../../services/validators'

// Types
import { USER_ROLES } from '../../types/types'

const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["name", "email", "password", "role"]
    const optionalBodyKey = ["role"]

    try {
        res.statusCode = 422

        verifyKeys(req.body, validBodyKeys, optionalBodyKey)
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

        const hashedPassword: string = await generateHash(password)
        const userId: string = generateId()

        await insertUser({
            id: userId,
            name, email, role,
            password: hashedPassword
        })

        res.status(201).send({
            status: {
                code: 201,
                message: `User created successfully.`
            },
            id: userId,
            token: generateToken({
                id: userId,
                role: role
            })
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser
