let imagem = document.querySelector(".imagem-copo")

let circulo = document.querySelector(".circulo")


function trocarImagem(endereco) {
    imagem.src = endereco
}
function trocarACor(cor){
    circulo.style.background = cor
}
