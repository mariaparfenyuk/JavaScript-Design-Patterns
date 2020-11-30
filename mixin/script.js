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
