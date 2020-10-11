// Exercícios de interpretação de código
// Exercício 1
/* Cria uma função de 1 parâmetro que pede ao usuário a inserção de um valor, o transforma em tipo Number, e retorna "R$" seguido do parâmetro multiplicado pelo valor inserido.
Cria uma variável que invoca a função, substituindo o parâmetro pelo valor 100. A função retornará: "R$"  + 100*cotacao, sendo que cotacao é um número que depende da inserção do usuário.
Imprime essa variável no console. */



// Exercício 2
/* Cria uma função que pede dois parâmetros: tipoDeInvestimento e valor. tipoDeInvestimento é do tipo string, e deve assumir um dos valores: "Poupança", "Renda Fixa", "CDB" ou "Ações", senão retorna um alerta ao usuário dizendo "TIPO DE INVESTIMENTO INFORMADO INCORRETO!".
Dentro da função cria-se uma variável valorAposInvestimento, cujo valor altera dependendo do tipoDeInvestimento, pois este é comparado em um switch case e cada case é para um dos valores possíveis mencionados anteriormente.
A função retorna valorAposInvestimento.

novoMontante invoca a função investeDinheiro com os parâmetros "Ações" e 150, ou seja, onde havia tipoDeInvestimento na função será rodado com "Ações", e onde havia valor, com 150.

segundoMontante invoca a função investeDinheiro com os parâmetros "Tesouro Direto" e 200, ou seja, onde havia tipoDeInvestimento na função será rodado com "Tesouro Direto", e onde havia valor, com 200. Como "Tesouro Direto" não é um tipo válido, a função, ao ser rodada, emitirá o alerta ao usuário, e não irá alterar o valorAposInvestimento.

Como "Ações" é um tipo de investimento válido, console.log(novoMontante) retornará valorAposInvestimento, com seu novo valor: 150 * 1.1, ou seja, aparecerá no console, em azul (pois é tipo number):

    165

Já em segundoMontante: a função retorna valorAposInvestimento após ter dado o alerta, mas como foi definido vazio, valorAposInvestimento = undefined. Assim, aparecerá no console:

    undefined

*/



// Exercício 3
/* Cria um array chamado numeros e dois arrays vazios, array1 e array2.
Há um loop, que realiza seu conteúdo para cada "numero of numeros" (cada elemento do array numeros). Se o elemento analisado for par (numero%2 === 0), esse elemento será colocado no final do array1 (quando vazio, se torna o primeiro elemento). Caso contrário, será colocado no final do array2.

numeros.lenght retorna a quantidade de elementos dentro do array numeros, então aparecerá no console:

    Quantidade total de números 14


array1 contém apenas os elementos pares do array numeros, então a quantidade de elementos nele será 6. No console será impresso array1.lenght, portanto:

    6

array2 contém apenas os elementos não-pares (como nosso array contém apenas números inteiros, isso significa que todos elementos serão ímpares). A quantidade de elementos será 8, assim array2.lenght:

    8

*/



// Exercício 4
/* Cria um array chamado numeros, uma variável numero1 com valor "infinity" (o que significa que não existe um valor maior) e uma variável numero2 com valor zero.
Há um loop, que realiza seu conteúdo para cada "numero of numeros" (cada elemento do array numeros). Neste loop, se o elemento for menor que numero1, numero1 assume o valor do elemento. Se o elemento for maior que numero2, numero2 assume o valor do elemento.

Perceba que as variáveis numero1 e numero2 serão possivelmente alteradas a cada iteração. O primeiro elemento sempre será menor que numero1, então numero1 assumirá o seu valor. Como numero1 a cada iteração assume o valor do elemento caso ele seja maior que o elemento, obteremos, ao final do loop, o menor valor dentro do array numeros. Ou seja, numero1 será o valor mínimo.
Com o numero2 o processo será o contrário: ele assume o valor do elemento se este for maior, resultando no maior valor do array numeros ao final do loop. numero2 será o valor máximo.

Será impresso no console, então:

    -10
    1590

*/

/* ----------------------------------------------- */

// Exercícios de Lógica de Programação
// Exercício 1
/* Para percorrer uma lista podemos utilizar for, for of, for in, while, forEach, map, filter, sendo que os três últimos requerem um callback. */
const percorreUmaLista = (array) => {
    for (element of array) {
        console.log(`Estou percorrendo o elemento que possui valor ${element}.`)
    }
}



