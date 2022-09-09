import typescript from '@rollup/plugin-typescript';
import cssnano from 'cssnano';
import { defineConfig } from 'rollup';
import styles from 'rollup-plugin-styles';
import { terser } from 'rollup-plugin-terser';

export default defineConfig([
  {
    input: 'src/index.ts',
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
    plugins: [typescript({ tsconfig: './tsconfig.json' }), styles({ mode: 'extract', plugins: [cssnano()] }), terser()],
  },
]);
