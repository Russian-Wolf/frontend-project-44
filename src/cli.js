import readlineSync from 'readline-sync'

/** Returns input from terminal. Can be provided with a question that goes before input field.
 *
 * @param {string} question Question for user to answer. Input field will be right next to that string, like that: questionAnswer, 'Name? ' -> Name? Michael
 */
export const getInput = (question = '') => {
  const answer = readlineSync.question(question)
  return answer
}

/**
 *
 */
export const getName = () => {
  const nameQuestion = 'May I have your name? '
  const name = getInput(nameQuestion)
  return name
}

export const sayWelcome = () => {
  console.log('Welcome to the Brain Games!')
  const name = getName()
  console.log(`Hello, ${name}!`)
}
