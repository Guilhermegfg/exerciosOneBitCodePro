let nomePesonagemAtaque = prompt("Digite o nome do personagem que vai atacar: ");
let poderAtaque = prompt(`Digite o poder de ataque do ${nomePesonagemAtaque}`);

let nomePersonagemDefesa = prompt("Digite o nome do personagem de defesa: ")
let pontosVida = prompt(`Digite quantos pontos de vida o ${nomePersonagemDefesa} possui: `)
let escudo = prompt(`Digite S se o ${nomePersonagemDefesa} tiver escudo e não tiver digite N: `)

let escudoUpperCase = escudo.toUpperCase();

let ataque = parseInt(poderAtaque);
let defesa = parseInt(pontosVida);

let danoComEscudo = defesa - ((ataque - defesa) / 2);
let danoSemEscudo = defesa - (ataque -defesa)


if ( escudoUpperCase == "S" && ataque > defesa) {
     alert(`${danoComEscudo}`)
} else if (escudoUpperCase == "N" && ataque > defesa) {
    alert(`${danoSemEscudo}`)
} else if (ataque <= defesa){
    alert("não houve ataque")
} else if (escudoUpperCase != "S" || escudoUpperCase != "N") {
    alert("valor incorreto tente novamente")
}
