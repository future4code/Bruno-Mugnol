import { findLongestCommonPrefix } from '../src/findLongestCommonPrefix'

describe("Testing findLongestCommonPrefix", () => {
    it("Should return the longest common prefix", () => {
        expect(findLongestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
        expect(findLongestCommonPrefix(["dog", "racecar", "car"])).toBe("")
        expect(findLongestCommonPrefix(["coracao", "cor", "corona", "coreia"])).toBe("cor")
        expect(findLongestCommonPrefix(["flower", "flow", "flo"])).toBe("flo")
    })
})