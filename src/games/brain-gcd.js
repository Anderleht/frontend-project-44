import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gameQuestion = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const question = `${firstnum} ${secondnum}`;
    const rightAnswer = getGcd(firstnum, secondnum);
    resultArray.push(question, rightAnswer);
  }
  return resultArray;
};
