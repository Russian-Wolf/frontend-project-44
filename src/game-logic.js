import { sayWelcome, getInput } from './cli.js'

/**
 * Returns true if given number is even. Returns false if not even.
 * @param {number} number
 */
export const isEven = number => number % 2 === 0

/**
 * Returns random integer, up to max value.
 * @param {number} max
 */
export const getRandomInteger = (max) => {
  return Math.floor(Math.random() * max)
}

/**
 * Asks user if a number is even. If user is correct, returns true and prints winning text, otherwise prints losing text and returns false.
 */
export const playRoundEven = () => {
  const roundResult = {
    win: false,
    answer: 'Not provided',
    correctAnswer: 'None',
  }
  const maxNum = 1000
  const randomNum = getRandomInteger(maxNum)
  const evenState = isEven(randomNum)
  const winText = 'Correct!'

  roundResult.correctAnswer = evenState ? 'yes' : 'no'
  console.log(`Question: ${randomNum}`)
  roundResult.answer = getInput('Your answer: ')

  const loseText = `${roundResult.answer} is wrong answer ;(. Correct answer was ${roundResult.correctAnswer}.`

  if (roundResult.answer === roundResult.correctAnswer) {
    console.log(winText)
    return true
  }
  else {
    console.log(loseText)
    return false
  }
}

export const playGameEven = () => {
  const name = sayWelcome()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let wins = 0
  while (wins < 3) {
    if (playRoundEven()) wins += 1
    else {
      console.log(`Let's try again, ${name}!`)
      return false
    }
  }
  if (wins >= 3) {
    console.log(`Congratulations, ${name}!`)
    return true
  }
}
