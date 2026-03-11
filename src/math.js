/**
 * Returns true if given number is even. Returns false if not even.
 * @param {number} number
 */
export const isEven = number => number % 2 === 0

/**
 * Returns random integer, up to max value.
 * @param {number} max
 */
export const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max)
}

/**
 * Returns integer given the seed (from 0 to 1), up to max value.
 * @param {number} max
 * @param {number} seed
 * @returns {number}
 */
export const getNumberFromSeed = (seed, max) => {
  return Math.floor(seed * max)
}

/**
 * Use LCG to generate another seed.
 * @param {number} seed
 * @returns {number}
 */
export const getNextSeed = (seed) => {
  const intSeed = Math.floor(seed * 2 ** 32)
  const nextSeed = (intSeed * 1664525 + 1013904223) % 2 ** 32
  return nextSeed / 2 ** 32
}

/**
 * Get GCD of two integers using Euclidean algorithm.
 * @param {number} number1
 * @param {number} number2
 * @returns {number}
 */
export const getGCD = (number1, number2) => {
  let i = 0
  const cycleLimit = 1000
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
