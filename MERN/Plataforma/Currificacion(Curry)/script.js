
// Sin Curry
function ninjaBelt(ninja, beltColor) {
    console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
}
ninjaBelt('Eileen', 'black');


//Con Curry
function ninjaBelt(ninja) {
    return function belt(beltColor) { //tenga en cuenta el cierre aquí!
        console.log("Ninja " + ninja + " has earned a " + beltColor + " belt.");
    }
}
ninjaBelt('Eileen')('black'); //tenga en cuenta la doble invocación aquí.