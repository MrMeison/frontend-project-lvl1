const { getRandomInt } = require('../utils');
const play = require('..');

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }

  return gcd(number2, number1 % number2);
};

const getQuestionAndAnswer = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: gcd(number1, number2).toString(),
  };
};

module.exports = () => play(getQuestionAndAnswer, DESCRIPTION);
