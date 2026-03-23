import { getRandomInteger, getArithmeticProgressionList } from '../src/math.js'
import playGame from '../src/index.js'

export const getRoundProgression = () => {
  const numbers = {
    initValue: null,
    numberCount: null,
    diff: null,
    hiddenIndex: null,
    numbersList: [],
  }

  const round = {
    answer: 'Not generated',
    question: 'Not generated',
    input: 'Not provided',
    win: false,
  }

  const maxDiff = 10
  const maxNumberCount = 10
  const minNumberCount = 6
  const maxNum = gameProgressionType.maxNum
  const minNum = gameProgressionType.minNum

  numbers.initValue = getRandomInteger(minNum, maxNum)

  numbers.numberCount = getRandomInteger(minNumberCount, maxNumberCount)

  numbers.diff = getRandomInteger(minNum, maxDiff)

  numbers.hiddenIndex = getRandomInteger(1, numbers.numberCount - 2)

  if (numbers.numberCount > 10) numbers.numberCount = 10
  if (numbers.hiddenIndex > numbers.numberCount - 2) numbers.hiddenIndex = numbers.numberCount - 2

  numbers.numbersList = getArithmeticProgressionList(numbers.numberCount, numbers.initValue, numbers.diff)

  round.answer = numbers.numbersList[numbers.hiddenIndex]
  round.answer = round.answer.toString()

  const questionStart = numbers.numbersList.slice(0, numbers.hiddenIndex)
  const questionEnd = numbers.numbersList.slice(numbers.hiddenIndex + 1)
  round.question = `${questionStart.join(' ')} .. ${questionEnd.join(' ')}`
  while (round.question.startsWith(' ')) {
    round.question = round.question.slice(1)
  }

  return round
}

const gameProgressionType = {
  minNum: 1,
  maxNum: 100,
  roundFunc: getRoundProgression,
  message: 'What number is missing in the progression?',
}

const playGameProgression = () => {
  playGame(gameProgressionType)
}

export default playGameProgression
