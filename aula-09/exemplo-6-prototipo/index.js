
// Criar um novo array
const pokemons = [ "Bulbasaur", "Charmander", "Squirtle" ]

// Imprimir no console
console.log(pokemons)

// Adicionar novos pokemons
pokemons.push("Pikachu", "Eevee")

// Imprimir no console
console.log(pokemons)

// Verificar se charmander existe
const charmander = pokemons.includes("Charmander")

// Remover último elemento
const ultimoPokemon = pokemons.pop()

// Imprimir no console
console.log(pokemons)
console.log(pokemons.length)
console.log(charmander)
console.log(ultimoPokemon)
