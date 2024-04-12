
# Dicas

#### 1. Crie um novo repositório no github.

Faça o `clone` desse repositório no seu computador, usando o terminal.

**Dica**

Ao abrir o terminal, verifique em qual pasta você está. Nós iremos clonar o repositório na **pasta do seu usuário** no computador, então veja como fazer isso:

- Windows: abra o terminal do Git Bash e rode o comando `pwd`.
- Linux/MacOS: abra o terminal e rode o comando `pwd`.

A seguir, dentro da pasta correta, rode o comando `git clone url-do-seu-repo`.

O clone vai criar uma pasta com o seu nome - você pode dar um comando `ls` para conferir. **Essa pasta será usada em todo o curso, e não iremos mais repetir esse comando de clone.** Cuide bem dela!

---

#### 2. Usando o terminal, entre na pasta que o clone acabou de criar.  

Crie uma nova branch chamada `git-1` e acesse ela.

**Dica**

Para entrar na pasta do do repositório clonado, use o comando `cd nome-da-pasta`.

Ao entrar, você automaticamente é colocado na `branch master/main`, e é possível criar uma `branch` nova usando o comando `git branch nome-da-branch`. 

A sua `branch` foi criada, mas você ainda está na `main`! Para trocar de `branch` use o comando `git checkout nome-da-branch`.

Nas próximas repetições, você vai criar `branchs` com outros nomes, então **tome cuidado!**

---

#### 3. Crie uma pasta chamada `aulagit` (sem espaços ou acentos).  

Vamos relembrar os comandos que vimos na aula de terminal!

**Dica**

Para criar uma pasta você pode usar o comando `mkdir nome-da-pasta`.

---

#### 4. Entre na pasta `aulagit` e crie uma pasta chamada `sobre-mim`.

**Dica**

Sua estrutura de pastas ficará assim: `Nome-Repo > aulagit > sobre-mim`.

---

#### 5. Entre na pasta `sobre-mim` e crie um arquivo `minha-bio.txt`.

**Dica**

Para criar um arquivo em branco você pode usar o comando `touch nome-do-arquivo`.

Nas próximas repetições, você vai criar arquivos com outros nomes, então **tome cuidado!**

---

#### 6. Agora você deve editar o arquivo `minha-bio.txt``.

Você deve escrever uma biografia sua de no máximo 50 palavras.

**Dica**

Para editar esse arquivo, abra ele no seu editor de texto de preferências (Visual Studio Code, bloco de notas, VIM, ou qualquer outro).

Algumas ideias: onde nasceu, onde mora, o que gosta de fazer nas horas livres, antiga profissão antes de querer ser uma pessoa desenvolvedora de software, por que se interessa por tecnologia... Use a criatividade, mas não perca muito tempo rebuscando o texto, pode ser algo bem simples.

Nas próximas repetições, você vai criar outros arquivos com outros nomes e outros conteúdos, **tome cuidado!**

---

#### 7. Ao salvar o arquivo, você realizou uma alteração no seu repositório!

Veja como está o `status` do seu repositório.

**Dica**

Use o comando `git status`.

---

#### 8. Faça um `add` do seu arquivo alterado, para que ele seja enviado para a **Staging Area**.  

Verifique o `status` do seu repositório novamente e observe as diferenças.

**Dica**

Use o comando `git add .` para adicionar todos os arquivos dentro de sua pasta atual à **Staging Area**.

Se quiser garantir que adicionou todos os arquivos dentro do repositório, independente de qual pasta você está, use o comando `git add --all`.

---

#### 9. Faça um `commit` das suas alterações.  

Escreva uma mensagem breve, explicando o que foi alterado.

**Dica**

Use o comando `git commit -m "mensagem-descrevendo-a-mudança-feita"`.

Não se esqueça que devem ser usadas aspas duplas `" "`.

---

#### 10. Hora de mandar as alterações para seu repositório remoto!  

Faça o `push` das alterações - não se esqueça da `branch` em que você está!

**Dica**

Use o comando `git push origin nome-da-branch-que-você-está`.

---

11. Volte para a sua `branch main`!

**Dica**

No seu terminal, use o comando `git checkout master`.