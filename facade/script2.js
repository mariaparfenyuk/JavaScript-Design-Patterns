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
