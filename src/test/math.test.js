const sut = require('../math')

describe('sumOfMultiplesLessThan', () => {
  it('returns 0 when factor is greater than max', () => {
    expect(sut.sumOfMultiplesLessThan(3, 2)).toEqual(0)
  })

  it('returns factor when 2*factor > max', () => {
    expect(sut.sumOfMultiplesLessThan(3, 5)).toEqual(3)
  })
})
