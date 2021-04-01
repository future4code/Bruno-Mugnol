type Matrix = number[][]

const returnMatrixSize = (m: Matrix): { rows: number, columns: number } => {
    return {
        rows: m.length,
        columns: m[0].length
    }
}