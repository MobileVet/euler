const sut = require('../math')

describe('sumOfMultiplesLessThanOrEqualTo', () => {
  it('returns 0 when factor is greater than max', () => {
    expect(sut.sumOfMultiplesLTE(3, 2)).toEqual(0)
  })

  it('returns factor when 2*factor > max', () => {
    expect(sut.sumOfMultiplesLTE(3, 5)).toEqual(3)
  })

  it('returns 3*factor when 2*factor <= max', () => {
    expect(sut.sumOfMultiplesLTE(3, 6)).toEqual(9)
  })
})
