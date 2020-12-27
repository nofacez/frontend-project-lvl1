#!/usr/bin/env node
/* eslint-disable import/extensions */
import _ from 'lodash';
import readlineSync from 'readline-sync';

const brainEven = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Do you mind giving me your name? ');
  console.log(`Good day, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const questions = [15, 6, 7];
  let lost;
  let correctAnswer;
  // eslint-disable-next-line consistent-return
  _.forEach(questions, (item) => {
    console.log(`Question: ${item}`);
    const answer = readlineSync.question('Your answer: ');

    correctAnswer = item % 2 === 0 ? 'yes' : 'no';

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      lost = true;
      return false;
    }
    console.log('Correct!');
  });
  if (lost) {
    return;
  }
  console.log(`Congratulations, ${name}!`);
};

brainEven();
