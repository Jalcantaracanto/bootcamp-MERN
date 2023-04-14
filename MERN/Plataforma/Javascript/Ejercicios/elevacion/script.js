//1 
// Dado
// console.log(hello);                                   
// var hello = 'world';

// Interpretado
// var hello
// console.log(hello) //undefined
// var hello = 'world'

//2
//Dado
// var needle = 'haystack';
// test();
// function test(){
//     var needle = 'magnet';
//     console.log(needle);
// }

// Interpretado
// test()
// function test(){
//     var needle = 'magnet'
//     console.log(needle) //magnet
// }
// var needle = 'haystack'

//3
//Dado
// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan);

// Interpretado
// var brendan = 'super cool'
// console.log(brendan)    //super cool

//4
//Dado
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }

//interpretado
// var food = 'chiken'
// console.log(food)   //chicken
// eat()
// function eat(){
//     food = 'half-chicken'
//     console.log(food)   //Half-Chicken
// }

//5
//Dado
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//Interpretado
// var mean
// mean();         //error mean no es funcion
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

//6
//Dado
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//Interpretado
// var genre
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre);

//7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo);

//8 dojo = "san jose"; ERROR
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}


