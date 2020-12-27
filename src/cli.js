import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('Do you mind giving me your name? ');
  console.log(`Good day, ${name}!`);
};
