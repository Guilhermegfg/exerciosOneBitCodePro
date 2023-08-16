export class Character {
    constructor(nome, vida, ataque, defesa){
        this.nome = nome
        this.vida = vida
        this.ataque = ataque
        this.defesa = defesa
    }

    Atacar (alvo) {
        let dano = this.ataque - alvo.defesa 
        alvo.vida -= dano
    }
}