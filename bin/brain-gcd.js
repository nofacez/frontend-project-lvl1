/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import gcd from '../src/gcd.js';
import getNumber from '../src/randomNumber.js';

const getGcd = () => {
  console.log('Welcome to the Find-Greatest-Common-Divisor game!');
  const name = readlineSync.question('Do you mind giving me your name? ');
  console.log('Find the greatest common divisor of given numbers.');
  let correctAnswer;
  let round = 1;
  while (round <= 3) {
    const firstNumber = getNumber(100);
    const secondNumber = getNumber(100);
    console.log(`Question: ${firstNumber} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswer = gcd(firstNumber, secondNumber).toString();
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

getGcd();
export default getGcd;
