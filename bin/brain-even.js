#!/usr/bin/env node

import readlineSync from 'readline-sync';

const getRandomNumber = () => Math.floor(Math.random() * 100);

const isEven = (number) => number % 2 === 0;

const brainEvenGame = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    console.log('Answer "yes" if the number is even, otherwise answer "no".');

    let correctAnswersCount = 0;

    while (correctAnswersCount < 3) {
        const number = getRandomNumber();
        console.log(`Question: ${number}`);
        const userAnswer = readlineSync.question('Your answer: ');

        const correctAnswer = isEven(number) ? 'yes' : 'no';

        if (userAnswer.toLowerCase() !== correctAnswer) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }

        console.log('Correct!');
        correctAnswersCount += 1;
    }

    console.log(`Congratulations, ${userName}!`);
};

brainEvenGame();