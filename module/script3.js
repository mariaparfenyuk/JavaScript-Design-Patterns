class Cart {
  #cart

  constructor() {
    this.#cart = []
  }

  #getCount() {
    return this.#cart.length
  }

  #getTotal() {
    let total = 0
    for (const item of this.#cart) {
      total += item.price
    }
    return total
  }

  addItems(values) {
    for (const val of values) {
      this.#cart.push(val)
    }
  }

  removeItem(object) {
    const key = Object.keys(object)[0]
    const value = Object.values(object)[0]

    const index = this.#cart.findIndex((item) => (item[key] = value))

    this.#cart.splice(index, 1)
  }

  getInfo() {
    console.log(
      `В корзине ${this.#getCount()} товар(а) на ${
        this.#getCount() > 1 ? 'общую ' : ''
      }сумму ${this.#getTotal()} рублей`
    )
  }
}

const cart = new Cart()

cart.addItems(products)
cart.getInfo()
// В корзине 3 товар(а) на общую сумму 250 рублей

cart.removeItem({ id: 2 })
cart.getInfo()
// В корзине 2 товар(а) на общую сумму 200 рублей

cart.removeItem({ title: 'Молоко' })
cart.getInfo()
// В корзине 1 товар(а) на сумму 80 рублей

console.log(cart.cart) // undefined
cart.getTotal() // TypeError: cart.getTotal is not a function
