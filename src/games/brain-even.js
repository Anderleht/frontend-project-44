import getRandomNum from '../helper.js';
import gamePlay from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isNumEven = (num) => num % 2 === 0;
const getQuestionAndAnswer = () => {
  const question = getRandomNum(1, 100);
  const rightAnswer = isNumEven(question) ? 'yes' : 'no';
  return { question, rightAnswer };
};
export default () => gamePlay(description, getQuestionAndAnswer);
