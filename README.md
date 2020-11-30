# Паттерны проектирования JavaScript

Источники:

- <a href="https://refactoring.guru/ru/design-patterns">Паттерны проектирования</a>
- <a href="https://addyosmani.com/resources/essentialjsdesignpatterns/book/" target="_blank" rel="noopener">Learning JavaScript Design Patterns</a>
- <a href="https://github.com/fbeline/design-patterns-JS/blob/master/docs.md" target="_blank" rel="noopener">Design Patterns JS</a>
- <a href="https://github.com/sohamkamani/javascript-design-patterns-for-humans" target="_blank" rel="noopener">Design Patterns for Humans</a>
- <a href="https://github.com/tcorral/Design-Patterns-in-Javascript" target="_blank" rel="noopener">Design Patterns in Javascript ES6</a>

## Что такое паттерн?

Паттерн - это решение распространенных проблем, возникающих при разработке программного обеспечения - в нашем случае - при написании приложений на JavaScript.

### Почему важно знать паттерны?

- Паттерны представляют собой подходы к решению задач в сфере разработки ПО, основанные на опыте большого количества профессиональных разработчиков.
- Паттерны могут быть легко адаптированы для наших нужд.
- Паттерны представляют собой общую схему решения однотипных задач.

Важно понимать, что паттерн - это не решение конкретной задачи, а лишь пример того, как подобные задачи решаются. Паттерны не могут решить все проблемы проектирования, поэтому они не заменяют собой хороших разработчиков, но помогают им решать их повседневные задачи. Вот еще несколько особенностей паттернов.

- Паттерны помогают своевременно выявлять и устранять неточности и недочеты, которые могут привести к серьезным проблемам в процессе разработки приложения.
- Паттерны представляют собой общие решения, они документируются без привязки к конкретной проблеме.
- Некоторые паттерны помогают уменьшить размер файла приложения за счет устранения повторений кода.
- Паттерны способствуют улучшению коммуникации между разработчиками.
- Популярные паттерны со временем совершенствуются использующими их разработчиками.

## Проверка паттерна, прото-паттерны и правило трех

Не каждый алгоритм, передовая практика или хорошее решение являются паттерном. Решение, претендующее на роль паттерна, должно пройти проверку временем и соответствовать определенным критериям.
При изучении паттернов можно встретить термин "прото-паттерн". Что это такое? Простыми словами, прото-паттерн - это паттерн, еще не прошедший надлежащей проверки сообществом разработчиков. Прото-паттерн - это хорошее решение конкретной проблемы, которым разработчик данного решения решил поделиться с окружающими. Публикация прото-паттерна может сопровождаться его кратким описанием, которое называется "патлетом".

### Каким критериям должен соответствовать паттерн?

- Паттерн представляет собой решение определенной группы задач.
- Данное решение не является очевидным.
- Оно проверено и подтверждено большим количеством разработчиков.
- Паттерн содержит подробное описание и примеры его использования.

#### О чем гласит правило трех?

- Паттерн должен соответствовать цели проектирования
- Он должен быть полезным
- Он должен решать больше одной задачи

## Структура паттерна

Паттерн состоит из следующих элементов:

- Название и описание
- Контекст - область применения паттерна
- Формалировка проблемы, решаемой паттерном
- Решение - пошаговое описание того, как решается проблема
- Алгоритм - описание действий пользователя при применении паттерна
- Руководство по реализации
- Иллюстрации
- Теоретическая основа
- Зависимости - использование других паттернов
- Отношения - похожие паттерны
- Примеры использования в реальных приложениях
- Обсуждения или комментарии - мысли команды или автора о преимуществах использования паттерна

## Антипаттерны

Если паттерн представляется собой лучшую практику, то антипаттерн - это извлеченный урок. Другими словами, антипаттерн - это пример того, как не следует решать определенную задачу.

Знание антипаттернов является не менее важным, чем знание паттернов, поскольку помогает обнаруживать проблемы на ранней стадии разработки приложения и своевременно их устранить.

Примеры антипаттернов в JavaScript:

- Загрязнение глобального пространства имен путем определения большого количества глобальных переменных
- Передача в setTimeout или setInterval в качестве аргументов строк вместо функций, что приводит к запуску eval()
- Изменение прототипа класса "Object" (и других встроенных прототипов)
- Использование встроенного (inline) JavaScript
- Использование document.write вместо document.createElement, например.

## Категории паттернов

Паттерны можно разделить на несколько категорий в зависимости от типа решаемых ими задач.

### Порождающие или творческие (Creational) паттерны

Порождающие паттерны сосредоточены на механизме создания объектов. Другими словами, данные паттерны контролируют процесс создания объектов.

Примерами порождающих паттернов являются:

