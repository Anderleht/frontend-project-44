import readlineSync from 'readline-sync';
import UserName from './cli.js';

export const getRandomNum = (min, max) => {
  const minnum = Math.ceil(min);
  const maxnum = Math.floor(max);
  return Math.floor(Math.random() * (maxnum - minnum)) + minnum;
};
export const gamePlay = (rule1, rule2) => {
  console.log(rule1);
  let indexForGameRule = 0;
  let indexForResult = 1;
  for (let i = 0; i < 3; i += 1) {
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
