//Clase Principal
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

//Clase Sensei hijo
class Sensei extends Ninja {
    constructor(nombre) {
        super(nombre, 200)
        this.fuerza = 10
        this.velocidad = 10
        this.sabiduria = 10
    }

    childFunction = () => {
        const message = superSensei.parentFunction()
        console.log(message)
    }

    speakWisdom = () => console.log('Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses')

    showStats = () =>{
        console.log(`~ NINJA ~
        Nombre: ${this.nombre}
        Fuerza: ${this.fuerza}
        Velocidad: ${this.velocidad}
        Salud: ${this.salud}
        Sabiduria: ${this.sabiduria}`)
    }
}

const ninja1 = new Ninja("Hyabusa", 10)
ninja1.sayName()
ninja1.showStats()
ninja1.dinkSake()

// ejemplo de salida
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses."
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"

