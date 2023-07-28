let vagas = [
    {
        nome: "desenvolvedor",
        candidatos: ["gabriela", "guilherme", "josé"],
        descricao: "Vaga para desenvolvedor front-end",
        data: "02/08/2023"
    },

    {
        nome: "back-end",
        candidatos: ["aryane", "walta", "ana"],
        descricao: "Vaga para desenvolvedor back-end",
        data: "12/09/2023"
    }
]



let opcoes = ""
let vaga = {}
let listaDeVagas = ""

function listarVagas() {
    if (vagas.length == 0) {
        alert("Ainda não existem vagas cadastradas!")
    } else {

        vagas.forEach(function(elemento, indice){
            
            listaDeVagas += "VAGA: " + parseInt(indice + 1)  + "\nNOME: " + elemento.nome + "\nINSCRITOS: " + elemento.candidatos.length + "\n--------------------------------\n"
            
        })
    }
}


function criarNovaVaga() {
    vaga.nome = prompt("digite o nome da vaga")
    vaga.descricao = prompt("Faça uma descrição para a vaga")
    vaga.data = prompt("Digite uma data limite para se inscrever na vaga\n" +
            "Exemplo: 02/08/2023")
    vaga.candidatos = []
    let confirmar = confirm ("Os dados estão corretos\n" + 
            "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao +
            "\nData Limite: " + vaga.data)
    if (confirmar) {
        vagas.push(vaga)
        
    }
    vaga = {}
        
}


function visualizarVaga() {
    let consultar = parseInt(prompt("Digite o n° da vaga que deseja ver, se não souber o n° da vaga digite 0 e volte ao menu anterior para ver o n° da vaga"))
    if (consultar == 0) {
        return alert("Voltando ao menu anterior")
    } else if (consultar <= vagas.length) {
        let index = consultar - 1
        let nomes = ""
        for(let i = 0; i < vagas[index].candidatos.length; i++ ){
            nomes += "Candidato n° " + (i + 1) + "\nNome: " + vagas[index].candidatos[i] + "\n--------------------------------\n" 
        }
        alert(
            "Vaga: " + (consultar) +
            "\nNome: " + vagas[index].nome +
            "\nDescrição: " + vagas[index].descricao +
            "\nData limite: " + vagas[index].data +
            "\nQuantidade de Candidatos: " + vagas[index].candidatos.length +
            "\nNome dos candidatos:\n\n" + nomes
        )
        nomes = ""
    } else {
        alert("essa vaga não existe")
    }
}


function inscrever() {
    let novo = ""
    let opcao = ""
    let verificar = ""

    opcao = parseInt(prompt("Digite o n° da vaga se não souber digite 0 para voltar:"))
    
    if(opcao == 0){
       return alert("voltando ao menu anterior")
    
    } else if(opcao <= vagas.length){ 
        verificar = confirm(
            "DADOS DA VAGA " + opcao +
            "\nNome: " + vagas[opcao -1].nome +
            "\nDescrição: " + vagas[opcao -1].descricao +
            "\nData limite: " + vagas[opcao -1].data + 
            "\nN° de candidatos inscritos: " + vagas[opcao -1].candidatos.length +
            "\n\nVocê confirma que essa é a vaga desejada?"

        )
    } else {
        alert("Essa vaga não existe")
    }

    if (verificar) {
        novo = prompt("Digite o nome do candidato a ser inscrito na vaga:")
        vagas[opcao -1].candidatos.push(novo)
    }

   

}


function excluir() {
    let opcao = parseInt(prompt("Digite o N° da vaga que deseja excluir, se não souber digite 0 para voltar ao menu anterior:"))
    let verificar = ""

    if (opcao == 0){
        alert("Voltando ao menu anterior")
    } else if(opcao <= vagas.length) {
        verificar = confirm(
            "DADOS DA VAGA " + opcao +
            "\nNome: " + vagas[opcao -1].nome +
            "\nDescrição: " + vagas[opcao -1].descricao +
            "\nData limite: " + vagas[opcao -1].data + 
            "\nN° de candidatos inscritos: " + vagas[opcao -1].candidatos.length +
            "\n\nVocê confirma que essa é a vaga que desja excluir?"

        )
    } else {
        alert("Essa vaga não existe")
    }

    if (verificar) {
        let posicao = opcao - 1
        vagas.splice(posicao, 1)
    }
}



do {

    opcoes = prompt("Atualmente existem " + vagas.length + " vagas disponíveis." +
    "\nListar vagas disponíveis (1)\nCriar uma nova vaga (2)\nVisualizar uma vaga (3)" +
    "\nInscrever um candidato em uma vaga (4)\nExcluir uma vaga (5)\nSair (6)")

    switch (opcoes) {
        case "1":
            listarVagas()
            alert(listaDeVagas)
            listaDeVagas = ""
            break
        case "2":
            criarNovaVaga()
            break
        case "3":
            visualizarVaga()
            break
        case "4":
            inscrever()
            break 
        case "5":
            excluir()
            break
        case "6":
            alert("Finalizando o programa")
            break
        default:
            alert("Comando inválido, por favor tente novamente!")
    }

} while(opcoes !== "6")