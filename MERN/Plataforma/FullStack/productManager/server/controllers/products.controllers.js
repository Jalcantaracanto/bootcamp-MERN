const Product = require("../models/products.model")

module.exports.createNewProduct = (req, res) => {
    Product.create(req.body)
        .then((newProduct) => res.json({ product: newProduct }))
        .catch((err) => res.json({ message: "Couldn't create Product", error: err }))
}

module.exports.findAllProducts = (req, res) => {
    Product.find()
        .then((allProducts) => res.json({ product: allProducts }))
        .catch((err) => res.json({ message: "I don't know could find all the products", error: err }))
}
