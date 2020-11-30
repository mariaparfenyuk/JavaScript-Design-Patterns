class Developer {
  constructor(name, salary, roles) {
    this.name = name
    this.salary = salary
    this.roles = roles
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(value) {
    this.salary = value
  }

  getRoles() {
    return this.roles
  }

  develop() {}
}

class Designer {
  constructor(name, salary, roles) {
    this.name = name
    this.salary = salary
    this.roles = roles
  }

  getName() {
    return this.name
  }

  getSalary() {
    return this.salary
  }

  setSalary(value) {
    this.salary = value
  }

  getRoles() {
    return this.roles
  }

  design() {}
}

class Organization {
  constructor() {
    this.employees = []
  }

  addEmployee(employee) {
    this.employees.push(employee)
  }

  getTotalSalary() {
    let totalSalary = 0

    this.employees.forEach((e) => {
      totalSalary += e.getSalary()
    })

    return totalSalary
  }
}

const john = new Developer('John', 12000)
const jane = new Designer('Jane', 10000)

const organization = new Organization()
organization.addEmployee(john)
organization.addEmployee(jane)
console.log(organization.getTotalSalary()) // 22000
