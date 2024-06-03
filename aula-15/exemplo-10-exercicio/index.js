
function verificarRequisitos (ensinoMedio, idade, vinculo) {
    let mensagem = "Você pode se matricular na Universidade"

    if (ensinoMedio === "N") {
        mensagem = "Para se matricular, você precisa ter concluído o ensino médio"
    }
    else if (idade < 18) {
        mensagem = "Para se matricular, você precisa ter 18 anos ou mais"
    }
    else if (vinculo === "S") {
        mensagem = "Para se matricular, você não pode estar vinculado a outros cursos"
    }

    return mensagem
}

const usuarioEnsinoMedio = prompt("Você concluiu o ensino médio? S/N").toUpperCase()
const usuarioIdade = Number(prompt("Qual a sua idade? SOMENTE NÚMEROS"))
const usuarioVinculo = prompt("Você está matriculado em alguma faculdade? S/N").toUpperCase()

const usuarioStatus = verificarRequisitos(usuarioEnsinoMedio, usuarioIdade, usuarioVinculo)

console.log(usuarioStatus)
