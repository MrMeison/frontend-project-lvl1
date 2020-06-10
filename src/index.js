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
      console.log(`Congratulations, ${userName}!`);
      return;
    }

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer === userAnswer) {
      console.log('Correct!');
      iter(count - 1);
      return;
    }

    console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}".`);
    console.log(`Let's try again, ${userName}!`);
  };

  iter();
};
