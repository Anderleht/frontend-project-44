import readlineSync from 'readline-sync';
import userName from './cli.js';

const countRounds = 3;
export default (description, getQuestionAndAnswer) => {
  console.log(description);
  for (let i = 0; i < countRounds; i += 1) {
    const { question, rightAnswer } = getQuestionAndAnswer();
    const gameQuestion = question;
    const userAnswer = String(rightAnswer);
    console.log(`Question: ${gameQuestion}`);
    const answerInGame = readlineSync.question('Your answer: ');
    if (String(answerInGame) === userAnswer) {
      console.log('Correct!');
    } else if (answerInGame !== userAnswer) {
      console.log(`'${answerInGame}' is wrong answer ;(. Correct answer was '${userAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
