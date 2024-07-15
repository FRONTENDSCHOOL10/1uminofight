// 냉장냉동일반식품 아이콘 Food1 Food2 Food3으로 구분
// 사용할 때     <cart-class icon="1" title="냉장식품"> </cart-class> 와 같이 사용

// <cart-class
//          icon="${icon}"
//          title="${title}"
//        >
//        </cart-class>

class CartClass extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isCollapsed = false;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['icon', 'title'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.render();
    const cartProducts =
      this.closest('.container').querySelector('cart-products');
    if (cartProducts) {
      cartProducts.style.display = this.isCollapsed ? 'none' : 'block';
    }
  }

  render() {
    const icon = this.getAttribute('icon');
    const title = this.getAttribute('title');
    const arrowIcon = this.isCollapsed ? 'Arrow-up.svg' : 'Arrow-down.svg';

    this.shadowRoot.innerHTML = `
    <style>
      .cartclass-container {
        display: flex;
        align-items: center;
        width: 742px;
        height: 62px;
        border: none;
      }
      .icon, .icon2 {
        width: 30px;
        height: 30px;
        margin-right: 0px;
      }
      .classname {
        font-size: 16px;
        font-weight: bold;
        margin-left: 12px;
      }
      .icon2 {
        margin-left: auto;
        background: none;
        border: none;
        cursor: pointer;
      }
    </style>
    <div class="cartclass-container">
      <div class="icon">
        <img src="/public/icons/Food${icon}.svg" alt="icon"></div>
      <p class="classname">${title}</p>
      <button class="icon2" aria-label="toggle">
        <img src="/public/icons/${arrowIcon}" alt="icon">
      </button>
    </div>
    `;

    this.shadowRoot
      .querySelector('.icon2')
      .addEventListener('click', () => this.toggleCollapse());
  }
}

customElements.define('cart-class', CartClass);
