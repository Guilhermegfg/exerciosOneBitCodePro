var cidades = "";
var count = 0;
let nome = prompt("Qual é o seu nome: ");
let viajou = prompt("Você já visitou alguma cidade (sim)/(não):");

while (viajou == "sim") {
    count += 1;
    let cidade = prompt("Qual o nome da cidade que você visitou? ");
    
    let viajou = prompt("já visitou mais alguma? ")
    
    
    cidades += ` ${cidade},`;

    if (viajou != "sim") {
        break
    } 

    
}

alert(`Boa tarde ${nome} você visitou ${count} cidades e elas são ${cidades}`)