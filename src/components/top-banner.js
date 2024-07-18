const template = document.createElement('template');
template.innerHTML = `
  <style>

    .Top-banner {
      background: var(--primary, #5f0080);
      width: 100vw;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 16px;
      font-weight: 400;
      position: relative;
    }

    .Top-banner-Inner {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 100%;
    }

    .Top-banner a {
      text-decoration: none;
      display: flex;
      color: inherit;
      align-items: center;
    }

    .Top-banner p {
      margin: 0;
      cursor: pointer;
    }

    .Top-banner span {
      font-size: 16px;
      font-weight: 600;
    }

    .Top-banner-Close {
      background: none;
      border: none;
      cursor: pointer;
      position: absolute;
      right: 400px;
      right: 300px;
    }
  </style>
  <div class="Top-banner">
    <div class="Top-banner-Inner">
      <a href="../../pages/register/index.html">
        <p>
          지금 가입하고 인기상품 <span>100원에</span>받아가세요!
        </p>
      </a>
      <button class="Top-banner-Close" type="button">
        <img src="/public/icons/ico_close_fff_84x84.png" alt="최상단 배너 닫기 버튼" />
      </button>
    </div>
  </div>
`;

class TopBanner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.shadowRoot
      .querySelector('.Top-banner-Close')
      .addEventListener('click', this.handleBannerClose.bind(this));
  }

  handleBannerClose() {
    const topBanner = this.shadowRoot.querySelector('.Top-banner');
    topBanner.style.transition = 'all 0.5s';
    topBanner.style.transform = 'translateY(-50px)';
    topBanner.style.opacity = '0';

    setTimeout(() => {
      topBanner.remove();
    }, 500);
  }

  disconnectedCallback() {
    this.shadowRoot
      .querySelector('.Top-banner-Close')
      .removeEventListener('click', this.handleBannerClose);
  }
}

customElements.define('top-banner', TopBanner);
