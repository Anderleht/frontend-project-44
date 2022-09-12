import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gameQuestion = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const symbol = symbols[getRandomNum(0, symbols.length - 1)];
    const question = `${firstnum} ${symbol} ${secondnum}`;
    let rightAnswer;
    if (symbol === '*') {
      rightAnswer = firstnum * secondnum;
    } else if (symbol === '+') {
      rightAnswer = firstnum + secondnum;
    } else if (symbol === '-') {
      rightAnswer = firstnum - secondnum;
    }
    resultArray.push(question, rightAnswer);
  }

  return resultArray;
};
