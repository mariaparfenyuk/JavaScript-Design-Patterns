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
