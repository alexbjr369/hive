import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { defineConfig } from 'rollup';
import styles from 'rollup-plugin-styles';

export default defineConfig({
  input: 'src/scripts/index.ts',
  output: {
    file: 'dist/bundle.js',
    assetFileNames: 'bundle.css',
  },
  plugins: [nodeResolve(), styles({ mode: 'extract' }), typescript()],
});
