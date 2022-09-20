import getRandomNum from '../helper.js';
import { counRounds } from '../index.js';

export const gameQuestion = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};
export const getQuestionAndAnswer = () => {
  const questionAndResult = [];
  for (let i = 0; i < counRounds; i += 1) {
    const question = getRandomNum(3, 50);
    const rightAnswer = isPrime(question) ? 'yes' : 'no';
    questionAndResult.push(question, rightAnswer);
  }
  return questionAndResult;
};
