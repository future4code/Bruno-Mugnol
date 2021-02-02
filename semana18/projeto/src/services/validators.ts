// Services
import { getTokenData } from "./authenticator"

// Types
import { USER_ROLES } from "../types/types"

export const verifyString = (strObj: any): void => {
    for (let str in strObj) {

        if (typeof strObj[str] !== "string") {
            throw new Error(`${str} is of the wrong type: ${typeof strObj[str]} instead of string.`)
        } else if (strObj[str] === "") {
            throw new Error(`The required field "${str}" is empty.`)
        }
    }
}


export const verifyLength = (key: string, keyName: string, minLength: number) => {
    if (key.length < minLength) {
        throw new Error(`${keyName} has insufficient length. Mininum length is ${minLength}.`)
    }
}


export const verifyEmail = (email: string) => {
    const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const isEmail = emailRegExp.test(email)

    if (!isEmail) {
        throw new Error("Invalid email.")
    }
}


export const verifyAdmin = (token: string | undefined): void => {
    if (!token) {
        throw new Error("Unauthorized. No token provided in Authorization headers.")
    }

    const { role } = getTokenData(token)

    if (role !== USER_ROLES.ADMIN) {
        throw new Error("Unauthorized. Admin token required.")
    }
}


export const verifyKeys = (reqObject: any, validKeys: string[], optionalKeys?: string[]): void => {

    if (!optionalKeys) {
        if (Object.keys(reqObject).length < validKeys.length) {
            throw new Error(`Missing key(s) in requisition. Valid keys are: ${validKeys.join(", ")}.`)
        } else if (Object.keys(reqObject).length > validKeys.length) {
            throw new Error(`Found extra key(s) in requisition. Valid keys are: ${validKeys.join(", ")}.`)
        }

        for (let key in reqObject) {
            if (!validKeys.includes(key)) {
                throw new Error(`Invalid key in requisition. Valid keys are: ${validKeys.join(", ")}.`)
            }

            if (!reqObject[key] && reqObject[key] !== 0) {
                throw new Error(`Empty value in the required field: "${key}".`)
            }
        }
    } else {
        const requiredKeys = validKeys.reduce((requiredArray: string[], currentKey: string): string[] => {
            if (!optionalKeys.includes(currentKey)) {
                return [...requiredArray, currentKey]
            } else return [...requiredArray]
        }, [])

        let obligatoryReqObject: any = {}

        for (let key in reqObject) {
            if (requiredKeys.includes(key)) {

                obligatoryReqObject = {
                    ...obligatoryReqObject,
                    [key]: reqObject[key]
                }

            } else {
                obligatoryReqObject = { ...obligatoryReqObject }
            }

        }

        verifyKeys(obligatoryReqObject, requiredKeys)
    }
}