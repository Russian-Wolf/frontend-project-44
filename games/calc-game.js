import { getNumberFromSeed, getNextSeed } from '../src/math.js'
import { playGame } from '../src/index.js'

export const getCalcNumbers = (seed, maxNum) => {
  const numbers = []
  const seed2 = getNextSeed(seed)
  const seed3 = getNextSeed(seed2)
  let number3 = getNumberFromSeed (seed3, 3)
  if (number3 === 3) number3 = 2
  numbers.push(getNumberFromSeed (seed, maxNum), getNumberFromSeed (seed2, maxNum), number3)
  return numbers
}

export const getAnswerCalc = (seed, maxNum) => {
  const numbers = getCalcNumbers(seed, maxNum)
  let answer = null

  switch (numbers[2]) {
    case 0:
      answer = numbers[0] + numbers[1]
      break
    case 1:
      answer = numbers[0] - numbers[1]
      break
    case 2:
      answer = numbers[0] * numbers[1]
      break
  }

  return answer.toString()
}

export const getQuestionCalc = (seed, maxNum) => {
  const numbers = getCalcNumbers(seed, maxNum)
  let question = 'Error: invalid operation index.'
  switch (numbers[2]) {
    case 0:
      question = `${numbers[0]} + ${numbers[1]}`
      break
    case 1:
      question = `${numbers[0]} - ${numbers[1]}`
      break
    case 2:
      question = `${numbers[0]} * ${numbers[1]}`
      break
  }
  return question
}
export const gameCalcType = {
  maxNum: 100,
  answerFunc: getAnswerCalc,
  questionFunc: getQuestionCalc,
  message: 'What is the result of the expression?',
}

export const playGameCalc = () => {
  playGame(gameCalcType)
}
