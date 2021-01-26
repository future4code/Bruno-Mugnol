// Types from Express.js library
import { Request, Response } from 'express'

// Database function
import selectUserByEmail from '../data/selectUserByEmail'
import { generateToken, getTokenData } from '../services/authenticator'

// Services
import { verifyBodyKeys, verifyEmail, verifyString } from '../services/validators'


const loginUser = async (req: Request, res: Response): Promise<void> => {
    const validBodyKeys = ["email", "password"]

    try {
        res.statusCode = 422

        verifyBodyKeys(req.body, validBodyKeys)
        verifyString(req.body)

        const { email, password } = req.body

        verifyEmail(email)

        const user = await selectUserByEmail(email)
        
        if (!user) {
            res.statusCode = 404
            throw new Error("Email not found.")
        }

        if (password !== user.password) {
            res.statusCode = 400
            throw new Error("Password is wrong.")
        }

        const token = generateToken({id: user.id})

        res.status(200).send({
            status: {
                code: 200,
                message: `User logged in.`
            },
            token: token
        })

    } catch (error) {
        res.send({message: error.message || error.sqlMessage})
    }
}

export default loginUser