const { getRandomInt } = require('../utils');
const game = require('..');

const DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';

const getQuestion = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return {
    question: number,
    correctAnswer,
  };
};

module.exports = () => game(getQuestion, DESCRIPTION);
