#!/usr/bin/env node
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getNumber from '../src/randomNumber.js';
import getSolution from '../src/calcSolution.js';

const brainCalc = (name) => {
  console.log('Welcome to the Calculator game!');
  // const name = readlineSync.question('Do you mind giving me your name? ');
  console.log(`Good day, ${name}!`);
  console.log('What is the result of the expression?');
  const operators = ['+', '-', '*'];
  let correctAnswer;
  let round = 1;
  let operator;
  while (round <= 3) {
    const firstNumber = getNumber(100);
    const secondNumber = getNumber(100);
    operator = operators[Math.floor(Math.random() * operators.length)];
    console.log(`Question: ${firstNumber} ${operator} ${secondNumber}`);
    const answer = readlineSync.question('Your answer: ');
    correctAnswer = getSolution(firstNumber, secondNumber, operator);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    round += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

// brainCalc();

export default brainCalc;
