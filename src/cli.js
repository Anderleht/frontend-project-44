import * as readline from "readline-sync";
console.log('Welcome to the Brain Games!'); 
export const answer = await readline.question('May I have your name? ');
console.log(`Hello, ${answer}!`);