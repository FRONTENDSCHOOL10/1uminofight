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

    const parentDiv = this.parentElement;
    if (parentDiv) {
      Array.from(parentDiv.children).forEach((child) => {
        if (child !== this) {
          child.style.display = this.isCollapsed ? 'none' : 'block';
        }
      });
    }

    this.render();
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
          border-top: 1px solid black;
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
          <img src="/icons/Food${icon}.svg" alt="icon"></div>
        <p class="classname">${title}</p>
        <button class="icon2" aria-label="toggle">
          <img src="/icons/${arrowIcon}" alt="icon">
        </button>
      </div>
    `;

    this.shadowRoot
      .querySelector('.icon2')
      .addEventListener('click', () => this.toggleCollapse());
  }
}

customElements.define('cart-class', CartClass);
