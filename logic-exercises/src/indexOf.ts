export type Source = string | string[] | number[]
export type Query = string | number

export const indexOf = (source: Source, query: Query, caseSensitive: boolean = true): number => {
    let i = 0

    while (i < source.length) {
        if ((typeof query === "string") && (typeof source[i] === "string")) {
            if (
                (caseSensitive ? source[i] : (source[i] as string).toLowerCase())
                ===
                (caseSensitive ? query : (query as string).toLowerCase())
            ) return i

        } else {
            if (source[i] === query) return i
        }
        i++
    }

    return -1
}