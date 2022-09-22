import getRandomNum from '../helper.js';
import { countRounds } from '../index.js';

export const gameQuestion = 'What is the result of the expression?';
const symbols = ['*', '-', '+'];
const getExpression = () => {
  const firstNum = getRandomNum(1, 100);
  const secondNum = getRandomNum(1, 100);
  const symbol = symbols[getRandomNum(0, symbols.length - 1)];
  return { firstNum, secondNum, symbol };
};
const calculate = () => {
  const { firstNum, secondNum, symbol } = getExpression();
  const question = `${firstNum} ${symbol} ${secondNum}`;
  let rightAnswer;
  if (symbol === '*') {
    rightAnswer = firstNum * secondNum;
  } else if (symbol === '+') {
    rightAnswer = firstNum + secondNum;
  } else if (symbol === '-') {
    rightAnswer = firstNum - secondNum;
  }
  return { question, rightAnswer };
};
export const getQuestionAndAnswer = () => {
  const questionAndResult = [];
  for (let i = 0; i < countRounds; i += 1) {
    const { question, rightAnswer } = calculate();
    questionAndResult.push([question, rightAnswer]);
  }
  return questionAndResult;
};
