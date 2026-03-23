import { getRandomInteger, getGCD } from '../src/math.js'
import playGame from '../src/index.js'

const getRoundGCD = () => {
  const round = {
    answer: 'Not generated',
    question: 'Not generated',
    input: 'Not provided',
    win: false,
  }
  const numbers = {
    first: null,
    second: null,
  }

  const maxNum = gameGCDType.maxNum
  const minNum = gameGCDType.minNum

  numbers.first = getRandomInteger(minNum, maxNum)
  numbers.second = getRandomInteger(minNum, maxNum)

  round.answer = getGCD(numbers.first, numbers.second)
  round.question = `${numbers.first} ${numbers.second}`

  round.answer = round.answer.toString()

  return round
}

const gameGCDType = {
  minNum: 1,
  maxNum: 100,
  roundFunc: getRoundGCD,
  message: 'Find the greatest common divisor of given numbers.',
}

const playGameGCD = () => {
  playGame(gameGCDType)
}

export default playGameGCD
