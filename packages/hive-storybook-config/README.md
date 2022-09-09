# @alexbjr369/hive-storybook-config

> Hive shared storybook configuration.

> Internal usage.

## Usage

1. Install `@alexbjr369/hive-storybook-config` package:

```bash
# npm
npm i @alexbjr369/hive-storybook-config -D

# yarn
yarn add @alexbjr369/hive-storybook-config -D

# pnpm
pnpm add @alexbjr369/hive-storybook-config -D
```

2. Add the following to `.storybook/preview.js`:

```javascript
import { config } from '@alexbjr369/hive-storybook-config';
import '@alexbjr369/hive-storybook-config/styles';

export const parameters = {
  ...config,
};
```
