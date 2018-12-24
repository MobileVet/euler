const M = require('../math')

const sumOfMultiplesLessThan_count = (max) => {
  const sumOfThree = M.sumOfMultiplesLessThan(3, max),
        sumOfFive = M.sumOfMultiplesLessThan(5, max),
        sumOfFifteen = M.sumOfMultiplesLessThan(15, max)

  return sumOfThree + sumOfFive - sumOfFifteen
}

module.exports = {
  sumOfMultiplesLessThan_count
}
