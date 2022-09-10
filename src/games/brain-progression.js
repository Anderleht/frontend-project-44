import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gamerule = 'What number is missing in the progression?';
const getProgression = () => {
  let begin = getRandomNum(1, 15);
  const end = getRandomNum(40, 80);
  const step = getRandomNum(3, 10);
  const array = [];
  while (begin <= end) {
    array.push(begin);
    begin += step;
  }
  return array;
};
export const getQuestion = () => {
  const resultArray = [];
  let result;
  for (let i = 0; i < gameIterations; i += 1) {
    let progression = getProgression();
    const index = getRandomNum(1, progression.length - 1);
    result = progression[index];
    progression[index] = '..';
    progression = progression.join(' ');
    const playrule = `${progression}`;
    resultArray.push(playrule, result);
  }
  return resultArray;
};
