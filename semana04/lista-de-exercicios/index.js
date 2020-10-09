// Exercícios de interpretação de código
// Exercício 1:
/* Cria uma função de 1 parâmetro que pede ao usuário a inserção de um valor, o transforma em tipo Number, e retorna "R$" seguido do parâmetro multiplicado pelo valor inserido.
Cria uma variável que invoca a função, substituindo o parâmetro pelo valor 100. A função retornará: "R$"  + 100*cotacao, sendo que cotacao é um número que depende da inserção do usuário.
Imprime essa variável no console. */



// Exercício 2:
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