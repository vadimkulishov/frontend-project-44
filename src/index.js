// src/index.js
import readlineSync from 'readline-sync';

export const greetUser = () => {
    console.log('Welcome to the Brain Games!');
    const userName = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${userName}!`);
    return userName;
};

export const askQuestion = (question) => {
    console.log(`Question: ${question}`);
    return readlineSync.question('Your answer: ');
};

export const playGame = (gameRules) => {
    const userName = greetUser();
    console.log(gameRules.prompt);

    for (let round = 0; round < 3; round++) {
        const { question, answer } = gameRules.getQuestion();
        const userAnswer = askQuestion(question);
        
        if (userAnswer !== String(answer)) {
            console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
            console.log(`Let's try again, ${userName}!`);
            return;
        }
        console.log('Correct!');
    }
    console.log(`Congratulations, ${userName}!`);
};
