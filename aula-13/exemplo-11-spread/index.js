
// Criar um objeto sobre um pokémon
const pokemon = {
    index: 0,
    nome: "",
    visto: false,
    capturado: false,
}

// Duplicar o objeto com SPREAD
const novoPoke = {
    ...pokemon,
    index: 1,
    nome: "Bulbasaur",
    evolucao: {
        index: 2,
        level: 16,
    },
}

// Marcar o pokémon como VISTO
novoPoke.visto = true

// Imprimir no console
console.log(novoPoke)
