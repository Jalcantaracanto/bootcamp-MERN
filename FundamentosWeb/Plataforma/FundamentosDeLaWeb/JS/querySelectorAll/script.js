var pTag = document.querySelectorAll("p")

function getColor(element){
    console.log(element.value)
    console.log(pTag)
    for(var i = 0; i < pTag.length; i++){
        pTag[i].style.color = element.value
    }
}