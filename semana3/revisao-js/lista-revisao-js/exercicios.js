// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
return array.sort(function(num1, num2) {
            return num1 - num2
        })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    numeroPar = array.filter(numeroArray => numeroArray %2 === 0)
    return numeroPar
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    numeroPar = array.filter(numeroArray => numeroArray %2 === 0)
    numeroElevadoADois = numeroPar.map(numeroPar => numeroPar ** 2)
    return numeroElevadoADois
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  
    let maior = - Infinity
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]}
    }
return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    
    let maiorNumero = []
    if (num1 > num2) {
        maiorNumero = num1
    } else {maiorNumero = num2}

    let maiorDivisivelPorMenor = []
    if (maiorNumero % num2 <= 2) {
        maiorDivisivelPorMenor = true
    } else {maiorDivisivelPorMenor = false}

    let diferenca = []
    if (num1 > num2){
       diferenca = num1 - num2
    } else {diferenca = num2 - num1} 

    return object = {"maiorNumero":maiorNumero,"maiorDivisivelPorMenor":maiorDivisivelPorMenor, "diferenca":diferenca}
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}