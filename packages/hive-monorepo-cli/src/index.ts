import { ThemeColors } from '@alexbjr369/hive-common';
import chalk from 'chalk';
import { Command } from 'commander';
import * as pkg from '../package.json';
import { development } from './utilities/development';
import { playground } from './utilities/playground';
import { production } from './utilities/production';
import { website } from './utilities/website';

const program = new Command();
const { version } = pkg;

program
  .name('hive')
  .description(`Initialize ${chalk.hex(ThemeColors.base).bold('Hive monorepo')} into your project.`)
  .version(`${version}`, '-v, --version', 'output the current version')
  .option('-d, --development', 'run the cli in development mode.')
  .option('-p, --production', 'run the cli in production mode.')
  .option('-pg, --playground', 'run the cli in playground mode.')
  .option('-w, --website', 'build hive website.')
  .action((option: any) => {
    if (option.development) {
      development();
    }

    if (option.production) {
      production();
    }

    if (option.playground) {
      playground();
    }

    if (option.website) {
      website();
    }
  });

program.showHelpAfterError();
program.parse();
