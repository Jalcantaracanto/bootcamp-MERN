// Number.prototype.isPrime = function() {
//     for( let i=2; i<this; i++ ) {
//         if( this % i === 0 ) {            
//             return false;
//         }
//     }
//     return true;
// }

Number.prototype.isPrime = function () {
    if (this < 2) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(this); i++) {
        if (this % i === 0) {
            return false
        }
    }
    return true
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // por razones matemáticas, 1 se considera primo
while (primeCount < 1000000) {
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// Calcular numeros primos de 100.000 y 1.000.000
// 100.000 -> prime number is 1299709
// 1.000.000 -> prime number is 15485863

// // recursive ES MAS RAPIDA
// function rFib(n) {
//     if (n < 2) {
//         return n;
//     }
//     return rFib(n - 1) + rFib(n - 2);
// }
// console.log(rFib(20));
// console.log(`This took ${performance.now() - start} milliseconds to run`);
// // iterative
// function iFib(n) {
//     const vals = [0, 1];
//     while (vals.length - 1 < n) {
//         let len = vals.length;
//         vals.push(vals[len - 1] + vals[len - 2]);
//     }
//     return vals[n];
// }
// console.log(iFib(20));
// console.log(`This took ${performance.now() - start} milliseconds to run`);




// const num = 100000
// const num2 = 1000000

// const isPrime = (num) => {
//     let arr = []
//     for(let i = 2; i < num; i++){
//         if(num % i != 0){
//             arr.push(i)
//         }
//     }
//     console.log(arr)
// }
// console.log(isPrime(num))
// console.log(isPrime(num2))


// No, esta es la manera mas eficiente.
// const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
// const reversed1 = story.split("").reverse().join("");