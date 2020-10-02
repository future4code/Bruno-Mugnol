console.log("Bem vindo(a) ao jogo de Blackjack...")

let cartaUser = []
let cartaUserTexto = []
let cartaCPU = []

let verifier = 0
while (verifier === 0){
   if (confirm("Iniciar uma nova rodada?")){
      cartaUser = []
      cartaUser.push(comprarCarta(),comprarCarta())
      let valorUser = cartaUser[0].valor + cartaUser[1].valor
      while (valorUser===22){
         cartaUser = [comprarCarta(), comprarCarta()] // Chamar a função novamente nos garante novos valores aleatórios
      }
      cartaUserTexto = [cartaUser[0].texto, cartaUser[1].texto]
      
      cartaCPU = []
      cartaCPU.push(comprarCarta(),comprarCarta())
      let valorCPU = cartaCPU[0].valor + cartaCPU[1].valor
      while (valorCPU===22){
         cartaCPU = [comprarCarta(), comprarCarta()]
      }

      if (confirm(`Suas cartas são ${cartaUserTexto}. A carta revelada do computador é ${cartaCPU[0].texto}. Comprar mais cartas?`)){
         let more = true
         for (let i=2; (more && (valorUser < 22)); i++){
            cartaUser.push(comprarCarta())
            cartaUserTexto.push(cartaUser[i].texto)
            valorUser = 0
            for (let n=0; n < cartaUser.length; n++){
               valorUser += cartaUser[n].valor
            }
            console.log(`Você agora tem ${cartaUserTexto}, valendo ${valorUser} pontos.`)
            if (valorUser < 22){
               more = confirm(`Você agora tem ${cartaUserTexto}, valendo ${valorUser} pontos. Continuar comprando?`)
            } else {
               console.log(`Vish! Você estorou com ${valorUser} pontos!`)
               more = false
            }
         }

      }
      console.log(`As suas cartas eram ${cartaUserTexto}.\nAs cartas do computador eram ${cartaCPU[0].texto} e ${cartaCPU[1].texto}`)

      if ((valorUser > valorCPU) && (valorUser < 22)){
         console.log("O usuário ganhou!")
      } else if (valorUser < valorCPU){
         console.log("O computador ganhou!")
      } else if (valorUser === valorCPU){
         console.log("Empate!")
      }

      if (!confirm("Continuar jogando?")){
         verifier = 1
      }
   } else {
      verifier = 1
   }
}