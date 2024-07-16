import { renderProductSlide } from '/src/components/product-slide.js';
import '/src/components/Header.js';
import '/src/components/footer/footer.js';
import '/src/pages/mainPage/banner.js';

// 이 상품 어때요?
const first_products = {
  collection: 'main_first_products',
  node: '.main-first-products > ul',
  sort: '-created',
};

document.addEventListener('DOMContentLoaded', () => {
  renderProductSlide(first_products);
});

// 놓치면 후회할 가격
const second_products = {
  collection: 'main_second_products',
  node: '.main-second-products > ul',
  sort: '-created',
};

document.addEventListener('DOMContentLoaded', () => {
  renderProductSlide(second_products);
});
