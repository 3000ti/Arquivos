
# Interpretação

## Instruçõs

Os exercícios são divididos em interpretação e escrita de código. Para os de interpretação, coloque as respostas em comentários de código. Nos de escrita, lembre-se de imprimir no console os resultados.

> **ATENÇÃO**
> 
> Não é permitido utilizar estruturas e sintaxes de código ainda não ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar só o que foi passado.

---

### Exercícios de interpretação de código

Tente responder os exerícios dessa seção sem executar o código.
Se ficar muito difícil, pode rodar no seu computador **para analisar e pensar sobre o resultado.** 

---

#### 1. Leia o código abaixo. Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.

```
const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a. ", resultado)

resultado = bool1 && bool2 && bool3 
console.log("b. ", resultado) 

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)

console.log("d. ", typeof resultado)
```

---

#### 2. Seu colega se aproxima de você falando que o código dele não funciona como devia.

Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?

```
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma)
```

---

#### 3. Ainda sobre o exercício anterior.

Sugira ao seu colega uma solução para que o valor impresso no console seja, de fato, a soma dos dois números.
