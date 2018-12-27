const sut = require('../../problems/p2')

describe('Problem 2', () => {
  const solutions = [['Every Third Summed', sut.third],
                     ['Calculate Evens and Sum', sut.formula]],
        answers = [[2, 2],
                   [8, 10],
                   [33, 10],
                   [34, 44],
                   [4000000, 4613732]]

  solutions.forEach(solution => {
    const [label, fcn] = solution
    describe(label, () => {

      answers.forEach(answer => {
        const [max, result] = answer
        it(`returns ${result} when max = ${max}`, () => {
          expect(fcn(max)).toEqual(result)
        })
      })
    })
  })

})
