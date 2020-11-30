class SimpleCoffee {
  getCost() {
    return 10
  }
  getDescription() {
    return 'Простой кофе'
  }
}

class MilkCoffee {
  constructor(coffee) {
    this.coffee = coffee
  }

  getCost() {
    return this.getCost() + 2
  }

  getDescription() {
    return this.getDescription() + ', молоко'
  }
}

class WhipCoffee {
  constructor(coffee) {
    this.coffee = coffee
  }

  getCost() {
    return this.getCost() + 5
  }

  getDescription() {
    return this.getDescription() + ', сливки'
  }
}

class VanillaCoffee {
  constructor(coffee) {
    this.coffee = coffee
  }

  getCost() {
    return this.getCost() + 3
  }

  getDescription() {
    return this.getDescription() + ', ваниль'
  }
}

let someCoffee

someCoffee = new SimpleCoffee()
console.log(someCoffee.getCost()) // 10
console.log(someCoffee.getDescription()) // Простой кофе

someCoffee = new WhipCoffee(someCoffee)
console.log(someCoffee.getCost()) // 15
console.log(someCoffee.getDescription()) // Простой кофе, сливки
