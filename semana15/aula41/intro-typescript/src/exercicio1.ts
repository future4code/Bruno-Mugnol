// a)
// const myString: string = 420
// O editor aponta um erro. A transpilação não ocorre.

// b)
const myNumber: number | string = 13

// c)
const person1: {name: string, age: number, favColour: string} = {
    name: "Bob",
    age: 99,
    favColour: "verde"
}

// d)
type person = {
    name: string,
    age: number,
    favColour: string
}

const person2: person = {
    name: "Billy",
    age: 13,
    favColour: "branco"
}

const person3: person = {
    name: "Joaquim",
    age: 10,
    favColour: "cinza"
}

const person4: person = {
    name: "Matilde",
    age: 7,
    favColour: "laranja"
}

// e)
enum RainbowColors {
    RED = "vermelho",
    ORANGE = "laranja",
    YELLOW = "amarelo",
    GREEN = "verde",
    CYAN = "azul claro",
    BLUE = "azul",
    VIOLET = "roxo"
}

type basicHuman = {    
    name: string,
    age: number,
    favColour: RainbowColors
}

const person5: basicHuman = {
    name: "Squirrel",
    age: 3,
    favColour: RainbowColors.VIOLET
}
console.log(person5)