import { getRandomNum } from '../src/index.js';

const NOD = (x, y) => {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
};
const gameGcd = () => {
  let result;
  const resultArray = [];
  for (let i = 0; i < 3; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const playrule = `${firstnum} ${secondnum}`;
    result = NOD(firstnum, secondnum);
    resultArray.push(playrule, result);
  }
  return resultArray;
};
export default gameGcd;
