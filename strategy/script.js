class ShoppingCart {
  constructor(discount) {
    this.discount = discount
    this.amount = 0
  }

  checkout() {
    return this.discount(this.amount)
  }

  setAmount(amount) {
    this.amount = amount
  }
}

const guestStrategy = (amount) => amount

const regularStrategy = (amount) => amount * 0.9

const premiumStrategy = (amount) => amount * 0.8
