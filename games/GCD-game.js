import { getNumberFromSeed, getNextSeed, getGCD } from '../src/math.js'
import { playGame } from '../src/index.js'

export const getGCDNumbers = (seed, maxNum) => {
  const numbers = []
  const seed2 = getNextSeed(seed)
  numbers.push(getNumberFromSeed (seed, maxNum), getNumberFromSeed (seed2, maxNum))
  return numbers
}

export const getAnswerGCD = (seed, maxNum) => {
  const numbers = getGCDNumbers(seed, maxNum)
  let answer = getGCD(numbers[0], numbers[1])
  try {
    answer = answer.toString()
  }
  catch {
    console.log(`numbers were: ${numbers}`)
    console.log(`answer was: ${getGCD(numbers[0], numbers[1])}`)
  }
  return answer
}

export const getQuestionGCD = (seed, maxNum) => {
  const numbers = getGCDNumbers(seed, maxNum)
  let question = `${numbers[0]} ${numbers[1]}`
  return question
}
export const gameGCDType = {
  maxNum: 100,
  answerFunc: getAnswerGCD,
  questionFunc: getQuestionGCD,
  message: 'Find the greatest common divisor of given numbers.',
}

export const playGameGCD = () => {
  playGame(gameGCDType)
}
