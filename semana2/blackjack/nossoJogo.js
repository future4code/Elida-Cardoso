/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */ 
// ------------------------------------------------------------------

// JOGO 

// mensagem de boas vindas
console.log("Boas Vindas ao jogo de Blackjack!")

// botão confirm

if (confirm("Quer iniciar uma nova rodada?")) {
   const cartaUm = comprarCarta();
   const cartaDois = comprarCarta();
   const cartaTres = comprarCarta();
   const cartaQuatro = comprarCarta();

// soma cartas
   let cartasUsuarioSoma = cartaUm.valor + cartaDois.valor
   let cartasComputadorSoma = cartaTres.valor + cartaQuatro.valor

// mensagem de cada um (Usuario e computador)
   console.log(`Usuário - cartas: ${cartaUm.texto} ${cartaDois.texto} - pontuação ${cartasUsuarioSoma}`)

   console.log(`Computador - cartas: ${cartaTres.texto} ${cartaQuatro.texto} - pontuação ${cartasComputadorSoma}`)

// resultados   
   if (cartasUsuarioSoma > cartasComputadorSoma){
      console.log("O usuário ganhou!")
   } 
      else if (cartasComputadorSoma > cartasUsuarioSoma) {
      console.log("O computador ganhou!")
   } 
      else if (cartasUsuarioSoma === cartasComputadorSoma) {
      console.log("Empate") }

}  else {console.log("O jogo acabou")}