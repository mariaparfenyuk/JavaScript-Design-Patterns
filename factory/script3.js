const droidProducer = (kind) =>
  kind === 'battle' ? battleDroidFactory : pilotDroidFactory

const battleDroidFactory = () => new B1()

const pilotDroidFactory = () => new Rx24()

class B1 {
  info() {
    return 'B1, Battle Droid'
  }
}

class Rx24 {
  info() {
    return 'Rx24, Pilot Droid'
  }
}

export default droidProducer
