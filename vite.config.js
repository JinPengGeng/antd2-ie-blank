import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import {resolve} from 'path';

function pathResolve (dir) {
    return resolve(__dirname, '.', dir);
}
const alias = {
  '/@': pathResolve('src'),
};

// https://vitejs.dev/config/
export default defineConfig({
  alias,
  plugins: [
    vue(),
    legacy({
    targets: ['defaults', 'not IE 11']
  })],
  build: {
    target: 'es2015'
  }
})
