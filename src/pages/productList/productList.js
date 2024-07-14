import { renderProductSlide } from '/src/components/product-slide.js';

// 베스트 상품리스트
const best_products = {
  collection: 'best_products',
  node: '.best-products > ul',
  sort: '-created',
};

document.addEventListener('DOMContentLoaded', () => {
  renderProductSlide(best_products);
});
