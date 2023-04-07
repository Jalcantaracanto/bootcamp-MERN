// var sandwich = {
//     pan:    "masa madre",
//     proteína:  "asado",
//     queso:   "queso suizo lacey",
//     salsas: ["lechuga romana", "tomates reliquia", "salsa de rábano"]
// };

// console.log(sandwich);

// function sandwichFactory(pan, proteína, queso, salsas) {
//     var sandwich = {};
//     sandwich.pan = pan;
//     sandwich.proteína = proteína;
//     sandwich.queso = queso;
//     sandwich.salsas = salsas;
//     return sandwich;
// }

// var s1 = sandwichFactory("trigo", "pavo", "provolone", ["mostaza", "cebolla frita", "rúcula"]);
// console.log(s1);

function pizzaOven(tipoCorteza, tipoSalsa, quesos, salsas) {
    var pizza = {}
    pizza.tipoCorteza = tipoCorteza
    pizza.tipoSalsa = tipoSalsa
    pizza.quesos = quesos
    pizza.salsas = salsas

    return pizza
}

var pizza1 = pizzaOven("estilo Chicago", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"])
console.log(pizza1)
var pizza2 =pizzaOven("lanzada a mano", "marinara", ["mozzarella", "feta"], ["champiñones", "aceitunas", "cebollas"])
console.log(pizza2)
var pizza3 = pizzaOven("estilo ratita", "tradicional", ["mozzarella"], ["pepperoni", "salchicha"])
console.log(pizza3)
var pizza4 =pizzaOven("lazada a pie", "delgada", ["blanco"], ["champiñones", "rucula", "cebolla morada"])
console.log(pizza4)


var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "cauliflower",
    "gluten free",
    "hawaiian bread"
];

var sauceTypes = [
    "traditional",
    "marinara",
    "bbq",
    "white sauce",
    "nacho cheese",
    "tikka masala"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "goat cheese",
    "provolone",
    "parmesan",
    "vegan cheese"
];

var toppings = [
    "pepperoni",
    "sausage",
    "chicken",
    "corn",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "anchovies"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());