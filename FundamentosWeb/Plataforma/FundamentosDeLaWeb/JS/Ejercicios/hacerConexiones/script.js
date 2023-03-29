var numberC = document.querySelector(".connR");
var numberY = document.querySelector(".connY");
var nombre = document.querySelector(".card-body h1");


function acceptC(remove) {
    var accept = document.querySelector(remove)
    accept.remove();
    numberC.innerHTML--
    numberY.innerHTML++
}

function declineC(remove) {
    var decline = document.querySelector(remove)
    decline.remove();
    numberC.innerHTML--
}


function editName() {
    nombre.innerHTML = "Jenny Crow";
}