
// Perguntar o nome da pessoa
const nome = prompt("Qual é o seu nome?")

// Perguntar o ano de nascimento e converter para número (prompt sempre devolve tipo string)
const anoNascimento = Number(prompt("Em que ano você nasceu?"))

// Perguntar o ano atual e converter para número (prompt sempre devolve tipo string)
const anoAtual = Number(prompt("Em que ano nós estamos?"))

// Calcular a idade atual da pessoa
const idadeAtual = anoAtual - anoNascimento

// Calcular a idade da pessoa em 2050
const idadeEm2050 = 2050 - anoNascimento

// Verificar se a pessoa é maior de idade
const idadeMaioridade = 18
const pessoaMaiorDeIdade = idadeAtual >= idadeMaioridade

// Imprimir dados no console
console.log("Nome:", nome)
console.log("Ano de nascimento:", anoNascimento)
console.log("Ano atual:", anoAtual)
console.log("Idade atual:", idadeAtual)
console.log("Idade em 2050:", idadeEm2050)
console.log("Maior de idade:", pessoaMaiorDeIdade)
