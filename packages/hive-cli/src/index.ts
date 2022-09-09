import { ThemeColors } from '@alexbjr369/hive-common';
import chalk from 'chalk';
import { Command } from 'commander';
import * as pkg from '../package.json';
import { cli } from './utilities/cli';

const program = new Command();
const { version } = pkg;

program
  .description(`Initialize ${chalk.hex(ThemeColors.base).bold('Hive')} into your project.`)
  .version(`${version}`, '-v, --version', 'output the current version')
  .action(() => {
    cli();
  });

program.showHelpAfterError();
program.parse();
