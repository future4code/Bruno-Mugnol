// 6.
const findMax = (numbers: number[]): number => {
    if (numbers.length >= 2) {
        const [first, second] = numbers.splice(0, 2)

        return first > second
            ? findMax([first, ...numbers])
            : findMax([second, ...numbers])
    } else return numbers[0]
}

console.log(findMax([1, 2, 3, 4, 3, 2, 1])) // 4
console.log(findMax([34, 21, 42, 13, -2, 3.14, 72, 64, 100])) // 100