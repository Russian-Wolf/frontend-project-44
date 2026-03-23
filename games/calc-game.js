import { getRandomInteger } from '../src/math.js'
import playGame from '../src/index.js'

const getRoundCalc = () => {
  const minNum = gameCalcType.minNum
  const maxNum = gameCalcType.maxNum
  const round = {
    answer: 'Not generated',
    question: 'Not generated',
    input: 'Not provided',
    win: false,
  }
  const numbers = {
    first: null,
    second: null,
    operation: null,
  }

  numbers.first = getRandomInteger(minNum, maxNum)
  numbers.second = getRandomInteger(minNum, maxNum)
  numbers.operation = getRandomInteger(0, 2)

  switch (numbers.operation) {
    case 0:
      round.answer = numbers.first + numbers.second
      round.question = `${numbers.first} + ${numbers.second}`
      break
    case 1:
      round.answer = numbers.first - numbers.second
      round.question = `${numbers.first} - ${numbers.second}`
      break
    case 2:
      round.answer = numbers.first * numbers.second
      round.question = `${numbers.first} * ${numbers.second}`
      break
    default:
      round.answer = `Error, operation index is incorrect. Index: ${numbers.operation}`
      round.question = `Error, operation index is incorrect. Index: ${numbers.operation}`
  }

  round.answer = round.answer.toString()

  return round
}

const gameCalcType = {
  minNum: 1,
  maxNum: 100,
  roundFunc: getRoundCalc,
  message: 'What is the result of the expression?',
}

const playGameCalc = () => {
  playGame(gameCalcType)
}

export default playGameCalc
