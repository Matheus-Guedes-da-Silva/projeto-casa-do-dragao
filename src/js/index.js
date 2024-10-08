const botoesCarrossel = document.querySelectorAll(".botao")
const imagens = document.querySelectorAll(".imagem")
const parteEscrita = document.querySelectorAll(".informacoes")

botoesCarrossel.forEach((botao, indice) => {

    botao.addEventListener("click", () => {
        const botaoSelecionado = document.querySelector(".botao-padrao")
        botaoSelecionado.classList.remove("botao-padrao")
        botoesCarrossel[indice].classList.add("botao-padrao")

        const imagemSelecionada = document.querySelector(".ativa")
        imagemSelecionada.classList.remove("ativa")
        imagens[indice].classList.add("ativa")

        const informacaoAtiva = document.querySelector(".texto-padrao")
        informacaoAtiva.classList.remove("texto-padrao")
        parteEscrita[indice].classList.add("texto-padrao")
    })
})