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

    it('returns 329 when max is 37', () => {
      expect(sut.sumOfMultiplesLessThan_count(37)).toEqual(329)
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

  describe('Pattern Algorithm', () => {
    it('returns 23 when max is 10', () => {
      // 3 + 5 + 6 + 9 = 23
      expect(sut.sumOfMultiplesLessThan_pattern(10)).toEqual(23)
    })

    it('returns 60 when max is 16', () => {
      // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
      expect(sut.sumOfMultiplesLessThan_pattern(16)).toEqual(60)
    })

    it('returns 233168 when max is 1000', () => {
      expect(sut.sumOfMultiplesLessThan_pattern(1000)).toEqual(233168)
    })

  })

  describe('Formula Algorithm', () => {
    it('returns 23 when max is 10', () => {
      // 3 + 5 + 6 + 9 = 23
      expect(sut.sumOfMultiplesLessThan_formula(10)).toEqual(23)
    })

    it('returns 60 when max is 16', () => {
      // 3 + 5 + 6 + 9 + 10 + 12 + 15 = 60
      expect(sut.sumOfMultiplesLessThan_formula(16)).toEqual(60)
    })

    it('returns 329 when max is 37', () => {
      expect(sut.sumOfMultiplesLessThan_formula(37)).toEqual(329)
    })

    it('returns 2318 when max is 100', () => {
      expect(sut.sumOfMultiplesLessThan_formula(100)).toEqual(2318)
    })

    it('returns 233168 when max is 1000', () => {
      expect(sut.sumOfMultiplesLessThan_formula(1000)).toEqual(233168)
    })

  })
})
