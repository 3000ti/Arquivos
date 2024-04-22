
// Nova string
const nome = " Pedro Álvares Cabral "

// String tratada para remover espaços
const nomeSemEspacos = nome.trim()

// Tamanho da string
const tamanho = nomeSemEspacos.length

// String maiúscula e minúscula
const maiuscula = nomeSemEspacos.toUpperCase()
const minuscula = nomeSemEspacos.toLowerCase()

// Verificar se existe substring
const nomePedro = minuscula.includes("pedro")
const nomeJoao = minuscula.includes("joão")

// Imprimir dados no console
console.log(nome)
console.log(tamanho)
console.log(maiuscula)
console.log(minuscula)
console.log(nomeSemEspacos)
console.log(nomePedro)
console.log(nomeJoao)
