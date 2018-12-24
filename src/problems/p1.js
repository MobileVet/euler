const M = require('../math')

const sumOfMultiplesLessThan_mod = (max) =>
      M.sumOfMultiplesLessThan_mod(3, 5, max)

const sumOfMultiplesLessThan_count = (max) => {
  const sumOfThree = M.sumOfMultiplesLessThan_count(3, max),
        sumOfFive = M.sumOfMultiplesLessThan_count(5, max),
        sumOfFifteen = M.sumOfMultiplesLessThan_count(15, max)

  return sumOfThree + sumOfFive - sumOfFifteen
}

module.exports = {
  sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_mod
}
