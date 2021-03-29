// One liner
const findOdd1L = (input: number[]): number => input.reduce((odd, cur) => odd ^ cur)


// Intuitive solution
interface NumberCount {
    [num: number]: number
}

const findOdd = (input: number[]): number => {
    const numberCount = input.reduce((numCount: NumberCount, num) => {
        if (!numCount[num]) return { ...numCount, [num]: 1 }
        else return { ...numCount, [num]: numCount[num] + 1 }
    }, {})

    for (const num in numberCount) {
        if (numberCount[num] % 2 !== 0) return Number(num)
    }

    return NaN
}
