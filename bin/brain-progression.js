/* eslint-disable import/extensions */
import readlineSync from 'readline-sync';
import getNumber from '../src/randomNumber.js';

const brainProgression = () => {
  console.log('Welcome to the Progression game!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let correctAnswer;
  let round = 1;
  let progression = [];
  const maxRounds = 3;
  while (round <= maxRounds) {
    const progressionLength = getNumber(10, 5);
    const missingElement = getNumber(progressionLength);
    const progressionDifference = getNumber(10, 1);
    progression[0] = getNumber(100);

    for (let i = 1; i <= progressionLength; i += 1) {
      progression[i] = progression[i - 1] + progressionDifference;
    }
    correctAnswer = progression[missingElement].toString();
    progression[missingElement] = '..';
    const res = progression.join(' ');
    console.log(`Question: ${res}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}". Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    progression = [];
    round += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

brainProgression();
export default brainProgression;
