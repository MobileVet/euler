
// Modification of the Carl Friedrich Gauss equation for calculation
// of sum of the first n natural numbers.  Adjusted to only return
// the sum of the those above numbers that are factors of 'multiple'
const sumOfMultiplesLTE = (multiple, max) => {
  const m = ~~ (max / multiple)
  return multiple * (m * (m + 1) / 2)
}

module.exports = {
  sumOfMultiplesLTE
}
