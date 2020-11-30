class Account {
  setNext(account) {
    this.successor = account
  }

  pay(amountToPay) {
    if (this.canPay(amountToPay)) {
      console.log(`${amountToPay} оплачено с помощью ${this.name}`)
    } else if (this.successor) {
      console.log(`Невозможно оплатить с помощью ${this.name}. Загрузка...`)
    } else {
      console.log('На балансе недостаточно средств')
    }
  }

  canPay(amount) {
    return this.balance >= amount
  }
}

class Bank extends Account {
  constructor(balance) {
    super()
    this.name = 'банк'
    this.balance = balance
  }
}

class Paypal extends Account {
  constructor(balance) {
    super()
    this.name = 'Paypal'
    this.balance = balance
  }
}

class Bitcoin extends Account {
  constructor(balance) {
    super()
    this.name = 'Bitcoin'
    this.balance = balance
  }
}

const bank = new Bank(100)
const paypal = new Paypal(200)
const bitcoin = new Bitcoin(300)

bank.setNext(paypal)
paypal.setNext(bitcoin)
bank.pay(259)
/*
  Невозможно оплатить с помощью банка. Загрузка...
  Невозможно оплатить с помощью банка. Загрузка...
  259 оплачено с помощью Bitcoin
*/
