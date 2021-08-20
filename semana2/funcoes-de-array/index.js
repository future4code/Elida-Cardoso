// EXERCICIO DE INTERPRETAÇÃO

// 1. O console ira imprimir tres arrays cada um com as informçaoes de cada linha da variavel "usuario"

// 2. apenas o nome de cada uma, cada nome em um array

// 3. nao vai imprimir o objeto que tiver chijo no apelido

// EXERCICIO DE ESCRITRA

// 1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

 // A)

 //  const nomeDosPets = pets.map ((pets) => {
//      return  pets.nome
//  })

//  // B) 
//  const petSalsicha = pets.filter ((pets) => {
//      return pets.raca === "Salsicha"
//  })

//  const racaPetPoodle = (objeto) => {
//      return objeto.raca === "Poodle"
//  }
//  const nomeDosPetsPoodle = (objeto) => {
//     return console.log(`Você ganhou um cupom de desconto de 10% para tosar o/a ${objeto.nome}`)
// }
//  const poodleNome = pets.filter(racaPetPoodle).map(nomeDosPetsPoodle)


 // 2. 

 const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 function retirarNome (objeto) {
     return objeto.nome
 }

 function retirarPreco (objeto) {
     return objeto.preco
 }
 function retirarBebidas (objeto) {
    return objeto.categoria === "Bebidas"
}
function retirarYpe (objeto) {
    return objeto.nome === "Sabão em Pó Ypê"
}
//  function cincoDeDesconto (objeto) {
//      return objeto.preco - (5/100)
//  }

 // A)
const nomeProdutos = produtos.map(retirarNome)

// B)
const promocao = produtos.filter(produtos => produtos.preco = produtos.preco - 0.05)

// C)
const bebidas = produtos.filter(retirarBebidas)


// D)
const ype = produtos.filter(retirarYpe)
console.log(ype)