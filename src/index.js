#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import brainCalc from '../bin/brain-calc.js';
import brainEven from '../bin/brain-even.js';

const gamesList = ['brain-even', 'brain-calc'];

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Good day, ${name}!`);
  gamesList.forEach((game) => console.log(game));
  const game = readlineSync.question('Which game would you like to play? ');
  switch (game) {
    case ('brain-even'):
      brainEven(name);
      break;
    case ('brain-calc'):
      brainCalc(name);
      break;
    default:
      console.log("There is no such game! I'm sorry");
      break;
  }
};

startGame();
