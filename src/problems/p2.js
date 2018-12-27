// Problem 2
// By considering the terms in the Fibonacci sequence whose values
// do not exceed four million, find the sum of the even-valued terms.

// NOTE: Every third number in the Fibonacci algorithm is even.  Since we
// only want to add the even numbers, we can use this information to avoid
// testing each value to determine if it is even and instead just adding
// the 3rd (assuming it is less than the max passed in)
const third = (max) => {
  let a = 1,
      b = 1,
      c = 2,
      sum = 0

  while (c <= max) {
    sum += c
    a = b + c
    b = c + a
    c = a + b
  }
  return sum
}

// NOTE: Instead of finding ALL Fibonacci numbers and just adding the even
// go ahead and calculate ONLY the even numbers and sum them up
// Nth Even fibonacci number determined by EFn = 4 * EF(n-1) + EF(n-2)
const formula = (max) => {
  let ef2 = 0,
      ef1 = 2,
      sum = 0
  while (ef1 <= max) {
    sum += ef1
    let efn = 4 * ef1 + ef2
    ef2 = ef1
    ef1 = efn
  }
  return sum
}

module.exports = {
  formula,
  third
}
