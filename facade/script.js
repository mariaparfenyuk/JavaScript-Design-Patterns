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
