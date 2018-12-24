const sut = require('../../problems/p1')

describe('Problem 1', () => {
  describe('Counting Algorithm', () => {
    it('returns 23 when max is 10', () => {
      // 3 + 5 + 6 + 9 = 23
      expect(sut.sumOfMultiplesLessThan_count(10)).toEqual(23)
    })

    it('returns 60 when max is 16', () => {
      // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
      expect(sut.sumOfMultiplesLessThan_count(16)).toEqual(60)
    })

    it('returns 233168 when max is 1000', () => {
      expect(sut.sumOfMultiplesLessThan_count(1000)).toEqual(233168)
    })
  })

  describe('Mod Algorithm', () => {
    it('returns 23 when max is 10', () => {
      // 3 + 5 + 6 + 9 = 23
      expect(sut.sumOfMultiplesLessThan_mod(10)).toEqual(23)
    })

    it('returns 60 when max is 16', () => {
      // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
      expect(sut.sumOfMultiplesLessThan_mod(16)).toEqual(60)
    })

    it('returns 233168 when max is 1000', () => {
      expect(sut.sumOfMultiplesLessThan_mod(1000)).toEqual(233168)
    })
  })

})
