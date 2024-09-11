// src/games/calc.js
import { randomInt } from 'crypto';

const operations = ['+', '-', '*'];

const calculateAnswer = (num1, num2, operation) => {
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '*': return num1 * num2;
    }
};

export const gameRules = {
    prompt: 'What is the result of the expression?',
    getQuestion: () => {
        const num1 = randomInt(1, 100);
        const num2 = randomInt(1, 100);
        const operation = operations[randomInt(0, operations.length)];
        const question = `${num1} ${operation} ${num2}`;
        const answer = calculateAnswer(num1, num2, operation);
        return { question, answer };
    }
};
