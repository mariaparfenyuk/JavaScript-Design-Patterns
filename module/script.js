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
