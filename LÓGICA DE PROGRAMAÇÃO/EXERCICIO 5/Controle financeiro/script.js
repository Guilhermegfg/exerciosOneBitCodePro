let dinheiro = parseFloat(prompt("Qual a quantidade de dinheiro disponivel? "))
let opcao = ""
let valor = 0

do {
    opcao = prompt(`Você possui R$ ${dinheiro} Selecione uma das opções:\nDepositar\nSacar\nSair`)
    
    switch (opcao){
        case "depositar":
            valor = parseFloat(prompt("Digite o valor a ser depositado"))
            dinheiro += valor
            break
        case "sacar":
            valor = parseFloat(prompt("Digite o valor que deseja sacar"))
            dinheiro -= valor
            break
        case "sair":
            alert(`Você possui R$ ${dinheiro}`)
            break
        default:
            alert("comando inválido")
            
    }
} while(opcao != "sair")