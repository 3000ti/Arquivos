
// Criar uma função que recebe um objeto pessoa
function manipularPessoa (objeto) {
    // Duplicar o objeto mantendo as propriedades
    // Adicionar a lista de comidas preferidas
    // Adicionar um melhor amigo com nome e idade
    const duplicata = {
        ...objeto,
        comidasPreferidas: [ "Arroz", "Feijão", "Lentilha" ],
        melhorAmigo: {
            nome: "Gaspar",
            idade: 256,
        },
    }

    // Imprimir seguindo o modelo
    console.log(`O nome da pessoa é ${duplicata.nome} e suas comidas preferidas são ${duplicata.comidasPreferidas[0]}, ${duplicata.comidasPreferidas[1]} e ${duplicata.comidasPreferidas[2]}. Seu melhor amigo se chama ${duplicata.melhorAmigo.nome} e tem ${duplicata.melhorAmigo.idade} anos.`)
}

// Criar um objeto pessoa
const pessoa1 = {
    nome: "Josefino",
    idade: 15,
}
const pessoa2 = {
    nome: "Maria Rita",
    idade: 35,
}

// Chamar a função
manipularPessoa(pessoa1)
manipularPessoa(pessoa2)
