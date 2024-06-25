import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import copy from 'rollup-plugin-copy';

export default defineConfig({
  plugins: [
    vue(),
  ],
  build: {
    lib: {
      entry: 'src/components/index.js',
      name: 'MyComponents',
      fileName: (format) => `components/index.${format}.js`
    },
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

// export default defineConfig({
//   plugins: [vue()],
//   build: {
//     lib: {
//       entry: 'src/index.js',
//       name: 'MyComponents',
//       fileName: (format) => `my-component.${format}.js`
//     },
//     rollupOptions: {
//       external: ['vue'],
//       output: {
//         globals: {
//           vue: 'Vue'
//         }
//       }
//     }
//   }
// });
