import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const question = getRandomNum(3, 50);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    resultArray.push(question, rightAnswer);
  }
  return resultArray;
};
