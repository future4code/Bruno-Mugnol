import { Matrix, returnMatrixSize } from "./ex4"

const countNegatives = (m: Matrix): number => {
    const { rows, columns } = returnMatrixSize(m)

    let negativeCount = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            if (m[i][j] < 0) {
                negativeCount++
            }
        }
    }

    return negativeCount
}

// console.log(countNegatives(
//     [
//         [-3, -2, -1, 1],
//         [-2, 2, 3, 4],
//         [4, 5, 7, 8]
//     ]
// ))


const countNegatives2 = (m: Matrix): number => {
    const { rows, columns } = returnMatrixSize(m)

    let i = 0
    let j = columns - 1
    let negativeCount = 0

    while (i < rows && j >= 0) {
        if (m[i][j] < 0) {
            negativeCount += j + 1
            i++
        } else {
            j--
        }
    }

    return negativeCount
}

// console.log(countNegatives2(
//     [
//         [-3, -2, -1, 1],
//         [-2, 2, 3, 4],
//         [4, 5, 7, 8]
//     ]
// ))