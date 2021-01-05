const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let info = {}

rl.question("Qual é o seu nome? ", (name) => {
    rl.question("Quantos anos você tem? ", (age) => {
        info = {
            "name": name,
            "age": age
        }

        rl.close()
    })
})

rl.on("close", () => {
    console.log(`Olá, ${info.name}! Você tem ${info.age} anos. Em sete anos você terá ${Number(info.age) + 7}.`)
    process.exit(0)
})

module.exports = info