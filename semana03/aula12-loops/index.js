// Exercícios de interpretação de código

// Exercício 1:
/* O código está somando, acumulativamente, a variável i à variável valor a cada incremento de 1 em i a partir de i = 0, enquanto i for menor que 5.
Acompanhando o código, temos:
i=0 -> valor = 0 + 0 = 0
i=1 -> valor = 0 + 1 = 1
i=2 -> valor = 1 + 2 = 3
i=3 -> valor = 3 + 3 = 6
i=4 -> valor = 6 + 4 = 10
i=5 -> Sai do loop, imprime na tela o valor = 10 */


// Exercício 2:
/* 2.a) Será impresso:
19
21
23
25
27
30

2.b) O for of roda todos os elementos então podemos colocar um "contador" no escopo do for of (let i = 0 antes do bloco for, por exemplo), usar i++ no escopo do for, e usar console.log(i) para imprimir o índice do elemento do array (numero of lista):

let i = 0
const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
    console.log("Índice: ", i)
  if (numero > 18) {
        console.log(numero)
    }
    i++
}


// DESAFIO 1:
/* Em uma análise geral, observamos que a variável linha é iniciada como uma string "vazia", sendo que o escopo do for é adicionar zeros (0) à essa string.
O número de zeros a ser adicionado é a quantidadeAtual + 1, então no primeiro loop do bloco while (quantidadeAtual = 0), será concatenado à linha apenas um 0. No segundo loop, dois 0s. No terceiro, três 0s. No quarto, quatro 0s. E no quinto loop, quantidadeAtual=4, portanto a condição não será cumprida e saíremos do bloco while.
Assim, teremos já impresso na tela:

0
00
000
0000
*/



// Exercícios de escrita de código

// // Exercício 3:
// const origin = []
// // 3.a)
// for (let element of origin) {
//     console.log(element)
// }

// // 3.b)
// for (let element of origin) {
//     console.log(element/10)
// }

// // 3.c)
// let evenArray = []
// for (let element of origin) {
//     if (element%2 === 0) {
//         evenArray.push (element)
//     }
// }
// console.log(evenArray)

// // 3.d)
// let stringArray = []
// let index = 0
// for (let element of origin) {
//     stringArray.push (`O elemento do index ${index} é: ${element}`)
//     index++
// }
// console.log(stringArray)

// // 3.e)
// let maxValue = origin[0]
// let minValue = origin[0]
// for (let element of origin) {
//     if (maxValue < element) {
//         maxValue = element
//     } else if (minValue > element) {
//         minValue = element
//     }
// }
// console.log(`O maior número do array é ${maxValue} e o menor é ${minValue}`



// DESAFIO 2
// const num = Number(prompt('Jogador 1: insira o número que você está pensando'))
// let guess
// let verifier = 0
// let counter = 0

// while (verifier === 0) {
//     guess = Number(prompt('Jogador 2: chute um número'))
//     console.log (`O número chutado foi: ${guess}`)
//     counter++
//     if (guess < num){
//         console.log ('Chutou rasteiro! Chute mais alto')
//     } else if (guess > num){
//         console.log ('Isolou a bola! Chute mais baixo')
//     } else if (guess === num){
//         verifier = 1
//     } else {
//         console.log ('O valor inserido foi inválido :/')
//     }
// }
// console.log(`Parabéns, você acertou!!
// O número de tentativas foi: ${counter}`)



// DESAFIO 3
// const num = Math.floor((Math.random() * 100))
// let guess
// let verifier = 0
// let counter = 0

// while (verifier === 0) {
//     guess = Number(prompt('Jogador, chute um número'))
//     console.log (`O número chutado foi: ${guess}`)
//     counter++
//     if (guess < num){
//         console.log ('Chutou rasteiro! Chute mais alto')
//     } else if (guess > num){
//         console.log ('Isolou a bola! Chute mais baixo')
//     } else if (guess === num){
//         verifier = 1
//     } else {
//         console.log ('O valor inserido foi inválido :/')
//     }
// }
// console.log(`Parabéns, você acertou!!
// O número de tentativas foi: ${counter}`)

/* Sim, essa alteração foi fácil! Foi necessário apenas alterar uma linha de código para o tornarmos funcional, duas linhas se pedirmos a um Jogador chutar o número invés de um jogador específico (Jogador 2).
Se utilizassemos let e não const, poderíamos apenas atribuir um novo valor para a variável NUM, sem haver necessidade de apagar a definição original. */



// DESAFIO 4 - BIRTH OF SKYNET
/* E se, em vez de colocar um jogador contra a máquina... colocássemos a máquina contra a máquina? Eis a minha tentativa: */

// const num = Math.floor((Math.random() * 100)) // Números de 0 a 100
// let guess
// let verifier = 0
// let counter = 0
// let topGuess = 100
// let bottomGuess = 0

// console.log(`O número correto é ${num}`)
// while (verifier === 0) {
//     guess = Math.floor((Math.random() * topGuess) + bottomGuess)
//     console.log (`O número chutado foi: ${guess}`)
//     counter++
//     if (guess < num){
//         bottomGuess = guess
//     } else if (guess > num){
//         topGuess = guess
//     } else if (guess === num){
//         verifier = 1
//     } else {
//         console.log ('O valor inserido foi inválido :/')
//     }
// }
// console.log(`Parabéns, você acertou!!
// O número de tentativas foi: ${counter}`)

// Não deu muuuito certo, mas funciona!