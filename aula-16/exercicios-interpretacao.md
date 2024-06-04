
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

#### 1. Leia o código.

```
const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
	console.log("Passou no teste.")
}
else {
	console.log("Não passou no teste.")
}
```

a) Explique o que o código faz. Qual o teste que ele realiza?

b) Para que tipos de números ele imprime no console "Passou no teste"?

c) Para que tipos de números a mensagem é "Não passou no teste"?

---

#### 2. Leia o código

Leia o código abaixo, que foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado.

```
let fruta = prompt("Escolha uma fruta")
let preco

switch (fruta) {
	case "Laranja":
		preco = 3.5
		break;
	case "Maçã":
		preco = 2.25
		break;
	case "Uva":
		preco = 0.30
		break;
	case "Pêra":
		preco = 5.5
		break; // BREAK PARA O ITEM D
	default:
		preco = 5
		break;
}

console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
```

a) Para que serve o código acima?

b) Qual será a mensagem impressa no console, se o valor de fruta for "Maçã"?

c) Considere que um usuário queira comprar uma "Pêra", qual seria a mensagem impressa no console se retirássemos o "break" que está logo acima do "default" (o "break" indicado pelo comentário "BREAK PARA O ITEM D")?

---

#### 3. Leia o código

```
const numero = Number(prompt("Digite o primeiro número."))

if (numero > 0) {
	console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!"
}

console.log(mensagem)
```

a) O que a primeira linha está fazendo?

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
