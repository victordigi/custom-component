import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from "path";
// import importToConst from 'rollup-plugin-import-to-const'

export default defineConfig({
  plugins: [
    vue(),
    // importToConst(),
  ],
  build: {
    outDir: 'dist',
    lib: {
      entry: path.resolve(__dirname, 'src/components/index.js'),
      name: 'DigiComponents',
      // formats: ['umd', 'es', 'cjs'],
      fileName: (format) => `index.${format}.js`
    },
    minify: false,
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
