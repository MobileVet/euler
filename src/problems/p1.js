const M = require('../math')

const sumOfMultiplesLessThan_count = (max) => {
  const sumOfThree = M.sumOfMultiplesLessThan_count(3, max),
        sumOfFive = M.sumOfMultiplesLessThan_count(5, max),
        sumOfFifteen = M.sumOfMultiplesLessThan_count(15, max)

  return sumOfThree + sumOfFive - sumOfFifteen
}

module.exports = {
  sumOfMultiplesLessThan_count
}
