import getRandomNum from '../helper.js';
import { gameIterations } from '../index.js';

export const gamerule = 'Answer "yes" if the number is even, otherwise answer "no"';
export const getQuestion = () => {
  const resultArray = [];
  for (let i = 0; i < gameIterations; i += 1) {
    const randomNum = getRandomNum(1, 100);
    if (randomNum % 2 === 0) {
      resultArray.push(randomNum, 'yes');
    } else if (randomNum % 2 !== 0) {
      resultArray.push(randomNum, 'no');
    }
  }
  return resultArray;
};
