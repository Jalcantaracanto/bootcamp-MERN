//Clase Carta
class Card {
    constructor(name, cost) {
        this.name = name
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost)
        this.power = power
        this.res = res
    }

    attack(target) {
        //Reduce el target res deacuerdo al poder
        target.res -= this.power
    }
}

class Effect extends Card {
    constructor(name, cost, text, stat, magnitud) {
        super(name, cost)
        this.text = text
        this.stat = stat
        this.magnitud = magnitud
    }

    play(target) {
        if (target instanceof Unit) {
            if (this.stat === "resiliencia") {
                // console.log(this.text)
                if (this.text.includes("Aumentar")) {
                    target.res += this.magnitud
                } else {
                    target.res -= this.magnitud
                }
            } else {
                target.power += this.magnitud
            }
        } else {
            throw new Error("El objetivo debe ser una Unidad!")
        }
    }
}

class Player {
    constructor(name, idPlayer) {
        this.name = name
        this.idPlayer = idPlayer
    }

    summon(card, idPlayer) {
        if (idPlayer == 1) {
            console.log(`Jugador 1 a jugado ${card}`)
        } else {
            console.log(`Jugador 2 a jugado ${card}`)
        }
    }
}

const unit1 = new Unit("Ninja Cinturón Rojo", 3, 3, 4)
const unit2 = new Unit("Ninja Cinturón Negro", 4, 5, 4)

const effect1 = new Effect("Algoritmo Difícil", 2, "Aumentar la resistencia del objetivo en 3", "resiliencia", 3)
const effect2 = new Effect("Rechazo de promesa no manejado", 1, "Reducir la resistencia del objetivo en 2", "resiliencia", 2)
const effect3 = new Effect("Programación en pareja", 3, "Aumentar el poder del objetivo en 2", "poder", 2)

const player1 = new Player("Jugador 1", 1)
const player2 = new Player("Jugador 2", 2)

player1.summon(unit1.name, player1.idPlayer)
effect1.play(unit1)
console.log(unit1)
player2.summon(unit2.name, player2.idPlayer)
effect2.play(unit1)
console.log(unit1)
effect3.play(unit1)
console.log(unit1)
unit1.attack(unit2)
console.log(unit2)
