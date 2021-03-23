import { indexOf } from '../src/indexOf'

const source1 = "verde"
const source2 = ["help", "me", "I", "caught", "a", "bus", "in", "Morrocco"]
const source3 = [1, 2, 5, 3, 2]

describe("Testing indexOf", () => {
    it("Should return 0 for source as string containing query", () => {
        const result = indexOf(source1, "v")

        expect(result).toBe(0)
    })


    it("Should return -1 for source as string NOT containing query", () => {
        const result = indexOf(source1, "V")

        expect(result).toBe(-1)
    })


    it("Should return 0 for source as string containing query IF NOT case sensitive", () => {
        const result = indexOf(source1, "V", false)

        expect(result).toBe(0)
    })


    it("Should return 5  for source as string array containing query", () => {
        const result = indexOf(source2, "bus")

        expect(result).toBe(5)
    })


    it("Should return 5 for source as string array containing query IF NOT case sensitive", () => {
        const result = indexOf(source2, "BuS", false)

        expect(result).toBe(5)
    })


    it("Should return -1 for source as string array containing query IF case sensitive", () => {
        const result = indexOf(source2, "BuS")

        expect(result).toBe(-1)
    })


    it("Should return 3 for source as number array containing query", () => {
        const result = indexOf(source3, 3)

        expect(result).toBe(3)
    })


    it("Should return 3 for source as number array containing query, no matter caseSensitive option", () => {
        const result = indexOf(source3, 3, false)

        expect(result).toBe(3)
    })


    it("Should return -1 for source as number array NOT containing query", () => {
        const result = indexOf(source3, "bob")

        expect(result).toBe(-1)
    })
})