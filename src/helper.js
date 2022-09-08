const getRandomNum = (min, max) => {
  const minnum = Math.ceil(min);
  const maxnum = Math.floor(max);
  return Math.floor(Math.random() * (maxnum - minnum)) + minnum;
};
export default getRandomNum;
