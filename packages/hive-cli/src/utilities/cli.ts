import inquirer from 'inquirer';
import { firstInquireChoices, log, secondInquireChoices, thirdInquireChoices } from './constants';
import { printMessage, processInquire } from './utilities';

export const cli = async () => {
  printMessage('welcome');

  inquirer
    .prompt([
      {
        type: 'list',
        name: 'firstInquire',
        message: 'Which CSS framework would you like to use?',
        choices: firstInquireChoices,
      },
      {
        type: 'list',
        name: 'secondInquire',
        message: 'Which Hive UI framework platform would you like to use?',
        choices: secondInquireChoices,
      },
    ])
    .then(async (answer1: any) => {
      const { secondInquire } = answer1;

      if (secondInquire === 'Web Components') {
        inquirer
          .prompt({
            type: 'list',
            name: 'thirdInquire',
            message: 'Which JavaScript framework are you using?',
            choices: thirdInquireChoices,
          })
          .then(async (answer2: any) => {
            await processInquire(answer1, answer2);
          })
          .catch((error: any) => log(error));
      } else {
        await processInquire(answer1, { thirdInquire: '' });
      }
    })
    .catch((error: any) => log(error));
};
