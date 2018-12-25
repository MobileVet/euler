const sut = require('../../problems/p1')

describe('Problem 1', () => {
  // Solutions listed with fastest first
  // Top solution time is constant, regardless of max number size
  const solutions = [['Sum Formula Algorithm', sut.carl],
                     ['Pattern Formula Algorithm', sut.formula],
                     ['Slow Counting Algorithm', sut.count],
                     ['Pattern of Factor List Algorithm', sut.pattern],
                     ['Modulous Algorithm', sut.mod]],
        answers = [[10, 23],
                   [16, 60],
                   [37, 329],
                   [100, 2318],
                   [1000, 233168]]

  solutions.forEach(solution => {
    const [label, fcn] = solution
    describe(label, () => {

      answers.forEach(answer => {
        const [max, result] = answer
        it(`returns ${result} when max = ${max}`, () => {
          expect(fcn(3, 5, max)).toEqual(result)
        })
      })
    })
  })

})
