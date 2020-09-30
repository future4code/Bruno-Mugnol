/* Exercícios de interpretação de código

Exercício 1:

const bool1 = true
const bool2 = false
const bool3 = !bool2  // atribui o inverso de bool2: true

let resultado = bool1 && bool2
console.log("a. ", resultado)  // false <-

resultado = bool1 && bool2 && bool3
console.log("b. ", resultado)  // false <-

resultado = !resultado && (bool1 || bool1)
console.log("c. ", resultado)  // true <-

console.log("e. ", typeof resultado)  // boolean <-

Portanto, aparecerá no console:
a. false
b. false
c. true
e. boolean


Exercício 2:

let array
console.log('a. ', array) // undefined

array = null
console.log('b. ', array) // null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)  // 11

let i = 0
console.log('d. ', array[i])  // 3

array[i+1] = 19
console.log('e. ', array)  // [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor)  // 9

Portanto, aparecerá no console:
a. undefined
b. null
c. 11
d. 3
e. (11)[3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. 9
*/


/* Exercícios de escrita de código: */

// Exercício 1:
/*
let yourAge = Number(prompt('Qual a sua idade?'))
let bestieAge = Number(prompt('Qual a idade do seu melhor amigo(a)?'))
let boolAnswer = yourAge > bestieAge
let ageDiff = yourAge - bestieAge

alert (`Sua idade é maior que a do seu melhor amigo?
${boolAnswer}`)

alert (`A diferença de idade entre os dois é de ${ageDiff} anos.`)
*/



// Exercício 2:
/*
let numPar = Number(prompt('Digite um número par.'))

console.log (numPar%2)
// Todo número par dividido por 2 não deixa resto.
// Portanto a resposta sempre será 0.

console.log ((numPar+1)%2)
// Todo número ímpar dividido por 2 deixa resto 1.
*/



// Exercício 3:
/*
let listaDeTarefas = [ ]

listaDeTarefas[0] = prompt('Insira 3 tarefas, uma por vez.\nTarefa 1:')
listaDeTarefas[1] = prompt('Tarefa 2:')
listaDeTarefas[2] = prompt('Tarefa 3:')
//Obs.: também podemos usar listaDeTarefas.push = prompt()

console.log (listaDeTarefas)

i = prompt('Escolha um índice para remover: 0, 1 ou 2')
listaDeTarefas.splice(i,1)

console.log (listaDeTarefas)
*/



// Exercício 4:
/*
let nomeDoUsuario = prompt('Seu nome:')
let emailDoUsuario = prompt('Seu e-mail:')

alert (`O e-mail ${emailDoUsuario} foi cadastrado com sucesso.
Seja bem vinda-(o), ${nomeDoUsuario}!`)
*/



/*
// Desafio 1:
// 1.a)
let tempA = 77
let unA = '°F'
let unAK = 'K'
let tempAEmKelvin = (tempA - 32)*5/9 + 273.15

console.log (`${tempA}${unA} equivalem a ${tempAEmKelvin} ${unAK}.`)

// 1.b)
let tempB = 80
let unB = '°C'
let unBF = '°F'
let tempBEmFahrenheit = tempB*9/5 + 32

console.log (`${tempB}${unB} equivalem a ${tempBEmFahrenheit}${unBF}.`)

//1.c)
let tempC = 30
let unC = '°C'
let unCF = '°F'
let tempCEmFahrenheit = tempC*9/5 + 32
let unCK = 'K'
let tempCEmKelvin = tempC + 273.15

console.log (`${tempC}${unC} equivalem a ${tempCEmFahrenheit}${unCF} e a ${tempCEmKelvin} ${unCK}.`)

//1.d)
tempC = Number(prompt('Escolha uma temperatura em Celsius para transformarmos.'))
unC = '°C'
unCF = '°F'
tempCEmFahrenheit = tempC*9/5 + 32
unCK = 'K'
tempCEmKelvin = tempC + 273.15

console.log (`${tempC}${unC} equivalem a ${tempCEmFahrenheit}${unCF} e a ${tempCEmKelvin} ${unCK}.`)
*/


/*
// Desafio 2:
//2.a) e b)
let priceHour = 0.05
let consumed = 280

console.log(priceHour*consumed)

consumed = Number(prompt('Insira a quantidade de kW consumida:'))
let discount = 15/100 //15%

console.log(priceHour*consumed*(1 - discount)) // 1 - discount = 85% do valor, ou seja, o quantos deve ser pago
*/


/*
// Desafio 3:
// 3.a)
let lb = 20
let lbkg = lb * 0.453592
console.log(`20 lb equivalem a ${lbkg} kg`)

// 3.b)
let oz = 10.5
let ozkg = oz * 0.0283495
console.log(`10.5 oz equivalem a ${ozkg} kg`)

// 3.c)
let mi = 100
let mimetro = mi * 1609.34
console.log(`100 mi equivalem a ${mimetro} m`)

// 3.d)
let ft = 50
let ftmetro = ft * 0.3048
console.log(`50 ft equivalem a ${ftmetro} m`)

// 3.e)
let gal = 103.56
let galL = gal * 3.78541
console.log(`103.56 gal equivalem a ${galL} L`)

// 3.f)
let xic = 450
let xicL = xic * 0.2365881714
console.log(`450 xic (EUA) equivalem a ${xicL} L`)


// 3.g)
lb = Number(prompt('Insira um peso em libra (lb)'))
lbkg = lb * 0.453592
console.log(`${lb} lb equivalem a ${lbkg} kg`)

oz = Number(prompt('Insira um peso em onça (oz)'))
ozkg = oz * 0.0283495
console.log(`${oz} oz equivalem a ${ozkg} kg`)

mi = Number(prompt('Insira um comprimento em milha (mi)'))
mimetro = mi * 1609.34
console.log(`${mi} mi equivalem a ${mimetro} m`)

ft = Number(prompt('Insira um comprimento em pés (ft)'))
ftmetro = ft * 0.3048
console.log(`${ft} ft equivalem a ${ftmetro} m`)

gal = Number(prompt('Insira um volume em galão (gal)'))
galL = gal * 3.78541
console.log(`${gal} gal equivalem a ${galL} L`)

xic = Number(prompt('Insira um volume em xícara (xic)'))
xicL = xic * 0.2365881714
console.log(`${xic} xic (EUA) equivalem a ${xicL} L`)
*/