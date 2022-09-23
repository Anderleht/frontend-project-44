import getRandomNum from '../helper.js';
import gamePlay from '../index.js';

const description = 'What is the result of the expression?';

const symbols = ['*', '-', '+'];

const calculate = (firstNum, secondNum, symbol) => {
  let result;
  if (symbol === '*') {
    result = firstNum * secondNum;
  } else if (symbol === '+') {
    result = firstNum + secondNum;
  } else if (symbol === '-') {
    result = firstNum - secondNum;
  }
  return result;
};
const getQuestionAndAnswer = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const symbol = symbols[getRandomNum(0, symbols.length - 1)];
  const question = `${firstNum} ${symbol} ${secondNum}`;
  const rightAnswer = calculate(firstNum, secondNum, symbol);
  return { question, rightAnswer };
};
export default () => gamePlay(description, getQuestionAndAnswer);
