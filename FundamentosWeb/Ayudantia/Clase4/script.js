var miResultado = 0

function miSuma(sumando) {
    miResultado = sumando + 1
    console.log(miResultado)
    return(miResultado+1)
}

console.log(miResultado)
miResultado = miSuma(10)
console.log(miResultado)

//unaVariable = elReturndeLaFuncion(elParametro)