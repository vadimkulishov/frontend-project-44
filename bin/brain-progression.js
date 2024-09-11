
import readlineSync from 'readline-sync';


const generateProgression = (length, step, start) => {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start + i * step);
  }
  return progression;
};

const getRandomIndex = (length) => Math.floor(Math.random() * length);

// Запуск игры
const playProgressionGame = () => {
  console.log('What number is missing in the progression?');
  
  const length = 10; // Длина прогрессии
  const step = Math.floor(Math.random() * 10) + 1;
  const start = Math.floor(Math.random() * 10);

  const progression = generateProgression(length, step, start);
  const hiddenIndex = getRandomIndex(length);
  const hiddenValue = progression[hiddenIndex];
  
  progression[hiddenIndex] = '..';

  console.log(`Question: ${progression.join(' ')}`);

  const userAnswer = readlineSync.question('Your answer: ');

  if (parseInt(userAnswer, 10) === hiddenValue) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${hiddenValue}'.`);
    console.log('Let\'s try again!');
  }
};

export default playProgressionGame;
