// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const alturaPrompt = Number(prompt())
  const larguraPrompt = Number(prompt())
areaDoRetangulo = alturaPrompt * larguraPrompt

console.log(areaDoRetangulo) 
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt())
  const anodeNascimentoUsuario = Number(prompt())
  idadeDoUsuario = anoAtual - anodeNascimentoUsuario

  console.log(idadeDoUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  const pesoUsuario = Number(prompt())
  const alturaUsuario = Number(prompt())
  imcDoUsuario = peso / (altura * altura)

  return imcDoUsuario
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
 const nomeUsuario = prompt()
 const idadeUsuario = prompt()
 const emailUsuario = prompt()

 console.log(`Meu nome é ${nomeUsuario}, tenho ${idadeUsuario} anos, e o meu email é ${emailUsuario}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const primeiraCor = prompt()
  const segundaCor = prompt()
  const terceiraCor = prompt()

  console.log([primeiraCor, segundaCor, terceiraCor])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const stringNormal = prompt()
  const stringMaiuscula = stringNormal.toUpperCase()

  return stringMaiuscula
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  const quantidadeIngressosPraVender = custo / valorIngresso

  return quantidadeIngressosPraVender
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  const mesmoTamanhoUm = string1.lenght
  const mesmoTamanhoDois = string2.lenght

  return mesmoTamanhoUm === mesmoTamanhoDois
 
}


// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  const arrayRetornaPrimeiro = array

  return arrayRetornaPrimeiro[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  const ultimoElemento = array
  const retornaUltimo = ultimoElemento.length - 1

  return retornaUltimo
}
// console.log(retornaUltimoElemento[1, 2, 3])

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  return array.lenght - 1
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}