// EXECICIOS DE INTERPRETAÇÃO

// 1. a)
// - Matheus Nachtergaele
// - 4
// - Globo, 14h

// 2.

// A) nome: "Juca", idade: 3, raca: "SRD"
// nome: "Juba", idade: 3, raca: "SRD"
// nome: "Jubo", idade: 3, raca: "SRD"

// B) Copia o objeto, faz espalhamento

// 3. A) false, undefined
// B) o booleano de "backender" é falso e altura nao tem valor atribuido, por isso voltou como undefined

// EXERCICIO DE ESCRITA

// 1. A)
// const nomeAndApelido = {
//     nome: "Shirley",
//     apelidos: ["Shirloca", "Pincesinha", "Sherloca Holmes"]
// }

// const frase = `Eu sou ${nomeAndApelido.nome}, mas pode me chamar de ${nomeAndApelido.apelidos[0]}, ${nomeAndApelido.apelidos[1]} ou ${nomeAndApelido.apelidos[2]}`
// console.log(frase)

// // B)
// const novosApelidos = {
//     ...nomeAndApelido,
//     apelidos: ["Fidida", "Shircolinha", "Shirlinha"]
// }

// const novaFrase = `Eu sou ${novosApelidos.nome}, mas pode me chamar de ${novosApelidos.apelidos[0]}, ${novosApelidos.apelidos[1]} ou ${novosApelidos.apelidos[2]}`
// console.log(novaFrase)


// 2. A)
// const infosUm = {
//     nome: "Élida",
//     idade: 21,
//     profissao: "Estudante"
// }
// console.log(infosUm)

// const infosDois = {
//     nome: "Monnaliza",
//     idade: 20,
//     profissao: "Ux Designer"
// }

// // B)
// const funcaoInfos = () => {
//       return [infosUm.nome, infosUm.nome.length, infosUm.idade, infosUm.profissao, infosUm.profissao.length]
// }

// console.log(funcaoInfos(infosUm))

// 3. A)
let carrinho = []

// B)
const frutaUm = {
    nome: "Laranja",
    temEssaFruta: true
}

const frutaDois = {
    nome: "Banana",
    temEssaFruta: true
}

const frutaTres = {
    nome: "Morango",
    temEssaFruta: true
}

let porFrutasNoCarrinho = (frutas) => {
    carrinho.push(frutas)
}

porFrutasNoCarrinho(frutaUm)
porFrutasNoCarrinho(frutaDois)
porFrutasNoCarrinho(frutaTres)
console.log(carrinho)

