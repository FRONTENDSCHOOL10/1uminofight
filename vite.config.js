import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, './src/pages/login/login.html'),
        productList: resolve(
          __dirname,
          './src/pages/productList/productList.html'
        ),
      },
    },
  },
});
