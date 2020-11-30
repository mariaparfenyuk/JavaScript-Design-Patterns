const carManager = (() => ({
  requestInfo(model, id) {
    return `Информация о ${model} с идентификатором ${id}: ...`
  },

  buyVehicle(model, id) {
    return `Вы успешно приобрели ${model} с идентификатором ${id}`
  },

  arrangeViewing(model, id) {
    return `Вы успешно забронировали ${model} с идентификатором ${id}`
  },
}))()

carManager.execute = (name, ...rest) => {
  console.log(carManager[name] && carManager[name].apply(carManager, rest))
}

carManager.execute('arrangeViewing', 'Ferrari', '14523')
carManager.execute('requestInfo', 'Ford Mondeo', '54323')
carManager.execute('requestInfo', 'Ford Escort', '34232')
carManager.execute('buyVehicle', 'Ford Escort', '34232')
/*
  Вы успешно забронировали Ferrari с идентификатором 14523
  Информация о Ford Mondeo с идентификатором 54323: ...
  Информация о Ford Escort с идентификатором 34232: ...
  Вы успешно приобрели Ford Escort с идентификатором 34232
*/
