console.log("Hola mundo");

function getEquality(a, b) {
    let isEqual
    if (a == b) {
        //Con triple === compara tipo de dato
        isEqual = true
    } else {
        isEqual = false
    }
    return isEqual
}

//console.log(isEqual)  Scope o alcance, no va a poder ser llamado una variable de una funcion desde fuera

console.log(getEquality(1, "1"))

//Evento onClick
function sayHi() {
    alert("Hola")
}

function changeTextColor(element) {
    if (element.style.color == "blueviolet") {
        element.style.color = "red"
    } else {
        element.style.color == "blueviolet"
    }
}
