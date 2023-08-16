import { Character } from "./Character.js";
import { Mage } from "./Mage.js";
import { Thief } from "./Thief.js";
import { Warrior } from "./Warrior.js";


let one = new Character("character", 100, 50, 40)
let two = new Mage(20, "Mage", 90, 50, 30)
let three = new Thief ("Thief", 120, 60, 35)
let four = new Warrior (15, "Warrior", 45, 55, 30)

one.Atacar(two)
three.Atacar(four)
four.Atacar(one)
two.Atacar(one)
two.Curar(one)
four.MudarPosicao()
four.Atacar(one)

console.log(one)
console.log(two)
console.log(three)
console.log(four)