// 1.
//a)
const printAscendingIntegers = (n: number): void => {
    if (Math.floor(n) >= 0) {
        printAscendingIntegers(n - 1)
        console.log(Math.floor(n))
    }
}
printAscendingIntegers(5)

// b)
const printDescendingIntegers = (n: number): void => {
    if (Math.floor(n) >= 0) {
        console.log(Math.floor(n))
        printDescendingIntegers(n - 1)
    }
}
printDescendingIntegers(5)