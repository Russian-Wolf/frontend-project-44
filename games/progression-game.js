import { getNumberFromSeed, getNextSeed, getArithmeticProgressionList } from '../src/math.js'
import { playGame } from '../src/index.js'

export const getProgressionNumbers = (seed, maxNum) => {
  const numbers = {
    initValue: 0,
    numberCount: 5,
    diff: 1,
    hiddenIndex: 2,
    numbersList: [],
  }
  let diffSign = '+'
  const seeds = [seed]
  let prevSeed = seed
  const numSeeds = 5
  let nextSeed
  const maxDiff = 10
  const maxNumberCount = 10
  const minNumberCount = 6

  for (let i = 1; i < numSeeds; i += 1) {
    nextSeed = getNextSeed(prevSeed)
    seeds.push(nextSeed)
    prevSeed = nextSeed
  }

  numbers.initValue = getNumberFromSeed(seeds[0], maxNum)

  numbers.numberCount = getNumberFromSeed(seeds[1], maxNumberCount - minNumberCount + 1) + minNumberCount

  if (seeds[2] < 0.5) diffSign = '-'

  numbers.diff = 1 + getNumberFromSeed(seeds[3], maxDiff - 1)
  if (diffSign === '-') numbers.diff = -numbers.diff

  numbers.hiddenIndex = getNumberFromSeed(seeds[4], numbers.numberCount + 1)

  if (numbers.numberCount === 11) numbers.numberCount = 10
  if (numbers.hiddenIndex === 11) numbers.hiddenIndex = 10

  numbers.numbersList = getArithmeticProgressionList(numbers.numberCount, numbers.initValue, numbers.diff)

  return numbers
}

export const getAnswerProgression = (seed, maxNum) => {
  const numbers = getProgressionNumbers(seed, maxNum)
  const answer = numbers.numbersList[numbers.hiddenIndex]
  return answer.toString()
}

export const getQuestionProgression = (seed, maxNum) => {
  const numbers = getProgressionNumbers(seed, maxNum)
  const questionStart = numbers.numbersList.slice(0, numbers.hiddenIndex)
  const questionEnd = numbers.numbersList.slice(numbers.hiddenIndex + 1)
  let question = `${questionStart.join(' ')} .. ${questionEnd.join(' ')}`
  return question
}
export const gameProgressionType = {
  maxNum: 100,
  answerFunc: getAnswerProgression,
  questionFunc: getQuestionProgression,
  message: 'What number is missing in the progression?',
}

export const playGameProgression = () => {
  playGame(gameProgressionType)
}
