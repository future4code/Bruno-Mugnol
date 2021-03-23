// 4.
const printAllElements = (array: any[]): void => {
    if (array.length > 0) {
        console.log(array.splice(0, 1)[0])
        printAllElements(array)
    }
}
printAllElements([0, 1, 2, 3, 4, 5, 6])