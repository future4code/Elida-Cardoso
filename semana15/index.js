// // EXERCICIO 1 ----------------------------------------------

// // A)
// //     process.argv:
// //     node nomeDoAruivo.js argumentoExemplo

// // B)
// const nomeIdade = (nome, idade) => {
//     return `Olá, ${nome}! Você tem ${idade} anos.`
// }

// console.log(nomeIdade("Élida", 21))

// // C) 

// const somaIdade = (nome, idade) => {
//     return `Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}`
// }

// console.log(somaIdade("Élida", 21))

// // EXERCICIO 2 ----------------------------------------------

// const operacao = process.argv[2]
// const num1 = Number(process.argv[3])
// const num2 = Number(process.argv[4])

// switch(operacao){
//     case "add":
//         const add = num1 + num2
//         console.log(`Resposta: ${add}`)
//     break;
//     case "sub":
//         const sub = num1 - num2
//         console.log(`Resposta: ${sub}`)
//     break;
//     case "mult":
//         const mult = num1 * num2
//         console.log(`Resposta: ${mult}`)
//     break;
//     case "div":
//         const div = num1 / num2
//         console.log(`Resposta: ${div}`)
//     break;
// }

// // EXERCICIO 3 ----------------------------------------------

// const taskList = [
//     "arrumar a cama",
//     "beber água",
// ]

// const newTask = process.argv[2]
// const newList = [...taskList, newTask]

// console.log(newList)