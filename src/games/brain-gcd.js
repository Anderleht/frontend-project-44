import getRandomNum from '../helper.js';
import { counRounds } from '../index.js';

export const gameQuestion = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < counRounds; i += 1) {
    const firstNum = getRandomNum(1, 100);
    const secondNum = getRandomNum(1, 100);
    const question = `${firstNum} ${secondNum}`;
    const rightAnswer = getGcd(firstNum, secondNum);
    resultArray.push(question, rightAnswer);
  }
  return resultArray;
};
