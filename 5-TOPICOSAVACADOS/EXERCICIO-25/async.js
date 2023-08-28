


async function asyncImc (peso, altura) {
    if (typeof peso =='number' && typeof altura =='number') {
        return peso / (altura * altura)
    } else {
        return Promise.reject('Isso não é um número')
    }
}

async function asyncExecute(peso, altura) {
    try {
        const imc = await asyncImc(peso, altura)
        if (imc >= 40) {
            console.log(`Seu IMC é de ${imc} e você está com Obesidade Grave`)
        } else if (imc >=30 && imc < 40) {
            console.log(`Seu IMC é de ${imc} e você está com Obesidade`)
        } else if (imc >= 25 && imc < 30){
            console.log(`Seu IMC é de ${imc} e você está com SOBREPESO`)
        } else if (imc >= 18.5 && imc < 25) {
            console.log(`Seu IMC é de ${imc} e você está com peso NORMAL`)
        } else if (imc < 18.5) {
            console.log(`Seu IMC é de ${imc} e você está em estado de magreza`)
        }
    } catch (err)  {
        console.log(err)
    } }




asyncExecute(75, 1.56)
asyncExecute(75, "10")