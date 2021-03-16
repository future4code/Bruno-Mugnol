/* a) We can use arrays as rows:
matrix =
[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
The syntax to access the value of an element in row X and column Y would be: matrix[X+1][Y+1]
*/

const alterMatrixElement = (
    matrix: number[][],
    row: number,
    column: number,
    value: number)
    : number[][] | void => {
        const rowIndex = row - 1
        const columnIndex = column - 1

    if (!matrix[rowIndex][columnIndex]) {
        throw new Error("Out of matrix bound.")
    }

    matrix[rowIndex][columnIndex] = value

    return matrix
}


console.log(alterMatrixElement(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    2,
    3,
    0
))

console.log(alterMatrixElement(
    [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ],
    2,
    4,
    0
))