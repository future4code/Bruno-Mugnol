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