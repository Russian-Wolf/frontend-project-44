import { isEven, getNumberFromSeed } from '../src/math.js'
import { playGame } from '../src/index.js'

export const getAnswerEven = (seed, maxNum) => {
  const number = getNumberFromSeed (seed, maxNum)
  const evenState = isEven(number)
  const result = evenState ? 'yes' : 'no'
  return result
}

export const getQuestionEven = (seed, maxNum) => {
  const question = getNumberFromSeed (seed, maxNum)
  return question
}

export const gameEvenType = {
  maxNum: 1000,
  answerFunc: getAnswerEven,
  questionFunc: getQuestionEven,
}

export const playGameEven = () => {
  playGame(gameEvenType)
}
