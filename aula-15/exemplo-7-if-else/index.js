
const pokemonInicial = prompt("Qual o seu Pokémon inicial? Bulbasaur, Charmander ou Squirtle?").toUpperCase()
let mensagem = "Pokémon não encontrado"

if (pokemonInicial === "BULBASAUR") {
    mensagem = "O Pokémon Bulbasaur é do tipo Planta e Veneno"
}
else if (pokemonInicial === "CHARMANDER") {
    mensagem = "O Pokémon Charmander é do tipo Fogo"
}
else if (pokemonInicial === "SQUIRTLE") {
    mensagem = "O Pokémon Squirtle é do tipo Água"
}

console.log(mensagem)
