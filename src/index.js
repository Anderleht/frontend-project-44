import readlineSync from 'readline-sync';
import userName from './cli.js';

export const gameIterations = 3;
export const getAnswer = (rule1, rule2) => {
  console.log(rule1);
  let indexForGameRule = 0;
  let indexForResult = 1;
  for (let i = 0; i < gameIterations; i += 1) {
    const gameQuestion = rule2[indexForGameRule];
    const userAnswer = String(rule2[indexForResult]);
    console.log(`Question: ${gameQuestion}`);
    const answerInGame = readlineSync.question('Your answer: ');
    indexForGameRule += 2;
    indexForResult += 2;
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
