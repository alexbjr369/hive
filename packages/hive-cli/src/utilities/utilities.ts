import { ThemeColors } from '@alexbjr369/hive-common';
import chalk from 'chalk';
import figlet from 'figlet';
import Listr from 'listr';
import { install } from 'pkg-install';
import { hivePackages, log } from './constants';

/**
 * Prints a predefined message in the terminal.
 * @param message The predefined message to be printed.
 */
export const printMessage = (message: 'welcome' | 'success' | '') => {
  if (message === 'welcome') {
    log(chalk.hex(ThemeColors.base)(figlet.textSync('Hive')));
    log(chalk.hex(ThemeColors.base).bold('! Just another UI framework...'));
    log('');
  }

  if (message === 'success') {
    log('');
    log(chalk.hex(ThemeColors.base).bold('✨✨✨ Happy UI hacking!!!'));
    log('');
    log(
      chalk.hex(ThemeColors.base).bold('! Built with ❤️   and ☕  by Alex Bleggi:'),
      chalk.hex(ThemeColors.lightest).bold('(https://alexbleggi.netlify.app)')
    );
    log(chalk.hex(ThemeColors.base).bold('! For more information access:'), chalk.hex(ThemeColors.lightest).bold('(https://alexbleggi.netlify.app/hive)'));
    log(chalk.hex(ThemeColors.base).bold('! Contact me:'), chalk.hex(ThemeColors.lightest).bold('(https://www.linkedin.com/in/alex-bleggi-377907201)'));
  }
};

/**
 * Executes the package download and installation depending on a given answers provided to the method.
 * @param answer1 Answers provided to the first and second inquire.
 * @param answer2 Answer provided to the third inquire.
 * @example processInquire({firstInquire: 'CSS', secondInquire: 'Web Components'}, { thirdInquire: 'JavaScript' });
 */
export const processInquire = async (answer1: { firstInquire: string; secondInquire: string }, answer2?: { thirdInquire: string }) => {
  const { firstInquire, secondInquire } = answer1;
  const thirdInquire = answer2?.thirdInquire || '';

  const firstPackage = hivePackages[firstInquire.toLowerCase()];
  const secondPackage = hivePackages[secondInquire.toLowerCase()];

  await listr(firstPackage, '');

  if (secondInquire === 'Web Components') {
    const thirdPackage = hivePackages['wc'][thirdInquire.toLowerCase()];

    if (thirdPackage.name === '@alexbjr369/hive-wc-angular') {
      await listr(thirdPackage, '');
      await listr(hivePackages['wc']['javascript'], 'success');
      return;
    }

    await listr(thirdPackage, 'success');
  } else {
    await listr(secondPackage, 'success');
  }
};

/**
 * Downloads and install a package from npm registry.
 * @param pkg Information about the package to be installed.
 * @example installPackage({'@alexbjr369/hive-css', '1.0.0-alpha-1', true});
 */
const installPackage = async (pkg: { name: string; version: string; dev: boolean }) => {
  await install({ [`${pkg.name}`]: `^${pkg.version}` }, { dev: pkg.dev });
};

/**
 * Executes Listr.
 * @param pkg Information about the package to be installed.
 * @param message The predefined message to be printed.
 * @example await listr({'@alexbjr369/hive-css', '1.0.0-alpha-1', true}, 'success');
 */
const listr = async (pkg: any, message: 'welcome' | 'success' | '') => {
  await new Listr([
    {
      title: `Installing ${chalk.hex(ThemeColors.base).bold(`${pkg.name}@${pkg.version}`)}`,
      task: async () => await installPackage(pkg),
    },
  ])
    .run()
    .then(() => printMessage(message))
    .catch((error: any) => log(error));
};
