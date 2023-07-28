let imoveis = []
let opcoes = ""

do {
    opcoes = prompt("Atualmente tem " + imoveis.length + " imóveis cadastrados"
    + "\nCadastrar um novo imóvel (1)\nMostar os imóveis cadastrados (2)\nSair (3)")

    switch(opcoes){
        case "1":
            let imovel = {}
            imovel.proprietario = prompt("Digite o nome do proprietário: ")
            imovel.quartos = prompt("Digite quantos quartos o imóvel possui")
            imovel.banheiros = prompt("Digite a quantidade de banheiros que o imóvel possui ")
            imovel.garagem = prompt("o imóvel possui garagem (SIM/NÃO)")

            let confirma = confirm("Os dados estão corretos?")

            if (confirma) {
                imoveis.push(imovel)
            }
            break
        case "2":
            for (let i = 0; i < imoveis.length; i++){
                alert(
                    "IMÓVEL " + (i + 1) +
                    "\nPROPRIETÁRIO: " + imoveis[i].proprietario +
                    "\nN° DE QUARTOS: " + imoveis[i].quartos +
                    "\nN° DE BANHEIROS " + imoveis[i].banheiros +
                    "\nPOSSUI GARAGEM: " + imoveis[i].garagem
                )
            }
            break
        case "3":
            alert("Encerrando o programa")
            break
        default:
            alert("opção inválida, tente novamente")
    }

} while(opcoes !== "3")