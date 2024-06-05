
// Lista de exemplo
const lista = [ "Abacaxi", "Banana", "Cenoura", "Damasco" ]

// Percorrer itens da lista
for (const [ indice, valor ] of lista.entries()) {
    console.log("O alimento no índice", indice, "é:", valor);
}
