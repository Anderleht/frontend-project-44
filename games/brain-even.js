const getRandomNum = (min, max) => {
  const minnum = Math.ceil(min);
  const maxnum = Math.floor(max);
  return Math.floor(Math.random() * (maxnum - minnum)) + minnum;
};
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
