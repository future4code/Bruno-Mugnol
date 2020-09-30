/* Exercício 1 de interpretação
Faltou declarar as variáveis, mas:
a = 10, b = 10 -> atribuem o valor 10 às variáveis
console.log(b) -> retorna o valor de b, ou seja: 10
b = 5 -> atribui um novo valor à b: 5
console.log(a, b) -> retorna o valor de a E b, um seguido do outro (mas com um espaço) na mesma linha: 10 5

Exercício 2 de interpretação
a = 10 -> atribui a a o valor 10
b = 20 -> atribui a b o valor 20
c = a -> atribui a c o valor de a, 10
b = c -> atribui a b o valor da variável c, 10
a = b -> atribui a a o valor da variável b.
Como se trata de um compilador síncrono, as atribuições são feitas linhas por linha.
Portanto, 'a = b' atribui o valor mair recente de b: 10

console.log(a, b, c) -> retorna: 10 10 10 */

// OBS: pra rodar um dos próximos códigos separadamente, basta remover o /**/ em cada Exercício


/*
//Exercício 1 de escrita
let name
let age

console.log("Typeof nome:",typeof name,". Typeof idade:", typeof age)
// Retorna 'undefined' para ambas, pois não definimos as variáveis.

name = prompt('Qual é o seu nome?')
age = prompt('Qual a sua idade?')

console.log("Typeof nome:",typeof name,". Typeof idade:", typeof age)
// Retorna 'string' para ambas. Nota-se que, ao atribuir um valor às variáveis, automaticamente atribui-se um tipo.

console.log(`Olá ${name}. Sabemos que você tem ${age} anos. Estamos te vigiando.`)
*/



/*
//Exercício 2 de escrita
let bloodType, weight, color, ketchup, bob

bloodType = prompt('1. Qual seu tipo sanguíneo?')
console.log (`1. Qual seu tipo sanguíneo? 
Resposta: ${bloodType}.`)

weight = prompt('2. Perdão, mas... quanto você pesa?')
console.log (`2. Perdão, mas... quanto você pesa?
Resposta: ${weight}.`)

color = prompt('3. Sua cor favorita é vermelho-sangue por quê?')
console.log (`3. Sua cor favorita é vermelho-sangue por quê?
Resposta: ${color}.`)

ketchup = prompt(`4. Você gosta de ketchup?`)
console.log (`4. Você gosta de ketchup?
Resposta: ${ketchup}.`)

bob = prompt('5. Conhece o Bob??')
console.log (`5. Conhece o Bob??
Resposta: ${bob}.`)
*/



/*
//Exercício 3 de escrita
let favFood = ["parmegiana", " peixe frito", " pizza em dobro da Domino's", " panceta na grelha", " petit gateau"]

alert (favFood)

alert (`Essas são as minhas comidas preferidas:
- ${favFood[0]};
-${favFood[1]};
-${favFood[2]};
-${favFood[3]};
-${favFood[4]}.`)

favFood[1] = prompt("Digite uma comida preferida sua para substituir o segundo item da minha lista:")

alert (`Essas são as nossas comidas preferidas combinadas:
- ${favFood[0]};
- ${favFood[1]};
-${favFood[2]};
-${favFood[3]};
-${favFood[4]}.`)
*/



/*
//Exercício 4 de escrita
let question = ["Você manteve o isolamento?", "Tem usado máscara de maneira INCORRETA?", "Gosta de lasanha?"]
let answer = [true, false, true]

alert (`${question[0]} ${answer[0]}`)
alert (`${question[1]} ${answer[1]}`)
alert (`${question[2]} ${answer[2]}`)
*/