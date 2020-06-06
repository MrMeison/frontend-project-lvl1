const { getRandomInt } = require('../utils');
const game = require('..');

const DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const gcd = (number1, number2) => {
  let r = 0;
  let n = number1;
  let m = number2;

  while (n !== 0) {
    r = m % n;
    m = n;
    n = r;
  }
  return m;
};

const getQuestion = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  return {
    question: `${number1} ${number2}`,
    correctAnswer: gcd(number1, number2).toString(),
  };
};

module.exports = () => game(getQuestion, DESCRIPTION);
