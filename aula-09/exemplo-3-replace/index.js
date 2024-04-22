
// Solicitar uma frase ao usuário
const frase = prompt("Escreva uma frase")

// Descobrir o tamanho da frase
const fraseTamanho = frase.length

// Escrever a frase em letras maiúsculas
const fraseMaiuscula = frase.toUpperCase()

// Escrever a frase na língua do I
const fraseI = fraseMaiuscula.replaceAll("O", "I")

// Imprimir dados no console
console.log("Frase original:", frase)
console.log("Tamanho da frase:", fraseTamanho)
console.log("Frase em letras maiúsculas:", fraseMaiuscula)
console.log("Frase na língua do I:", fraseI)
