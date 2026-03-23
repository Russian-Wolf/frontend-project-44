import { getName, getInput } from './cli.js'

/**
 * Plays one round of given game type and returns results of that round.
 * @param {Object} gameType Game parameters Object.
 * @returns {Object} Round results Object.
 */
const playRound = (gameType) => {
  const round = gameType.roundFunc()
  console.log(`Question: ${round.question}`)
  round.input = getInput('Your answer: ')
  round.win = round.input === round.answer
  return round
}

/**
 * Welcomes the user and plays up to 3 rounds of given game type.
 * @param {Object} gameType
 */
const playGame = (gameType) => {
  console.log('Welcome to the Brain Games!')
  const name = getName()
  console.log(`Hello, ${name}!`)
  console.log(gameType.message)
  let wins = 0
  const winText = 'Correct!'

  while (wins < 3) {
    let roundResult = playRound(gameType)
    if (roundResult.win) {
      console.log(winText)
      wins += 1
    }
    else {
      const loseText = `'${roundResult.input}' is wrong answer ;(. Correct answer was '${roundResult.answer}'.`
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

export default playGame
