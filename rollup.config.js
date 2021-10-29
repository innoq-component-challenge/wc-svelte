import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/main.js',
  output: {
    file: 'components.js',
    format: 'iife'
  },
  plugins: [
    svelte({
      // Emit CSS as "files" for other plugins to process. default is true
      emitCss: true,

      // You can pass any of the Svelte compiler options
      compilerOptions: {

      }
    }),
    commonjs(),
    resolve({ browser: true }),
  ]
}