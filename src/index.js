#!/usr/bin/env node
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import brainGames from '../bin/games/brain-games.js';
import brainCalc from '../bin/games/brain-calc.js';
import brainEven from '../bin/games/brain-even.js';
import brainGcd from '../bin/games/brain-gcd.js';
import brainPrime from '../bin/games/brain-prime.js';
import brainProgression from '../bin/games/brain-progression.js';

const gamesList = ['brain-even', 'brain-calc', 'brain-gcd', 'brain-progression', 'brain-prime'];

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('What is your name? ');
  console.log(`Good day, ${name}!`);
  gamesList.forEach((game) => console.log(game));
  const game = readlineSync.question('Which game would you like to play? ');
  switch (game) {
    case ('brain-games'):
      brainGames();
      break;
    case ('brain-even'):
      brainEven();
      break;
    case ('brain-calc'):
      brainCalc();
      break;
    case ('brain-gcd'):
      brainGcd();
      break;
    case ('brain-progression'):
      brainProgression();
      break;
    case ('brain-prime'):
      brainPrime();
      break;
    default:
      console.log("There is no such game! I'm sorry");
      break;
  }
};

startGame();
