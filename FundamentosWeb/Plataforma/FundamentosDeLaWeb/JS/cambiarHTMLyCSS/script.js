var animalImg = document.querySelector("#animal")

console.log(animalImg)

function pickCat(element) {
    // console.log(element.style)
    // element.style.backgroundColor = "goldenrod";
    element.remove();
    animalImg.src = "cat.jpg";
    // console.log(animalImg.src);
}

function pickDog(element) {
    element.classList.add("btn")
    animalImg.src = "dog.jpg";
    // console.log(animalImg.src);
}