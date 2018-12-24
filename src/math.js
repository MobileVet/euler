const sumOfMultiplesLessThan = (factor, max) => {
  let currentValue = factor,
      sum = 0
  while (currentValue < max) {
    sum += currentValue
    currentValue += factor
  }
  return sum
}

module.exports = {
  sumOfMultiplesLessThan
}
