function imc(peso, altura) {
    return new Promise((resolve, reject) => {
        if (typeof peso == "number" && typeof altura == "number") {
            resolve(peso / (altura * altura))
        } else {
            reject("não é número")
        }
    }) 
}


function execute(peso, altura) {
    imc(peso, altura).then((result) => {
        if (result >= 40) {
            console.log(`Seu IMC é de ${result} e você está com Obesidade Grave`)
        } else if (result >=30 && result < 40) {
            console.log(`Seu IMC é de ${result} e você está com Obesidade`)
        } else if (result >= 25 && result < 30){
            console.log(`Seu IMC é de ${result} e você está com SOBREPESO`)
        } else if (result >= 18.5 && result < 25) {
            console.log(`Seu IMC é de ${result} e você está com peso NORMAL`)
        } else if (result < 18.5) {
            console.log(`Seu IMC é de ${result} e você está em estado de magreza`)
        }
    }).catch((err) => {
        console.log(err)
    }).finally(() => {
        console.log("finalizado")
    })

    console.log("calculando")
}

console.log(execute(50, 1.2))