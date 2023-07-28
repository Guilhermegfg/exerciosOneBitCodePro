let palavra = prompt("Digite uma palavra para verificar se é ou não um palíndromo: ")

let tamanho = palavra.length - 1;

let palavra2 = "";


for (tamanho; tamanho >=0; tamanho--){
    palavra2 += (`${palavra[tamanho]}`)
}

if (palavra == palavra2){
    alert(`${palavra} é um palíndromo`)
} else {
    alert(`${palavra} de trás para frente é ${palavra2}`)
}