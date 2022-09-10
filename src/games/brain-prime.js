import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gamerule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  let result;
  let tester = 1;
  let amountofdiv = 0;
  for (let i = 2; i < num; i += 1) {
    tester += 1;
    if (num % tester === 0) {
      amountofdiv += 1;
    }
    if (amountofdiv === 0) {
      result = 'yes';
    } else {
      result = 'no';
    }
  }
  return result;
};
export const getQuestion = () => {
  const resultArray = [];
  let result;
  for (let i = 0; i < gameIterations; i += 1) {
    const number = getRandomNum(3, 50);
    result = isPrime(number);
    resultArray.push(number, result);
  }
  return resultArray;
};
