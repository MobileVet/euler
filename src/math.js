// local helpers

// Calculate the sum of an array of repeated values
// The offset is based on what 'row' of the repeat we are on
// NOTE: only sum if less than our max value
const partialArraySum = (array, offset, max) => {
  let length = array.length,
      sum = 0
  for (let y = 0; y < length; y++) {
    const value = offset + array[y]
    sum += (value < max) ? value : 0
  }
  return sum
}

// Produce an array of numbers that are factors of 2 numbers
// NOTE: These are repeated for every n after n * f1 * f2
const repeatedTerms = (f1, f2) => {
  let array = []
  const greatest = (f1 < f2) ? f2 : f1,
        product = f1 * f2

  for (let x = 1; x < greatest; x++) {
    if (f1 * x < product) {
      array.push(f1 * x)
    }
    if (f2 * x < product) {
      array.push(f2 * x)
    }
  }
  array.push(product)
  return array
}

// different algorithms

// Simply count by factor and sum the results until max
const sumOfMultiplesLessThan_count = (factor, max) => {
  let currentValue = factor,
      sum = 0
  while (currentValue < max) {
    sum += currentValue
    currentValue += factor
  }
  return sum
}

// Step from 1 to max,
// If value is % of f1 or f2, add it to our accumulator
const sumOfMultiplesLessThan_mod = (f1, f2, max) => {
  let sum = 0
  for (let x = 0; x < max; x++) {
    // Could use ||, but less optimal
    sum += (x % f1 === 0)
      ? x
      : (x % f2 === 0)
      ? x
      : 0
  }
  return sum
}

const sumOfMultiplesLessThan_pattern = (f1, f2, max) => {
  const product = f1 * f2,
        wholeFactor = ~~(max / product) // ~~ => floor

  let factors = repeatedTerms(f1, f2),
      sum = 0

  // Sum up the values by looping through our repeated
  // terms and multiplying our whole divisor
  const factorLength = factors.length
  for (let x = 0; x <= wholeFactor; x++) {
    for (let y = 0; y < factors.length; y++) {
      const value = product * x + factors[y]
      sum += (value < max) ? value : 0
    }
  }
  return sum
}


const sumOfMultiplesLessThan_formula = (f1, f2, max) => {
  const sumFcn = (max) => {
          let sum = 0
          for (let x = 0; x < max; x++) {
            sum += x
          }
          return sum
        },
        sumArray = (array) => {
          const length = array.length
          let sum = 0
          for (let x = 0; x < length; x++) {
            sum += array[x]
          }
          return sum
        }

  const array = repeatedTerms(f1, f2),
        arraySum = sumArray(array),
        product = f1 * f2,
        wholeFactor = ~~ (max / product),
        wfSum = sumFcn(wholeFactor),
        wholeSum = array.length * wfSum * product + (arraySum * wholeFactor),
        partialSum = partialArraySum(array, product * wholeFactor, max)

  return wholeSum + partialSum
}

module.exports = {
  sumOfMultiplesLessThan: sumOfMultiplesLessThan_formula,
  sumOfMultiplesLessThan_count,
  sumOfMultiplesLessThan_formula,
  sumOfMultiplesLessThan_mod,
  sumOfMultiplesLessThan_pattern
}
