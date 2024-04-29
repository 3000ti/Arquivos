
// Criar um objeto
const usuario = {
    nome: "José",
    idade: 89,
    comidasFavoritas: [ "Arroz", "Feijão", "Lentilha" ],
    contarPiada: function () {
        console.log("Por que a galinha atravessou a rua?")
    },
}

// Acessar as propriedades utilizando a "notação ponto"
console.log("Notação ponto")
console.log(usuario.nome)
console.log(usuario.idade)
console.log(usuario.comidasFavoritas[0])
console.log(usuario.comidasFavoritas[1])
console.log(usuario.comidasFavoritas[2])

// Separar conteúdos
console.log("----")

// Acessar as propriedades utilizando a "notação colchetes"
console.log("Notação colchetes")
console.log(usuario["nome"])
console.log(usuario["idade"])
console.log(usuario["comidasFavoritas"][0])
console.log(usuario["comidasFavoritas"][1])
console.log(usuario["comidasFavoritas"][2])
