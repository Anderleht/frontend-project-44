import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const question = getRandomNum(1, 100);
    const rightAnswer = (question % 2 === 0) ? 'yes' : 'no';
    resultArray.push(question, rightAnswer);
  }
  return resultArray;
};
