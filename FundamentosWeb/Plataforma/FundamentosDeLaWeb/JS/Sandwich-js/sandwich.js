// var bread = "wheat"
// var protein = ["london broil", "bacon"]
// var cheeses = ["provolone", "pepperjack"]
// var condiments = ["aragula", "tomatoes", "mayo"]

var sandwich1 = {
    bread: "wheat",
    proteins: ["london broil", "bacon"],
    cheeses: ["provolone", "pepperjack"],
    condiments: ["aragula", "tomatoes", "mayo"],
    display: function(){
        console.log("The bread is: " + this.bread)
        console.log("The proteins is: " + this.proteins)
        console.log("The cheese is: " + this.cheeses)
        console.log("The condiments is: " + this.condiments)
    }
}

// console.log(sandwich1.bread)
sandwich1.display()

