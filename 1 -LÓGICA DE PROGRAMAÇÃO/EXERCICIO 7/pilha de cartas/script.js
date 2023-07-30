let opcoes = 0;
let adicionar = "";
let remover = "";

let cartas = ["Neymar", "Messi", "Ronaldo",]

do {
    opcoes = parseInt(prompt(`Atualmente existem ${cartas.length} cartas no jogo, selecione o n° da opção:\n
OPÇÃO 1 - ADICIONAR CARTA\nOPÇÃO 2 - TIRAR UMA CARTA\nOPÇÃO 3 - SAIR`));

    switch (opcoes){
        case 1: 
            adicionar = prompt("Digite o nome da carta a ser adicionada:")
            cartas.push(adicionar);
            break
        case 2:
            remover = cartas.pop()
            alert(`Você removeu a carta ${remover}`)
            break
        case 3:
            alert("Encerrando o progrma")
            break
        default:
            alert("Opção inválida tente novamente")
    }

} while(opcoes != 3)