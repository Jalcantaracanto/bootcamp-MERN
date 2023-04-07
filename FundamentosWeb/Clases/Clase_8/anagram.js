// Dada dos palabras retornar si una es un anagrama de la otra
function isAnagram(word1, word2) {

    if (word1.length === word2.length) {
        array1 = word1.toLowerCase()
        array2 = word2.toLowerCase()

        array1 = array1.split("")
        array2 = array2.split("")

        array1 = array1.sort()
        array2 = array2.sort()

        array1 = array1.toString()
        array2 = array2.toString()

        if (array1 === array2) {
            var op = true
        } else {
            var op = false
        }
        return op
    }
}
console.log(isAnagram("Conservadora", "conversadora"))