// EXERCICIOS DE INTERPRETAÇÃO

/* 1.
 const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado) 
 -> false

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 
 -> false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)
 -> false

console.log("d. ", typeof resultado)
 -> String */

/* 2.
Pelo fato dele ter usado o prompt o que retona pra ele é uma string 
e nesse caso teria que ser um Number. */

/* 3.
Utilizar o comando 'Number()' para fazer a troca de string para Number. */

// EXERCICIO DE ESCRITA DE CÓDIGO

/* 1.
const idadeUsuario = prompt("Qual sua idade?")
const idadeAmigo = prompt("E qual é a idade do seu amigo(a)?")

console.log(idadeUsuario)
console.log(idadeAmigo)

let idadeMaior = idadeUsuario >= idadeAmigo
let diferencaDeIdade = idadeUsuario - idadeAmigo

console.log("Sua idade é maior do que a do seu melho amigo(a)?", idadeMaior)
console.log("Diferença de idade entre vocês:", diferencaDeIdade, "anos")
*/

/* 2.

let numeroPar = prompt("Escoha um número PAR")
let numeroParNumber = Number(numeroPar)
console.log(numeroPar % 2)

// COMENTARIO: todos dão resultado 0 por serem um numero par

// COMENTARIO2: o resultado volta como numero 1
*/

/*3.

let idadeUsuario = prompt("Digite sua idade")
let idadeUsuarioNumber = Number(idadeUsuario)

console.log("Sua idade em meses:", idadeUsuarioNumber * 12, "meses") //anos por x12
console.log("Sua idade em dias", idadeUsuarioNumber * 365, "dias")
console.log ("Sua idade em horas:", idadeUsuarioNumber * 8760, "horas") // anos x8760
*/

4.

let numeroUm = prompt("Escolha um número")
let numeroDois = prompt("Agora escolha outro")
let numeroUmNumber = Number(numeroUm)
let numeroDoisNumber = Number(numeroDois)


console.log("O primeiro número é maior que o segundo?", numeroUmNumber > numeroDoisNumber)
console.log("O primeiro número é igual ao segundo?", numeroUmNumber === numeroDoisNumber)

let resultadoUm = numeroUmNumber / numeroDoisNumber
let resultadoDois = numeroDoisNumber / numeroUmNumber
console.log("O primeiro número é divisível pelo segundo?", resultadoUm >= 1)
console.log("O segundo número é divisível pelo primeiro?", resultadoDois >= 1)


