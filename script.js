let conta = 0
let pessoas = 0
let porcetagem = 0

const contaInput = document.querySelector("#conta")
contaInput.addEventListener("input", receberValorConta)

function receberValorConta(evento) {
    conta = Number(evento.target.value)
    calcular()
}

const pessoasInput = document.querySelector("#pessoas")
pessoasInput.addEventListener("input", receberQuantidadePessoas)

function receberQuantidadePessoas (evento) {
    const paragrafoErro = document.querySelector(".pessoas #erro")
    const divErro = document.querySelector(".pessoas .input-box")

    if(evento.target.value === "0") {
        paragrafoErro.style.display = "block"
        divErro.setAttribute("id", "erro-div")
    } else {
        paragrafoErro.style.display = "none"
        divErro.setAttribute("id", "")
        pessoas = Number(evento.target.value)
    }
}

calcular()

const gorjetaInput = document.querySelector("#outra")
gorjetaInput.addEventListener("input", receberPorcentagem)

function calcular() {
    if (conta !== 0 && porcetagem !== 0 && pessoas !== 0) {
        const strongGorjetaTotal = document.querySelector(".gorjeta-total > strong")
        strongGorjetaTotal.innerHTML = R$ ${(conta * porcetagem / pessoas).toFixed(2)}

        const strongTotal = document.querySelector(".total > strong")
        strongTotal.innerHTML = R$ ${((conta + (conta * porcetagem)) / pessoas).toFixed(2)}
    }
}
