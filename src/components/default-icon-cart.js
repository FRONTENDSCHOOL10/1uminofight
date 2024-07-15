/*
Default/Icon/Cart 컴포넌트
기능 : 장바구니 버튼을 클릭하면 장바구니 페이지로 이동한다. 
사용 페이지 : 헤더
이슈번호 : #19

cf. 
- 컴포넌트 사용법
html에 <cart-icon></cart-icon) 붙이기 
 */

class Cart extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" tabindex="0" role="button" aria-label = "장바구니 아이콘">
      <g
        stroke="#333"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="1.7"
        clip-path="url(#a)">
        <path
          d="m30.844 10.207-2.72 11.57h-15.59l-2.71-11.57h21.02Z"
          clip-rule="evenodd" />
        <path
          d="M25.684 29.467a2.14 2.14 0 1 0 0-4.28 2.14 2.14 0 0 0 0 4.28ZM14.974 29.467a2.14 2.14 0 1 0 0-4.28 2.14 2.14 0 0 0 0 4.28ZM5.164 6.547h3.8l1.76 7.5" />
      </g>
      <defs>
        <clipPath id="a"><path fill="#fff" d="M0 0h36v36H0z" /></clipPath>
      </defs>
    </svg>
  `;

    const cartIcon = this.shadowRoot.querySelector('svg');

    cartIcon.addEventListener('click', this.handleClick.bind(this));
  }

  handleClick(e) {
    e.preventDefault();
    location.href = '/src/pages/cart.html';
    // cart page 만들고 이동
  }
}

customElements.define('cart-icon', Cart);
