// function ordenar(numArray) {

//     if (numArray.length <= 1) {
//         return numArray
//     }

//     let left = []
//     let right = []
//     let aux = []
//     let pivot = numArray.pop()

//     for (let i = 0; i < numArray.length; i++) {
//         if (numArray[i] <= pivot) {
//             left.push(numArray[i])
//         } else {
//             right.push(numArray[i])
//         }
//     }
//     return aux.concat(ordenar(left), pivot, ordenar(right))
// }

// let primos = [20, 21, 30, 18, 7, 1, 5, 9, 2]
// console.log(primos)
// console.log()
// let result = ordenar(primos)
// console.log(result)


let array = [2, 5, -2, 6, 10, 23, -10 - 5, 6, 18, -7]
function quickSort(arr) {
    if (arr.length == 0) {
        return []
    }
    let mediumIndex = Math.floor(arr.length / 2)
    let pivot = arr[mediumIndex]
    let left = []
    let right = []
    for (var i = 0; i < arr.length; i++) {
        if (i != mediumIndex) {
            if (arr[i] > pivot) {
                right.push(arr[i])
            } else {
                left.push(arr[i])
            }
        }
    }
    left = quickSort(left)
    right = quickSort(right)
    return left.concat(pivot).concat(right)
}

console.log(quickSort(array))