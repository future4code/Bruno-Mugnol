export const validateReq = (reqObj: any, validKeys: string[]): void => {
    if (Object.keys(reqObj).length < validKeys.length) {
        throw new Error("Missing key(s) in requisition body.")
    } else if (Object.keys(reqObj).length > validKeys.length) {
        throw new Error("Found extra key(s) in requisition body.")
    }

    for (let key in reqObj) {
        if (!validKeys.includes(key)) {
            throw new Error("Invalid key in requisition body.")
        }

        if (!reqObj[key]) {
            throw new Error("Empty value in a required key.")
        }
    }

    return
}

export const validateNumber = (reqItem: any, itemName: string): void => {
    if (isNaN(Number(reqItem))) {
        throw new Error(`Invalid ${itemName}: must assume a numeric value.`)
    }
}