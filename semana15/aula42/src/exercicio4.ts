type pokemon = {
	name: string,
    types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
    name: "Charmander",
    types: "Fire",
    healthPoints: 28
}

const pokemon2: pokemon = {
    name: "Bulbasaur",
    types: "Grass/Poison",
    healthPoints: 31
}

const pokemon3: pokemon = {
    name: "Squirtle",
    types: "Water",
    healthPoints: 35
}

// // A) tsc exercicio4.ts

// // B) sim, --> cd src --> tsc exercicio4.ts / tsc src/exercicio4.ts

// // C) sim, usando o tsc dentro da pasta com os arquivos .ts