// Exercício 2
/*
2.a) booleano1 && booleano2 && !booleano4
            true && false && !booleano4
            false
Como AND (&&) requer que todos valores sejam true para saída ser true, e temos uma condição falsa que será aplicada somente em ANDs, essa expressão resultará em false. (Não importa o valor de booleano1 e !booleano4, pois apenas 1 valor false é necessário para saída dessa expressão)


2.b) (booleano1 && booleano2) || !booleano3
            (true && false) || !(!booleano2)
            false || booleano2
            false || false
            false


2.c) (booleano2 || booleano3) &&  (booleano4 || booleano1)
Como booleano3 = !booleano2, (booleano2 || booleano3) = true, independentemente do valor inicial de booleano2, pois um dos valores será true e o operador OR (||) necessita apenas de um valor true para a saída ser true.
Como booleano1 = true, a expressão da direita (booleano4 || booleano1) será sempre true independentemente do valor de booleano4, pois o operador OR (||) necessita apenas de um valor true para a saída ser true.
Portanto, temos:
            (booleano2 || booleano3) && (booleano4 || booleano1)
            true && true
            true


2.d) !(booleano2 && booleano3) || !(booleano1 && booleano3)
Como booleano3 = !booleano2, (booleano2 && booleano3) = false, independentemente do valor inicial de booleano2, pois um dos valores será false e o operador AND (&&) necessita apenas de um valor false para a saída ser false.
Assim, !(booleano2 && booleano3) = !(false) = true, então toda a expressão terá valor true pois o operador OR (||) necessita apenas de um valor true para a saída ser true.
    !(booleano2 && booleano3) || !(booleano1 && booleano3)
            true


2.e) !(booleano1) && !(booleano3) || (!booleano4 && booleano3 && booleano3)
            !true && !(!booleano2) || (!(!booleano3) && booleano3)
            false && !(!false) || (booleano3 & booleano3)
            false || booleano3
            false || !booleano2
            false || !false
            false || true
            true



// Exercício 3
/* O código não funciona pois não incrementamos a variável i dentro do Loop. E também, se houvesse esse incremento, como a variável i inicia em 0 e a condição é i <= quantidadeDeNumerosPares, retornaríamos um número par a mais. Isso ocorreria porque o loop iria iterar mesmo quando i = quantidadeDeNumerosPares.
Correção do código (transformada em função): */

const imprimirNumerosPares = (quantidadeDeNumerosPares) => {
    let i = 0
    while (i < quantidadeDeNumerosPares) {
        console.log(i * 2)
        i++
    }
}



// Exercício 4
const verificarTriangulo = (a, b, c) => {
    if ((a === b) && (a === c)) {
        console.log("O triângulo é Equilátero.")
    } else if (((a === b) && (a !== c)) || ((a === c) && (a !== b)) || ((b == c) && (b !== a))) {
        console.log("O triângulo é Isósceles.")
    } else if ((a !== b) && (a !== c) && (b !== c)) {
        console.log("O triângulo é Escaleno.")
    } else {
        console.log("Os valores inseridos são inválidos.")
    }
}



// Exercício 5
const comparaDoisNumeros = (x, y) => {
    let xMaior = 0 //usado na conta final de diferença entre os números para sempre termos um resultado positivo

    // Verifica qual é parâmetro maior
    if (x > y) {
        console.log(`O maior é: ${x}`)
        xMaior = 1
    } else if (x < y) {
        console.log(`O maior é: ${y}`)
        xMaior = -1
    } else {
        console.log(`x é igual a y ou os valores inseridos são inválidos`)
    }

    // Verifica divisibilidade de x por y
    if (x % y === 0) {
        console.log(`${x} é divisível por ${y}`)
    } else {
        console.log(`${x} não é divisível por ${y}`)
    }

    // Verifica divisibilidade de y por x
    if (y % x === 0) {
        console.log(`${y} é divisível por ${x}`)
    } else {
        console.log(`${y} não é divisível por ${x}`)
    }

    // Determina a diferença entre os parâmetros
    console.log(`A diferença entre eles é ${xMaior * (x - y)}`)
}

/* ----------------------------------------------- */

// Exercícios de Funções
// Exercício 1
const imprimirSegundos = (array) => {
    let primeiroMax = array[0]
    let segundoMax = -Infinity
    let primeiroMin = array[0]
    let segundoMin = Infinity

    for (element of array) {
        if (primeiroMax < element) {
            primeiroMax = element
        }

        if (primeiroMin > element) {
            primeiroMin = element
        }
    }

    for (element of array) {
        if ((segundoMax < element) && (primeiroMax !== element)) {
            segundoMax = element
        }

        if ((segundoMin > element) && (primeiroMin !== element)) {
            segundoMin = element
        }
    }

    console.log(`O segundo máximo é ${segundoMax} e o segundo mínimo é ${segundoMin}`)
}

