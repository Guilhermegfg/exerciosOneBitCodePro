let nome1 = prompt("Digite o nome do veículo: ");
let velocidade1 = prompt(`Digite a velocidade do veículo ${nome1}: `);
let nome2 = prompt("Digite o nome do veículo: ");
let velocidade2 = prompt(`Digite a velocidade do veículo ${nome2}: `);

let v1 = parseFloat(velocidade1);
let v2 = parseFloat(velocidade2);

alert(`A velocidade do veiculo ${nome1} foi de ${v1} Km/h
\n A vevlociade do veículo ${nome2} foi de ${v2} KM/h`)

if (v1 > v2){
    let diferenca = v1 - v2;
    alert(`A velocidade do ${nome1} superou a do ${nome2} em ${diferenca} Km/h`);
} else if(v2 > v1) {
    let diferenca = v2 - v1;
    alert(`A velocidade do ${nome2} superou a do ${nome1} em ${diferenca} Km/h`);
} else if (v2 = v1) {
    alert("As velocidades foram iguais");
}