var count = 1;
var countElement = document.querySelector("#count");

console.log(countElement)

function add1(){
    count++;
    countElement.innerHTML = "The count is " + count;
    console.log(count)
}

function subtract1(){
    count--;
    countElement.innerHTML = "The count is " + count;
    console.log(count)
}