import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import { terser } from 'rollup-plugin-terser';

export default defineConfig({
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    sourcemap: 'true',
  },
  external: ['commander', 'concurrently', 'figlet', 'inquirer', 'chalk', 'detect-package-manager'],
  plugins: [nodeResolve({ preferBuiltins: true }), commonjs(), typescript({ tsconfig: './tsconfig.json' }), json(), terser()],
});
