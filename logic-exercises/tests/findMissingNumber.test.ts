import { findMissingNumber } from '../src/findMissingNumber'

describe("Testing findMissingNumber", () => {
    it("Should return 33", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(32, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toBe(33)
    })

    it("Should return undefined if no number is missing", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)

        const result = findMissingNumber(numberArray)

        expect(result).toBe(undefined)
    })
})