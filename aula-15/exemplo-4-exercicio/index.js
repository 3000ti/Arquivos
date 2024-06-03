
// Criar uma função que recebe 2 números
// Se os números forem iguais, retorna mensagem de sucesso

function compararNumeros (numero1, numero2) {
    console.log("Número 1:", numero1)
    console.log("Número 2:", numero2)
    
    if (numero1 > numero2) {
        console.log(`O número ${numero1} é MAIOR do que o número ${numero2}`)
    }
    else if (numero1 < numero2) {
        console.log(`O número ${numero1} é MENOR do que o número ${numero2}`)
    }
    else {
        console.log(`O número ${numero1} é IGUAL ao número ${numero2}`)
    }

    console.log("----")
}

compararNumeros(6, 6)
compararNumeros(9, 3)
compararNumeros(12, 15)
compararNumeros(18, 18)
