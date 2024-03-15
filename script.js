let setaEsquerda= window.document.getElementById("setaesquerda")
let sam= window.document.getElementById("sam")
let bru= window.document.getElementById("bru")
let leo= window.document.getElementById("leo")
let setaDireita= window.document.getElementById("setadireita")

function RolarDireita(){
    sam.style = "display:none"
    leo.style = "display:flex"
    setaDireita.style= "display:none"
    setaEsquerda.style = "display:flex; margin-top: 55px"
}

function RolarEsquerda(){
    sam.style="display:flex"
    leo.style="display:none"
    setaDireita.style= "display:flex; margin-top: 55px"
    setaEsquerda.style= "display:none"
}
