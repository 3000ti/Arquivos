
// Perguntar nome e cor favorita
const nome = prompt("Qual é o seu nome?")
const cor = prompt("Qual é a sua cor favorita?")

// Criar strings com os dados
const stringConcat = "A cor favorita de " + nome + " é " + cor
const stringTemplate = `A cor favorita de ${nome} é ${cor}`

// Imprimir no console
console.log(stringConcat)
console.log(stringTemplate)
