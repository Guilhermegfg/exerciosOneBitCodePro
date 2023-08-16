import { Character } from "./Character.js";

export class Mage extends Character {
    constructor(magia, nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
        this.magia = magia
    }

    Atacar (alvo) {
        let dano = this.ataque + this.magia - alvo.defesa
        alvo.vida -= dano
    }

    Curar (alvo) {
        alvo.vida += this.magia * 2
    }
}