export const isAnagram = (str1: string, str2: string, caseSensitive: boolean = true): boolean => {
    if (str1.length !== str2.length) return false

    return caseSensitive ?
        str1
            .split("").sort().join("")

        === str2
            .split("").sort().join("")

        : str1
            .toLowerCase().split("").sort().join("")

        === str2
            .toLowerCase().split("").sort().join("")
}