imprimirSegundos([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0, 0.5, 0.3, -10, 50])



// Exercício 2
const alertar = () => {
    alert("Hello Future4")
}
//alertar()

/* ----------------------------------------------- */

// Exercícios de Objetos
// Exercício 1
/*
Objetos:
    São usados para guardar um conjunto de informações de maneira organizada e associada a uma única palavra: o nome do objeto. Como um armário, ele contém várias gavetas (chamamos de chaves) que possuem itens diferentes dentro (valores). Criado esse objeto (armário), podemos acessar ele como um todo, o que nos retornaria as chaves com seus respectivos valores (gavetas e qual item está em cada gaveta); ou podemos acessar apenas uma das chaves do objeto (uma só gaveta do armário e seu conteúdo), retornando apenas seu valor (o item dentro da gaveta que queremos).

    Isso nos permite associar, com facilidade, diversas características a um elemento: criando um objeto para um usuário, por exemplo, poderíamos associar a esse usuário as chaves nome, idade, formação, etc e seus respectivos valores, conseguindo acessar esses dados rapidamente e com a certeza que estão relacionados ao usuário.

    Portanto, objetos são mais indicados para armazenar diversos valores e características associados a um nome.

Arrays:
    Arrays são vetores. Análogo a uma estante, onde itens são distribuídos desde a primeira prateleira até a última, os elementos de um array são associados a índices que determinam a posição do elemento nesse array. São indicados para armazenar um conjunto de valores em sequência, pois sempre que um elemento é acrescentado através de .push() ele é adicionado NO FINAL do array, o que nos permite um alto controle do índice de cada elemento e, assim, fácil acesso a ele.
    */



// Exercício 2
const criaRetangulo = (lado1, lado2) => {
    const objetoRetangular = {
        largura: lado1,
        altura: lado2,
        perímeto: 2 * (lado1 + lado2),
        área: lado1 * lado2
    }
    return objetoRetangular
}



// Exercício 3
const filmeFavorito = {
    título: 'O Retorno do Rei',
    ano: 2003,
    diretor: 'Peter Jackson',
    atores: ['Elijah Wood', ' Ian McKellen', ' Liv Tyler', ' Viggo Mortensen', ' Sean Astin', ' Cate Blanchett', ' John Rhys-Davies', ' Billy Boyd', ' Dominic Monaghan', ' Orlando Bloom', ' Hugo Weaving', ' Miranda Otto', ' David Wenham', ' Karl Urban', ' John Noble', ' Andy Serkis', ' Ian Holm', ' Sean Bean']
}
console.log(`Venha assistir ao filme ${filmeFavorito.título}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.atores}.`)



// Exercício 4
const pessoaAleatoria = {
    nome: 'Fulano de Tal',
    idade: '420',
    email: 'fulano_tal@de.com',
    endereço: 'Rua dos Loucos, n° 0'
}

const pessoaAnonima = {
    ...pessoaAleatoria,
    nome: 'ANÔNIMO'
}

/* ----------------------------------------------- */

// Exercícios de funções de array
// Exercício 1
const arrayDePessoas = [
    { nome: "Pedro", idade: 20 },
    { nome: "João", idade: 10 },
    { nome: "Paula", idade: 12 },
    { nome: "Artur", idade: 89 }
]

// 1.a)
const arrayDeAdultos = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade >= 20
})

// 1.b)
const arrayDeJovens = arrayDePessoas.filter((pessoa) => {
    return pessoa.idade < 20
})



// Exercício 2
const array = [1, 2, 3, 4, 5, 6]

// 2.a)
const arrayVezesDois = (array) => {
    let arrayDobrado = []
    for (numero of array) {
        arrayDobrado.push(numero * 2)
    }
    return arrayDobrado
}

// 2.b)
const arrayVezesTres = (array) => {
    let arrayTriplicado = []
    for (numero of array) {
        arrayTriplicado.push(String(numero * 3))
    }
    return arrayTriplicado
}

// 2.c)
const arrayDeStrings = (array) => {
    let arrayDeStrings = []
    for (numero of array) {
        if (numero%2 === 0) {
            arrayDeStrings.push(`${numero} é par`)
        } else {
            arrayDeStrings.push(`${numero} é ímpar`)
        }
    }
    return arrayDeStrings
}