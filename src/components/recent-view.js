/*<script type="module" src="/src/components/recent-view.js"></script>
    <recent-viewed></recent-viewed>
    만 끼워넣으시면 돼요 */

class RecentViewed extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.currentIndex = 0;
    this.imageUrls = [
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/r0ekqu0x476y5hg/9054c282_480e_4fdd_a043_3eaaee581cbb_wN0z7NOD3I.jpg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/g0rwrtb249neuxf/90256eb2_b02f_493a_ab7a_29a8724254e4_Oc0VV21DDk.jpeg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/y53k87rjit56uaa/b15f2d12_eca6_4491_b37e_83d156377cde_icU9Rn0v8K.jpg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/upyyy01edc6y7l6/862c3f10_4566_4d6e_8a60_97ee26adf169_bKckPpfcz5.jpg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/e141wrg1pobe0h1/1561706777491l0_8huzMraiRP.jpg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/kcf023kpiged66c/a68f6340_0b47_4929_9266_314dca796093_1_9tOguVl0eX.jpg?token=',
      'https://luminofight.pockethost.io/api/files/l82qf9sm2gz8vne/5kxwtfo3r4kxlec/1637921430646l0_1_lBwjdIam8k.jpg?token=',
    ];
  }

  connectedCallback() {
    this.render();
  }

  static get observedAttributes() {
    return [];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  scrollItems(direction) {
    const itemHeight = 84;
    const containerHeight = this.itemsContainer.clientHeight;
    const visibleItems = Math.floor(containerHeight / itemHeight);
    const maxIndex = this.items.children.length - visibleItems;

    if (direction === 'up' && this.currentIndex > 0) {
      this.currentIndex--;
    } else if (direction === 'down' && this.currentIndex < maxIndex) {
      this.currentIndex++;
    }

    this.items.style.transform = `translateY(-${this.currentIndex * itemHeight}px)`;
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .recent-viewed-container {
                    width: 80px;
                    height: 279px;
                    border: 1px solid #000;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    overflow: hidden;
                }
                .arrow-button {
                    width: 20px;
                    height: 20px;
                    background-size: cover;
                    cursor: pointer;
                }
                .arrow-up {
                    background-image: url('/icons/Arrow-up.svg');
                }
                .arrow-down {
                    background-image: url('/icons/Arrow-down2.svg');
                }
                .title {
                    font-size: 12px;
                    margin: 5px 0;
                    line-height: 1.15;
                    letter-spacing: -0.8px;
                    font-weight: bold;
                }
                .items-container {
                    flex: 1;
                    overflow: hidden;
                    width: 100%;
                }
                .items {
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.3s;
                }
                .item {
                    width: 60px;
                    height: 80px;
                    margin: 2px auto;
                    background-color: #ccc;
                    background-size: cover;
                    background-position: center;
                }
            </style>
            <div class="recent-viewed-container">
                <div class="arrow-button arrow-up"></div>
                <div class="title">최근 본 상품</div>
                <div class="items-container">
                    <div class="items">
                        ${this.imageUrls.map((url) => `<div class="item" style="background-image: url(${url});"></div>`).join('')}
                    </div>
                </div>
                <div class="arrow-button arrow-down"></div>
            </div>
        `;

    this.upButton = this.shadowRoot.querySelector('.arrow-up');
    this.downButton = this.shadowRoot.querySelector('.arrow-down');
    this.itemsContainer = this.shadowRoot.querySelector('.items-container');
    this.items = this.shadowRoot.querySelector('.items');

    this.upButton.addEventListener('click', () => this.scrollItems('up'));
    this.downButton.addEventListener('click', () => this.scrollItems('down'));
  }
}

customElements.define('recent-viewed', RecentViewed);
