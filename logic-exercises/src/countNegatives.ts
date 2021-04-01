type Matrix = number[][]


const countNegatives = (sortedMatrix: Matrix): number => {
    const [rows, columns] = [sortedMatrix.length, sortedMatrix[0].length]

    let negativeCount = 0
    let i = rows - 1
    let j = 0

    while (j < columns && i >= 0) {
        if (sortedMatrix[i][j] < 0) {
            negativeCount += columns - j
            i--
        } else {
            j++
        }
    }

    return negativeCount
}