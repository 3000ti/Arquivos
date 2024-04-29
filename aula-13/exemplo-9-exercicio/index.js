
// Criar um objeto sobre um filme
const filme = {
    nome: "Era uma vez em... Hollywood",
    diretor: "Quentin Tarantino",
    ano: 2019,
    atores: [ "Leonardo DiCaprio", "Brad Pitt", "Margot Robbie" ],
    personagens: [ "Rick Dalton", "Cliff Booth", "Sharon Tate" ],
    visto: true,
}

// Acessar os dados do filme
console.log("Nome:", filme.nome)
console.log("Diretor:", filme.diretor)
console.log("Ano de lançamento:", filme.ano)
console.log("Visto:", filme.visto)

// Imprimir atores e personagens
console.log("Ator e personagem:", filme.atores[0], "-", filme.personagens[0])
console.log("Ator e personagem:", filme.atores[1], "-", filme.personagens[1])
console.log("Ator e personagem:", filme.atores[2], "-", filme.personagens[2])

// Substituir o primeiro ator pela Xuxa
filme.atores[0] = "Xuxa Meneghel"

// Imprimir tudo no console
console.log(filme)
