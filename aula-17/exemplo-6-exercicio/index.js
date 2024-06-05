
// Escreva uma função que recebe um array e retorna o maior número
function encontrarMaiorNumero (listaDeNumeros) {
    // Verificar se o parâmetro é válido
    if (Array.isArray(listaDeNumeros) == false) {
        return "É preciso informar um array"
    }
    if (listaDeNumeros.length == 0) {
        return "É preciso informar um array com ao menos um número"
    }

    // Definir o maior número como o PRIMEIRO da lista
    let maiorNumero = listaDeNumeros[0]

    // Percorrer os demais números da lista
    for (let i = 1; i < listaDeNumeros.length; i++) {
        // Comparar o número do índice com o maior número
        if (listaDeNumeros[i] > maiorNumero) {
            // Se o número do índice for maior, apontá-lo como maior número
            maiorNumero = listaDeNumeros[i]
        }
    }

    // Retornar o maior número
    return maiorNumero
}

// Imprimir dados no console
console.log(encontrarMaiorNumero([ 12, 4, 17, 18, 27, 31 ]))
console.log(encontrarMaiorNumero([ -1, -10, -100 ]))
console.log(encontrarMaiorNumero([ 9 ]))
console.log(encontrarMaiorNumero([ ]))
console.log(encontrarMaiorNumero("Abacaxi"))
