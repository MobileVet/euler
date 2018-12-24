const M = require('../math')

const sumOfMultiplesLessThan_count = (max) => {
  const sumOfThree = M.sumOfMultiplesLessThan_count(3, max),
        sumOfFive = M.sumOfMultiplesLessThan_count(5, max),
        sumOfFifteen = M.sumOfMultiplesLessThan_count(15, max)

  return sumOfThree + sumOfFive - sumOfFifteen
}

const sumOfMultiplesLessThan_formula = (max) =>
      M.sumOfMultiplesLessThan_formula(3, 5, max)

const sumOfMultiplesLessThan_mod = (max) =>
      M.sumOfMultiplesLessThan_mod(3, 5, max)

const sumOfMultiplesLessThan_pattern = (max) =>
      M.sumOfMultiplesLessThan_pattern(3, 5, max)

module.exports = {
  sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_formula,
  sumOfMultiplesLessThan_mod,
  sumOfMultiplesLessThan_pattern
}
