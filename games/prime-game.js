import { getRandomInteger, isPrime } from '../src/math.js'
import playGame from '../src/index.js'

const getRoundPrime = () => {
  const round = {
    answer: 'Not generated',
    question: 'Not generated',
    input: 'Not provided',
    win: false,
  }

  const number = getRandomInteger(gamePrimeType.minNum, gamePrimeType.maxNum)

  round.answer = isPrime(number) ? 'yes' : 'no'
  round.question = number

  return round
}

const gamePrimeType = {
  minNum: 1,
  maxNum: 100,
  roundFunc: getRoundPrime,
  message: 'Answer "yes" if given number is prime. Otherwise answer "no".',
}

const playGamePrime = () => {
  playGame(gamePrimeType)
}

export default playGamePrime
