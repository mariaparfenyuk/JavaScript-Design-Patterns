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
