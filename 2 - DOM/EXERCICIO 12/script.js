let button = document.getElementById("criarForm")
let caixa = document.getElementById("caixa")
let form = document.createElement("form")
form.id = "linguagens"
caixa.appendChild(form)
let developers = []



const buttonCadastrar = document.createElement('button')
buttonCadastrar.innerText = 'cadastar desenvolvedor'
count = 0

button.addEventListener('click', function (evento) {
    count++
    evento.preventDefault()
    console.log(count)

    

    
    const newInput = document.createElement('input')
    newInput.type ='text'
    newInput.placeholder = "Digite a linguagem"
    newInput.id = 'input' + count

    const newRadioOne= document.createElement('input')
    newRadioOne.type = 'radio'
    newRadioOne.value = 'one'
    newRadioOne.name = 'expert' + count
    const labelOne = document.createElement('label')
    labelOne.innerText = "0-2 anos"
    newRadioOne.style = "margin-left:10px;"

    const newRadiotwo= document.createElement('input')
    newRadiotwo.type = 'radio'
    newRadiotwo.value = 'two'
    newRadiotwo.name = 'expert' + count 
    const labeltwo = document.createElement('label')
    labeltwo.innerText = "3-4 anos"

    const newRadiothree= document.createElement('input')
    newRadiothree.type = 'radio'
    newRadiothree.value = 'three'
    newRadiothree.name = 'expert' + count
    const labelthree = document.createElement('label')
    labelthree.innerText = "5+ anos"
    labelthree.style = "margin-right:10px;"

 
    const buttonRemove = document.createElement('button')
    buttonRemove.innerText = 'Remover essa tecnologia'

    const br = document.createElement('br')
    br.id = "br" + count
    const div = document.createElement("div")
    div.id = "div" + count
    
    
    
    div.appendChild(newInput)
    div.appendChild(newRadioOne)
    div.appendChild(labelOne) 
    div.appendChild(newRadiotwo)
    div.appendChild(labeltwo) 
    div.appendChild(newRadiothree)
    div.appendChild(labelthree)
    div.appendChild(buttonRemove)
    form.appendChild(div)
    form.appendChild(br)
    form.appendChild(buttonCadastrar)
    caixa.appendChild(form)
    
    
    
    

   
    buttonRemove.addEventListener('click', function (ev) {
        ev.preventDefault()
        div.remove()
        br.remove()
        
    })

    

    
})

buttonCadastrar.addEventListener('click', function (eve) {
    eve.preventDefault()
    let nome = document.getElementById('name').value
    let developer = {}
    developer.nome = nome
    developer.tecs = []
    developer.experiencia = []
    const limite = form.querySelectorAll('div').length

    for(i = 1; i <= limite; i++) {
        

        document.querySelectorAll(`input[name="expert${i}"]:checked`).forEach(function (item) {

            let tecnologia = document.getElementById('input' + i).value
            developer.tecs.push(tecnologia)

            if (item.value === "one") {
                developer.experiencia.push("0 a 2 anos")

            } else if (item.value === "two") {
                developer.experiencia.push("3 a 4 anos")

            } else if (item.value === "three") {
                developer.experiencia.push("5+ anos")
            }

        })

   

    }

    


    developers.push(developer)
    
    console.log(developers)
    

    for(i = 1; i <=count; i++) {
        let div = document.getElementById('div' + i)
        div.remove()

        let br = document.getElementById('br' + i)
        br.remove()
    }
    

   let limpar = document.getElementById("name")
   
   limpar.value = " "
   
    
    count = 0



})


