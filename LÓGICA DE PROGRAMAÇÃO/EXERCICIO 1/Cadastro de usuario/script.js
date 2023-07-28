let nome = prompt("Digite o seu nome: ");
let sobrenome = prompt("Digite o seu sobrenome: ");
let estudo = prompt("Digite sua área de estudo: ");
let ano = prompt("Digite o ano de nascimento: ");

let idade = 2023 - parseFloat(ano);

alert(`${nome} ${sobrenome}, estuda ${estudo} e tem ${idade} anos`)