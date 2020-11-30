class Color {
  constructor(name) {
    this.name = name
  }
}

export class ColorFactory {
  constructor() {
    this.colors = {}
  }

  create(name) {
    const color = this.color[name]
    if (color) return color
    this.colors[name] = new Color(name)
    return this.colors[name]
  }
}
