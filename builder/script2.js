class Burger {
  constructor(/* builder */ { size, cheeze, pepperoni, lettuce, tomato }) {
    // this.size = builder.size
    this.size = size
    this.cheeze = cheeze || false
    this.pepperoni = pepperoni || false
    this.lettuce = lettuce || false
    this.tomato = tomato || false
  }
}

class BurgerBuilder {
  constructor(size) {
    this.size = size
  }

  addCheeze() {
    this.cheeze = true
    return this
  }

  addPepperoni() {
    this.pepperoni = true
    return this
  }

  addLettuce() {
    this.lettuce = true
    return this
  }

  addTomato() {
    this.tomato = true
    return this
  }

  build() {
    return new Burger(this)
  }
}

const burger = new BurgerBuilder(14).addCheeze().addTomato().build()

console.log(burger)
// Burger {size: 14, cheeze: true, pepperoni: false, lettuce: false, tomato: true}
