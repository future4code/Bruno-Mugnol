// 5.
const countDigits = (integer: number, acc: number = 0): number => {
    return Math.floor(Math.abs(integer)) > 0
        ? countDigits(integer / 10, acc + 1)
        : acc
}
console.log(countDigits(123456789))