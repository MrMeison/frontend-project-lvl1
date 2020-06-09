const { getRandomInt } = require('../utils');
const play = require('..');

const DESCRIPTION = 'Is this number prime?';

const prime = (num) => {
  if (num < 2) {
    return false;
  }
  let i = 2;
  while (i < num) {
    if (num % i === 0) {
      return false;
    }
    i += 1;
  }
  return true;
};

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);

  return {
    question: number.toString(),
    correctAnswer: prime(number) ? 'yes' : 'no',
  };
};

module.exports = () => play(getQuestionAndAnswer, DESCRIPTION);
