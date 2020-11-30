const bubbleSort = (dataset) => {
  console.log('Применение сортировки пузырьком')
  // ...
  return dataset
}

const quickSort = (dataset) => {
  console.log('Применение быстрой сортировки')
  // ...
  return dataset
}

const sorter = (dataset) => (dataset.length > 5 ? quickSort : bubbleSort)

const longDataSet = [1, 5, 4, 3, 2, 8]
const shortDataSet = [1, 5, 4]

const sorter1 = sorter(longDataSet)
const sorter2 = sorter(shortDataSet)

sorter1(longDataSet) // Применение сортировки пузырьком
sorter1(shortDataSet) // Применение быстрой сортировки
