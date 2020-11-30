const log = console.log

function Person({ firstName, lastName, age }) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
}

/*
Person.prototype.getFullName = function () {
  log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
  return this
}
Person.prototype.getAge = function () {
  log(`Этому человеку ${this.age} лет`)
  return this
}
Person.prototype.saySomething = function (phrase) {
  log(`Этот человек говорит: "${phrase}"`)
  return this
}
*/

;(function () {
  this.getFullName = function () {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }
  this.getAge = function () {
    log(`Этому человеку ${this.age} лет`)
    return this
  }
  this.saySomething = function (phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
}.call(Person.prototype))

const person = new Person({
  firstName: 'Иван',
  lastName: 'Петров',
  age: 30,
})

person.getFullName().getAge().saySomething('Привет!')
/*
  Этого человека зовут Иван Петров
  Этому человеку 30 лет
  Этот человек говорит: "Привет!"
*/

function SubPerson({ lifestyle, skill, ...rest }) {
  Person.call(this, rest)
  this.lifestyle = lifestyle
  this.skill = skill
  this.interest = null
}

SubPerson.prototype = Object.create(Person.prototype)

/*
SubPerson.prototype.getSkill = function () {
  log(`Этот ${this.lifestyle} умеет ${this.skill}`)
  return this
}

SubPerson.prototype.getLike = function () {
  log(
    `Этот ${this.lifestyle} ${
      this.interest ? `любит ${this.interest}` : 'ничего не любит'
    }`
  )
}

SubPerson.prototype.setLike = function (value) {
  this.interest = value
}
*/
;(function () {
  this.getInfo = function () {
    this.getFullName()
    log(`Он ${this.lifestyle}`)
    return this
  }
  this.getSkill = function () {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  }
  this.getLike = function () {
    log(
      `Этот ${this.lifestyle} ${
        this.interest ? `любит ${this.interest}` : 'ничего не любит'
      }`
    )
  }
  this.setLike = function (value) {
    this.interest = value
  }
}.call(SubPerson.prototype))

const developer = new SubPerson({
  firstName: 'Петр',
  lastName: 'Иванов',
  age: 25,
  lifestyle: 'разработчик',
  skill: 'писать код на JavaScript',
})

developer
  .getInfo()
  .saySomething('Программирование - это круто!')
  .getSkill()
  .getLike()
/*
  Этого человека зовут Петр Иванов
  Он разработчик
  Этот человек говорит: "Программирование - это круто!"
  Этот разработчик умеет писать код на JavaScript
  Этот разработчик ничего не любит
*/

developer.setLike('делать оригами')
developer.getLike()
// Этот разработчик любит делать оригами
