function loadingWeather() {
    alert("Loading weather report...");
}

function hide() {
    var element = document.querySelector("#cookies");
    element.remove();
}

// function changeTemp (selector){
//     console.log(selector.value)
//     var red = document.querySelector('.number-red')
//     var blue = document.querySelector('.number-blue')
//     var parseRed = parseInt(red.innerText)
//     var parseBlue = parseInt(blue.innerText)
//     console.log(red)
//     console.log(blue)
//     console.log(parseRed)
//     console.log(parseBlue)
    
//     if (element.value == "°F"){
//         red.innerText = Math.round((9 / 5 * parseRed) + 32)
//         blue.innerText = Math.round((9 / 5 * parseBlue) + 32)
//     }else{
//         red.innerText = Math.round(((parseRed-32) *5) / 9)
//         blue.innerText = Math.round(((parseBlue-32) *5) / 9)
//     }
// }

function changeTemp(selector) {
    console.log(selector);
    console.log(selector.value);
    for (var i = 1; i <= 8; i++) {
        var temp = document.querySelector(".number-" + i);
        var tempint = parseInt(temp.innerText);
        console.log(tempint);
        if (selector.value == "°C") {
            temp.innerText = Math.round(((tempint - 32) * 5) / 9);
        } else {
            temp.innerText = Math.round((9 / 5) * tempint + 32);
        }
    }
}