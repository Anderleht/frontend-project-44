import { getRandomNum } from '../src/index.js';

const brainprime = () => {
  const resultArray = [];
  let result;
  let tester = 1;
  let amountofdiv = 0;
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNum(2, 50);
    for (let b = 2; b < number; b += 1) {
      tester += 1;
      if (number % tester === 0) {
        amountofdiv += 1;
      }
      if (amountofdiv === 0) {
        result = 'yes';
      } else {
        result = 'no';
      }
    }
    resultArray.push(number, result);
    tester = 1;
    amountofdiv = 0;
  }
  return resultArray;
};
export default brainprime;
