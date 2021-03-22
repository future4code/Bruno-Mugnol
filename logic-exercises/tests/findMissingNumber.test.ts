import { findMissingNumber } from '../src/findMissingNumber'

describe("Testing findMissingNumber", () => {
    it("Should return [33]", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(32, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toEqual([33])
    })


    it("Should return [33, 57], even for unordered array", () => {
        const numberArray: number[] = []

        for (let i = 100; i >= 1; i--) numberArray.push(i)
        numberArray.splice(67, 1)
        numberArray.splice(43, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toEqual([33, 57])
    })


    it("Should return [100]", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)
        numberArray.splice(99, 1)

        const result = findMissingNumber(numberArray)

        expect(result).toEqual([100])
    })


    it("Should return [1, 200]", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 200; i++) numberArray.push(i)
        numberArray.splice(199, 1)
        numberArray.splice(0, 1)

        const result = findMissingNumber(numberArray, 200)

        expect(result).toEqual([1, 200])
    })


    it("Should return [] if no number is missing", () => {
        const numberArray: number[] = []

        for (let i = 1; i <= 100; i++) numberArray.push(i)

        const result = findMissingNumber(numberArray)

        expect(result.length).toBe(0)
    })
})