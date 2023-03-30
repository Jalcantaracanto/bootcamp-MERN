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
        console.log(temp)
        console.log(tempint);
        if (selector.value == "°C") {
            temp.innerText = Math.round(((tempint - 32) * 5) / 9);
        } else {
            temp.innerText = Math.round((9 / 5) * tempint + 32);
        }
    }
}

// var degrees = [
//     document.querySelector('.number-1'),
//     document.querySelector('.number-2'),
//     document.querySelector('.number-3'),
//     document.querySelector('.number-4'),
//     document.querySelector('.number-5'),
//     document.querySelector('.number-6'),
//     document.querySelector('.number-7'),
//     document.querySelector('.number-8'),
// ]

// function changeTemp(change) {
//     var celciusDegreesMax = ['24', '27', '21', '26']
//     var celciusDegreesMin = ['18', '19', '16', '21']
//     var farenheitDegreesMax = ['75', '80', '69', '78']
//     var farenheitDegreesMin = ['65', '66', '61', '70']

//     console.log(celciusDegreesMax);
//     console.log(celciusDegreesMin);

//     if(change.value == "°F"){
//         degrees[0].innerText = farenheitDegreesMax[0]
//         degrees[1].innerText = farenheitDegreesMin[0]
//         degrees[2].innerText = farenheitDegreesMax[1]
//         degrees[3].innerText = farenheitDegreesMin[1]
//         degrees[4].innerText = farenheitDegreesMax[2]
//         degrees[5].innerText = farenheitDegreesMin[2]
//         degrees[6].innerText = farenheitDegreesMax[3]
//         degrees[7].innerText = farenheitDegreesMin[3]
//     }else {
//         degrees[0].innerText = celciusDegreesMax[0]
//         degrees[1].innerText = celciusDegreesMin[0]
//         degrees[2].innerText = celciusDegreesMax[1]
//         degrees[3].innerText = celciusDegreesMin[1]
//         degrees[4].innerText = celciusDegreesMax[2]
//         degrees[5].innerText = celciusDegreesMin[2]
//         degrees[6].innerText = celciusDegreesMax[3]
//         degrees[7].innerText = celciusDegreesMin[3]
//     }
// }

