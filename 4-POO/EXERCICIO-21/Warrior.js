import { Character } from "./Character.js";

export class Warrior extends Character {
    posicao = "ataque"
    constructor (escudo, nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
        this.escudo = escudo
    }

    Atacar (alvo) {
        if (this.posicao === "ataque") {
            let dano = this.ataque - alvo.defesa 
            alvo.vida -= dano
        } else {
            console.log("Não é possível atacar") 
        }
    }

    MudarPosicao () {
        if (this.posicao === "ataque"){
            this.posicao = "defesa"
        } else {
            this.posicao = "ataque"
        }
    }
}