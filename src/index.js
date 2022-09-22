import readlineSync from 'readline-sync';
import userName from './cli.js';

export const countRounds = 3;
export const getAnswer = (description, rounds) => {
  console.log(description);
  for (const [question, answer] of rounds) {
    const gameQuestion = question;
    const userAnswer = String(answer);
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
