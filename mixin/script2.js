const eventMixin = {
  on(name, handler) {
    if (!this._eventHandlers) this._eventHandlers = {}
    if (!this._eventHandlers[name]) this._eventHandlers[name] = []
    this._eventHandlers[name].push(handler)
  },

  off(name, handler) {
    const handlers = this._eventHandlers && this._eventHandlers[name]
    if (!handlers) return
    for (const h of handlers) {
      if (h === handler) handlers.splice(handlers.indexOf(h), 1)
    }
  },

  trigger(name, ...args) {
    if (!this._eventHandlers || !this._eventHandlers[name]) return
    this._eventHandlers[name].forEach((h) => h.apply(this, args))
  },
}

class Menu {
  choose(page) {
    this.trigger('select', page)
  }
}

Object.assign(Menu.prototype, eventMixin)

const menu = new Menu()

menu.on('select', (p) => console.log(`Текущая страница: ${p}`))

menu.choose('Контакты') // Текущая страница: Контакты
