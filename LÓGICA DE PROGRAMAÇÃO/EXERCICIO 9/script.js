function triangulo(base, altura) {
    return base * altura/2
}

function retangulo(base, altura) {
    return base * altura
}

function quadrado(lado) {
    return lado * lado
}

function trapezio(baseMaior, baseMenor, altura) {
    return (baseMaior + baseMenor) * altura/2
}

function circulo(raio) {
    return 3.14 * raio * raio 
}

let opcoes = ""

do {
    opcoes = prompt("Selecione qual área vc deseja calcular" +
        "\nTRIÂNGULO (1)\nRETÂNGULO (2)\nQUADRADO (3)\nTRAPÉZIO (4)\nCÍRCULO(5)\nSAIR (6)"
    )

    switch(opcoes){
        case "1":
            let baseTriangulo = parseFloat(prompt("base do triângulo"))
            let alturaTriangulo = parseFloat(prompt("Altura do triângulo"))
            alert("A área do triâgulo é " + triangulo(baseTriangulo, alturaTriangulo))
            break
        case "2":
            let baseRetangulo = parseFloat(prompt("base do retângulo"))
            let alturaRetangulo = parseFloat(prompt("Altura do retângulo"))
            alert("A área do retângulo é " + retangulo(baseRetangulo, alturaRetangulo))
            break
        case "3":
            let ladoQuadrado = parseFloat(prompt("Digite o lado do quadrado: "))
            alert("A área do quadrado é " + quadrado(ladoQuadrado))
            break
        case "4":
            let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "))
            let baseMenor = parseFloat(prompt("Digite o a base menor do trapézio: "))
            let alturaTrapezio = parseFloat(prompt("Digite a altura do trapezio: "))
            alert("A área do trapézio é " + trapezio(baseMaior, baseMenor, alturaTrapezio))
            break
        case "5":
            let raio = parseFloat(prompt("Digite o raio do círculo: "))
            alert("A área do círculo é " + circulo(raio))
            break
        case "6": 
            alert("finalizando...")
            break
        default:
            alert("Opção inválida, tente novamente!")


    }

}while(opcoes != "6")