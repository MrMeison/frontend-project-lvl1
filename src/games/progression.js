const { getRandomInt } = require('../utils');
const game = require('..');

const DESCRIPTION = 'What number is missing in this progression?';
const PROGRESSION_LENGTH = 10;

const getProgression = () => {
  const start = getRandomInt(1, 100);
  const step = getRandomInt(1, PROGRESSION_LENGTH);
  const res = [start];
  for (let i = 0; i < 10; i += 1) {
    res.push(res[res.length - 1] + step);
  }

  return res;
};

const getQuestion = () => {
  const progression = getProgression();
  const answerIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[answerIndex];
  progression[answerIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: answer.toString(),
  };
};

module.exports = () => game(getQuestion, DESCRIPTION);
