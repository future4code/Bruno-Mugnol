import { isString } from "class-validator"

export const verifyString = (str: any, len?: number): void => {
    const condition1: boolean = isString(str)

    if (!condition1) {
        throw new Error(`A required field has the wrong type: ${typeof str} instead of string.`)
    }
    
    const condition2: boolean = str.length > 0
    const condition3: boolean = len ? str.length === len : true

    if (!condition2) {
        throw new Error("A required field is empty.")
    } else if (!condition3) {
        throw new Error("A required field has invalid length.")
    }

}

export const verifyObjectLength = (obj: any, len: number, unreq?: number): void => {
    const condition1: boolean = Object.keys(obj).length > len + (unreq || 0)
    const condition2: boolean = Object.keys(obj).length < len + (unreq || 0)

    if (condition1) {
        throw new Error("Body has insufficient keys.")
    } else if (condition2) {
        throw new Error("Body has too many keys.")
    }

}