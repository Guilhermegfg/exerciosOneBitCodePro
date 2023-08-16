import { Character } from "./Character.js";

export class Thief extends Character {
    constructor (nome, vida, ataque, defesa) {
        super(nome, vida, ataque, defesa)
    }

    Atacar (alvo) {
        let dano = 2 * (this.ataque - alvo.defesa)
        alvo.vida -= dano
    }
}