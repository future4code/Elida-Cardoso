// EXERCICIO DE INTERPRETAÇÃO

// 1. Repetindo e aumentando o valor de i até que chegue no valor 4;

// 2. A) Mostrando os numeros maiores que 18
// B) trocar o numero 18 por 0

// 3. *, **, ***, ****

// EXERCICIO DE ESCRITRA

// 1. 

// const temPet = Number(prompt("Quantos bichinhos você tem?"))
// let quantidadePet = 0

// if (temPet === 0 ) {
//     console.log("Que pena :(. Mas você pode adotar um pet!")
// } while (quantidadePet < temPet) {
//      let nomePet = prompt("Qual o nome de cada?");
//      let nomePetArray = [nomePet]

//      console.log(nomePetArray)

//      quantidadePet++
// }

// 2.

let arrayOriginal = [2, 6, 12, 7, 88, 24, 33, 59]
console.log(arrayOriginal)

// for (let i = 0; i < arrayOriginal.length; i++) {
//       let divisao = i / 2
//       console.log(divisao)
// }

for (let i = 0; i < arrayOriginal.length; i++) {
        let numeroPar = i % 2
        if (numeroPar === 0){
            arrayPar.push(numeroPar)
            console.log(arrayPar)
        }
}

// for (let i = 0; i < arrayOriginal.length; i++) {
//     console.log(`O elemento do index ${i} é o numero ${arrayOriginal[]}`)
// }


