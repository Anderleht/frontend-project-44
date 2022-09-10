import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gamerule = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};
export const getQuestion = () => {
  let result;
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const playrule = `${firstnum} ${secondnum}`;
    result = getGcd(firstnum, secondnum);
    resultArray.push(playrule, result);
  }
  return resultArray;
};
