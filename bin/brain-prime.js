/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getNumber from '../src/randomNumber.js';
import isPrime from '../src/isPirme.js';

const brainPrime = (name) => {
  console.log(`Welcome to the brain-prime game, ${name}!`);
  // const name = readlineSync.question('Do you mind giving me your name? ');
  console.log('Answer "yes" if the number is prime, otherwise answer "no".');

  let correctAnswer;
  let round = 1;
  while (round <= 3) {
    const number = getNumber(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswer = isPrime(number) === true ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default brainPrime;
