
# Escrita

## Instruções

Os exercícios são divididos em interpretação e escrita de código. Para os de interpretação, coloque as respostas em comentários de código. Nos de escrita, lembre-se de imprimir no console os resultados.

> **ATENÇÃO**
> 
> Não é permitido utilizar estruturas e sintaxes de código ainda não ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar só o que foi passado.

---

### Exercícios de escrita de código

#### 1. Resolva os passos a seguir

a) Crie um objeto. Ele deve conter duas propriedades: nome (`string`) e apelidos (um `array` que sempre terá exatamente três apelidos). Depois, escreva uma função que recebe como entrada um `objeto` e imprime uma mensagem no modelo abaixo: 

```
// Exemplo de entrada
const pessoa = {
   nome: "Vitor Hugo", 
   apelidos: [ "Vitinho", "Vitão", "Vit" ]
}

// Exemplo de saída
// "Eu sou Vitor, mas pode me chamar de: Vitinho, Vitão ou Vit"
```
**Dica:** não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

b) Agora, usando o operador `spread`, crie um novo `objeto` mantendo o valor da propriedade `nome`, mas com uma nova lista de três apelidos. Depois, chame a função feita no item anterior passando como `argumento` o novo `objeto`.

---

#### 2. Resolva os passos a seguir

a) Crie dois `objetos` diferentes com as seguintes propriedades: nome, idade e profissão. 

b) Escreva uma `função` que receba um `objeto` de cada vez e retorne um `array` com as seguintes informações:

- O valor de `nome`.
- O numero de caracteres do valor `nome`.
- O valor de `idade`.
- O valor de `profissão`.
- O numero de caracteres do valor `profissão`.

```
const pessoa = {
	nome: "Bruno", 
	idade: 23, 
	profissao: "Instrutor"
}

function minhaFuncao(pessoa) {
	let resultado = []
	// desenvolver sua logica
	return resultado
}

console.log(minhaFuncao(pessoa))
// Retorno: ["Bruno", 5, 23, "Instrutor", 9]
```

---

#### 3. Resolva os passos a seguir

a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`.

b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`).

c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do `array` de `carrinho`. Invoque essa função passando os três objetos criados. Dica: aqui você deve usar o método `push()`.

d) Imprima a variável `carrinho` e garanta que ela agora seja um **`array` preenchido com três objetos.**
