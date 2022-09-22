import getRandomNum from '../helper.js';
import { countRounds } from '../index.js';

export const gameQuestion = 'Answer "yes" if the number is even, otherwise answer "no"';
const isNumEven = (num) => (num % 2 === 0 ? 'yes' : 'no');
export const getQuestionAndAnswer = () => {
  const questionAndResult = [];
  for (let i = 0; i < countRounds; i += 1) {
    const question = getRandomNum(1, 100);
    const rightAnswer = isNumEven(question);
    questionAndResult.push([question, rightAnswer]);
  }
  return questionAndResult;
};
