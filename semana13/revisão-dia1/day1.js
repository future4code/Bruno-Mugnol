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
console.log(verifyPalindrome("socorram-me subi no onibus em marrocos"))

// Exercício 3
const allCombinations = (string) => {

}