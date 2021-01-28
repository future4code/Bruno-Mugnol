// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import insertUser from '../../data/insertUser'

// Middleware function
import { getAdressByCEP } from '../../middleware/adressManager'

// Services
import { generateHash } from '../../services/hashManager'
import { generateId } from '../../services/idGenerator'
import { generateToken } from '../../services/authenticator'
import {
    verifyBodyKeys,
    verifyCEP,
    verifyEmail,
    verifyLength,
    verifyRole,
    verifyString
} from '../../services/validators'


const createUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["email", "password", "role", "cep", "streetNumber", "addressComplement"]

    try {
        res.statusCode = 422

        verifyBodyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { email, password, role, cep, streetNumber, addressComplement } = req.body

        verifyLength(password, "Password", 6)
        verifyEmail(email)
        verifyRole(role)
        verifyCEP(cep)

        const user_id = generateId()
        const address_id = generateId()
        const hashedPassword = await generateHash(password)

        const address = await getAdressByCEP(cep.replace("-", ""))

        const result = await insertUser(
            {
                user_id, email, role,
                password: hashedPassword
            },
            {
                address_id,
                number: streetNumber,
                complement: addressComplement,
                street: address.street,
                neighbourhood: address.neighbourhood,
                city: address.city,
                state: address.state
            }
        )

        res.status(201).send({
            status: {
                code: 201,
                message: `User created successfully.`
            },
            user_id: result.user_id,
            token: generateToken({
                user_id: result.user_id,
                role: result.role
            })
        })

    } catch (error) {
        res.send(error.message || error.sqlMessage)
    }
}

export default createUser