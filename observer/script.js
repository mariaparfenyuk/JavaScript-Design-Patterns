// Old School
function ObserverList() {
  this.observerList = []
}

/*
ObserverList.prototype.add = function (obj) {
  return this.observerList.push(obj)
}

ObserverList.prototype.count = function () {
  return this.observerList.length
}

ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.count()) {
    return this.observerList[index]
  }
}

ObserverList.prototype.indexOf = function (obj, startIndex) {
  let i = startIndex

  while (i < this.count()) {
    if (this.observerList[i] === obj) {
      return i
    }
    i++
  }

  return -1
}

ObserverList.prototype.remove = function (index) {
  this.observerList.splice(index, 1)
}
*/

;(function () {
  this.add = function (obj) {
    return this.observerList.push(obj)
  }
  this.count = function () {
    return this.observerList.length
  }
  this.get = function (index) {
    if (index > -1 && index < this.count()) {
      return this.observerList[index]
    }
  }
  this.indexOf = function (obj, startIndex) {
    let i = startIndex

    while (i < this.count()) {
      if (this.observerList[i] === obj) {
        return i
      }
      i++
    }

    return -1
  }
  this.remove = function (index) {
    this.observerList.splice(index, 1)
  }
}.call(ObserverList.prototype))

// Subject
function Subject() {
  this.observers = new ObserverList()
}

/*
Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer)
}

Subject.prototype.removeObserver = function (observer) {
  this.observers.remove(this.observers.indexOf(observer, 0))
}

Subject.prototype.notify = function (context) {
  const observerCount = this.observers.count()
  for (let i = 0; i < observerCount; i++) {
    this.observers.get(i).update(context)
  }
}
*/

;(function () {
  this.addObserver = function (observer) {
    this.observers.add(observer)
  }
  this.removeObserver = function (observer) {
    this.observers.remove(this.observers.indexOf(observer, 0))
  }
  this.notify = function (context) {
    const observerCount = this.observers.count()
    for (let i = 0; i < observerCount; i++) {
      this.observers.get(i).update(context)
    }
  }
}.call(Subject.prototype))

function Observer() {
  this.update = function () {}
}

function extend(obj, extension) {
  for (const key in extension) {
    obj[key] = extension[key]
  }
}

const controlCheckbox = document.querySelector('input')
const addBtn = document.querySelector('button')
const container = document.querySelector('div')

extend(controlCheckbox, new Subject())

controlCheckbox.onclick = () => {
  controlCheckbox.notify(controlCheckbox.checked)
}

addBtn.onclick = () => {
  const check = document.createElement('input')
  check.type = 'checkbox'

  extend(check, new Observer())

  check.update = function (value) {
    value ? this.setAttribute('checked', '') : this.removeAttribute('checked')
  }

  controlCheckbox.addObserver(check)

  container.append(check)
}
