const readlineSync = require('readline-sync');

const STEP_COUNT = 3;

module.exports = (getQuestion, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);

  const userName = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${userName}!\n`);

  const iter = (count = STEP_COUNT) => {
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
    return console.log(`Wrong answer. \nLet's try again, ${userName}!`);
  };

  iter();
};
