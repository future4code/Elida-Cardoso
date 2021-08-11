
/* 1.

let array
console.log('a. ', array)  // a. undefined

array = null
console.log('b. ', array) // b. null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length) // c. 11

let i = 0
console.log('d. ', array[i]) // d. 3

array[i+1] = 19
console.log('e. ', array) // e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

const valor = array[i+6]
console.log('f. ', valor) // f. 9
*/

/* 2.
const frase = prompt("Digite uma frase")

console.log(frase
    .toUpperCase()
    .replaceAll("A", "I"), 
    frase.length)

// SUBI NUM ÔNIBUS EM MIRROCOS 27 */

// EXERCICIO ESCRITA

/* 1. 
const nomeUsuario = prompt("Qual seu nome?")
const emailUsuario = prompt("Digite seu email:")

let mensagem = `O e-mail ${emailUsuario} foi cadastrado com suceso. Seja bem-vinda(o), ${nomeUsuario}` 
console.log(mensagem.trim()) */

/* 2.
let comidasPreferidas = ["macarrão", "hamburguer vegano", "torta de sorvete", "pizza", "carne de panela vegano"]

console.log("Essas são minhas comidas preferidas:", comidasPreferidas[0])
console.log(comidasPreferidas[1])
console.log(comidasPreferidas[2])
console.log(comidasPreferidas[3])
console.log(comidasPreferidas[4]) 

// DESAFIO 
let troca = 0
let comidaUsuario = prompt("Qual sua comida preferida?")
comidasPreferidas[troca+1] = comidaUsuario

console.log(comidasPreferidas)
*/

/* 3.
let primeiraTarefa = prompt ("Diga uma tarefa que você realiza no dia a dia")
let segundaTarefa = prompt ("Diga outra tarefa que você realiza")
let terceiraTarefa = prompt ("Só mais uma tarefa que você realiza no dia")

let listaDeTarefas = [primeiraTarefa, segundaTarefa, terceiraTarefa]
let qualJaRealizou = prompt("Qual você já realizou? (0, 1 ou 2)")
listaDeTarefas.splice(1, qualJaRealizou)

console.log(listaDeTarefas) */

// DESAFIOS

/* 1.
let frase = prompt("Diga uma frase:")
let fraseSeparada = frase.split(" ")

console.log(fraseSeparada) */

/* 2.
let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]

console.log(frutas[2]) // OU
console.log(frutas.indexOf("Abacaxi")) //2
console.log(frutas.length) // 5 */


