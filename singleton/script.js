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
      log(`Этот паттерн называется ${setName(name)}`)
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
  Этот паттерн называется Одиночка
  Он позволяет создать лишь один экземпляр
*/
console.log(single1 === single2) // true
