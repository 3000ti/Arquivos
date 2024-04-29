
// Criar um objeto sobre um filme
const filme = {
    nome: "Era uma vez em... Hollywood",
    diretor: "Quentin Tarantino",
    ano: 2019,
    atores: [{
        nome: "Leonardo DiCaprio",
        personagem: "Rick Dalton",
    }, {
        nome: "Brad Pitt",
        personagem: "Cliff Booth",
    }, {
        nome: "Margot Robbie",
        personagem: "Sharon Tate",
    }],
    visto: true,
}

// Acessar os dados do filme
console.log("Nome:", filme.nome)
console.log("Diretor:", filme.diretor)
console.log("Ano de lançamento:", filme.ano)
console.log("Visto:", filme.visto)

// Imprimir atores e personagens
console.log("Ator e personagem:", filme.atores[0].nome, "-", filme.atores[0].personagem)
console.log("Ator e personagem:", filme.atores[1].nome, "-", filme.atores[1].personagem)
console.log("Ator e personagem:", filme.atores[2].nome, "-", filme.atores[2].personagem)
