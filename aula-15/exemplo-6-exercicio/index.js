
const pokemonInicial = prompt("Qual o seu Pokémon inicial? Bulbasaur, Charmander ou Squirtle?").toUpperCase()

switch (pokemonInicial) {
    case "BULBASAUR":
        console.log("O Pokémon Bulbasaur é do tipo Planta e Veneno")
        break
    case "CHARMANDER":
        console.log("O Pokémon Charmander é do tipo Fogo")
        break
    case "SQUIRTLE":
        console.log("O Pokémon Squirtle é do tipo Água")
        break
    default:
        console.log("Pokémon não encontrado")
}
