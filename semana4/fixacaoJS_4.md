```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  // Escreva seu código aqui
 let contagemNumeroEscolhido = 0
  for (let i = 0; i < arrayDeNumeros.length; i++){
    if (numeroEscolhido === arrayDeNumeros[i]) {
      contagemNumeroEscolhido += 1
    } 
    return `O número ${numeroEscolhido} aparece ${contagemNumeroEscolhido}x`
  }
}```