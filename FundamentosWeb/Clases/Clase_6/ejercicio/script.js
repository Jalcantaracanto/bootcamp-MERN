function enviarComentario (element) {
    element.preventDefault()
    console.log(element)
    const comentario = document.getElementById("comment")
    console.log(comentario.value)

    const createDiv = document.createElement('div')
    createDiv.setAttribute("id","divPrueba")
    createDiv.innerText = comentario.value
    document.body.appendChild(createDiv)
    const createBtn = document.createElement('button')
    createBtn.innerHTML = "eliminar"
    createDiv.appendChild(createBtn)
    createBtn.setAttribute("class","botoncito")
    createBtn.setAttribute("onClick",'closeTest("#divPrueba")')
    // document.getElementById("divPrueb").appendChild(createBtn)
}

function closeTest(element){
    console.log(element)
}

// function close() {
//     const divcomen = document.getElementById('divPrueba')
//     divcomen.remove()
// }


// function createBtn (){
//     const createBtn = document.createElement('button')
//     createBtn.innerHTML = "boton"
//     document.getElementById("divPrueb").appendChild(createBtn)
// }