
// Criar função que recebe array de números
function dividirPrimeiroUltimo (listaDeNumeros) {
    // Descobrir os números
    let primeiro = listaDeNumeros[0]
    let ultimo = listaDeNumeros[listaDeNumeros.length - 1]

    // Dividir os números por 2
    primeiro = primeiro / 2
    ultimo = ultimo / 2

    // Criar um novo array
    const novaLista = [ primeiro, ultimo ]

    // Retornar um novo array
    return novaLista
}

// Criar alguns arrays
const lista1 = [ 10, 50, 100 ]
const lista2 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
const lista3 = [ -16, 9.5 ]

// Imprimir resultados no console
console.log(dividirPrimeiroUltimo(lista1)) // 5, 50
console.log(dividirPrimeiroUltimo(lista2)) // 0.5, 5
console.log(dividirPrimeiroUltimo(lista3)) // -8, 4.75
