class Template {
  #html

  constructor() {
    if (typeof Template.instance === 'object') {
      return Template.instance
    }
    Template.instance = this
    return this
  }

  init() {
    this.#html = ''
    return this
  }

  build(tag, content = '') {
    this.#html += `<${tag}>${content}</${tag}>`
    return this
  }

  get() {
    return this.#html
  }
}

const tempGen = new Template()

const temp1 = tempGen.init().build('ul').get()
const temp2 = tempGen
  .init()
  .build('li', 'foo')
  .build('li', 'bar')
  .build('li', 'baz')
  .get()

console.log(temp1) // <ul></ul>
console.log(temp2) // <li>foo</li><li>bar</li><li>baz</li>
