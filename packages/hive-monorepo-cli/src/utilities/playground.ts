import inquirer from 'inquirer';
import { firstInquireChoices, log, secondInquireChoices, thirdInquireChoices } from './constants';
import { printWelcomeMessage, processInquire } from './utilities';

export const playground = () => {
  printWelcomeMessage('Playground mode');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'firstInquire',
        message: 'Which environment would you like to run?',
        choices: firstInquireChoices,
      },
      {
        type: 'list',
        name: 'secondInquire',
        message: 'Which playground would tou like to run?',
        choices: secondInquireChoices,
      },
    ])
    .then((answer1: any) => {
      const { secondInquire } = answer1;

      if (secondInquire === 'Web Components') {
        inquirer
          .prompt({
            type: 'list',
            name: 'thirdInquire',
            message: 'Which JavaScript framework would tou like to run?',
            choices: thirdInquireChoices,
          })
          .then((answer2: any) => {
            processInquire(answer1, answer2);
          })
          .catch((error: any) => log(error));
      } else {
        processInquire(answer1, { thirdInquire: '' });
      }
    })
    .catch((error: any) => log(error));
};
