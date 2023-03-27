var test = document.querySelector(".remove1");
var test2 = document.querySelector(".remove2");
var numberC = document.querySelector(".connR");
var numberY = document.querySelector(".connY");
var nombre = document.querySelector(".card-body h1");

count = 2;
conn = 418;

function remove1() {
    test.remove();
    count--;
    conn++;
    numberC.innerHTML = count;
    numberY.innerHTML = conn;
}

function remove2() {
    test2.remove();
    count--;
    conn++;
    numberC.innerHTML = count;
    numberY.innerHTML = conn;
}


function editName() {
    nombre.innerHTML = "Jenny Crow";
}