const nonAdjacentHighestSum = (values: number[]): number => {
    const maxSum: number[] = []

    for (let i = 0; i < values.length; i++) {
        let sumWithCurrent: number = values[i] + (maxSum[i - 2] || 0)
        let sumIfSkipCurrent: number = maxSum[i - 1] || 0

        maxSum.push(Math.max(sumWithCurrent, sumIfSkipCurrent))
    }

    return maxSum[values.length - 1]
}
