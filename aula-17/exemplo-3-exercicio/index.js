
// Definir um número para o laço de repetição
let numero
let numeros = []

// Iniciar variável de soma, com zero
let soma = 0

// Repetir enquanto o número não for zero
while (numero != 0) {
    // Solicitar um número ao usuário
    numero = Number(prompt("Digite um número para somar. Digite zero para parar."))

    // Adicionar novo registro ao array
    if (numero != 0) {
        numeros.push(numero)
    }

    // Adicionar o número à soma
    soma = soma + numero
}

// Imprimir os dados no console
console.log("Os números inseridos foram", numeros)
console.log("A soma dos números é", soma)
