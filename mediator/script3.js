class ChatRoom {
  showMessage(user, message) {
    const time = new Date().toLocaleTimeString()
    const sender = user.getName()

    console.log(`${time} [${sender}]: ${message}`)
  }
}

class User {
  constructor(name, chatMediator) {
    this.name = name
    this.chatMediator = chatMediator
  }

  getName() {
    return this.name
  }

  send(message) {
    this.chatMediator.showMessage(this, message)
  }
}

const mediator = new ChatRoom()

const john = new User('John', mediator)
const jane = new User('Jane', mediator)

john.send('Hi!')
jane.send('Bye!')
/*
  24.11.2020, 16:44:43 [John]: Hi!
  24.11.2020, 16:44:43 [Jane]: Bye!
*/
