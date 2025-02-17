// Игра - калькулятор:

import getRandomNumber from '../utils.js';
import startGame from '../index.js';

const getResultMathExpressions = (mathOperation, randomNumberOne, randomNumberTwo) => {
  switch (mathOperation) {
    case '+':
      return randomNumberOne + randomNumberTwo;
    case '-':
      return randomNumberOne - randomNumberTwo;
    case '*':
      return randomNumberOne * randomNumberTwo;
    default:
      return 'Что-то не так';
  }
};

const generateCalcGameStage = () => {
  const maxRandomNumber = 11;
  const symbolsOperators = ['+', '-', '*'];

  const randomNumberOne = getRandomNumber(maxRandomNumber);
  const randomNumberTwo = getRandomNumber(maxRandomNumber);
  const mathOperation = symbolsOperators[getRandomNumber(symbolsOperators.length)];

  const question = `Question: ${randomNumberOne} ${mathOperation} ${randomNumberTwo}`;

  const answerForExpression = String(getResultMathExpressions(
    mathOperation,
    randomNumberOne,
    randomNumberTwo,
  ));

  return [question, answerForExpression];
};

const startCalcGame = () => {
  const description = 'What is the result of the expression?';
  startGame(generateCalcGameStage, description);
};

export default startCalcGame;
