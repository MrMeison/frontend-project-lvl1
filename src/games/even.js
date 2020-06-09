const { getRandomInt } = require('../utils');
const play = require('..');

const DESCRIPTION = 'Answer "yes" if number even otherwise answer "no".';

const getQuestionAndAnswer = () => {
  const number = getRandomInt(1, 100);
  const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

  return {
    question: number.toString(),
    correctAnswer,
  };
};

module.exports = () => play(getQuestionAndAnswer, DESCRIPTION);
