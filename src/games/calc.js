const { getRandomInt } = require('../utils');
const game = require('..');

const DESCRIPTION = 'What is the result of the expression?';

const Operators = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': null,
};


const getQuestion = () => {
  const availibleOperator = Object.keys(Operators);
  const operator = availibleOperator[getRandomInt(0, availibleOperator.length - 1)];
  const operand1 = getRandomInt(1, 100);
  const operand2 = getRandomInt(1, 100);

  if (operator === '/') {
    const result = operand1 * operand2;
    return {
      question: `${result} ${operator} ${operand2}`,
      correctAnswer: operand1.toString(),
    };
  }

  return {
    question: `${operand1} ${operator} ${operand2}`,
    correctAnswer: Operators[operator](operand1, operand2).toString(),
  };
};


module.exports = () => game(getQuestion, DESCRIPTION);
