const { getRandomInt } = require('../utils');
const game = require('..');

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

const getQuestion = () => {
  const question = getRandomInt(1, 100);

  return {
    question,
    correctAnswer: prime(question) ? 'yes' : 'no',
  };
};

module.exports = () => game(getQuestion, DESCRIPTION);
