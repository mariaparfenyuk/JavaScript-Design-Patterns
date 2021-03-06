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
