/*
<script
      src="https://code.jquery.com/jquery-3.7.1.min.js"
      integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="
      crossorigin="anonymous"
    ></script>
    <script type="module" src="./src/components/cart-class.js"></script>
    <script type="module" src="./src/components/cart-products.js"></script>
    <script type="module" src="./src/components/cart-accordion.js"></script>
    <cart-accordion
      product-image="sample"
      product-title="[상하목장] 하트바이트 피스타치오 31mlX10개입"
      subtitle="[상하목장] 하트바이트 아이스크림 31mlX10개입 2종 택1"
      quantity="1"
      regular-price="10,000원"
      discount-price="8,000원"
      icon="1"
      title="냉동 식품"
    >
    </cart-accordion>

    로 사용할 수도 있고 그냥 페이지에서 저 방식대로 마크업해도 됩니다.
    카테고리(냉장식품 등) 하나 당 여러 개의 상품이 들어갈 수 있어서 나중에 마크업하는게 맞겠지만
    다 만들고 깨닳아서 하나만 쓰면 이거쓰려구요..
*/

class CartAccordion extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    const productImage = this.getAttribute('product-image');
    const productTitle = this.getAttribute('product-title');
    const subtitle = this.getAttribute('subtitle');
    const quantity = parseInt(this.getAttribute('quantity'));
    const regularPrice = this.getAttribute('regular-price');
    const discountPrice = this.getAttribute('discount-price');
    const icon = this.getAttribute('icon');
    const title = this.getAttribute('title');

    this.shadowRoot.innerHTML = `
      <style>
        .container {
        width: 742px;
        border-bottom: 1px solid black;
        }
      </style>
      <div class="container">
        <cart-class 
          icon="${icon}" 
          title="${title}" 
        >
        </cart-class>
        <cart-products
          product-image="${productImage}"
          product-title="${productTitle}"
          subtitle="${subtitle}"
          quantity="${quantity}"
          regular-price="${regularPrice}"
          discount-price="${discountPrice}"
          >
          </cart-products>
      </div>
    `;
  }
}

customElements.define('cart-accordion', CartAccordion);
