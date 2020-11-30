// симуляция чистого виртуального наследования/ключевого слова "implements"
Function.prototype.implementsFor = function (parentClassOrObject) {
  if (parentClassOrObject.constructor === Function) {
    // обычное наследование
    this.prototype = new parentClassOrObject()
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject.prototype
  } else {
    // чистое виртуальное наследование
    this.prototype = parentClassOrObject
    this.prototype.constructor = this
    this.prototype.parent = parentClassOrObject
  }
  return this
}

// легковес
const CoffeeOrder = {
  // интерфейсы
  serveCoffee(context) {},
  getFlavor() {},
}

// объект ConcreteFlyweight, создающий конкретного легковеса
// посредством реализации CoffeeOrder
function CoffeeFlavor(newFlavor) {
  const flavor = newFlavor

  if (typeof this.getFlavor === 'function') {
    this.getFlavor = () => flavor
  }

  if (typeof this.serveCoffee === 'function') {
    this.serveCoffee = (context) => {
      console.log(`Подача кофе ${flavor} на столик ${context.getTable()}`)
    }
  }
}

// реализация интерфейса для CoffeeOrder
CoffeeFlavor.implementsFor(CoffeeOrder)
// привязка номера столика к заказанному кофе
function CoffeeOrderContext(tableNumber) {
  return {
    getTable() {
      return tableNumber
    },
  }
}

function CoffeeFlavorFactory() {
  const flavors = {}
  let length = 0
  return {
    getCoffeeFlavor(flavorName) {
      let flavor = flavors[flavorName]
      if (typeof flavor === 'undefined') {
        flavor = new CoffeeFlavor(flavorName)
        flavors[flavorName] = flavor
        length++
      }
      return flavor
    },
    getTotalCoffeeFlavorsMade() {
      return length
    },
  }
}

function testFlyweight() {
  const flavors = []
  const tables = []
  let ordersMade = 0
  const flavorFactory = new CoffeeFlavorFactory()

  function takeOrders(flavorIn, table) {
    flavors.push(flavorFactory.getCoffeeFlavor(flavorIn))
    tables.push(new CoffeeOrderContext(table))
    ordersMade++
  }

  takeOrders('Cappuccino', 1)
  takeOrders('Cappuccino', 2)
  takeOrders('Frappe', 3)
  takeOrders('Frappe', 4)
  takeOrders('Xpresso', 5)
  takeOrders('Frappe', 4)
  takeOrders('Cappuccino', 3)
  takeOrders('Cappuccino', 2)
  takeOrders('Frappe', 1)
  takeOrders('Xpresso', 2)
  takeOrders('Cappuccino', 3)
  takeOrders('Xpresso', 4)
  takeOrders('Frappe', 5)
  takeOrders('Cappuccino', 1)
  takeOrders('Xpresso', 2)

  for (let i = 0; i < ordersMade; ++i) {
    flavors[i].serveCoffee(tables[i])
  }
  console.log(
    `Общее количество созданных объектов CoffeeFlavor (вкусов кофе): ${flavorFactory.getTotalCoffeeFlavorsMade()}`
  )
}

testFlyweight()
