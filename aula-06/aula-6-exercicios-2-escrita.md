
# Escrita

## Instruções

Os exercícios são divididos em interpretação e escrita de código. Para os de interpretação, coloque as respostas em comentários de código. Nos de escrita, lembre-se de imprimir no console os resultados.

> **ATENÇÃO**
> 
> Não é permitido utilizar estruturas e sintaxes de código ainda não ensinadas no curso. Para um melhor aproveitamento para si mesmo, force-se a utilizar só o que foi passado.

---

### Exercícios de escrita de cídigo

#### 1. Construa um programa, seguindo os seguintes passos:

a) Declare uma variável para armazenar um nome, sem atribuir um valor.

b) Declare uma variável para armazenar uma idade, sem atribuir um valor.

c) Imprima na tela o tipo dessas variáveis que acabou de criar, usando o comando `typeof`.

d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

e) Pergunte ao usuário seu nome e sua idade, atribuindo esses dois valores às variáveis que acabou de criar.

Dica: Se você receber um erro de código nessa etapa, reflita sobre o tipo de declaração que utilizou.

f) Novamente, imprima na tela o tipo dessas variáveis. O que você notou? Escreva em um comentário de código.

g) Para finalizar, imprima na tela a mensagem: "Olá `nome`,  você tem `idade` anos". Onde `nome` e `idade` são os valores que o usuário inseriu.

Dica: Para imprimir mais de um valor na mesma linha, você pode usar essa sintaxe: `console.log(valor1, valor2)`.

---

#### 2. Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável.

Por exemplo: "você está usando uma roupa azul hoje?". Depois, siga os passos:
    
a) Crie três novas variáveis, contendo as respostas.

b) Imprima na tela todas as perguntas seguidas por suas respectivas respostas. Por exemplo:
`você está usando uma roupa azul hoje? - SIM`

---

#### 3. Suponha que temos duas variáveis `a` e `b`, cada uma com um valor inicial
    
```
let a = 10
let b = 25
```

Agora, queremos trocar os valores delas, de forma que `a` passe a ter o valor de `b` e `b` passe a ter o valor de `a`.
Ou seja, no caso desse exemplo acima, `a` passaria a ser 25 e `b` passaria a ser 10.
    
```
let a = 10
let b = 25

// Aqui faremos uma lógica para trocar os valores

// Depois de trocados, teremos o seguinte resultado:
console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
```
    
Crie a lógica que deve ser inserida no código para que os valores de `a` e `b` sejam trocados, independente de qual valor essas variáveis assumam inicialmente (ou seja: não basta dizer que `a = 25` e `b = 10` porque se os valores iniciais mudarem, a lógica do seu programa teria que mudar tamb�m).

**Dicas:**

1. Podemos começar fazendo com que o valor de `a` seja igual ao que está no `b`, então ficaria assim: `a = b`. Nesse ponto, se déssemos um `console.log` no `a` e no `b`, teríamos que `a = 25` e `b = 25`. Mas desse jeito, a gente perdeu o valor anterior que estava no `a`! E agora, como você poderia guardar esse valor para atribuir à variável `b`?

2. Vamos supor que você tem dois copos: um copo A que tem suco de laranja e um copo B que tem coca-cola. Como você faria para trocar o conteúdo dos dois?

3. Para trocar os líquidos de copo sem misturá-los, você pode pegar um copo vazio para te auxiliar!

---

### Documentação

[JavaScript - variáveis](https://www.w3schools.com/js/js_variables.asp)
