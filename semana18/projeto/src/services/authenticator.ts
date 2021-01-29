// Libraries
import * as jwt from 'jsonwebtoken'
import { authenticationData, USER_ROLES } from '../types/types'

// Types


export const generateToken = (id: string, role: USER_ROLES): string => {
    const token: string = jwt.sign(
        { id, role },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}

export const getTokenData = (token: string): authenticationData => {
    const { id, role } = jwt.verify(token, process.env.JWT_KEY!) as authenticationData

    return { id, role }
}
