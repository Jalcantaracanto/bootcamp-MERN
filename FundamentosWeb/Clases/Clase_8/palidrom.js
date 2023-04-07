function isPalindrom(word){
    var pal = word.split("")
    pal = pal.reverse().join("").toLowerCase()
    word = word.toLowerCase()

    // console.log(pal)
    // pal = pal.toString()
    // pal = pal.split(",").join("")

    if(pal === word){
        return true
    }else{
        return false
    }
}

console.log(isPalindrom("oso"))
console.log(isPalindrom("Oso"))
console.log(isPalindrom("pasa"))