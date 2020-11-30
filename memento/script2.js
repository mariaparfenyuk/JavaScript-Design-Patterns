class EditorMemento {
  #content

  constructor(content) {
    this.#content = content
  }

  getContent() {
    return this.#content
  }
}

class Editor {
  #content

  constructor() {
    this.#content = ''
  }

  type(words) {
    this.#content += ` ${words}`
  }

  getContent() {
    return this.#content
  }

  save() {
    return new EditorMemento(this.#content)
  }

  restore(memento) {
    this.#content = memento.getContent()
  }
}

const editor = new Editor()

editor.type('foo')
editor.type('bar')

const saved = editor.save()

editor.type('baz')

console.log(editor.getContent()) // foo bar baz

editor.restore(saved)

console.log(editor.getContent()) // foo bar
