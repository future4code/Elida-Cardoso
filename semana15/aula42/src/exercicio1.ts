// A) -----------------

const minhaString: string = "olá mundo"

// const minhaString: string = 5
// a variável tipo string n pode receber um número

// B) -----------------

// const meuNumero: number = 7
const meuNumero:( number | string) = "olá mundo" 

// C) -----------------

enum CoresArcoIris {
    VERMELHO = "Vermelho",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ROXO = "Roxo"
}

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

const pessoa1: Pessoa = {
    nome: "Élida",
    idade: 21,
    corFavorita: CoresArcoIris.AZUL
}