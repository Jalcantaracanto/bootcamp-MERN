class Ninja {
    constructor(nombre, salud) {
        this.nombre = nombre
        this.salud = salud
        this.velocidad = 3
        this.fuerza = 3
    }
    sayName = () => {
        console.log(`Nombre de Ninja: ${this.nombre}`)
    }

    showStats = () => {
        console.log(`~ NINJA ~
        Nombre: ${this.nombre}
        Fuerza: ${this.fuerza}
        Velocidad: ${this.velocidad}
        Salud: ${this.salud}`)
    }
    dinkSake = () => {
        this.salud = this.salud + 10
    }

}


const ninja1 = new Ninja("Hyabusa", 10)
ninja1.sayName()
ninja1.showStats()
ninja1.dinkSake()

