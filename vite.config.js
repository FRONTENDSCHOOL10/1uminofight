import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    rollupOptions: {
      input: {
        main: resolve(__dirname, './src/pages/mainPage/mainPage.html'),
        login: resolve(__dirname, './src/pages/login/login.html'),
        cart: resolve(__dirname, './src/pages/cart/cart.html'),
        productDetail: resolve(
          __dirname,
          './src/pages/productDetail/index.html'
        ),
        register: resolve(__dirname, './src/pages/register/register.html'),
        productList: resolve(
          __dirname,
          './src/pages/productList/productList.html'
        ),
      },
    },
  },
});
