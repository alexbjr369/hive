import * as pkg from '../../package.json';

export const log = console.log;

export const firstInquireChoices = ['CSS', 'Less', 'Sass', 'SCSS', 'Stylus'];
export const secondInquireChoices = ['JavaScript', 'Web Components', 'React', 'Vue', 'Angular'];
export const thirdInquireChoices = ['JavaScript', 'React', 'Vue', 'Angular'];

const { version } = pkg;
const newVersionNumber = Number(version.substring(version.length - 1)) + 1;
const newVersion = `${version.slice(0, -1) + newVersionNumber}`;

export const hivePackages: any = {
  css: {
    name: '@alexbjr369/hive-css',
    dev: false,
    version: newVersion,
  },
  less: {
    name: '@alexbjr369/hive-less',
    dev: true,
    version: newVersion,
  },
  sass: {
    name: '@alexbjr369/hive-sass',
    dev: true,
    version: newVersion,
  },
  scss: {
    name: '@alexbjr369/hive-scss',
    dev: true,
    version: newVersion,
  },
  stylus: {
    name: '@alexbjr369/hive-stylus',
    dev: true,
    version: newVersion,
  },
  javascript: {
    name: '@alexbjr369/hive-javascript',
    dev: false,
    version: newVersion,
  },
  wc: {
    javascript: {
      name: '@alexbjr369/hive-wc-core',
      dev: false,
      version: newVersion,
    },
    react: {
      name: '@alexbjr369/hive-wc-react',
      dev: false,
      version: newVersion,
    },
    vue: {
      name: '@alexbjr369/hive-wc-vue',
      dev: false,
      version: newVersion,
    },
    angular: {
      name: '@alexbjr369/hive-wc-angular',
      dev: false,
      version: newVersion,
    },
  },
  react: {
    name: '@alexbjr369/hive-react',
    dev: false,
    version: newVersion,
  },
  vue: {
    name: '@alexbjr369/hive-vue',
    dev: false,
    version: newVersion,
  },
  angular: {
    name: '@alexbjr369/hive-angular',
    dev: false,
    version: newVersion,
  },
};
