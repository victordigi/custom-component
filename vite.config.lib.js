import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/components/index.js',
      name: 'DigiComponents',
      // formats: ['umd', 'es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    minify: true,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
