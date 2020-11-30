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
    return value * 1.1
  }
}

class Tax3 extends Tax {
  constructor() {
    super()
  }

  overThousand(value) {
    return value * 1.2
  }
}

export { Tax2, Tax3 }
