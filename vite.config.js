import { defineConfig } from 'vite';
import path from 'path';
import vue from '@vitejs/plugin-vue';
import nodePolyfills from 'rollup-plugin-polyfill-node';

// const MODE = import.meta.env.NODE_ENV;
const development = true;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    development &&
      nodePolyfills({
        include: [
          'node_modules/**/*.js',
          new RegExp('node_modules/.vite/.*js'),
        ],
        http: true,
        crypto: true,
      }),
  ],
  resolve: {
    // preserveSymlinks: true,
    alias: {
      '@': path.resolve(__dirname, 'src'),
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert',
    },
  },
  build: {
    rollupOptions: {
      plugins: [nodePolyfills({ crypto: true, http: true })],
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
});
