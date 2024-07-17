class Address extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return ['address'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render() {
    const address = this.getAttribute('address');
    this.shadowRoot.innerHTML = `
          <style>
            .address-container {
              width: 284px;
              height: 222px;
              padding: 20px 0 0 0;
              gap: 12px;
              border: 1px solid #ccc;
              box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            }
            .header {
              display: flex;
              align-items: center;
              gap: 8px;
              margin-bottom: 12px;
            }
            .header .icon {
              width: 24px;
              height: 24px;
            }
            .header p {
              margin: 0;
              font-weight: bold;
            }
            .sub {
              color: #888;
              font-size: 12px;
            }
            .change {
              margin-top: 12px;
              padding: 8px 16px;
              background-color: #007bff;
              color: white;
              border: none;
              cursor: pointer;
              font-size: 14px;
            }
            .change:hover {
              background-color: #0056b3;
            }
          </style>
          <div class="address-container">
            <div class="header">
              <div class="icon">
                <svg><use href="/public/sprite/icons.svg#Location"></use></svg>
              </div>
              <p>배송지</p>
            </div>
            <p>${address}</p>
            <p class="sub">샛별배송</p>
            <button class="change">배송지 변경</button>
          </div>
        `;
  }
}
customElements.define('address', Address);
