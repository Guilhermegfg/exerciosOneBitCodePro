let main = document.querySelectorAll("main")
let header = document.querySelectorAll('header')
let jogador1 = ""
let jogador2 = ""
let JogadorDaVez = "x"
let footer = document.getElementById('footer')
let nomes = document.getElementById("nomes")
let square = document.querySelectorAll("square")
let reiniciar = document.createElement('button')
let parar = document.getElementById("parar")


//Pegando os quadrados
let square1 = document.getElementById("square-1")
let square2 = document.getElementById("square-2")
let square3 = document.getElementById("square-3")
let square4 = document.getElementById("square-4")
let square5 = document.getElementById("square-5")
let square6 = document.getElementById("square-6")
let square7 = document.getElementById("square-7")
let square8 = document.getElementById("square-8")
let square9 = document.getElementById("square-9")

//Adicionando a ação neles
square1.addEventListener('click', handleClick)
square2.addEventListener('click', handleClick)
square3.addEventListener('click', handleClick)
square4.addEventListener('click', handleClick)
square5.addEventListener('click', handleClick)
square6.addEventListener('click', handleClick)
square7.addEventListener('click', handleClick)
square8.addEventListener('click', handleClick)
square9.addEventListener('click', handleClick)

//Botão de iniciar o jogo

nomes.addEventListener('click', function() {

    let childs = container.querySelector('*')
    if (childs === null) {
        names()
        container.style.marginBottom = "32px"
    }

    nomes.style.display = "none"

})

// criando inputs 
let container = document.getElementById("inputs")

let div1 = document.createElement('div')
div1.style.marginBottom = "10px"
let label1 = document.createElement('label')
label1.innerText = "Jogador1 - ✖️"
label1.style.marginRight = "5px"
let input1 = document.createElement('input')
input1.type = "text"
div1.append(label1, input1)

let div2 = document.createElement('div')
let label2 = document.createElement('label')
label2.innerText = "Jogador2 - ⭕"
label2.style.marginRight = "5px"
let input2 = document.createElement('input')
input2.type = "text"

let iniciar = document.createElement("button")
iniciar.innerText = "Iniciar"


let divAlternandoNomes = document.createElement('div')


function names() {
  
    div2.append(label2, input2)

    container.append(div1, div2, iniciar)

    
}

iniciar.addEventListener('click', function(){
    main.forEach(classe => classe.style.display = "block")
    div1.style.display = "none"
    div2.style.display = "none"
    iniciar.style.display = "none"

    
    reiniciar.innerText = "reiniciar"
    footer.append(reiniciar)
})

function handleClick (event) {
    let local = event.target
    // container.style.display = "none"

  

    if(local.textContent === "" && JogadorDaVez === "x"){

        local.innerText = "✖️"
        divAlternandoNomes.innerText = input1.value
        container.append(divAlternandoNomes)
        JogadorDaVez = "o"

    }  else if (local.textContent === "" && JogadorDaVez === "o"){

        local.innerText = "⭕"
        divAlternandoNomes.innerText = input2.value
        container.append(divAlternandoNomes)
        JogadorDaVez = "x"

    }

    verificarGanhador()


}


function nomeDoVencedor () {
        let nomeVencedor = document.createElement('h3')
        nomeVencedor.innerText = "O jogador vencedor foi " + divAlternandoNomes.textContent
        footer.append(nomeVencedor)
        divAlternandoNomes.style.display = "none"
}

function verificarGanhador () {
    

    if (square1.textContent != "" && square1.textContent === square2.textContent && square1.textContent === square3.textContent){
        square1.style.backgroundColor = "green"
        square2.style.backgroundColor = "green"
        square3.style.backgroundColor = "green"
        
        nomeDoVencedor()
        parar.style.pointerEvents= "none";

        
        
    } else if (square4.textContent != "" && square4.textContent === square5.textContent && square4.textContent === square6.textContent) {
        square4.style.backgroundColor = "green"
        square5.style.backgroundColor = "green"
        square6.style.backgroundColor = "green"
        
        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square7.textContent != "" && square7.textContent === square8.textContent && square7.textContent === square9.textContent) {
        square7.style.backgroundColor = "green"
        square8.style.backgroundColor = "green"
        square9.style.backgroundColor = "green"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square1.textContent != "" && square1.textContent === square4.textContent && square1.textContent === square7.textContent) {
        square1.style.backgroundColor = "red"
        square4.style.backgroundColor = "red"
        square7.style.backgroundColor = "red"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square5.textContent != "" && square5.textContent === square2.textContent && square8.textContent === square2.textContent) {
        square2.style.backgroundColor = "green"
        square5.style.backgroundColor = "green"
        square8.style.backgroundColor = "green"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square9.textContent != "" && square9.textContent === square3.textContent && square6.textContent === square3.textContent) {
        square3.style.backgroundColor = "green"
        square6.style.backgroundColor = "green"
        square9.style.backgroundColor = "green"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square1.textContent != "" && square1.textContent === square5.textContent && square1.textContent === square9.textContent) {
        square1.style.backgroundColor = "green"
        square5.style.backgroundColor = "green"
        square9.style.backgroundColor = "green"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";

    } else if (square5.textContent != "" && square5.textContent === square3.textContent && square7.textContent === square3.textContent) {
        square3.style.backgroundColor = "green"
        square5.style.backgroundColor = "green"
        square7.style.backgroundColor = "green"

        nomeDoVencedor()
        parar.style.pointerEvents= "none";
        
    } else if (square1.textContent != "" && square2.textContent != "" && square3.textContent != "" && square4.textContent != "" && square5.textContent != "" && square6.textContent != "" && 
    square7.textContent != "" && square8.textContent != "" && square9.textContent != "") {
        let empate = document.createElement('h3')
        empate.innerText = "O jogo terminou empatado"
        footer.append(empate)
        divAlternandoNomes.style.display = "none"
    }
}

reiniciar.addEventListener('click', function () {
    location.reload(true)
    
})