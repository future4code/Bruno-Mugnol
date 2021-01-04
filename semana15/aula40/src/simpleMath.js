const operation = process.argv[2]
const value1 = process.argv[3]
const value2 = process.argv[4]

switch (operation) {
    case 'add':
        console.log(`${value1} + ${value2} = ${Number(value1) + Number(value2)}`)
        break
    case 'subtract':
        console.log(`${value1} - ${value2} = ${Number(value1) - Number(value2)}`)
        break
    case 'multiply':
        console.log(`${value1} * ${value2} = ${Number(value1) * Number(value2)}`)
        break
    case 'divide':
        console.log(`${value1} / ${value2} = ${Number(value1) / Number(value2)}`)
        break
    default:
        console.log("The inserted values are invalid. Try again.")
        break
}