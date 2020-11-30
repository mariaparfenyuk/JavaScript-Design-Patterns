function MacBook() {
  this.cost = () => 996
  this.screenSize = () => 18
}

const memory = (macbook, v = macbook.cost()) => {
  macbook.cost = () => v + 74
}

const engraving = (macbook, v = macbook.cost()) => {
  macbook.cost = () => v + 200
}

const insurance = (macbook, v = macbook.cost()) => {
  macbook.cost = () => v + 250
}

const mb = new MacBook()
memory(mb)
engraving(mb)
insurance(mb)

console.log(mb.cost()) // 1520
console.log(mb.screenSize()) // 18

// абстрактный декоратор
// предопределенный конструктор интерфейса принимает название интерфейса и методы для распределения
// const Macbook = new Interface('Macbook', [
//   'addEngraving',
//   'addParallels',
//   'add4GBRam',
//   'add8GBRam',
//   'addCase'
// ])

const MacbookPro = function () {}

MacbookPro.prototype = {
  addEngraving() {},
  addParallels() {},
  add4GBRam() {},
  add8GBRam() {},
  addCase() {},
  getPrice() {
    return 900.0
  },
}

// абстрактный (абстрагирующий) декоратор
const MacbookDecorator = function (macbook) {
  // Interface.ensureImplements(macbook, Macbook)
  this.macbook = macbook
}

MacbookDecorator.prototype = {
  addEngraving() {
    return this.macbook.addEngraving()
  },
  addParallels() {
    return this.macbook.addParallels()
  },
  add4GBRam() {
    return this.macbook.add4GBRam()
  },
  add8GBRam() {
    return this.macbook.add8GBRam()
  },
  addCase() {
    return this.macbook.addCase()
  },
  getPrice() {
    return this.macbook.getPrice()
  },
}

// функция для расширения объекта
function extend(a, b) {
  for (const key in b) if (b.hasOwnProperty(key)) a[key] = b[key]
  return a
}

const CaseDecorator = function (macbook) {
  this.macbook = macbook
}

// расширяем CaseDecorator с помощью MacbookDecorator
extend(CaseDecorator, MacbookDecorator)

CaseDecorator.prototype = {
  addCase() {
    return this.macbook.addCase() + 'Улучшение произведено'
  },
  getPrice() {
    return this.macbook.getPrice() + 45.0
  },
}

const myMacbookPro = new MacbookPro()
console.log(myMacbookPro.getPrice()) // 900

const decoratedMacbookPro = new CaseDecorator(myMacbookPro)
console.log(decoratedMacbookPro.getPrice()) // 945
