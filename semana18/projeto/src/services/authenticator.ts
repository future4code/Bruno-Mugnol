// Libraries
import * as jwt from 'jsonwebtoken'
import { authenticationData } from '../types/types'

// Types


export const generateToken = (input: authenticationData): string => {
    const token: string = jwt.sign(
        {
            id: input.id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const getTokenData = (token: string): authenticationData => {
    const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData

    return { id, role }
}
