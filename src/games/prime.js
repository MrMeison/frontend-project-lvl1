const { getRandomInt } = require('../utils');
const play = require('..');

const DESCRIPTION = 'Is this number prime?';

const prime = (num) => {
  if (num < 2) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
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
