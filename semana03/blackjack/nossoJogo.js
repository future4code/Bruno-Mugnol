// console.log("Bem vindo(a) ao jogo de Blackjack...")

// let cartaUser1
// let cartaUser2

// let cartaCPU1
// let cartaCPU2

// let verifier = 0
// while (verifier === 0){
//    if (confirm("Iniciar uma nova rodada?")){
//       cartaUser1 = comprarCarta()
//       cartaUser2 = comprarCarta()
//       valorUser = cartaUser1.valor + cartaUser2.valor

//       console.log(`Usuário - cartas: ${cartaUser1.texto} ${cartaUser2.texto} - pontuação ${valorUser}`)

//       cartaCPU1 = comprarCarta()
//       cartaCPU2 = comprarCarta()

//       valorCPU = cartaCPU1.valor + cartaCPU2.valor

//       console.log(`Computador - cartas: ${cartaCPU1.texto} ${cartaCPU2.texto} - pontuação ${valorCPU}`)

//       if (valorUser > valorCPU){
//          console.log("O usuário ganhou!")
//       } else if (valorUser < valorCPU){
//          console.log("O computador ganhou!")
//       } else if (valorUser === valorCPU){
//          console.log("Empate!")
//       }

//       if (!confirm("Continuar jogando?")){
//          verifier = 1
//       }
//    } else {
//       verifier = 1
//    }
// }