module.exports = class Product {
    constructor(name, description, price, inStock = 0){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }
    //adicionar item ao estoque
    addToStock(quantity){
        this.inStock += quantity
    }
    //remover item do estoque
    removeFromStock (quantity){
        this.inStock -= quantity
    }
}