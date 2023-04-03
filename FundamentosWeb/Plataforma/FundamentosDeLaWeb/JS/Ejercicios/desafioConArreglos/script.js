//1
function siempreHambriento(arr) {
    test = encontrado = false
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] === "comida"){
            console.log("delicioso")
            encontrado = true
        }
    }
    if (!encontrado) {
        console.log("Tengo hambre");
    }
}
    
siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// esto debería mostrar "delicioso, "delicioso"
siempreHambriento([4, 1, 5, 7, 2]);
// esto debería mostrar "Tengo hambre"

//2
function highPass(arr, cutoff) {
    var filteredArr = [];
    for(var i = 0; i <= arr.length; i++){
        if(arr[i] > cutoff){
            filteredArr.push(arr[i])
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//3
function betterThanAverage(arr) {
    var sum = 0;
    // calcula el promedio
    var count = 0
    // cuenmta cuánmtas variables son mayores que el promedio
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // esperamos 4 de vuelta