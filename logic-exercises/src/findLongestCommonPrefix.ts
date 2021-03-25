export const findLongestCommonPrefix = (words: string[]): string => {
    let i: number = 1
    let prefix: string = ""
    let letterMatch: boolean = true

    while (letterMatch && (i <= words[0].length)) {
        prefix += words[0][i - 1]

        for (const word of words) {
            if (prefix !== word.substring(0, i)) {
                prefix = prefix.substring(0, i - 1)
                letterMatch = false
                break
            }
        }

        i++
    }

    return prefix
}
