var currentUsername = "";

function getUsername(element) {
    console.log(element.value)
    currentUsername = element.value
}

async function search() {
    var response = await fetch("https://api.github.com/users/dev-marisa")
    var coderData = await response.json()
    console.log(coderData)
}