const isOpeningBracket = (char: string): boolean => {
    if ((char === '(') || (char === '[') || (char === '{')) return true
    else return false
}

const isClosingBracket = (char: string): boolean => {
    if ((char === ')') || (char === ']') || (char === '}')) return true
    else return false
}

const isBracketPair = (open: string, close: string): boolean => {
    if (((open === '(') && (close === ')'))
        || ((open === '[') && (close === ']'))
        || ((open === '{') && (close === '}'))) return true
    else return false
}


export const checkBrackets = (str: string): boolean => {
    const stack: string[] = []

    for (const char of str) {
        if (isOpeningBracket(char)) { stack.push(char) }
        else if (isClosingBracket(char)) {
            const isPair = isBracketPair(stack.pop()!, char)

            if (!isPair) return false
        }
    }

    return true
}
