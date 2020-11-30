const log = console.log

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
  }

  getFullName() {
    log(`Этого человека зовут ${this.firstName} ${this.lastName}`)
    return this
  }

  getAge() {
    log(`Этому человеку ${this.age} лет`)
    return this
  }

  saySomething(phrase) {
    log(`Этот человек говорит: "${phrase}"`)
    return this
  }
}

const person = new Person('Иван', 'Петров', 30)
person.getFullName().getAge().saySomething('Пока!')
/*
  Этого человека зовут Иван Петров
  Этому человеку 30 лет
  Этот человек говорит: "Привет!"
*/

class SubPerson extends Person {
  constructor(firstName, lastName, age, lifestyle, skill) {
    super(firstName, lastName, age)
    this.lifestyle = lifestyle
    this.skill = skill
    this.interest = null
  }

  getInfo() {
    // super.getFullName()
    this.getFullName()
    log(`Он ${this.lifestyle}`)
    return this
  }

  getSkill() {
    log(`Этот ${this.lifestyle} умеет ${this.skill}`)
    return this
  }

  set like(value) {
    this.interest = value
  }

  get like() {
    log(
      `Этот ${this.lifestyle} ${
        this.interest ? `любит ${this.interest}` : 'ничего не любит'
      }`
    )
  }
}

const developer = new SubPerson(
  'Петр',
  'Иванов',
  25,
  'разработчик',
  'писать код на JavaScript'
)
developer.getInfo().saySomething('Программирование - это круто!').getSkill()
  .like
/*
  Этого человека зовут Петр Иванов
  Он разработчик
  Этот человек говорит: "Программирование - это круто!"
  Этот разработчик умеет писать код на JavaScript
  Этот разработчик ничего не любит
*/

developer.like = 'делать оригами'
developer.like
// Этот разработчик любит делать оригами
