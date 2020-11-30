class RadioStation {
  constructor(frequency) {
    this.frequency = frequency
  }

  getFrequency() {
    return this.frequency
  }
}

class StationList {
  constructor() {
    this.stations = []
  }

  addStation(station) {
    this.stations.push(station)
  }

  removeStation(station) {
    const frequencyToRemove = station.getFrequency()
    this.stations = this.stations.filter(
      (s) => s.getFrequency !== frequencyToRemove
    )
  }
}

const stationList = new StationList()

stationList.addStation(new RadioStation(89))
stationList.addStation(new RadioStation(101))
stationList.addStation(new RadioStation(102))
stationList.addStation(new RadioStation(103.2))

stationList.stations.forEach((s) => console.log(s.getFrequency()))

stationList.removeStation(new RadioStation(89))
