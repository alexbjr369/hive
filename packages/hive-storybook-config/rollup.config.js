import { nodeResolve } from '@rollup/plugin-node-resolve';
import cssnano from 'cssnano';
import { defineConfig } from 'rollup';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

export default defineConfig([
  {
    input: 'src/index.js',
    output: [
      {
        file: 'dist/index.cjs.js',
        format: 'cjs',
        sourcemap: true,
        assetFileNames: 'index.css',
      },
      {
        file: 'dist/index.es.js',
        format: 'es',
        sourcemap: true,
        assetFileNames: 'index.css',
      },
    ],
    plugins: [nodeResolve(), styles({ mode: 'extract', plugins: [cssnano()] }), terser()],
  },
]);
