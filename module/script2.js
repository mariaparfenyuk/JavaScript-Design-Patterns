const cartModule = (() => {
  const cart = []

  function getCount() {
    return cart.length
  }

  function getTotal() {
    let total = 0
    for (const item of cart) {
      total += item.price
    }
    return total
  }

  return {
    addItems(values) {
      for (const val of values) {
        cart.push(val)
      }
    },
    removeItem(object) {
      const key = Object.keys(object)[0]
      const value = Object.values(object)[0]

      const index = cart.findIndex((item) => (item[key] = value))

      cart.splice(index, 1)
    },
    getInfo() {
      console.log(
        `В корзине ${getCount()} товар(а) на ${
          getCount() > 1 ? 'общую ' : ''
        }сумму ${getTotal()} рублей`
      )
    },
  }
})()

const products = [
  {
    id: '1',
    title: 'Хлеб',
    price: 50,
  },
  {
    id: '2',
    title: 'Масло',
    price: 120,
  },
  {
    id: '3',
    title: 'Молоко',
    price: 80,
  },
]

cartModule.addItems(products)
cartModule.getInfo()
// В корзине 3 товар(а) на общую сумму 250 рублей

cartModule.removeItem({ id: 2 })
cartModule.getInfo()
// В корзине 2 товар(а) на общую сумму 200 рублей

cartModule.removeItem({ title: 'Молоко' })
cartModule.getInfo()
// В корзине 1 товар(а) на сумму 80 рублей
