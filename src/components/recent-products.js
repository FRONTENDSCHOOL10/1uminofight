class recentProducts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isCollapsed = false;
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [
      'image1',
      'image2',
      'image3',
      'image4',
      'image5',
      'image6',
      'image7',
    ];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }
}
