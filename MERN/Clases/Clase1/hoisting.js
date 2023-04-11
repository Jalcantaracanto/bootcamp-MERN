// Hoisting

// var magicalUnicorns

console.log(magicalUnicorns)

const magicalUnicorns = "awesome"

var foo = "bar"
function magic() {
    foo = "hello world"
    console.log(foo)
    var foo
}

magic()
console.log(foo)