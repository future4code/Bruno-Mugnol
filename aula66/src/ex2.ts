// 2.
const getTermial = (integer: number): number => {
    if (integer > 0) {
        return integer + getTermial(integer - 1)
    } else return 0
}
console.log(getTermial(2))