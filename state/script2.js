const upper = (str) => str.toUpperCase()
const lower = (str) => str.toLowerCase()
const none = (str) => str

class TextEditor {
  #transform

  constructor(transform) {
    this.#transform = transform
  }

  setTransform(transform) {
    this.#transform = transform
  }

  type(words) {
    console.log(this.#transform(words))
  }
}

const editor = new TextEditor(none)

editor.type('foo') // foo

editor.setTransform(upper)

editor.type('bar') // BAR
editor.type('baz') // BAZ

editor.setTransform(lower)

editor.type('QUX') // qux
