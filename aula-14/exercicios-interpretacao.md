
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
const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [ "Matheus Nachtergaele", "Selton Mello", "Denise Fraga", "Virginia Cavendish" ], 
	transmissoesHoje: [
		{ canal: "Telecine", horario: "21h" }, 
		{ canal: "Canal Brasil", horario: "19h" }, 
		{ canal: "Globo", horario: "14h" }
	]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length - 1])
console.log(filme.transmissoesHoje[2])
```

O que vai ser impresso no console?

---

#### 2. Leia o código.

```
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = { ...cachorro, nome: "Juba" }

const tartaruga = { ...gato, nome: gato.nome.replaceAll("a", "o") }

console.log(cachorro)
console.log(gato)
console.log(tartaruga)
```

a) O que vai ser impresso no console?

b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

---

#### 3. Leia o código.

```
function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
	nome: "Caio", 
	idade: 23, 
	backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))
```

a) O que vai ser impresso no console?

b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
