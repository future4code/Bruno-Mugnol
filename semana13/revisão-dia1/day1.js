// Funções
// Exercício 1
const reverseText = (text) => {
    return text.split("").reverse().join("")
}
//console.log(reverseText("texto"))

// Exercício 2
const verifyPalindrome = (text) => {
    const normalText = text.replace("-", "").split(" ").join("").toLowerCase()
    const reversedText = reverseText(normalText)
    return normalText === reversedText
}
// console.log(verifyPalindrome("socorram-me subi no onibus em marrocos"))

// Exercício 3
const getAllCombinations = (string) => {
    const outputArray = []
    const splitString = string.split("")

    const getAllSubsets = (array) => {
        return array.reduce(
            (subsets, value) => {
                return subsets.concat(subsets.map(set => [...set, value]))
            }
            ,
            [[]]
        )
    }

    getAllSubsets(splitString).forEach((subset) => {
        outputArray.push(subset.join(""))
    })

    outputArray.splice(0, 1)

    return outputArray.join(", ")
}

// console.log(getAllCombinations("pão"))

// Exercício 4
const sortStringAlphabetically = (string) => {
    return string.toLowerCase().split("").sort().join("")
}

//console.log(sortStringAlphabetically("abcdefghijklmnopqrstuvwxyzkmasfbAgDAghJAAOGFUSAGJUHFBPAHFQWKNB"))

// Exercício 5
const capitalizeFirstLetters = (string) => {
    const outputArray = []
    const splitString = string.split(" ")

    for (let word of splitString) {
        word = word[0].toUpperCase() + word.substring(1)
        outputArray.push(word)
    }

    return outputArray.join(" ")
}
console.log(capitalizeFirstLetters("fala meu good"))