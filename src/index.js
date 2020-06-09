const readlineSync = require('readline-sync');

const STEPS_COUNT = 3;

module.exports = (getQuestion, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  const iter = (count = STEPS_COUNT) => {
    const { question, correctAnswer } = getQuestion();

    if (count === 0) {
      return console.log(`Congratulations, ${userName}!`);
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      return iter(count - 1);
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${userName}!`);
  };

  iter();
};
