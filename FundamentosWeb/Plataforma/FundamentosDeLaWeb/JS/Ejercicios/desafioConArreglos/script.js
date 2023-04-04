// //1
// function siempreHambriento(arr) {
//     test = encontrado = false
//     for(var i = 0; i <= arr.length; i++){
//         if(arr[i] === "comida"){
//             console.log("delicioso")
//             encontrado = true
//         }
//     }
//     if (!encontrado) {
//         console.log("Tengo hambre");
//     }
// }
    
// siempreHambriento([3.14, "comida", "pastel", true, "comida"]);
// // esto debería mostrar "delicioso, "delicioso"
// siempreHambriento([4, 1, 5, 7, 2]);
// // esto debería mostrar "Tengo hambre"

// //2
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(var i = 0; i <= arr.length; i++){
//         if(arr[i] > cutoff){
//             filteredArr.push(arr[i])
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // esperamos de vuelta [6, 8, 10, 9]

//3
// function betterThanAverage(arr) {
//     var sum = 0;
//     // calcula el promedio
//     arr.forEach(element => {
//         sum += element
//     });   
//     sum = sum / arr.length     
        
//     console.log("Promedio es: " + sum)
//     var count = 0
//     for(var i = 0 ; i <= arr.length; i++){
//         if(sum > arr[i])
//         count++
//     }
//     // cuenmta cuánmtas variables son mayores que el promedio
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // esperamos 4 de vuelta

//4 
// function reverse(arr) {
//     arr.reverse()
//     return arr;
// }

// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // esperamos de vuelta ["e", "d", "c", "b", "a"]

//5
function fibonacciArray(n) {
    // [0, 1] son los valores inciales del arreglos para calcular el resto
    var fibArr = [0, 1];
    for(var i = 2; i < n; i++){
        console.log(fibArr[i-1])
        console.log("-----")
        console.log(fibArr[i-2])
        fibArr[i] = fibArr[i-1] + fibArr[i-2]
    }
    return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // esperamos de vuelta[0, 1, 1, 2, 3, 5, 8, 13, 21, 34]