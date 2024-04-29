
// Criar array dos pokémons inicias
const iniciais = [ "Bulbasaur", "Charmander", "Squirtle" ]

// Criar array para novos iniciais
const novosIniciais = [ ...iniciais, "Pikachu" ]

// Trocar um dos iniciais por outra opção
novosIniciais[2] = "Totodile"

// Imprimir no console
console.log(iniciais)
console.log(novosIniciais)
