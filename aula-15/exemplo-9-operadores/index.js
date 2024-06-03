
const numero1 = Number(prompt("Insira um número"))
const numero2 = Number(prompt("Insira outro número"))

console.log(`Números: ${numero1} e ${numero2}`)

if ((numero1 > 10) && (numero2 > 5)) {
    console.log(`O número ${numero1} é maior do que 10 ~E~ o número ${numero2} é maior do que 5`)
}
else if ((numero1 > 10) || (numero2 > 5)) {
    console.log(`O número ${numero1} é maior do que 10 ~OU~ o número ${numero2} é maior do que 5`)
}
