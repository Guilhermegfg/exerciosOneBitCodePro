let num = parseInt(prompt("Digite um número para ver a tabuada: "));

let tabuada = `A tabuada de 0 até 20 do número ${num}:`;

for (let multiplo = 0; multiplo <= 20; multiplo++) {
    let resultado = num * multiplo;

    tabuada += (`\n${num} * ${multiplo} = ${resultado}`)
    
}

alert(`${tabuada}`)