
// Criar constante no escopo global
const escopoGlobal = true

// Definir nova função
function imprimirVariaveis () {
    // Criar constante no escopo local
    // Essa constante está acessível apenas no escopo da função
    const escopoLocal = true

    // Imprimir variáveis
    console.log("Variável global", escopoGlobal)
    console.log("Variável local", escopoLocal)
}

// Invocar a função
imprimirVariaveis()

// Tentar imprimir variáveis fora do escopo da função
console.log("Variável global", escopoGlobal)

// A variável escopoLocal não será impressa
// Pois não temos acesso a ela, que foi criada dentro da função
console.log("Variável local", escopoLocal)
