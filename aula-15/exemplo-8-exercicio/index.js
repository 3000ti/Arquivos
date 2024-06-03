
const nomePersonagem = prompt("Qual é o nome do personagem?").toUpperCase()

switch (nomePersonagem) {
    case "HARRY":
        console.log("Você foi destinado para a Grifinória")
        break
    case "RON":
        console.log("Você foi destinado para a Corvinal")
        break
    case "HERMIONE":
        console.log("Você foi destinado para a Lufa-Lufa")
        break
    case "DRACO":
        console.log("Você foi destinado para a Sonserina")
        break
    default:
        console.log("Você foi expulso de Hogwarts")
}
