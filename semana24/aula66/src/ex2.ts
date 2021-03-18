// 2.
const getTermial = (integer: number): number => {
    return integer > 0
        ? integer + getTermial(integer - 1)
        : 0
}
console.log(getTermial(2))