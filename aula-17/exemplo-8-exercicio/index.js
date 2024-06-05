
// Definir listas de exemplo
const lista1 = [ "Era", "uma", "vez", "em...", "Hollywood" ]
const lista2 = [ "O", "que", "é", "Lorem", "Ipsum?" ]
const lista3 = [ 1, 2 ]

// Criar uma função que concatena palavras de um array
function converterArrayEmString (array) {
    // Iniciar uma variável vazia para abrigar a frase
    let frase = ""

    // Percorrer CADA ITEM do ARRAY
    for (let item of array) {
        // Concatenar o item ao final da frase, com um espaço extra
        frase = frase + item + " "
    }

    // Retornar a frase composta
    return frase
}

// Chamar a função com os exemplos
console.log(converterArrayEmString(lista1))
console.log(converterArrayEmString(lista2))
console.log(converterArrayEmString(lista3))
