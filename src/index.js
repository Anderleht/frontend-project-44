import readlineSync from 'readline-sync';
import UserName from './cli.js';

export const gameIterations = 3;
export const GetanAnswer = (rule1, rule2) => {
  console.log(rule1);
  let indexForGameRule = 0;
  let indexForResult = 1;
  for (let i = 0; i < gameIterations; i += 1) {
    const gameQuestion = rule2[indexForGameRule];
    const userAnswer = String(rule2[indexForResult]);
    console.log(`Question: ${gameQuestion}`);
    const answeringame = readlineSync.question('Your answer: ');
    indexForGameRule += 2;
    indexForResult += 2;
    if (String(answeringame) === userAnswer) {
      console.log('Correct!');
    } else if (answeringame !== userAnswer) {
      console.log(`'${answeringame}' is wrong answer ;(. Correct answer was '${userAnswer}'.`);
      console.log(`Let's try again, ${UserName}!`);
      process.exit();
    }
  }
  console.log(`Congratulations, ${UserName}!`);
};
