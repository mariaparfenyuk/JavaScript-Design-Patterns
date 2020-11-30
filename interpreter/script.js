class Sum {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() + this.right.interpret()
  }
}

class Sub {
  constructor(left, right) {
    this.left = left
    this.right = right
  }

  interpret() {
    return this.left.interpret() - this.right.interpret()
  }
}

class Num {
  constructor(value) {
    this.value = value
  }

  interpret() {
    return this.value
  }
}

export { Num, Sub, Sum }
