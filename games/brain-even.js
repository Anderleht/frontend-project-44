import { getRandomNum } from '../src/index.js';

const isNumEven = () => {
  const resultArray = [];
  for (let i = 0; i <= 3; i += 1) {
    const randomNum = getRandomNum(1, 100);
    if (randomNum % 2 === 0) {
      resultArray.push(randomNum, 'yes');
    } else if (randomNum % 2 !== 0) {
      resultArray.push(randomNum, 'no');
    }
  }
  return resultArray;
};
export default isNumEven;
