const getRandomNum = (min, max) => {
  const minnum = Math.ceil(min);
  const maxnum = Math.floor(max);
  return Math.floor(Math.random() * (maxnum - minnum)) + minnum;
};
const getRandomSymbol = (arr) => {
  const index = getRandomNum(0, 3);
  return arr[index];
};
const symbols = ['+', '-', '*'];
const braincalc = () => {
  const resultArray = [];
  for (let i = 0; i <= 3; i += 1) {
    const firstnum = getRandomNum(1, 100);
    const secondnum = getRandomNum(1, 100);
    const symbol = getRandomSymbol(symbols);
    const playrule = `${firstnum} ${symbol} ${secondnum}`;
    let result;
    if (symbol === '*') {
      result = firstnum * secondnum;
    } else if (symbol === '+') {
      result = firstnum + secondnum;
    } else if (symbol === '-') {
      result = firstnum - secondnum;
    }
    resultArray.push(playrule, result);
  }

  return resultArray;
};
export default braincalc;
