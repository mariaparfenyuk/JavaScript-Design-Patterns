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
