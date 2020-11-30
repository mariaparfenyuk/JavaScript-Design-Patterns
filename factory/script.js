// фабрика
function Car({ doors, state, color }) {
  this.doors = doors || 4
  this.state = state || 'новый'
  this.color = color || 'серебряный'
}

function Truck({ state, wheelSize, color }) {
  this.state = state || 'подержанный'
  this.wheelSize = wheelSize || 'большой'
  this.color = color || 'синий'
}

function VehicleFactory() {}
;(function () {
  this.vehicleClass = Car
  this.createVehicle = function (options) {
    switch (options.vehicleType) {
      case 'автомобиль':
        this.vehicleClass = Car
        break
      case 'грузовик':
        this.vehicleClass = Truck
    }
    return new this.vehicleClass(options)
  }
}.call(VehicleFactory.prototype))

const carFactory = new VehicleFactory()
const car = carFactory.createVehicle({
  vehicleType: 'автомобиль',
  color: 'желтый',
})
console.log(car instanceof Car) // true
console.log(car)
// Car {doors: 4, state: "новый", color: "желтый"}

const truck = carFactory.createVehicle({
  vehicleType: 'грузовик',
  state: 'как новый',
  color: 'красный',
  wheelSize: 'маленький',
})
console.log(truck instanceof Truck) // true
console.log(truck)
// Truck {state: "как новый", wheelSize: "маленький", color: "красный"}

/*
  function TruckFactory() {}
  TruckFactory.prototype = new VehicleFactory()
  TruckFactory.prototype.vehicleClass = Truck

  const truckFactory = new TruckFactory()
*/
const truckFactory = Object.create(new VehicleFactory().__proto__)
truckFactory.__proto__.vehicleClass = Truck
const bigTruck = truckFactory.createVehicle({
  state: 'очень плохое',
  color: 'черный',
  wheelSize: 'очень большой',
})
console.log(bigTruck instanceof Truck) // true
console.log(bigTruck)
// Truck {state: "очень плохое", wheelSize: "очень большой", color: "черный"}

// абстрактная фабрика
const abstractVehicleFactory = (() => {
  const types = {}
  return {
    getVehicle(type, customizations) {
      const Vehicle = types[type]
      return Vehicle ? new Vehicle(customizations) : null
    },
    registerVehicle({ type, Vehicle, available }) {
      if (available) {
        types[type] = Vehicle
      }
      return this
    },
  }
})()

abstractVehicleFactory
  .registerVehicle({
    type: 'car',
    Vehicle: Car,
    available: true,
  })
  .registerVehicle({
    type: 'truck',
    Vehicle: Truck,
    available: false,
  })

const car2 = abstractVehicleFactory.getVehicle('car', {
  color: 'зеленый',
  state: 'среднее',
})

const truck2 = abstractVehicleFactory.getVehicle('truck', {
  wheelSize: 'средний',
  color: 'серый',
})

console.log(car2 instanceof Car) // true
console.log(car2)
// Car {doors: 4, state: "среднее", color: "зеленый"}

console.log(truck2 instanceof Truck) // false
console.log(truck2) // null
