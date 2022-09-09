import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

// hive
// import '!style-loader!css-loader!@alexbjr369/hive-scss/dist/hive.css';
import { defineCustomElements } from '@alexbjr369/hive-wc-core/loader';
defineCustomElements();

// storybook theming
import '!style-loader!css-loader!@alexbjr369/hive-common/styles';
import '!style-loader!css-loader!@alexbjr369/hive-storybook-config/styles';
import { config } from '@alexbjr369/hive-storybook-config';

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
