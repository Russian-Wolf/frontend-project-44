import { isEven, getRandomInteger } from '../src/math.js'
import playGame from '../src/index.js'

const getRoundEven = () => {
  const round = {
    answer: 'Not generated',
    question: 'Not generated',
    input: 'Not provided',
    win: false,
  }
  const number = getRandomInteger(gameEvenType.minNum, gameEvenType.maxNum)
  const evenState = isEven(number)
  round.answer = evenState ? 'yes' : 'no'
  round.question = number
  return round
}

const gameEvenType = {
  minNum: 1,
  maxNum: 999,
  roundFunc: getRoundEven,
  message: 'Answer "yes" if the number is even, otherwise answer "no".',
}

const playGameEven = () => {
  playGame(gameEvenType)
}

export default playGameEven
