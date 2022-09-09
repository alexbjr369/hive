# @alexbjr369/hive-stylelint-sass-config

> Hive shared stylelint sass configuration.

> Internal usage.

## Usage

1. Install [`postcss`](https://www.npmjs.com/package/postcss), [`stylelint`](https://www.npmjs.com/package/stylelint) and `@alexbjr369/hive-stylelint-sass-config` packages:

```bash
# npm
npm i postcss stylelint @alexbjr369/hive-stylelint-sass-config -D

# yarn
yarn add postcss stylelint @alexbjr369/hive-stylelint-sass-config -D

# pnpm
pnpm add postcss stylelint @alexbjr369/hive-stylelint-sass-config -D
```

2. Add the following to `package.json`:

```json
{
  "stylelint": {
    "extends": ["@alexbjr369/hive-stylelint-sass-config"]
  }
}
```
