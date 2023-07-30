let posicao = document.getElementById("posicao")
let nome = document.getElementById("nome")
let numero = document.getElementById("numero")
let container = document.getElementById("container")
let input = document.getElementsByTagName("input")
let tirar = document.getElementById("eliminar")

function escalar() {

    const h3 = document.createElement("h3")
    h3.innerText = nome.value

    const ul = document.createElement("ul")

    const posLi = document.createElement("li")
    posLi.innerText = "posição: " + posicao.value
    ul.appendChild(posLi)

    const numLi = document.createElement("li")
    numLi.innerText = "Número: " + numero.value
    ul.appendChild(numLi)

    ul.setAttribute("class", numero.value)
    h3.setAttribute("class", numero.value)

    container.append(h3, ul)

    nome.value = ""
    posicao.value = ""
    numero.value = ""
    


}

function remover() {
    const num = document.getElementsByClassName(tirar.value)
    console.log(num)

    for (var i = num.length - 1; i >= 0; i--) {
        num[i].remove()
    }

    tirar.value = ""
    
}