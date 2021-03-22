export const findMissingNumber = (array: number[], lastNumber: number = 100): number[] => {
    const sortedArray: Array<number | undefined> = []
    const missingNumbers: number[] = []

    for (const num of array) {
        sortedArray[num - 1] = num
    }

    for (let i = 0; i < lastNumber; i++) {
        if (sortedArray[i] === undefined) {
            missingNumbers.push(i + 1)
        }
    }

    return missingNumbers
}
