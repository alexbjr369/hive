export const log = console.log;

export const firstInquireChoices = ['Development', 'Production'];

export const secondInquireChoices = ['CSS', 'Less', 'Sass', 'SCSS', 'Stylus', 'JavaScript', 'Web Components', 'React', 'Vue', 'Angular'];

export const thirdInquireChoices = ['JavaScript', 'React', 'Vue', 'Angular'];

export const development = [
  '@alexbjr369/hive-less',
  '@alexbjr369/hive-sass',
  '@alexbjr369/hive-scss',
  '@alexbjr369/hive-stylus',
  // '@alexbjr369/hive-react',
  '@alexbjr369/hive-vue',
  '@alexbjr369/hive-angular',
  '@alexbjr369/hive-wc-core',
  '@alexbjr369/hive-website',
];

export const production = [
  '@alexbjr369/hive-css',
  '@alexbjr369/hive-less',
  '@alexbjr369/hive-scss',
  '@alexbjr369/hive-sass',
  '@alexbjr369/hive-stylus',
  // '@alexbjr369/hive-react',
  '@alexbjr369/hive-vue',
  '@alexbjr369/hive-angular',
  '@alexbjr369/hive-wc-core',
  '@alexbjr369/hive-wc-react',
  '@alexbjr369/hive-wc-vue',
  '@alexbjr369/hive-wc-angular',
  '@alexbjr369/hive-common',
  '@alexbjr369/hive-monorepo-cli',
  '@alexbjr369/hive-cli',
  '@alexbjr369/browserslist-config-hive',
  '@alexbjr369/hive-prettier-config',
  '@alexbjr369/hive-storybook-config',
  '@alexbjr369/hive-stylelint-css-config',
  '@alexbjr369/hive-stylelint-less-config',
  '@alexbjr369/hive-stylelint-sass-config',
  '@alexbjr369/hive-stylelint-scss-config',
  '@alexbjr369/hive-stylelint-stylus-config',
];

export const playground = [
  '@alexbjr369/hive-playground-javascript-css',
  '@alexbjr369/hive-playground-javascript-less',
  '@alexbjr369/hive-playground-javascript-sass',
  '@alexbjr369/hive-playground-javascript-scss',
  '@alexbjr369/hive-playground-javascript-stylus',
  // '@alexbjr369/hive-playground-react',
  '@alexbjr369/hive-playground-vue',
  '@alexbjr369/hive-playground-angular',
  '@alexbjr369/hive-playground-wc-javascript',
  // '@alexbjr369/hive-playground-wc-react',
  '@alexbjr369/hive-playground-wc-vue',
  '@alexbjr369/hive-playground-wc-angular',
];

export const playgroundPaths: any = {
  css: 'cd packages/hive-playground/javascript/css',
  less: 'cd packages/hive-playground/javascript/less',
  sass: 'cd packages/hive-playground/javascript/sass',
  scss: 'cd packages/hive-playground/javascript/scss',
  stylus: 'cd packages/hive-playground/javascript/stylus',
  javascript: '',
  wc: {
    javascript: 'cd packages/hive-playground/web-components/javascript',
    // react: 'cd packages/hive-playground/web-components/react',
    vue: 'cd packages/hive-playground/web-components/vue',
    angular: 'cd packages/hive-playground/web-components/angular',
  },
  // react: 'cd packages/hive-playground/react',
  vue: 'cd packages/hive-playground/vue',
  angular: 'cd packages/hive-playground/angular',
};

export const website = [...development, ...playground];
