/**
 * Returns true if given number is even. Returns false if not even.
 * @param {number} number
 */
export const isEven = number => number % 2 === 0

/**
 * Returns random integer, from min to max value (inclusive).
 * @param {number} min
 * @param {number} max
 */
export const getRandomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

/**
 * Get GCD of two integers using Euclidean algorithm.
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
export const getGCD = (number1, number2) => {
  let i = 0
  const cycleLimit = 10000
  while (i < cycleLimit) {
    if (number1 === number2) return number1
    else if (number1 > number2) {
      number1 -= number2
    }
    else {
      number2 -= number1
    }
    i += 1
  }
}

/**
 * Generates a list of numbers that follow arithmetic progression logic.
 * @param {number} numItems How many numbers to generate.
 * @param {number} initialValue The first value of the progression.
 * @param {number} difference Difference between two consecutive numbers.
 * @returns {[number]} Array of numbers.
 */
export const getArithmeticProgressionList = (numItems, initialValue, difference) => {
  const list = [initialValue]
  let prevValue = initialValue
  let nextValue

  for (let i = 1; i < numItems; i += 1) {
    nextValue = prevValue + difference
    list.push(nextValue)
    prevValue = nextValue
  }

  return list
}

/**
 * Returns true, if given number is a prime, otherwise returns false.
 * @param {number} number
 * @returns {boolean}
 */
export const isPrime = (number) => {
  if (number < 2) return false
  if (number === 2) return true
  if (number % 2 === 0) return false
  for (let i = 3; i <= Math.sqrt(number); i += 2) {
    if (number % i === 0) return false
  }
  return true
}
