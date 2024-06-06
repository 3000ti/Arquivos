
# Interpretação

## Instruções

Os exercícios são divididos em interpretação e escrita de código. Para os de interpretação, coloque as respostas em comentários de código. Nos de escrita, lembre-se de imprimir no console os resultados.

> **ATENÇÃO**
> 
> Não é permitido utilizar estruturas e sintaxes de código ainda não ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar só o que foi passado.

---

### Exercícios de interpretação de código

Tente responder os exerícios dessa seção sem executar o código.
Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

---

#### 1. Leia o código

O que o código abaixo está fazendo? Qual o resultado impresso no console?

```
let valor = 0

for (let i = 0; i < 5; i++) {
	valor += i
}

console.log(valor)
```

---

#### 2. Leia o código

```
const lista = [ 10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30 ]

for (let numero of lista) {
	if (numero > 18) {
		console.log(numero)
	}
}
```

a) O que vai ser impresso no console?

b) Se eu quisesse acessar o índice de cada elemento dessa lista, a sintaxe `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?

---

#### 3. Leia o código

Qual seria o resultado impresso no console, se o usuário digitasse o número "4"?

```
let quantidadeAtual = 0
const quantidadeTotal = Number(prompt("Digite a quantidade de linhas"))

while (quantidadeAtual < quantidadeTotal) {
	let linha = ""

	for (let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++) {
		linha += "*"
	}

	console.log(linha)

	quantidadeAtual++
}
```
