// 3.
const getTermialWithLoop = (integer: number): number => {
    let termial = 0
    for (let i = 1; i <= integer; i++) {
        termial += i
    }

    return termial
}
console.log(getTermialWithLoop(6))