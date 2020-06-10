const { getRandomInt } = require('../utils');
const play = require('..');

const DESCRIPTION = 'What number is missing in this progression?';
const PROGRESSION_LENGTH = 10;
const MAX_STEP_DISTANCE = 10;

const getProgression = (start, step) => {
  const res = [];
  for (let i = 0; i < PROGRESSION_LENGTH; i += 1) {
    res.push(start + step * i);
  }

  return res;
};

const getQuestionAndAnswer = () => {
  const progression = getProgression(getRandomInt(1, 100), getRandomInt(1, MAX_STEP_DISTANCE));
  const answerIndex = getRandomInt(0, progression.length - 1);
  const answer = progression[answerIndex];
  progression[answerIndex] = '..';

  return {
    question: progression.join(' '),
    correctAnswer: answer.toString(),
  };
};

module.exports = () => play(getQuestionAndAnswer, DESCRIPTION);
