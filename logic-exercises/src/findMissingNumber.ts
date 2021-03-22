export const findMissingNumber = (array: number[]): number | void => {
    const sortedArray: Array<number | undefined> = []

    for (const num of array) {
        sortedArray[num - 1] = num
    }

    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] === undefined) return i + 1
    }
}