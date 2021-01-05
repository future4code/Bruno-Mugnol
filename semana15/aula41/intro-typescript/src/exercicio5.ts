const basicMath = (num1: number, num2: number): void => {
    console.log(` ${num1} + ${num2} = ${num1 + num2} \n ${num1} - ${num2} = ${num1 - num2} \n ${num1} * ${num2} = ${num1 * num2} \n Larger number: ${num1 > num2 ? num1 : num2}`)
}
basicMath(5, -8)