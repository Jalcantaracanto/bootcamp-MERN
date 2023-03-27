var neil = 9;
var nichole = 12;
var jim = 9;
var neilCount = document.querySelector(".like-1")
var nicholeCount = document.querySelector(".like-2")
var jimCount = document.querySelector(".like-3")

function addNeil() {
    neil++;
    neilCount.innerHTML = neil + " like(s)" ;
    console.log(neil)
}

function addNichole() {
    nichole++;
    nicholeCount.innerHTML = nichole + " like(s)" ;
    console.log(nichole)
}

function addJim() {
    jim++;
    jimCount.innerHTML = jim + " like(s)" ;
    console.log(jim)
}