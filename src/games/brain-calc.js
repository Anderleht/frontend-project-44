import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gamerule = 'What is the result of the expression?';
const getRandomSymbol = (arr) => {
  const index = getRandomNum(0, 3);
  return arr[index];
};
const symbols = ['+', '-', '*'];
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const symbol = getRandomSymbol(symbols);
    const playrule = `${firstnum} ${symbol} ${secondnum}`;
    let result;
    if (symbol === '*') {
      result = firstnum * secondnum;
    } else if (symbol === '+') {
      result = firstnum + secondnum;
    } else if (symbol === '-') {
      result = firstnum - secondnum;
    }
    resultArray.push(playrule, result);
  }

  return resultArray;
};
