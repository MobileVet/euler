const sumOfMultiplesLessThan_count = (factor, max) => {
  let currentValue = factor,
      sum = 0
  while (currentValue < max) {
    sum += currentValue
    currentValue += factor
  }
  return sum
}

module.exports = {
  sumOfMultiplesLessThan: sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_count
}
