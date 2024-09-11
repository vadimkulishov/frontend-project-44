#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100) + 1;

const gcd = (a, b) => {
    if (b === 0) {
        return a;
    }
    return gcd(b, a % b);
};

const brainGcdGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Find the greatest common divisor of given numbers.');

    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const num1 = getRandomNumber();
        const num2 = getRandomNumber();
        console.log(`Question: ${num1} ${num2}`);
        const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);
        
        const correctAnswer = gcd(num1, num2);

        if (userAnswer !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }

    console.log(`Congratulations, ${userName}!`);
};

brainGcdGame();

