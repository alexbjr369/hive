import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
setCompodocJson(docJson);

// hive
import '!style-loader!css-loader!@alexbjr369/hive-scss/dist/hive.css';

// storybook theming
import { config } from '@alexbjr369/hive-storybook-config';
import '!style-loader!css-loader!@alexbjr369/hive-common/styles';
import '!style-loader!css-loader!@alexbjr369/hive-storybook-config/styles';

export const parameters = {
  ...config,
};
