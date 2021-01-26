// Libraries
import * as jwt from 'jsonwebtoken'


// Types
export type AuthData = {
    id: string
}

export type Payload = {
    id: string,
    iat: number,
    exp: number
}


// Authorization functions
export const generateToken = (input: AuthData): string => {
    const token: string = jwt.sign(
        { id: input.id },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}


export const getTokenData = (token: string): AuthData => {
    const payload = jwt.verify(token, process.env.JWT_KEY! as string) as Payload

    return { id: payload.id }
}


// Encryption functions
