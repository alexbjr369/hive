import { ThemeColors } from '@alexbjr369/hive-common';
import chalk from 'chalk';
import { execSync } from 'child_process';
import { detect } from 'detect-package-manager';
import figlet from 'figlet';
import { log, playgroundPaths } from './constants';

/**
 * Prints a predefined message in the terminal.
 * @param message The predefined message to be printed.
 */
export const printWelcomeMessage = (message: string) => {
  log(chalk.hex(ThemeColors.base)(figlet.textSync('Hive')));
  log(chalk.hex(ThemeColors.base).bold('! Just another UI framework...'));
  log(chalk.hex(ThemeColors.base).bold(`! ${message}`));
  log('');
};

/**
 * Executes a package script command depending on a given answers provided to the method.
 * @param answer1 Answers provided to the first and second inquire.
 * @param answer2 Answer provided to the third inquire.
 * @example processInquire({firstInquire: 'Development', secondInquire: 'Web Components'}, { thirdInquire: 'JavaScript' });
 */
export const processInquire = async (answer1: { firstInquire: string; secondInquire: string }, answer2?: { thirdInquire: string }) => {
  const { firstInquire, secondInquire } = answer1;
  const thirdInquire = answer2?.thirdInquire || '';

  const environment = firstInquire.toLowerCase();

  if (secondInquire === 'Web Components') {
    const secondPath = (playgroundPaths['wc'][thirdInquire.toLowerCase()] as string).concat(` && ${await managerEnvironmentCommand(environment)}`);
    execSync(secondPath, { stdio: 'inherit' });
  } else {
    const firstPath = (playgroundPaths[secondInquire.toLowerCase()] as string).concat(` && ${await managerEnvironmentCommand(environment)}`);
    execSync(firstPath, { stdio: 'inherit' });
  }
};

/**
 * Returns a package manager command depending on the package manager and environment.
 * @param environment The environment.
 * @returns The package environment.
 * @example managerEnvironmentCommand('development');
 */
const managerEnvironmentCommand = async (environment: 'development' | 'production' | string) => {
  return await detect({ cwd: '../../../../' }).then((manager) => {
    if (environment === 'development') {
      return `${manager} start`;
    }

    if (environment === 'production') {
      if (manager === 'yarn') return 'yarn build';
      if (manager === 'npm') return 'npm run build';
    }
  });
};
