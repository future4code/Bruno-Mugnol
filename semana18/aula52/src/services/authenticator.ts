// Libraries
import * as jwt from 'jsonwebtoken'


// Types
export type AuthData = {
    user_id: string,
    role: "normal" | "admin"
}

export type Payload = {
    user_id: string,
    role: "normal" | "admin",
    iat: number,
    exp: number
}


// Authorization functions
export const generateToken = (input: AuthData): string => {
    const token: string = jwt.sign(
        {
            user_id: input.user_id,
            role: input.role
        },
        process.env.JWT_KEY as string,
        { expiresIn: process.env.JWT_EXPIRE_TIME }
    )

    return token
}


export const getTokenData = (token: string): AuthData => {
    const {user_id, role} = jwt.verify(token, process.env.JWT_KEY!) as Payload
    
    return {
        user_id,
        role
    }

}
