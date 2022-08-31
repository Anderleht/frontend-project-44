import readlineSync from 'readline-sync';
import UserName from '../src/cli.js';

const getRandomNum = (min, max) => {
  const minnum = Math.ceil(min);
  const maxnum = Math.floor(max);
  return Math.floor(Math.random() * (maxnum - minnum)) + minnum;
};
const isNumEven = (num1, num2) => {
  console.log(`Hello, ${UserName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = getRandomNum(num1, num2);
    console.log(`Question: ${randomNum}`);
    const answeringame = readlineSync.question('Your answer:');
    if (randomNum % 2 === 0) {
      if (answeringame !== 'yes') {
        console.log(`'${answeringame}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again,${UserName}`);
        process.exit();
      } else if (answeringame === 'yes') {
        console.log('Correct!');
      }
    } else if (randomNum % 2 !== 0) {
      if (answeringame !== 'no') {
        console.log(`${answeringame}' is wrong answer ;(. Correct answer was 'no'.`);
        console.log(`Let's try again, ${UserName}`);
        process.exit();
      } else if (answeringame === 'no') {
        console.log('Correct!');
      }
    }
  }
  console.log(`Congratulations, ${UserName}!`);
};
isNumEven(1, 100);
