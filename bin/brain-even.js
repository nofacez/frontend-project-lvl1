#!/usr/bin/env node
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getNumber from '../src/randomNumber.js';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Do you mind giving me your name? ');
  console.log(`Good day, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswer;
  let round = 1;
  while (round <= 3) {
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

brainEven();
