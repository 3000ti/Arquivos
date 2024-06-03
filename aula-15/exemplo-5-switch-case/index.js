
const paisDeOrigem = prompt("Qual o país de origem?").toUpperCase()

switch (paisDeOrigem) {
    case "BRASIL":
        console.log("Brasileiro")
        break
    case "ARGENTINA":
        console.log("Argentino")
        break
    case "URUGUAI":
        console.log("Uruguaio")
        break
    default:
        console.log("Nacionalidade não encontrada")
}
