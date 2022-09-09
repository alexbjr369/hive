import { execSync } from 'child_process';
import concurrently from 'concurrently';
import { website as packages } from './constants';
import { printWelcomeMessage } from './utilities';

export const website = () => {
  printWelcomeMessage('Building website...');

  const clean =
    'shx rm -rf website && shx mkdir website && shx mkdir website/stories && shx mkdir website/stories/playground && shx mkdir website/stories/playground/web-components';

  const copy: any = {
    website: 'shx cp -r packages/hive-website/build/* website/',
    css: 'shx cp -r packages/hive-scss/storybook-static website/stories/css',
    less: 'shx cp -r packages/hive-less/storybook-static website/stories/less',
    sass: 'shx cp -r packages/hive-sass/storybook-static website/stories/sass',
    scss: 'shx cp -r packages/hive-scss/storybook-static website/stories/scss',
    stylus: 'shx cp -r packages/hive-scss/storybook-static website/stories/stylus',
    //react: 'shx cp -r packages/hive-react/storybook-static website/stories/react',
    vue: 'shx cp -r packages/hive-vue/storybook-static website/stories/vue',
    angular: 'shx cp -r packages/hive-angular/storybook-static website/stories/angular',
    core: 'shx cp -r packages/hive-wc-core/storybook-static website/stories/web-components',
    //play_react: 'shx cp -r packages/hive-playground/react/storybook-static website/stories/playground/react',
    play_vue: 'shx cp -r packages/hive-playground/vue/storybook-static website/stories/playground/vue',
    play_angular: 'shx cp -r packages/hive-playground/angular/storybook-static website/stories/playground/angular',
    play_css: 'shx cp -r packages/hive-playground/javascript/css/storybook-static website/stories/playground/css',
    play_less: 'shx cp -r packages/hive-playground/javascript/less/storybook-static website/stories/playground/less',
    play_sass: 'shx cp -r packages/hive-playground/javascript/sass/storybook-static website/stories/playground/sass',
    play_scss: 'shx cp -r packages/hive-playground/javascript/scss/storybook-static website/stories/playground/scss',
    play_stylus: 'shx cp -r packages/hive-playground/javascript/stylus/storybook-static website/stories/playground/stylus',
    play_wc_javascript: 'shx cp -r packages/hive-playground/web-components/javascript/storybook-static website/stories/playground/web-components/javascript',
    //play_wc_react: 'shx cp -r packages/hive-playground/web-components/react/storybook-static website/stories/playground/web-components/react',
    play_wc_vue: 'shx cp -r packages/hive-playground/web-components/vue/storybook-static website/stories/playground/web-components/vue',
    play_wc_angular: 'shx cp -r packages/hive-playground/web-components/angular/storybook-static website/stories/playground/web-components/angular',
  };

  execSync(clean, { stdio: 'inherit' });
  execSync(`lerna run build --scope={${packages}}`, { stdio: 'inherit' });

  for (const cp in copy) {
    concurrently([copy[cp]]);
  }
};
