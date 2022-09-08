import getRandomNum from '../helper.js';

const getGcd = (x, y) => {
  if (y > x) return getGcd(y, x);
  if (!y) return x;
  return getGcd(y, x % y);
};
const gameGcd = () => {
  let result;
  const resultArray = [];
  for (let i = 0; i < 3; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const playrule = `${firstnum} ${secondnum}`;
    result = getGcd(firstnum, secondnum);
    resultArray.push(playrule, result);
  }
  return resultArray;
};
export default gameGcd;
