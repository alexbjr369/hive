import { execSync } from 'child_process';
import inquirer from 'inquirer';
import { log, production as packages } from './constants';
import { printWelcomeMessage } from './utilities';

export const production = () => {
  printWelcomeMessage('Production mode');

  const inquire = (answers: any) => {
    execSync(`lerna run build ${answers.inquire.length > 1 ? `--scope={${answers.inquire}}` : `--scope=${answers.inquire}`}`, {
      stdio: 'inherit',
    });
  };

  inquirer
    .prompt([
      {
        type: 'checkbox',
        name: 'inquire',
        message: 'What packages would you like to build?',
        choices: packages,
      },
    ])
    .then((answers: any) => inquire(answers))
    .catch((error: any) => log(error));
};
