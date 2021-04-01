export const twoSum = (array: number[], target: number): number[] => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if ((i !== j) && (array[i] + array[j] === target)) {
                return [i, j]
            }
        }
    }

    return []
}


interface NumberObject {
    [num: number]: number
}

export const twoSumOptimised = (array: number[], target: number): number[] => {
    const hashTable: NumberObject = {}

    for (let i = 0; i < array.length; i++) {
        const desired = target - array[i]

        if (hashTable[desired] !== undefined) {
            return [hashTable[desired], i]
        }

        hashTable[array[i]] = i
    }

    return []
}
