import { getNumberFromSeed, isPrime } from '../src/math.js'
import { playGame } from '../src/index.js'

export const getPrimeGameNumber = (seed, maxNum) => {
  let number
  number = getNumberFromSeed(seed, maxNum)
  return number
}

export const getAnswerPrime = (seed, maxNum) => {
  const number = getPrimeGameNumber(seed, maxNum)
  const answer = isPrime(number) ? 'yes' : 'no'
  return answer
}

export const getQuestionPrime = (seed, maxNum) => {
  const question = getPrimeGameNumber(seed, maxNum)
  return question
}
export const gamePrimeType = {
  maxNum: 100,
  answerFunc: getAnswerPrime,
  questionFunc: getQuestionPrime,
  message: 'Answer "yes" if given number is prime. Otherwise answer "no".',
}

export const playGamePrime = () => {
  playGame(gamePrimeType)
}
