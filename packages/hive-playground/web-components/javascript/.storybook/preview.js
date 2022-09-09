// hive
import '!style-loader!css-loader!sass-loader!../src/styles/hive-custom.scss';
import { defineCustomElements } from '@alexbjr369/hive-wc-core/loader';
defineCustomElements();

// storybook theming
import '@alexbjr369/hive-common/styles';
import { config } from '@alexbjr369/hive-storybook-config';
import '@alexbjr369/hive-storybook-config/styles';

const customViewport = {
  custom: {
    name: 'custom',
    styles: {
      width: '1600px',
      height: '100%',
    },
  },
};

export const parameters = {
  ...config,
};

Object.assign(parameters.viewport.viewports, customViewport);
