import getRandomNum from '../helper.js';
import gamePlay from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';
const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};
const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const question = `${firstNum} ${secondNum}`;
  const rightAnswer = getGcd(firstNum, secondNum);
  return { question, rightAnswer };
};
export default () => gamePlay(description, getQuestionAndAnswer);
