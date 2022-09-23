import getRandomNum from '../helper.js';
import gamePlay from '../index.js';

const description = 'What number is missing in the progression?';
const getProgression = () => {
  let begin = getRandomNum(1, 15);
  const end = getRandomNum(50, 90);
  const step = getRandomNum(3, 10);
  const array = [];
  while (begin <= end) {
    array.push(begin);
    begin += step;
  }
  return array;
};
const getQuestionAndAnswer = () => {
  const progression = getProgression();
  const index = getRandomNum(1, progression.length - 1);
  const rightAnswer = progression[index];
  progression[index] = '..';
  const question = progression.join(' ');
  return { question, rightAnswer };
};
export default () => gamePlay(description, getQuestionAndAnswer);
