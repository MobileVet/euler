const sut = require('../math')

describe('sumOfMultiplesLessThan', () => {
  it('returns 0 when factor is greater than max', () => {
    expect(sut.sumOfMultiplesLessThan(3, 2)).toEqual(0)
  })

  it('returns factor when 2*factor >= max', () => {
    expect(sut.sumOfMultiplesLessThan(3, 6)).toEqual(3)
  })

  it('returns 3*factor when 3*factor >= max', () => {
    expect(sut.sumOfMultiplesLessThan(3, 9)).toEqual(9)
  })
})
