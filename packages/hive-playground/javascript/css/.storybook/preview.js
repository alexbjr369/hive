import '../dist/bundle.css';

// storybook theming
import '@alexbjr369/hive-common/styles';
import { config } from '@alexbjr369/hive-storybook-config';
import '@alexbjr369/hive-storybook-config/styles';

export const parameters = {
  ...config,
};
