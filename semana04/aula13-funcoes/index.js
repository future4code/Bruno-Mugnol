/* Exercícios de interpretação de código
Exercício 1:
1.a) Será impresso:
10
20

1.b) Nada aconteceria!



Exercício 2:
2.a) Serão impressos os elementos de índice 0 e 1 do array:
"Darvas"
"Caio"

2.b) Será impresso:
"Amanda"
"Caio"



Exercício 3:
A função recebe um array, verifica quais elementos são pares e armazena o valor ao quadrado desses elementos no arrayFinal.
*/



// Exercícios de escrita de código
// Exercício 4:
// 4.a)
// let fixedInfo = () => {
//     console.log ("Eu sou Bruno, tenho 24 anos, moro em Valinhos e sou estudante.")
// }
// fixedInfo()

// 4.b)
// let variableInfo = (name,age,adress,student) => {
//     let whatAmI
//     if (student === true){
//         whatAmI = "sou estudante"
//     } else if (student === false){
//         whatAmI = "não sou estudante"
//     } else {
//         whatAmI = "sou bobo(a) e não sei usar essa função"
//     }
//    return `Eu sou ${name}, tenho ${age} anos, moro em ${adress} e ${whatAmI}.`
// }
// console.log(variableInfo("Bruno", 24, "Rua João Previtale", "ué"))



// Exercício 5
// 5.a)
// let sum = (a, b) => {
//     let simpleSum = a + b
//     return simpleSum
// }
// console.log(sum(5,7))

// 5.b)
// let compare = (a, b) => {
//     let answer
//     if (a >= b){
//         answer = true
//     } else {
//         answer = false
//     }
//     return answer
// }
// console.log(compare(2, 2))

// 5.c)
// let spamStuff = (stuff) => {
//     for (i=0; i<10; i++){
//         console.log(stuff)
//     }
// }
// spamStuff("oláááá")



// // Exercício 6
// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]

// // 6.a)
// let sizeArray = (bananinha) => {
//     return bananinha.length
// }
// console.log(sizeArray(array))

// // 6.b)
// let evenCheck = (moranguinho) => {
//     if (moranguinho %2 === 0){
//         return true
//     } else if (moranguinho %2 === 1){
//         return false
//     } else {
//         console.log("Digita um número no evenCheck, pô")
//     }
// }
// console.log(evenCheck(540))

// // 6.c)
// let numberOfEvens = (abacaxi) => {
//     let contadorFeliz = 0
//     for (goiaba of abacaxi){
//         if (goiaba%2 === 0){
//             contadorFeliz++
//         }
//     }
//     return contadorFeliz
// }
// console.log(numberOfEvens(array))

// // 6.d)
// let numberOfEvensReturns = (manga) => {
//     let contadorFeliz = 0
//     for (uva of manga){
//         if (evenCheck(uva)){
//             contadorFeliz++
//         }
//     }
//     return contadorFeliz
// }
// console.log(numberOfEvensReturns(array))



// DESAFIOS

// Exercício 1:
// let printContent = (anyText) =>{
//     console.log(anyText)
// }

// let simpleSum = (a, b) =>{
//     num = a + b
//     printContent(num)
// }
// simpleSum(15,27)



// // Exercício 2:
// const numbers = [0, 8, 23, 16, 10, 15, 41, 12, 13]
// console.log(numbers)

// // 2.a)
// let getEvenTimesTwo = (array) =>{
//     let evenArray = []
//     for (element of array){
//         if (element %2 === 0){
//             evenArray.push(element*2)
//         }
//     }
//     return evenArray
// }
// console.log(getEvenTimesTwo(numbers))

// // 2.b)
// let largestNumber = (array) =>{
//     let maximum = array[0]
//     for (element of array){
//         if (maximum < element){
//             maximum = element
//         }
//     }
//     return maximum
// }
// console.log(largestNumber(numbers))

// // 2.c)
// let indexOfLargest = (array) =>{
//     let maxIndex = 0
//     for (i=0; i < array.length; i++){
//         if (largestNumber(array) === array[i]){
//             maxIndex = i
//         }
//     }
//     return maxIndex
// }
// console.log(indexOfLargest(numbers))

// // 2.d)
// let invertArray = (array) =>{
//     let invertedArray = []
//     for (i = array.length - 1; i > -1; i--){
//         invertedArray.push(array[i])
//     }
//     return invertedArray
// }
// console.log(invertArray(numbers))