// Libraries
import * as jwt from 'jsonwebtoken'


// Types
export type AuthData = {
    id: string,
    role: "normal" | "admin"
}

export type Payload = {
    id: string,
    role: "normal" | "admin",
    iat: number,
    exp: number
}


// Authorization functions
export const generateToken = (input: AuthData): string => {    
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


export const getTokenData = (token: string): AuthData => {
    const payload = jwt.verify(token, process.env.JWT_KEY! as string) as Payload

    return {
        id: payload.id,
        role: payload.role
    }
}