- [Фабрика (Factory) и абстрактная фабрика (Abstract Factory)](#factory)
- [Строитель (Builder)](#builder)
- [Конструктор (Constructor)](#constructor)
- [Прототип (Prototype)](#constructor)
- [Одиночка или Синглтон (Singleton)](#singleton)
- [Модуль (Module)](#module)

### Структурные (Structural) паттеры

Структурные паттерны связаны с композицией объектов и определяют отношения между ними. Они позволяют сделать так, чтобы изменение одной части системы не влияло на другие. Они также позволяют менять отдельные части системы без изменения системы в целом.

К данной категории объектов относятся:

- [Адаптер (Adapter)](#adapter)
- [Мост (Bridge)](#bridge)
- [Композиция (Composite)](#composite)
- [Декоратор (Decorator)](#decorator)
- [Фасад (Facade)](#facade)
- [Легковес или Приспособленец (Flyweight)](#flyweight)
- [Примесь или Миксин (Mixin)](#mixin)
- [Прокси (Proxy)](#proxy)

### Поведенческие (Behavioral) паттерны

Поведенческие паттерны направлены на улучшение взаимодействия между объектами системы.

Примерами таких паттернов являются:

- [Цепочка ответственности (Chain of Responsibility)](#resp)
- [Команда (Command)](#command)
- [Интерпретатор (Interpreter)](#interpret)
- [Итератор (Iterator)](#iterator)
- [Посредник или Медиатор (Mediator)](#mediator)
- [Запоминание (Memento)](#memento)
- [Наблюдатель (Observer)](#observer)
- [Состояние (State)](#state)
- [Стратегия (Strategy)](#strategy)
- [Шаблон (Template)](#template)
- [Посетитель (Visitor)](#visitor)

Некоторые авторы также выделяют группу MV\* паттернов (MVC, Model-View-Controller - Модель-Представление-Контроллер, MVP, Model View Presenter - Модель-Представление-Представитель, MVVM, Model-View-ViewModel и т.д.).

## Примеры порождающих паттернов

### <a name="factory"></a> Фабрика и абстрактная фабрика

Завод по производству BMW:

```js
class BmwFactory {
  static create(type) {
    if (type === 'X5') return new Bmw(type, 108000, 300)

    if (type === 'X6') return new Bmw(type, 111000, 320)
  }
}

class Bmw {
  constructor(model, price, maxSpeed) {
    this.model = model
    this.price = price
    this.maxSpeed = maxSpeed
  }
}

export default BmwFactory
```

Фабрика по созданию дроидов:

```js
const droidProducer = (kind) =>
  kind === 'battle' ? battleDroidFactory : pilotDroidFactory

const battleDroidFactory = () => new B1()
const pilotDroidFactory = () => new Rx24()

class B1 {
  info() {
    return 'B1, Battle Droid'
  }
}

class Rx24 {
  info() {
    return 'Rx24, Pilot Droid'
  }
}

export default droidProducer
```

Фабрика (и абстрактная фабрика) по производству автомобилей:

```js
// фабрика
function Car({ doors, state, color }) {
  this.doors = doors || 4
  this.state = state || 'новый'
  this.color = color || 'серебряный'
}

function Truck({ state, wheelSize, color }) {
  this.state = state || 'подержанный'
  this.wheelSize = wheelSize || 'большой'
  this.color = color || 'синий'
}

function VehicleFactory() {}
;(function () {
  this.vehicleClass = Car
  this.createVehicle = function (options) {
    switch (options.vehicleType) {
      case 'автомобиль':
        this.vehicleClass = Car
        break
      case 'грузовик':
        this.vehicleClass = Truck
    }
    return new this.vehicleClass(options)
  }
}.call(VehicleFactory.prototype))

const carFactory = new VehicleFactory()
const car = carFactory.createVehicle({
  vehicleType: 'автомобиль',
  color: 'желтый',
})
console.log(car instanceof Car) // true
console.log(car)
// Car {doors: 4, state: "новый", color: "желтый"}

const truck = carFactory.createVehicle({
  vehicleType: 'грузовик',
  state: 'как новый',
  color: 'красный',
  wheelSize: 'маленький',
})
console.log(truck instanceof Truck) // true
console.log(truck)
// Truck {state: "как новый", wheelSize: "маленький", color: "красный"}

/*
  function TruckFactory() {}
  TruckFactory.prototype = new VehicleFactory()
  TruckFactory.prototype.vehicleClass = Truck

  const truckFactory = new TruckFactory()
*/
const truckFactory = Object.create(new VehicleFactory().__proto__)
truckFactory.__proto__.vehicleClass = Truck
const bigTruck = truckFactory.createVehicle({
  state: 'очень плохое',
  color: 'черный',
  wheelSize: 'очень большой',
})
console.log(bigTruck instanceof Truck) // true
console.log(bigTruck)
// Truck {state: "очень плохое", wheelSize: "очень большой", color: "черный"}

// абстрактная фабрика
const abstractVehicleFactory = (() => {
  const types = {}
  return {
    getVehicle(type, customizations) {
      const Vehicle = types[type]
      return Vehicle ? new Vehicle(customizations) : null
    },
    registerVehicle({ type, Vehicle, available }) {
      if (available) {
        types[type] = Vehicle
      }
      return this
    },
  }
})()

abstractVehicleFactory
  .registerVehicle({
    type: 'car',
    Vehicle: Car,
    available: true,
  })
  .registerVehicle({
    type: 'truck',
    Vehicle: Truck,
    available: false,
  })

const car2 = abstractVehicleFactory.getVehicle('car', {
  color: 'зеленый',
  state: 'среднее',
})
const truck2 = abstractVehicleFactory.getVehicle('truck', {
  wheelSize: 'средний',
  color: 'серый',
})
console.log(car2 instanceof Car) // true
console.log(car2)
// Car {doors: 4, state: "среднее", color: "зеленый"}
console.log(truck2 instanceof Truck) // false
console.log(truck2) // null
```

### <a name="builder"></a> Строитель

Строитель HTTP-запроса:

```js
class Request {
  constructor() {
    this.url = ''
    this.method = ''
    this.payload = {}
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request()
  }
  forUrl(url) {
    this.request.url = url
    return this
  }
  useMethod(method) {
    this.request.method = method
    return this
  }
  payload(payload) {
    this.request.payload = payload
    return this
  }
  build() {
    return this.request
  }
}

export default RequestBuilder
```

Строитель гамбургера:

```js
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
```

### <a name="constructor"></a> Конструктор и прототип

Конструктор-прототип (класс или суперкласс) Human и конструктор-наследник (подкласс) Developer. Функции-конструкторы:

```js
const log = console.log

function Person({ firstName, lastName, age }) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

/*
  Person.prototype.getFullName = function () {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }
  Person.prototype.getAge = function () {
    log(`Этому человеку ${this.age} лет`)
    return this
  }
  Person.prototype.saySomething = function (phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
*/

;(function () {
  this.getFullName = function () {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }
  this.getAge = function () {
    log(`Этому человеку ${this.age} лет`)
    return this
  }
  this.saySomething = function (phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
}.call(Person.prototype))

const person = new Person({
  firstName: 'Иван',
  lastName: 'Петров',
  age: 30,
})

person.getFullName().getAge().saySomething('Привет!')
/*
  Этого человека зовут Иван Петров
  Этому человеку 30 лет
  Этот человек говорит: "Привет!"
*/

function SubPerson({ lifestyle, skill, ...rest }) {
  Person.call(this, rest)
  this.lifestyle = lifestyle
  this.skill = skill
  this.interest = null
}
SubPerson.prototype = Object.create(Person.prototype)

/*
  SubPerson.prototype.getSkill = function () {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  }

  SubPerson.prototype.getLike = function () {
    log(
      `Этот ${this.lifestyle} ${ this.interest ? `любит ${this.interest}` : 'ничего не любит' }`
    )
  }

  SubPerson.prototype.setLike = function (value) {
    this.interest = value
  }
*/
;(function () {
  this.getInfo = function () {
    this.getFullName()
    log(`Он ${this.lifestyle}`)
    return this
  }
  this.getSkill = function () {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  }
  this.getLike = function () {
    log(
      `Этот ${this.lifestyle} ${
        this.interest ? `любит ${this.interest}` : 'ничего не любит'
      }`
    )
  }
  this.setLike = function (value) {
    this.interest = value
  }
}.call(SubPerson.prototype))

const developer = new SubPerson({
  firstName: 'Петр',
  lastName: 'Иванов',
  age: 25,
  lifestyle: 'разработчик',
  skill: 'писать код на JavaScript',
})

developer
  .getInfo()
  .saySomething('Программирование - это круто!')
  .getSkill()
  .getLike()
/*
  Этого человека зовут Петр Иванов
  Он разработчик
  Этот человек говорит: "Программирование - это круто!"
  Этот разработчик умеет писать код на JavaScript
  Этот разработчик ничего не любит
*/

developer.setLike('делать оригами')
developer.getLike()
// Этот разработчик любит делать оригами
```

Классы:

```js
const log = console.log

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }
  getFullName() {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }
  getAge() {
    log(`Этому человеку ${this.age} лет`)
    return this
  }
  saySomething(phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
}

const person = new Person('Иван', 'Петров', 30)

person.getFullName().getAge().saySomething('Пока!')
/*
Этого человека зовут Иван Петров
Этому человеку 30 лет
Этот человек говорит: "Привет!"
*/

class SubPerson extends Person {
  constructor(firstName, lastName, age, lifestyle, skill) {
    super(firstName, lastName, age)
    this.lifestyle = lifestyle
    this.skill = skill
    this.interest = null
  }

  getInfo() {
    // super.getFullName()
    this.getFullName()
    log(`Он ${this.lifestyle}`)
    return this
  }

  getSkill() {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  }

  set like(value) {
    this.interest = value
  }

  get like() {
    log(
      `Этот ${this.lifestyle} ${
        this.interest ? `любит ${this.interest}` : 'ничего не любит'
      }`
    )
  }
}

const developer = new SubPerson(
  'Петр',
  'Иванов',
  25,
  'разработчик',
  'писать код на JavaScript'
)

developer.getInfo().saySomething('Программирование - это круто!').getSkill()
  .like
/*
  Этого человека зовут Петр Иванов
  Он разработчик
  Этот человек говорит: "Программирование - это круто!"
  Этот разработчик умеет писать код на JavaScript
  Этот разработчик ничего не любит
*/

developer.like = 'делать оригами'
developer.like
// Этот разработчик любит делать оригами
```

### <a name="singleton"></a> Одиночка

Всегда возвращаем первый экземпляр. Класс:

```js
class Singleton {
  constructor() {
    if (typeof Singleton.instance === 'object') {
      return Singleton.instance
    }
    Singleton.instance = this
    return this
  }
}
```

Объект и IIFE:

```js
const Singleton = (() => {
  let instance = null

  function init() {
    const name = 'Одиночка'
    const log = (value) => console.log(value)

    function setName(value) {
      const name = value
      return name
    }

    function getName() {
      log(`Этот паттерн называется "${setName(name)}"`)
    }
    return {
      getInfo: () => {
        getName()
        log(`Он позволяет создать лишь один экземпляр`)
      },
    }
  }

  return {
    getInstance() {
      if (!instance) instance = init()
      return instance
    },
  }
})()

const single1 = Singleton.getInstance()
const single2 = Singleton.getInstance()

single2.getInfo()
/*
Этот паттерн называется "Одиночка"
Он позволяет создать лишь один экземпляр
*/

console.log(single1 === single2) // true
```

Запрещаем создавать больше одного экземпляра:

```js
class ClassSingleton {
  static #instances = 0
  constructor(name) {
    ClassSingleton.#instances++
    if (ClassSingleton.#instances > 1) {
      throw new Error('Невозможно создать еще один экземпляр!')
    }
    this.name = name
  }
  getInfo() {
    console.log(`Экземпляр "${this.name}" является уникальным`)
  }
}

const singleton1 = new ClassSingleton('foo')
singleton1.getInfo()
// Экземпляр "foo" является уникальным

const singleton2 = new ClassSingleton('bar')
// Error: Невозможно создать еще один экземпляр!
```

### <a name="module"></a> Модуль

Инкапсуляция переменных и функций:

```js
const CounterModule = (() => {
  // частная (приватная) переменная
  let counter = 1

  // частная функция
  function getInfo() {
    console.log(counter)
  }

  return {
    // открытые (публичные) функции
    increment() {
      counter < 3 ? counter++ : counter
      getInfo()
    },
    decrement() {
      counter > 1 ? counter-- : counter
      getInfo()
    },
    reset() {
      counter = 1
      getInfo()
    },
  }
})()

CounterModule.decrement() // 1
CounterModule.increment() // 2
CounterModule.increment() // 3
CounterModule.increment() // 3
CounterModule.reset() // 1
console.log(CounterModule.counter) // undefined
// CounterModule.getInfo() // TypeError: CounterModule.getInfo is not a function
```

Корзина для товаров. Объект и IIFE:

```js
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
```

Класс:

```js
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
```

Не путать с ES6-модулями (export/import).

## Примеры структурных паттернов

### <a name="adapter"></a> Адаптер

Общий пример:

```js
class Soldier {
  constructor(level) {
    this.level = level
  }
  attack() {
    return this.level * 10
  }
}
class Jedi {
  constructor(level) {
    this.level = level
  }
  attackWithSaber() {
    return this.level * 100
  }
}
class JediAdapter {
  constructor(jedi) {
    this.jedi = jedi
  }
  attack() {
    return this.jedi.attackWithSaber()
  }
}
```

### <a name="bridge"></a> Мост

Связь между страницей и цветовой схемой:

```js
class About {
  constructor(theme) {
    this.theme = theme
  }
  getContent() {
    return `About page in ${this.theme.getColor()}`
  }
}

class Careers {
  constructor(theme) {
    this.theme = theme
  }
  getContent() {
    return `Careers page in ${this.theme.getColor()}`
  }
}

class DarkTheme {
  getColor() {
    return 'Dark Theme'
  }
}

class LightTheme {
  getColor() {
    return 'Light Theme'
  }
}

const darkTheme = new DarkTheme()
const lightTheme = new LightTheme()

const about = new About(darkTheme)
const careers = new Careers(lightTheme)

console.log(about.getContent()) // About page in Dark Theme
console.log(careers.getContent()) // Careers page in Light Theme
```

Связь между принтером и используемой краской:

```js
class Printer {
  constructor(ink) {
    this.ink = ink
  }
}

class EpsonPrinter extends Printer {
  constructor(ink) {
    super(ink)
  }
  print() {
    return `Printer: Epson, Ink: ${this.ink.get()}`
  }
}

class HPPrinter extends Printer {
  constructor(ink) {
    super(ink)
  }
  print() {
    return `Printer: HP, Ink: ${this.ink.get()}`
  }
}

class Ink {
  constructor(type) {
    this.type = type
  }
  get() {
    return this.type
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based')
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based')
  }
}

export { EpsonPrinter, HPPrinter, AcrylicInk, AlcoholInk }
```

### <a name="composite"></a> Композиция

Комплектующие компьютера:

```js
class Equipment {
  getPrice() {
    return this.price || 0
  }
  getName() {
    return this.name
  }
  setName(name) {
    this.name = name
  }
}

class Composite extends Equipment {
  constructor() {
    super()
    this.equipments = []
  }
  add(equipment) {
    this.equipments.push(equipment)
  }
  getPrice() {
    return this.equipments.map((e) => e.getPrice()).reduce((a, b) => a + b)
  }
}

class Cabinet extends Composite {
  constructor() {
    super()
    this.setName('cabinet')
  }
}

class FloppyDisk extends Equipment {
  constructor() {
    super()
    this.setName('Floppy Disk')
    this.price = 70
  }
}

class HardDrive extends Equipment {
  constructor() {
    super()
    this.setName('Hard Drive')
    this.price = 250
  }
}

class Memory extends Equipment {
  constructor() {
    super()
    this.setName('Memory')
    this.price = 280
  }
}

export { Cabinet, FloppyDisk, HardDrive, Memory }
```

Зарплата работников организации:

```js
class Developer {
  constructor(name, salary, roles) {
    this.name = name
    this.salary = salary
    this.roles = roles
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(value) {
    this.salary = value
  }

  getRoles() {
    return this.roles
  }

  develop() {}
}

class Designer {
  constructor(name, salary, roles) {
    this.name = name
    this.salary = salary
    this.roles = roles
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(value) {
    this.salary = value
  }

  getRoles() {
    return this.roles
  }

  design() {}
}

class Organization {
  constructor() {
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  getTotalSalary() {
    let totalSalary = 0
    this.employees.forEach((e) => {
      totalSalary += e.getSalary()
    })
    return totalSalary
  }
}

const john = new Developer('John', 12000)
const jane = new Designer('Jane', 10000)

const organization = new Organization()

organization.addEmployee(john)
organization.addEmployee(jane)

console.log(organization.getTotalSalary()) // 22000
```

### <a name="decorator"></a> Декоратор

Дополнительные ингредиенты к пасте:

```js
class Pasta {
  constructor() {
    this.price = 0
  }

  getPrice() {
    return this.price
  }
}

class Penne extends Pasta {
  constructor() {
    super()
    this.price = 8
  }
}

class PastaDecorator {
  constructor(pasta) {
    super()
    this.pasta = pasta
  }

  getPrice() {
    return this.pasta.getPrice()
  }
}

class SauseDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta)
  }

  getPrice() {
    return super.getPrice() + 5
  }
}

class CheeseDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta)
  }

  getPrice() {
    return super.getPrice() + 3
  }
}

export { Penne, SauseDecorator, CheeseDecorator }
```

Дополнительные ингредиенты к кофе:

```js
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

someWhipCoffee = new WhipCoffee(someCoffee)
console.log(someWhipCoffee.getCost()) // 15
console.log(someWhipCoffee.getDescription()) // Простой кофе, сливки
```

Комплектующие Макбука:

```js
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
// предопределенный конструктор интерфейса принимает
// название интерфейса и методы для распределения
/*
  const Macbook = new Interface('Macbook', [
    'addEngraving',
    'addParallels',
    'add4GBRam',
    'add8GBRam',
    'addCase'
  ])
*/

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
```

### <a name="facade"></a> Фасад

Общий пример. Функция-конструктор:

```js
const moduleObj = (() => {
  const log = console.log

  const _private = {
    i: 5,

    get() {
      log(`Текущее значение: ${this.i}`)
    },

    set(val) {
      this.i = val
    },

    run() {
      log('Выполнение запущено')
    },

    stop() {
      log('Выполнение остановлено')
    },
  }

  return {
    facade(args) {
      _private.set(args.val)
      _private.get()
      if (args.run) {
        _private.run()
      }
    },
  }
})()

moduleObj.facade({
  run: true,
  val: 10,
})
/*
  Текущее значение: 10
  Выполнение запущено
*/
```

Класс:

```js
class Module {
  #private

  constructor() {
    this.#private = 5
  }

  #log(value) {
    console.log(value)
  }

  #get() {
    this.#log(`Текущее значение: ${this.#private}`)
  }

  #set(val) {
    this.#private = val
  }

  #run() {
    this.#log('Выполнение запущено')
  }

  #stop() {
    this.#log('Выполнение остановлено')
  }

  facade({ val, run, stop }) {
    this.#set(val)

    this.#get()

    if (run) {
      this.#run()
    }

    if (stop) {
      this.#stop()
    }
  }
}

const moduleClass = new Module()
moduleClass.facade({
  run: true,
  val: 10,
})
/*
  Текущее значение: 10
  Выполнение запущено
*/

module.facade({
  val: 20,
  stop: true,
})
/*
  Текущее значение: 20
  Выполнение остановлено
*/
```

Фасад магазина:

```js
class ShopFacade {
  constructor() {
    this.discount = new Discount()
    this.shipping = new Shipping()
    this.fees = new Fees()
  }

  calc(price) {
    price = this.discount.calc(price)
    price = this.fees.calc(price)
    price += this.shipping.calc()
    return price
  }
}

class Discount {
  calc(value) {
    return value * 0.9
  }
}

class Shipping {
  calc() {
    return 5
  }
}

class Fees {
  calc(value) {
    return value * 1.05
  }
}

export default ShopFacade
```

### <a name="flyweight"></a> Легковес

Создание цветов:

```js
class Color {
  constructor(name) {
    this.name = name
  }
}

export class ColorFactory {
  constructor() {
    this.colors = {}
  }

  create(name) {
    const color = this.color[name]
    if (color) return color
    this.colors[name] = new Color(name)
    return this.colors[name]
  }
}
```

Добавление книг в библиотечную систему:

```js
const Book = function (title, author, genre, pageCount, publisherID, ISBN) {
  this.title = title
  this.author = author
  this.genre = genre
  this.pageCount = pageCount
  this.publisherID = publisherID
  this.ISBN = ISBN
}

// фабрика по созданию книг - Одиночка
const BookFactory = (() => {
  const existingBooks = {}

  let existingBook = ''

  return {
    createBook(title, author, genre, pageCount, publisherID, ISBN) {
      // проверяем, имеется ли книга с указанным набором мета-данных
      existingBook = existingBooks[ISBN]

      if (!!existingBook) return existingBook
      else {
        // если не имеется, создаем новый экземпляр и сохраняем его
        const book = new Book(
          title,
          author,
          genre,
          pageCount,
          publisherID,
          ISBN
        )
        existingBook[ISBN] = book
        return book
      }
    },
  }
})()

// хранилище для записей о книгах - Одиночка
const BookRecordManager = (() => {
  const bookRecordDatabase = {}

  return {
    addBookRecord(
      id,
      title,
      author,
      genre,
      pageCount,
      publisherID,
      ISBN,
      checkoutDate,
      checkoutMember,
      dueReturnDate,
      availability
    ) {
      const book = BookFactory.createBook(
        title,
        author,
        genre,
        pageCount,
        publisherID,
        ISBN
      )

      bookRecordDatabase[id] = {
        checkoutMember,
        checkoutDate,
        dueReturnDate,
        availability,
        book,
      }
    },

    updateCheckoutStatus(
      bookID,
      newStatus,
      checkoutDate,
      checkoutMember,
      newReturnDate
    ) {
      const record = bookRecordDatabase[bookID]
      record.availability = newStatus
      record.checkoutDate = checkoutDate
      record.checkoutMember = checkoutMember
      record.dueReturnDate = newReturnDate
    },

    extendCheckoutPeriod(bookID, newReturnDate) {
      bookRecordDatabase[bookID].dueReturnDate = newReturnDate
    },

    isPastDue(bookID) {
      const currentDate = new Date()
      return (
        currentDate.getTime() >
        Date.parse(bookRecordDatabase[bookID].dueReturnDate)
      )
    },
  }
})()
```

Учет заказов кофе:

```js
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
    `Общее количество созданных объектов CoffeeFlavor (вкусов кофе):
    ${flavorFactory.getTotalCoffeeFlavorsMade()}`
  )
}

testFlyweight()
```

### <a name="mixin"></a> Примесь

Добавление методов:

```js
const Car = function (settings) {
  this.model = settings.model || 'модель отсутствует'
  this.color = settings.color || 'цвет отсутствует'
}

const Mixin = function () {}

Mixin.prototype = {
  driveForward() {
    console.log('двигаемся вперед')
  },
  driveBackward() {
    console.log('двигаемся назад')
  },
  driveSideaways() {
    console.log('двигаемся в сторону')
  },
}

// функция расширения одного объекта методами другого объекта
function augment(receivingClass, givingClass, ...rest) {
  // несколько методов
  if (rest.length) {
    for (let i = 0; i < rest.length; i++) {
      receivingClass.prototype[rest[i]] = givingClass.prototype[rest[i]]
    }
    // все методы
  } else {
    for (const methodName in givingClass.prototype) {
      if (!Object.hasOwnProperty.call(receivingClass.prototype, methodName)) {
        receivingClass.prototype[methodName] = givingClass.prototype[methodName]

        // опциональная проверка цепочки прототипов
        // if (!receivingClass.prototype[methodName]) {
        //   receivingClass.prototype[methodName] = givingClass.prototype[methodName]
        // }
      }
    }
  }
}

augment(Car, Mixin, 'driveForward', 'driveBackward')

const car = new Car({
  model: 'Ford Escort',
  color: 'синий',
})

car.driveForward() // двигаемся вперед
car.driveBackward() // двигаемся назад

augment(Car, Mixin)

const car2 = new Car({
  model: 'Porsche',
  color: 'красный',
})

car2.driveSideaways() // двигаемся в сторону
```

Добавление обработчиков событий:

```js
const eventMixin = {
  on(name, handler) {
    if (!this._eventHandlers) this._eventHandlers = {}
    if (!this._eventHandlers[name]) this._eventHandlers[name] = []
    this._eventHandlers[name].push(handler)
  },

  off(name, handler) {
    const handlers = this._eventHandlers && this._eventHandlers[name]
    if (!handlers) return
    for (const h of handlers) {
      if (h === handler) handlers.splice(handlers.indexOf(h), 1)
    }
  },

  trigger(name, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[name]) return
    this._eventHandlers[name].forEach((h) => h.apply(this, args))
  },
}

class Menu {
  choose(page) {
    this.trigger('select', page)
  }
}

Object.assign(Menu.prototype, eventMixin)

const menu = new Menu()

menu.on('select', (p) => console.log(`Текущая страница: ${p}`))

menu.choose('Контакты') // Текущая страница: Контакты
```

### <a name="proxy"></a> Прокси

Общий пример:

```js
class Car {
  drive() {
    return 'driving'
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver
  }

  drive() {
    return this.driver.age < 18 ? 'too young to drive' : new Car().drive()
  }
}

class Driver {
  constructor(age) {
    this.age = age
  }
}

export { Car, CarProxy, Driver }
```

Не путать со встроенным объектом Proxy.

## Примеры поведенческих паттернов

### <a name="resp"></a> Цепочка ответственности

Скидки на товары в корзине:

```js
class ShoppingCart {
  constructor() {
    this.products = []
  }
  addProduct(p) {
    this.products.push(p)
  }
}

class Discount {
  calc(products) {
    const ndiscount = new NumberDiscount()
    const pdiscount = new PriceDiscount()
    const none = new NoneDiscount()
    ndiscount.setNext(pdiscount)
    pdiscount.setNext(none)
    return ndiscount.exec(products)
  }
}

class NumberDiscount {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  exec(products) {
    let result = 0
    if (products.length > 3) result = 0.05
    return result + this.next.exec(products)
  }
}

class PriceDiscount {
  constructor() {
    this.next = null
  }

  setNext(fn) {
    this.next = fn
  }

  exec(products) {
    let result = 0
    const total = products.reduce((a, b) => a + b)
    if (total >= 500) result = 0.1
    return result + this.next.exec(products)
  }
}

class NoneDiscount {
  exec() {
    return 0
  }
}

export { ShoppingCart, Discount }
```

Способы оплаты:

```js
class Account {
  setNext(account) {
    this.successor = account
  }

  pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`${amountToPay} оплачено с помощью ${this.name}`)
    } else if (this.successor) {
      console.log(`Невозможно оплатить с помощью ${this.name}. Загрузка...`)
    } else {
      console.log('На балансе недостаточно средств')
    }
  }

  canPay(amount) {
    return this.balance >= amount
  }
}

class Bank extends Account {
  constructor(balance) {
    super()
    this.name = 'банк'
    this.balance = balance
  }
}

class Paypal extends Account {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Bitcoin extends Account {
  constructor(balance) {
    super()
    this.name = 'Bitcoin'
    this.balance = balance
  }
}

const bank = new Bank(100)
const paypal = new Paypal(200)
const bitcoin = new Bitcoin(300)

bank.setNext(paypal)
paypal.setNext(bitcoin)
bank.pay(259)
/*
  Невозможно оплатить с помощью банка. Загрузка...
  Невозможно оплатить с помощью банка. Загрузка...
  259 оплачено с помощью Bitcoin
*/
```

### <a name="command"></a> Команда

Общий пример:

```js
class Cockpit {
  constructor(command) {
    this.command = command
  }

  execute() {
    this.command.execute()
  }
}

class Turbine {
  constructor() {
    this.state = false
  }

  on() {
    this.state = true
  }

  off() {
    this.state = false
  }
}

class OnCommand {
  constructor(turbine) {
    this.turbine = turbine
  }

  execute() {
    this.turbine.on()
  }
}

class OffCommand {
  constructor(turbine) {
    this.turbine = turbine
  }

  execute() {
    this.turbine.off()
  }
}
```

Бронирование автомобиля:

```js
const carManager = (() => ({
  requestInfo(model, id) {
    return `Информация о ${model} с идентификатором ${id}: ...`
  },

  buyVehicle(model, id) {
    return `Вы успешно приобрели ${model} с идентификатором ${id}`
  },

  arrangeViewing(model, id) {
    return `Вы успешно забронировали ${model} с идентификатором ${id}`
  },
}))()

carManager.execute = (name, ...rest) => {
  console.log(carManager[name] && carManager[name].apply(carManager, rest))
}

carManager.execute('arrangeViewing', 'Ferrari', '14523')
carManager.execute('requestInfo', 'Ford Mondeo', '54323')
carManager.execute('requestInfo', 'Ford Escort', '34232')
carManager.execute('buyVehicle', 'Ford Escort', '34232')
/*
  Вы успешно забронировали Ferrari с идентификатором 14523
  Информация о Ford Mondeo с идентификатором 54323: ...
  Информация о Ford Escort с идентификатором 34232: ...
  Вы успешно приобрели Ford Escort с идентификатором 34232
*/
```

### <a name="interpret"></a> Интерпретатор

Общий пример:

```js
class Sum {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() + this.right.interpret()
  }
}

class Sub {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() - this.right.interpret()
  }
}

class Num {
  constructor(value) {
    this.value = value
  }

  interpret() {
    return this.value
  }
}

export { Num, Sub, Sum }
```

### <a name="iterator"></a> Итератор

Перебор элементов:

```js
class Iterator {
  constructor(el) {
    this.index = 0
    this.elements = el
  }

  next() {
    return this.elements[this.index++]
  }

  hasNext() {
    return this.index < this.elements.length
  }
}
```

Список радиостанций:

```js
class RadioStation {
  constructor(frequency) {
    this.frequency = frequency
  }

  getFrequency() {
    return this.frequency
  }
}

class StationList {
  constructor() {
    this.stations = []
  }

  addStation(station) {
    this.stations.push(station)
  }

  removeStation(station) {
    const frequencyToRemove = station.getFrequency()
    this.stations = this.stations.filter(
      (s) => s.getFrequency !== frequencyToRemove
    )
  }
}

const stationList = new StationList()

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach((s) => console.log(s.getFrequency()))

stationList.removeStation(new RadioStation(89))
```

Не путать со встроенными итераторами и генераторами.

### <a name="mediator"></a> Посредник

Диспетчерская вышка:

```js
class TrafficTower {
  constructor() {
    this.airplanes = []
  }

  requestPositions() {
    return this.airplanes.map((a) => a.position)
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position
    this.trafficTower = trafficTower
    this.trafficTower.airplanes.push(this)
  }

  requestPositions() {
    return this.trafficTower.requestPositions()
  }
}
```

Чат:

```js
class ChatRoom {
  showMessage(user, message) {
    const time = new Date().toLocaleTimeString()
    const sender = user.getName()
    console.log(`${time} [${sender}]: ${message}`)
  }
}

class User {
  constructor(name, chatMediator) {
    this.name = name
    this.chatMediator = chatMediator
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatMediator.showMessage(this, message)
  }
}

const mediator = new ChatRoom()

const john = new User('John', mediator)
const jane = new User('Jane', mediator)

john.send('Hi!')
jane.send('Bye!')
/*
  24.11.2020, 16:44:43 [John]: Hi!
  24.11.2020, 16:44:43 [Jane]: Bye!
*/
```

Транслитератор:

[![transliterator](https://github.com/harryheman/JavaScript-Design-Patterns/blob/main/!img/transliterator.png?raw=true)](https://codepen.io/harryheman/pen/NWRPXmz)
Анимация через делегирование событий:

[![animation](https://github.com/harryheman/JavaScript-Design-Patterns/blob/main/!img/animation.png?raw=true)](https://codepen.io/harryheman/pen/NWRPXmz)
### <a name="memento"></a> Запоминание

Общий пример:

```js
class Memento {
  constructor(value) {
    this.value = value
  }
}

const origin = {
  store: (value) => new Memento(value),
  restore: (memento) => memento.value,
}

class Caretaker {
  constructor() {
    this.values = []
  }

  addMemento(memento) {
    this.values.push(memento)
  }

  getMemento(index) {
    return this.values[index]
  }
}

export { origin, Caretaker }
```

Редактор текста:

```js
class EditorMemento {
  #content

  constructor(content) {
    this.#content = content
  }

  getContent() {
    return this.#content
  }
}

class Editor {
  #content

  constructor() {
    this.#content = ''
  }

  type(words) {
    this.#content += ` ${words}`
  }

  getContent() {
    return this.#content
  }

  save() {
    return new EditorMemento(this.#content)
  }

  restore(memento) {
    this.#content = memento.getContent()
  }
}

const editor = new Editor()

editor.type('foo')
editor.type('bar')

const saved = editor.save()

editor.type('baz')

console.log(editor.getContent()) // foo bar baz

editor.restore(saved)

console.log(editor.getContent()) // foo bar
```

### <a name="observer"></a> Наблюдатель

Наценки на товары:

```js
class Product {
  constructor() {
    this.price = 0
    this.actions = []
  }

  setBasePrice(value) {
    this.price = value
    this.notifyAll()
  }

  register(observer) {
    this.actions.push(observer)
  }

  unregister(observer) {
    this.actions = this.actions.filter((el) => !(el instanceof observer))
  }

  notifyAll() {
    return this.actions.forEach((el) => el.update(this))
  }
}

class Fees {
  update(product) {
    product.price = product.price \* 1.2
  }
}

class Proft {
  update(product) {
    product.price = product.price \* 2
  }
}
```

Наблюдение за DOM-элементами:

[![observer](https://github.com/harryheman/JavaScript-Design-Patterns/blob/main/!img/observer.png?raw=true)](https://codepen.io/harryheman/pen/NWRPXmz)

Не путать со встроенными наблюдателями (MutationObserver, IntersectionObserver и т.д.).

### <a name="state"></a> Состояние

Редактор текста:

```js
const upper = (str) => str.toUpperCase()
const lower = (str) => str.toLowerCase()
const none = (str) => str

class TextEditor {
  #transform

  constructor(transform) {
    this.#transform = transform
  }

  setTransform(transform) {
    this.#transform = transform
  }

  type(words) {
    console.log(this.#transform(words))
  }
}

const editor = new TextEditor(none)

editor.type('foo') // foo

editor.setTransform(upper)

editor.type('bar') // BAR
editor.type('baz') // BAZ

editor.setTransform(lower)

editor.type('QUX') // qux
```

Статус заказа:

```js
class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name
    this.nextStatus = nextStatus
  }

  next() {
    return new this.nextStatus()
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping)
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered)
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered)
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment()
  }

  nextState() {
    this.state = this.state.next()
  }
}

export default Order
```

### <a name="strategy"></a> Стратегия

Корзина для товаров:

```js
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
const regularStrategy = (amount) => amount _ 0.9
const premiumStrategy = (amount) => amount _ 0.8
```

Сортировка данных:

```js
const bubbleSort = (dataset) => {
  console.log('Применение сортировки пузырьком')
  // ...
  return dataset
}

const quickSort = (dataset) => {
  console.log('Применение быстрой сортировки')
  // ...
  return dataset
}

const sorter = (dataset) => (dataset.length > 5 ? quickSort : bubbleSort)

const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Применение сортировки пузырьком
sorter1(shortDataSet) // Применение быстрой сортировки
```

### <a name="template"></a> Шаблон

Налог:

```js
class Tax {
  calc(value) {
    if (value >= 1000) value = this.overThousand(value)
      return this.complementaryFee(value)
  }

  complementaryFee(value) {
    return value + 10
  }
}

class Tax2 extends Tax {
  constructor() {
    super()
  }

  overThousand(value) {
    return value \* 1.1
  }
}

class Tax3 extends Tax {
  constructor() {
    super()
  }

  overThousand(value) {
    return value \* 1.2
  }
}

export {
  Tax2,
  Tax3
}
```

Генератор разметки:

```js
class Template {
  #html
  // Одиночка
  constructor() {
    if (typeof Template.instance === 'object') {
      return Template.instance
    }

    Template.instance = this
    return this
  }

  init() {
    this.#html = ''
    return this
  }

  build(tag, content = '') {
    this.#html += `<${tag}>${content}</${tag}>`
    return this
  }

  get() {
    return this.#html
  }
}

const tempGen = new Template()

const temp1 = tempGen.init().build('ul').get()
const temp2 = tempGen
  .init()
  .build('li', 'foo')
  .build('li', 'bar')
  .build('li', 'baz')
  .get()

console.log(temp1) //
console.log(temp2) // - foo- bar- baz
```

### <a name="visitor"></a> Посетитель

Общий пример:

```js
function bonusVisitor(employee) {
  if (employee instanceof Manager) employee.bonus = employee.salary * 2
  if (employee instanceof Developer) employee.bonus = employee.salary
}

class Employee {
  constructor(salary) {
    this.bonus = 0
    this.salary = salary
  }

  accept(visitor) {
    visitor(this)
  }
}

class Manager extends Employee {
  constructor(salary) {
    super(salary)
  }
}

class Developer extends Employee {
  constructor(salary) {
    super(salary)
  }
}

export { Developer, Manager, bonusVisitor }
```
