import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { development as packages, log } from './constants';
import { printWelcomeMessage } from './utilities';

export const development = () => {
  printWelcomeMessage('Development mode');

  const inquire = (answers: any) => {
    execSync(`lerna run start ${answers.inquire.length > 1 ? `--parallel --scope={${answers.inquire}}` : `--scope=${answers.inquire}`}`, { stdio: 'inherit' });
  };

  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'inquire',
        message: 'What packages would you like to run?',
        choices: packages,
      },
    ])
    .then((answers: any) => inquire(answers))
    .catch((error: any) => log(error));
};
