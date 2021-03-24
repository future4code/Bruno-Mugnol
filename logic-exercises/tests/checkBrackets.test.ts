import { checkBrackets } from '../src/checkBrackets'

describe("Testing checkBrackets", () => {
    it("Should return true", () => {
        expect(checkBrackets("()[]{}[]()")).toBe(true)
        expect(checkBrackets("([]{}[]()")).toBe(false)
        expect(checkBrackets("()[{}]()")).toBe(true)
        expect(checkBrackets("([]{)}[]")).toBe(false)
        expect(checkBrackets("([{()}])")).toBe(true)
        expect(checkBrackets("([oi{tu(do)}]bem)?")).toBe(true)
    })
})