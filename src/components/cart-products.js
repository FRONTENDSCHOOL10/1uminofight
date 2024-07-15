class CartProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  static get observedAttributes() {
    return [
      'product-image',
      'product-title',
      'quantity',
      'regular-price',
      'discount-price',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue && name !== 'quantity') {
      this.render();
      this.addEventListeners();
    } else if (name === 'quantity') {
      this.updateQuantity(newValue);
    }
  }

  render() {
    const productImage = this.getAttribute('product-image');
    const productTitle = this.getAttribute('product-title');
    const subtitle = this.getAttribute('subtitle');
    const quantity = parseInt(this.getAttribute('quantity'));
    const regularPrice = this.getAttribute('regular-price');
    const discountPrice = this.getAttribute('discount-price');

    this.shadowRoot.innerHTML = `
      <style>
        .cartproduct-container {
          display: flex;
          align-items: center;
          width: 742px;
          height: 118px;
          border-bottom: 1px solid #CCCCCC;
        }
        .check-icon {
          border: none;
          background-color: white;
        }
        .product-img {
          margin-right: 30px;
          margin-left: 20px;
        }

        .product-img img {
          max-width: 70px;
          max-height: 100px;
          width: auto;
          height: auto;
        }
        .product-img img {
          width: 100px;
          height: auto;
        }
        .title-container {
          width: 345px;
        }
        .product-title{
          font-size: 15px;
          font-weight: bold;
        }
        .product-subtitle {
          font-size: 12px;
          color: #898989;
        }
        .quantity-container {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 5px;
          width: 100px;
          justify-content: space-between;
          padding: 5px;
          margin-right: 20px;
          margin-left: 20px;
        }
        .quantity-btn {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          color: #555;
        }
        .quantity-number {
          font-size: 18px;
          font-weight: bold;
        }
        .price {
          margin-right: 20px;
        }
        .discount-price {
          font-weight: bold;
        }
        .regular-price {
          text-decoration: line-through;
          color: #999;
        }
        .close {
          border: none;
          width: 18px;
          height: 18px;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
        }
        .close img {
          width: 50px;
          height: 50px;
          filter: invert(37%) sepia(0%) saturate(0%) hue-rotate(172deg) brightness(92%) contrast(92%);
        }
      </style>
      <div class="cartproduct-container">
        <button class="check-icon" id="check-icon"><img src="/public/icons/CheckTrue.svg" alt="체크버튼"></button>
        <div class="product-img"><img src="/src/assets/images/${productImage}.png" alt="제품이미지"></div>
        <div class="title-container">
          <p class="product-title">${productTitle}</p>
          <p class="product-subtitle">${subtitle}</p>
        </div>
        <div class="quantity-container">
          <button class="quantity-btn" id="decrease-btn">-</button>
          <span class="quantity-number" id="quantity">${quantity}</span>
          <button class="quantity-btn" id="increase-btn">+</button>
        </div>
        <div class="price">
          <p class="discount-price">${discountPrice}</p>
          <p class="regular-price">${regularPrice}</p>
        </div>
        <button class="close" type="button">
          <img src="/public/icons/Close.svg" alt="닫기 버튼">
        </button>
      </div>
    `;
  }

  addEventListeners() {
    const decreaseBtn = this.shadowRoot.getElementById('decrease-btn');
    const increaseBtn = this.shadowRoot.getElementById('increase-btn');
    const checkIconBtn = this.shadowRoot
      .getElementById('check-icon')
      .querySelector('img');
    let quantity = parseInt(this.getAttribute('quantity'));

    decreaseBtn.addEventListener('click', () => {
      if (quantity > 0) {
        quantity--;
        this.setAttribute('quantity', quantity);
      }
    });

    increaseBtn.addEventListener('click', () => {
      quantity++;
      this.setAttribute('quantity', quantity);
    });

    $(checkIconBtn).on('click', function () {
      changeCheckState(checkIconBtn);
    });
  }

  updateQuantity(newQuantity) {
    const quantityElement = this.shadowRoot.getElementById('quantity');
    quantityElement.textContent = newQuantity;
  }
}

customElements.define('cart-products', CartProducts);

function changeCheckState(checkIcon) {
  if (checkIcon.src.includes('CheckTrue.svg')) {
    checkIcon.src = '/public/icons/CheckFalse.svg';
  } else {
    checkIcon.src = '/public/icons/CheckTrue.svg';
  }
}
