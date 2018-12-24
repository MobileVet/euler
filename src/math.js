const sumOfMultiplesLessThan_count = (factor, max) => {
  let currentValue = factor,
      sum = 0
  while (currentValue < max) {
    sum += currentValue
    currentValue += factor
  }
  return sum
}

const sumOfMultiplesLessThan_mod = (f1, f2, max) => {
  let sum = 0
  for (let x = 0; x < max; x++) {
    // Could use ||, but less optimal
    sum += (x % f1 === 0)
      ? x
      : (x % f2 === 0)
      ? x
      : 0
  }
  return sum
}

module.exports = {
  sumOfMultiplesLessThan: sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_mod
}
