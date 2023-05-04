// un ejemplo de código que podrías escribir
// const myArray = doSomething();
// doSomethingToMyArray(myArray);
// console.log("This message will wait until the above lines complete");

const noMondays = new Promise( (resolve, reject) => {
    if(new Date().getDay() !== 1) {
        resolve("Good, it's not Monday!");
    } else {
        reject("Someone has a case of the Mondays!");
    }
});
noMondays
    .then( res => console.log(res) )
    .catch( err => console.log(err) );