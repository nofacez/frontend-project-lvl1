#!/usr/bin/env node
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getNumber from '../../src/randomNumber.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswer;
  let round = 1;
  const maxRounds = 3;
  while (round <= maxRounds) {
    const number = getNumber(100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

// brainEven();
brainEven();
export default brainEven;
