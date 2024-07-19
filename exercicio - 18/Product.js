<<<<<<< HEAD
class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}
const watch = new Product ("Relogio de Pulso","...", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)
=======
class Product{
    constructor(name, description, price){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = 0
    }
    addToStock(quantity){
        this.inStock += quantity
    }
    calculateDiscount(discount){
        return this.price * ((100 - discount) / 100)
    }
}
const watch = new Product ("Relogio de Pulso","...", 80)
watch.addToStock(99)
const priceWithDiscount = watch.calculateDiscount(15)

console.log(watch)
console.log(priceWithDiscount)
>>>>>>> b8870bcb907e486142cd9bcf2de0f64187e65047
console.log(watch.calculateDiscount(10))