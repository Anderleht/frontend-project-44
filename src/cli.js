import * as readline from 'readline-sync';

console.log('Welcome to the Brain Games!');
const answer = await readline.question('May I have your name? ');
export default answer;
