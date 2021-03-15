type Matrix = number[][]

const returnMatrixSize = (m: Matrix): { rows: number, columns: number } => {
    return {
        rows: m.length,
        columns: m[0].length
    }
}

const createZeroMatrix = (rows: number, columns: number): Matrix => {
    const zeroMatrix: Matrix = []
    for (let i = 0; i < rows; i++) {
        zeroMatrix.push([])
        for (let j = 0; j < columns; j++) {
            zeroMatrix[i].push(0)
        }
    }

    return zeroMatrix
}

// a)
const printMatrixElements = (m: Matrix): void => {
    m.forEach((row) => {
        row.forEach((element) => {
            console.log(element)
        })
    })
}

// printMatrixElements([
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ])


// b)
const sumMatrices = (matrixA: Matrix, matrixB: Matrix): Matrix => {
    const { rows, columns } = returnMatrixSize(matrixA)
    const summedMatrix: Matrix = createZeroMatrix(rows, columns)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            summedMatrix[i][j] = matrixA[i][j] + matrixB[i][j]
        }
    }

    return summedMatrix
}

// console.log(sumMatrix(
// [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
// ],
//     [
//         [4, 5, 6],
//         [7, 8, 9],
//         [1, 2, 3]
//     ]
// ))


// c)
const transposeMatrix = (m: Matrix): Matrix => {
    const { rows, columns } = returnMatrixSize(m)

    const transposedMatrix: Matrix = createZeroMatrix(columns, rows)

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            transposedMatrix[j][i] = m[i][j]
        }
    }

    return transposedMatrix
}

// console.log(transposeMatrix(
//     [
//         [1, 2, 3],
//         [4, 5, 6],
//         [7, 8, 9]
//     ]
// ))


// d)
const multiplyMatrices = (matrixA: Matrix, matrixB: Matrix): Matrix => {
    const { rows: rowsA, columns: columnsA } = returnMatrixSize(matrixA)
    const { rows: rowsB, columns: columnsB } = returnMatrixSize(matrixB)

    const resultMatrix: Matrix = createZeroMatrix(rowsA, columnsB)

    for (let i = 0; i < rowsA; i++) {
        for (let j = 0; j < columnsB; j++) {
            let sum = 0

            for (let k = 0; k < columnsA; k++) {
                sum += matrixA[i][k] * matrixB[k][j]
            }

            resultMatrix[i][j] = sum
        }
    }

    return resultMatrix
}

// console.log(multiplyMatrices(
//     [
//         [1, 2],
//         [3, 4]
//     ],
//     [
//         [-1, 3],
//         [4, 2]
//     ]
// ))
// console.log(multiplyMatrices(
//     [
//         [1, 2],
//         [3, 4],
//         [5, 6]
//     ],
//     [
//         [1, 2, 3],
//         [4, 5, 6]
//     ]
// ))