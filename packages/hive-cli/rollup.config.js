import { banner } from '@alexbjr369/hive-common';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';
import * as pkg from './package.json';

const { version, homepage, author } = pkg;
const writeBanner = banner(version, homepage, author);

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    sourcemap: 'true',
    banner: writeBanner,
  },
  external: ['commander', 'concurrently', 'figlet', 'inquirer', 'listr', 'pkg-install', 'chalk'],
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), typescript({ tsconfig: './tsconfig.json' }), json(), terser()],
});
