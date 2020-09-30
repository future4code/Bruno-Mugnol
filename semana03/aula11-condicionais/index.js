// Exercícios de interpretação de código:

// Exercício 1:
/* Os números que passam no teste são os números que, ao serem divididos por 2, restam 0. Ou seja, são os números pares.
Todos os outros números não passarão no teste: números ímpares ou não-inteiros. */


// Exercício 2:
/* 2.a) O código permite o usuário a obter o preço de uma fruta por ele escolhida, e somente esse preço aparecerá.
2.b) Se fruta = "Maçã" o código retornará no console:
    O preço da fruta Maçã é R$ 2.25
2.c) O código continuará a ser rodado e será atribuído preco = 5. */


// Exercício 3:
/* 3.a) A primeira linha está pedindo uma inserção do usuário e transformando o valor inserido de tipo string para tipo number.
3.b) Para numero = 10: Esse número passou no teste
Para numero = -10 nada irá aparecer
3.c) Sim, console.log(mensagem) dará erro pois a variável mensagem foi definida dentro de um escopo, portanto não é definida globalmente. */




// Exercícios de escrita de código:
// // Exercício 4:
// const age = Number(prompt('Qual a sua idade?'))
// if (age >= 18){
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }



// Exercício 5:
// let periodo = prompt("Qual período do dia você estuda? Responda M para matutino, V para vespertino ou N para noturno.")
// if (periodo === "M"){
//     console.log("Bom dia!")
// } else if (periodo === "V"){
//     console.log("Boa tarde!")
// } else if (periodo === "N"){
//     console.log("Boa noite!")
// } else {
//     console.log("Por favor recarregue a página e insira um valor válido.")
// }



// Exercíco 6:
// let periodo = prompt("Qual período do dia você estuda? Responda M para matutino, V para vespertino ou N para noturno.")
// switch (periodo){
//     case 'M':
//         console.log("Bom dia!")
//         break
//     case 'V':
//         console.log("Boa tarde!")
//         break
//     case 'N':
//         console.log("Boa noite!")
//         break
//     default:
//         console.log("Por favor recarregue a página e insira um valor válido.")
//         break
// }



// Exercício 7:
// let gen = prompt("Qual o gênero do filme?")
// let price = Number(prompt("Qual o preço do ingresso?"))

// if ((gen === 'fantasia') && (price < 15)) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :/")
// }



// DESAFIOS
// Desafio 1:
// let snack = prompt("O que você pretende comer durante o filme?")
// let gen = prompt("Qual o gênero do filme?")
// let price = Number(prompt("Qual o preço do ingresso?"))

// if ((gen === 'fantasia') && (price < 15)) {
//     console.log("Bom filme!")
//     console.log(`... com ${snack}!`)
// } else {
//     console.log("Escolha outro filme :/")
// }



// Desafio 2:
const name = prompt("Insira seu nome completo:")
const type = prompt("Jogo internacional (IN) ou doméstico (DO):")
let typeComplete
const stage = prompt("Etapa do jogo. (Use SF para semi-final, DT para decisão de terceiro lugar e FI para final)")
let stageComplete
const category = prompt("Categoria (1, 2, 3 ou 4):")
const quant = Number(prompt("Quantidade de ingressos:"))
let priceConvertion = 0
let moedaUsada
let priceNominal = 0
let counter = 0

switch(type){
    case 'DO':
        priceConvertion = 1
        moedaUsada = 'R$'
        typeComplete = 'Nacional'
        counter += 1
        break
    case 'IN':
        priceConvertion = 1/4.10
        moedaUsada = 'U$'
        typeComplete = 'Internacional'
        counter += 1
        break
    default:
        console.log("O tipo de jogo inserido é inválido.")
}

switch(category){
    case '1':
        counter += 1
        if (stage === 'SF'){
            priceNominal = 1320
            counter += 1            
        } else if (stage === 'DT'){
            priceNominal = 660
            counter += 1
        } else if (stage === 'FI'){
            priceNominal = 1980
            counter += 1
        } else {
            console.log("Etapa do jogo inserida é inválida.")
        }
        break
    case '2':
        counter += 1
        if (stage === 'SF'){
            priceNominal = 880
            counter += 1            
        } else if (stage === 'DT'){
            priceNominal = 440
            counter += 1
        } else if (stage === 'FI'){
            priceNominal = 1320
            counter += 1
        } else {
            console.log("Etapa do jogo inserida é inválida.")
        }
        break
    case '3':
        counter += 1
        if (stage === 'SF'){
            priceNominal = 550
            counter += 1            
        } else if (stage === 'DT'){
            priceNominal = 330
            counter += 1
        } else if (stage === 'FI'){
            priceNominal = 880
            counter += 1
        } else {
            console.log("Etapa do jogo inserida é inválida.")
        }
        break
    case '4':
        counter += 1
        if (stage === 'SF'){
            priceNominal = 220
            counter += 1            
        } else if (stage === 'DT'){
            priceNominal = 170
            counter += 1
        } else if (stage === 'FI'){
            priceNominal = 330
            counter += 1
        } else {
            console.log("Etapa do jogo inserida é inválida.")
        }
        break
    default:
        console.log("Categoria inserida é inválida.")
        break
}

if ((stage === "SF") && (counter === 3)){
    stageComplete = "Semi-final"
} else if ((stage === "DT") && (counter === 3)){
    stageComplete = "Decisão de terceiro lugar"
} else if ((stage === "FI") && (counter === 3)){
    stageComplete = "Final"
}

if (counter === 3){
    console.log(`---Dados da compra---
    Nome do cliente: ${name}
    Tipo do jogo: ${typeComplete}
    Etapa do jogo: ${stageComplete}
    Categoria: ${category}
    Quantidade de Ingressos: ${quant}
    ---Valores---
    Valor do ingresso: ${moedaUsada} ${priceNominal*priceConvertion}   
    Valor total: ${moedaUsada} ${priceNominal*priceConvertion*quant}`)
} else {
    console.log("Houve um erro. Por favor tente novamente.")
}