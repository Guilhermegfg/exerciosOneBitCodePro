

const dayjs = require("dayjs");



const idade = (dataDeNascimento) => {
    //Pegando a data atual
    let dataAtual = dayjs()

    //formatando a data de nascimento
    let dataFormatada =  dayjs(dataDeNascimento).format('DD/MM/YYYY')

    //Pegando a idade atual
    let idadeAtual = dataAtual.diff(dataDeNascimento, 'year')

    //Pegando o próximo aniversário
    let anoProximoAnversario = dayjs(dataDeNascimento).add(idadeAtual + 1, 'year')

    //Diferença para o próximo anivesário em dias
    let diferencaParaProximoAniversario = dayjs(anoProximoAnversario).diff(dataAtual, 'day') + 1
    
   
    console.log("Data de nascimento: " + dataFormatada)
    console.log("Idade atual: " + idadeAtual)
    console.log("Próximo aniverário: " + anoProximoAnversario.format('DD/MM/YYYY'))
    console.log("Quantos dias faltam para o próximo aniversário: " + diferencaParaProximoAniversario)
 
}

console.log(idade('2000-03-14'))

