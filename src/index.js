import { sayWelcome, getInput } from './cli.js'

/**
 * Welcomes the user and plays up to 3 rounds of given game type.
 * @param {Object} gameType
 */
export const playGame = (gameTypeName) => {
  const name = sayWelcome()
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let wins = 0
  const winText = 'Correct!'

  while (wins < 3) {
    let roundResult = playRound(gameTypeName)
    if (roundResult.win) {
      console.log(winText)
      wins += 1
    }
    else {
      const loseText = `${roundResult.answer} is wrong answer ;(. Correct answer was ${roundResult.correctAnswer}.`
      console.log(loseText)
      console.log(`Let's try again, ${name}!`)
      return false
    }
  }
  if (wins >= 3) {
    console.log(`Congratulations, ${name}!`)
    return true
  }
}

/**
 * Plays one round of given game type and returns results of that round.
 * @param {Object} gameType Game parameters Object.
 * @returns {Object} Round results Object.
 */
export const playRound = (gameType) => {
  const roundResult = {
    win: false,
    answer: 'Not provided',
    correctAnswer: 'None',
  }

  const seed = Math.random()
  const maxNum = gameType.maxNum

  roundResult.correctAnswer = gameType.answerFunc(seed, maxNum)
  console.log(`Question: ${gameType.questionFunc(seed, maxNum)}`)
  roundResult.answer = getInput('Your answer: ')

  roundResult.win = roundResult.answer === roundResult.correctAnswer

  return roundResult
}
