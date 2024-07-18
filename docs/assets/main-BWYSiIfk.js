(function () {
  const e = document.createElement('link').relList;
  if (e && e.supports && e.supports('modulepreload')) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const s of n)
      if (s.type === 'childList')
        for (const o of s.addedNodes)
          o.tagName === 'LINK' && o.rel === 'modulepreload' && i(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(n) {
    const s = {};
    return (
      n.integrity && (s.integrity = n.integrity),
      n.referrerPolicy && (s.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === 'use-credentials'
        ? (s.credentials = 'include')
        : n.crossOrigin === 'anonymous'
          ? (s.credentials = 'omit')
          : (s.credentials = 'same-origin'),
      s
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const s = t(n);
    fetch(n.href, s);
  }
})();
class G extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
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
  `),
      this.shadowRoot
        .querySelector('svg')
        .addEventListener('click', this.handleClick.bind(this));
  }
  handleClick(e) {
    e.preventDefault(), (location.href = '/src/pages/cart.html');
  }
}
customElements.define('cart-icon', G);
function O(r, e = document) {
  if (typeof r != 'string')
    throw new Error('getNode 함수의 인수는 문자 타입 이어야 합니다.');
  return (
    e.nodeType !== document.DOCUMENT_NODE && (e = document.querySelector(e)),
    e.querySelector(r)
  );
}
function L(r) {
  return Object.prototype.toString.call(r).slice(8, -1).toLowerCase();
}
const W = (r) => L(r) === 'object',
  J = (r) => L(r) === 'number',
  U = (r) => L(r) === 'string';
function Z(r, e) {
  typeof r == 'string' && (r = O(r)), r.insertAdjacentHTML('beforeend', e);
}
O('.first');
O('.second');
const I = {
  shouldReject: !1,
  timeout: 1e3,
  data: '아싸 성공!',
  errorMessage: '알 수 없는 오류가 발생했습니다.',
};
function Q(r) {
  let e = { ...I };
  J(r) && (e.timeout = r), W(r) && (e = { ...I, ...r });
  let { timeout: t, shouldReject: i, errorMessage: n, data: s } = e;
  return new Promise((o, a) => {
    setTimeout(() => {
      i ? a({ message: n }) : o(s);
    }, t);
  });
}
Q(1e3);
function R(r) {
  return r.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}
const { localStorage: _ } = window;
function H(r, e) {
  return new Promise((t, i) => {
    U(r)
      ? (_.setItem(r, JSON.stringify(e)), t())
      : i({ message: 'key는 문자 타입 이어야 합니다.' });
  });
}
function F(r) {
  return new Promise((e, t) => {
    U(r)
      ? e(JSON.parse(_.getItem(r)))
      : t({ message: 'key는 문자 타입 이어야 합니다.' });
  });
}
const N = { isAuth: !1, user: null, token: '' };
(async function () {
  localStorage.getItem('auth') || H('auth', N);
  const { isAuth: r, user: e } = await F('auth');
  class t extends HTMLElement {
    constructor() {
      super(),
        this.attachShadow({ mode: 'open' }),
        (this.shadowRoot.innerHTML = `
      <style>
        .iconHeart {
          cursor: pointer;
        }
        path:hover {
          stroke: #5F0080; /* 마우스 오버 시 색상 변경 */
        }
      </style>
      <svg class="iconHeart" role="button" aria-label="찜한 목록 페이지 이동 아이콘" tabindex='0' xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none">
        <path stroke="currentColor" stroke-linecap="round" stroke-width="1.7" d="M28.927 8.893a6.46 6.46 0 0 0-9.14 0L17.96 10.72l-1.827-1.828a6.462 6.462 0 0 0-9.14 9.138L8.82 19.86l8.432 8.434a1 1 0 0 0 1.414 0l8.433-8.434 1.828-1.828a6.458 6.458 0 0 0 0-9.138v-.001Z" clip-rule="evenodd"/>
      </svg>
      `);
    }
    connectedCallback() {
      this.shadowRoot
        .querySelector('svg')
        .addEventListener('click', this.handleClick.bind(this));
    }
    handleClick(n) {
      n.preventDefault(),
        r
          ? (location.href = '/src/pages/mainPage/mainPage.html')
          : (location.href = '/src/pages/login/login.html');
    }
  }
  customElements.define('default-icon-heart', t);
})();
class Y extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
            <style>
                .heartIcon-container {
                    width: 56px;
                    height: 56px;
                    border: 1px solid #E1E1E1;
					radius: 4px;
					padding: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .heart, .heart-filled {
                    cursor: pointer; /* 클릭 가능한 커서 설정 */
                }
            </style>

                <div class="heartIcon-container">
                    <svg class="heart" width="25.72" height="21.59" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#5F0080" stroke-width="1.7" fill="none"/>
                    </svg>
                    <svg class="heart-filled" width="25.72" height="21.59" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF5A5A"/>
                    </svg>
                </div>
        `);
  }
  connectedCallback() {
    const e = this.shadowRoot.querySelector('.heartIcon-container'),
      t = this.shadowRoot.querySelector('.heart'),
      i = this.shadowRoot.querySelector('.heart-filled');
    e.addEventListener('click', () => {
      (t.style.display = t.style.display === 'none' ? 'block' : 'none'),
        (i.style.display = i.style.display === 'none' ? 'block' : 'none');
    });
  }
}
customElements.define('heart-icon', Y);
const X = `
<svg width="233" height="70" viewBox="0 0 233 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="1" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <rect x="13" y="49.5" width="9" height="7" fill="url(#pattern0_61_2235)"/>
    <rect x="34" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <rect x="48" y="49.5" width="5" height="7" fill="url(#pattern1_61_2235)"/>
    <rect x="67" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M84.4716 48.7727V57.5H83.4148V49.8807H83.3636L81.233 51.2955V50.2216L83.4148 48.7727H84.4716Z" fill="#333333"/>
    <rect x="100" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M113.403 57.5V56.733L116.284 53.5795C116.622 53.2102 116.901 52.8892 117.119 52.6165C117.338 52.3409 117.5 52.0824 117.605 51.8409C117.713 51.5966 117.767 51.3409 117.767 51.0739C117.767 50.767 117.693 50.5014 117.545 50.277C117.401 50.0526 117.202 49.8793 116.949 49.7571C116.696 49.6349 116.412 49.5739 116.097 49.5739C115.761 49.5739 115.469 49.6435 115.219 49.7827C114.972 49.919 114.78 50.1108 114.643 50.358C114.51 50.6051 114.443 50.8949 114.443 51.2273H113.438C113.438 50.7159 113.555 50.267 113.791 49.8807C114.027 49.4943 114.348 49.1932 114.754 48.9773C115.163 48.7614 115.622 48.6534 116.131 48.6534C116.642 48.6534 117.095 48.7614 117.49 48.9773C117.885 49.1932 118.195 49.4844 118.419 49.8509C118.643 50.2173 118.756 50.625 118.756 51.0739C118.756 51.3949 118.697 51.7088 118.581 52.0156C118.467 52.3196 118.268 52.6591 117.984 53.0341C117.703 53.4062 117.312 53.8608 116.812 54.3977L114.852 56.4943V56.5625H118.909V57.5H113.403Z" fill="#333333"/>
    <rect x="133" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M149.352 57.6193C148.79 57.6193 148.288 57.5227 147.848 57.3295C147.411 57.1364 147.063 56.8679 146.804 56.5241C146.548 56.1776 146.409 55.7756 146.386 55.3182H147.46C147.483 55.5994 147.58 55.8423 147.75 56.0469C147.92 56.2486 148.143 56.4048 148.419 56.5156C148.695 56.6264 149 56.6818 149.335 56.6818C149.71 56.6818 150.043 56.6165 150.332 56.4858C150.622 56.3551 150.849 56.1733 151.014 55.9403C151.179 55.7074 151.261 55.4375 151.261 55.1307C151.261 54.8097 151.182 54.527 151.023 54.2827C150.864 54.0355 150.631 53.8423 150.324 53.7031C150.017 53.5639 149.642 53.4943 149.199 53.4943H148.5V52.5568H149.199C149.545 52.5568 149.849 52.4943 150.111 52.3693C150.375 52.2443 150.581 52.0682 150.729 51.8409C150.879 51.6136 150.955 51.3466 150.955 51.0398C150.955 50.7443 150.889 50.4872 150.759 50.2685C150.628 50.0497 150.443 49.8793 150.205 49.7571C149.969 49.6349 149.69 49.5739 149.369 49.5739C149.068 49.5739 148.784 49.6293 148.517 49.7401C148.253 49.848 148.037 50.0057 147.869 50.2131C147.702 50.4176 147.611 50.6648 147.597 50.9545H146.574C146.591 50.4972 146.729 50.0966 146.987 49.7528C147.246 49.4062 147.584 49.1364 148.001 48.9432C148.422 48.75 148.884 48.6534 149.386 48.6534C149.926 48.6534 150.389 48.7628 150.776 48.9815C151.162 49.1974 151.459 49.483 151.666 49.8381C151.874 50.1932 151.977 50.5767 151.977 50.9886C151.977 51.4801 151.848 51.8991 151.589 52.2457C151.334 52.5923 150.986 52.8324 150.545 52.9659V53.0341C151.097 53.125 151.527 53.3594 151.837 53.7372C152.146 54.1122 152.301 54.5767 152.301 55.1307C152.301 55.6051 152.172 56.0312 151.913 56.4091C151.658 56.7841 151.308 57.0795 150.865 57.2955C150.422 57.5114 149.918 57.6193 149.352 57.6193Z" fill="#333333"/>
    <rect x="-0.5" y="0.5" width="33" height="33" transform="matrix(-1 0 0 1 198.5 36)" stroke="#E1E1E1"/>
    <rect width="5" height="7" transform="matrix(-1 0 0 1 185 49.5)" fill="url(#pattern2_61_2235)"/>
    <rect x="-0.5" y="0.5" width="33" height="33" transform="matrix(-1 0 0 1 231.5 36)" stroke="#E1E1E1"/>
    <rect width="9" height="7" transform="matrix(-1 0 0 1 220 49.5)" fill="url(#pattern3_61_2235)"/>
    <defs>
    <pattern id="pattern0_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_61_2235" transform="scale(0.111111 0.142857)"/>
    </pattern>
    <pattern id="pattern1_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image1_61_2235" transform="scale(0.2 0.142857)"/>
    </pattern>
    <pattern id="pattern2_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image1_61_2235" transform="scale(0.2 0.142857)"/>
    </pattern>
    <pattern id="pattern3_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_61_2235" transform="scale(0.111111 0.142857)"/>
    </pattern>
    <image id="image0_61_2235" width="9" height="7" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="/>
    <image id="image1_61_2235" width="5" height="7" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"/>
    </defs>
</svg> `;
class ee extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
            <style>
                .numbering-container {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="numbering-container">
                ${X}
            </div>
        `);
  }
}
customElements.define('numbering-container', ee);
class te extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const e = this.getAttribute('value'),
      t = this.getAttribute('url');
    this.shadowRoot.innerHTML = `
      <style>
        li {
          width: 150px;
          line-height: 40px;
          text-align: center;
          list-style: none;
          font-weight: 600;
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        a {
          text-decoration: none;
          color: inherit;
          padding: 8px 0px;
        }
        a:hover {
          color: #5F0080;
          text-decoration: underline;
        }
      </style>
      <li><a href="${t}" tabindex=0>${e}</a></li>
    `;
  }
}
customElements.define('nav-menu-item', te);
class ie extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: inline-block; /* 부모 요소가 자식 요소의 크기를 상속받도록 설정 */
        }
        ul {
          width: 600px;
          display: flex;
          padding: 0;
          margin: 0;
          list-style: none;
        }
      </style>
      <ul>
        <!-- NavMenuItem들이 여기에 추가 -->
      </ul>
    `;
    const e = this.shadowRoot.querySelector('ul');
    [
      { value: '신상품', url: '/src/index.html' },
      { value: '베스트', url: '/src/pages/productList/productList.html' },
      { value: '알뜰쇼핑', url: '/src/index.html' },
      { value: '특가/혜택', url: '/src/index.html' },
    ].forEach((i) => {
      const n = document.createElement('nav-menu-item');
      n.setAttribute('value', i.value),
        n.setAttribute('url', i.url),
        e.appendChild(n);
    });
  }
}
customElements.get('nav-menu') || customElements.define('nav-menu', ie);
const ne = [
  { url: '/header-category-icon/1.gift.png', value: '선물하기' },
  { url: '/header-category-icon/2.vegetable.png', value: '채소' },
  { url: '/header-category-icon/3.fruit.png', value: '과일 · 견과 · 쌀' },
  {
    url: '/header-category-icon/4.sea-food.png',
    value: '수산 · 해산 · 건어물',
  },
  { url: '/header-category-icon/5.meat.png', value: '정육 · 계란' },
  { url: '/header-category-icon/6.cook.png', value: '국 · 반찬 · 메인요리' },
  { url: '/header-category-icon/7.salad.png', value: '샐러드 · 간편식' },
  { url: '/header-category-icon/8.oil.png', value: '면 · 양념 · 오일' },
  {
    url: '/header-category-icon/9.coffee.png',
    value: '생수 · 음료 · 우유 · 커피',
  },
  { url: '/header-category-icon/10.snack.png', value: '간식 · 과자 · 떡' },
  {
    url: '/header-category-icon/11.bread.png',
    value: '베이커리 · 치즈 · 델리',
  },
  { url: '/header-category-icon/12.health.png', value: '건강식품' },
  { url: '/header-category-icon/13.wine.png', value: '와인' },
  { url: '/header-category-icon/14.tradition_liquor.png', value: '전통주' },
  {
    url: '/header-category-icon/15.detergent.png',
    value: '생활용품 · 리빙 · 캠핑',
  },
  {
    url: '/header-category-icon/16.cosmetics.png',
    value: '스킨케어 · 메이크업',
  },
  { url: '/header-category-icon/17.shampoo.png', value: '헤어 · 바디 · 구강' },
  { url: '/header-category-icon/18.cook.png', value: '주방용품' },
  { url: '/header-category-icon/19.home_appliances.png', value: '가전제품' },
  { url: '/header-category-icon/20.dog.png', value: '반려동물' },
  { url: '/header-category-icon/21.baby.png', value: '베이비 · 키즈 · 완구' },
  { url: '/header-category-icon/22.travel.png', value: '여행 · 티켓' },
];
class se extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    const e = this.getAttribute('value'),
      t = this.getAttribute('url'),
      i = document.createElement('template');
    (i.innerHTML = `
    <style>
        li {
          background-color: white;
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 16px;
          padding: 8px 0px 8px 12px;
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        li:hover {
          cursor: pointer;
        }
      </style>
      <li>
        <img src="${t}" alt="${e}" />
        <span>${e}</span>
      </li>

    `),
      this.shadowRoot.appendChild(i.content.cloneNode(!0));
  }
}
customElements.get('header-category-item') ||
  customElements.define('header-category-item', se);
class oe extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      :host {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
        }
      ul {
        display: flex; 
        flex-flow: column nowrap;
        width: 247px;
        padding: 0;
        margin: 0;
      }
    </style>

    <ul class="header-category-item-list">
    <!-- <header-category-item>들이 여기에 추가 -->
    </ul>
    `;
    const e = this.shadowRoot.querySelector('ul');
    ne.forEach((i) => {
      const n = document.createElement('header-category-item');
      n.setAttribute('value', i.value),
        n.setAttribute('url', i.url),
        e.appendChild(n);
    });
  }
}
customElements.get('header-category-item-list') ||
  customElements.define('header-category-item-list', oe);
const B = document.createElement('template');
B.innerHTML = `
  <style>
    .header-category-tab{
      display: inline-block;
      width: 84px;
      line-height: 24px;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      margin: 0 auto;
      position: relative;
    }
    span {
      font-weight: 600;
      font-size : 16px;      
    }
    .icon-hamburger {
      padding-right: 12px;
    }
    .header-category-tab:hover {
      cursor: pointer;
    }
    .header-category-tab:hover .icon-hamburger path {
      fill: #5F0080
    }
    .header-category-tab:hover span {
      color: #5F0080
    }
    .header-category-tab:hover header-category-item-list {
      display: flex;
    }
    .is-opened {
      header-category-item-list {
        display: flex
      }
    }
  </style>
  <div class="header-category-tab" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-controls="category-item-list">
    <svg
      class="icon-hamburger"
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M0 0H16V1.7H0V0ZM0 6.15H16V7.85H0V6.15ZM0 12.3H16V14H0V12.3Z"
      fill="#333333"
    />
    <span>카테고리</span>
    </svg>
    <header-category-item-list id="category-item-list"></header-category-item-list>
  </div>
`;
class re extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      this.shadowRoot.appendChild(B.content.cloneNode(!0));
    const e = this.shadowRoot.querySelector('.header-category-tab');
    this.shadowRoot.querySelector('li'),
      e.addEventListener('mouseover', () => {
        e.setAttribute('aria-expanded', 'true');
      }),
      e.addEventListener('mouseout', () => {
        e.setAttribute('aria-expanded', 'false');
      }),
      e.addEventListener('keydown', () => {
        e.classList.contains('is-opened')
          ? e.classList.remove('is-opened')
          : e.classList.add('is-opened');
      }),
      e.addEventListener('focusout', () => {
        e.classList.remove('is-opened');
      });
  }
}
customElements.get('header-category') ||
  customElements.define('header-category', re);
function ae(r, e = 'photo') {
  return `https://luminofight.pockethost.io//api/files/${r.collectionId}/${r.id}/${r[e]}`;
}
class m extends Error {
  constructor(e) {
    var t, i, n, s;
    super('ClientResponseError'),
      (this.url = ''),
      (this.status = 0),
      (this.response = {}),
      (this.isAbort = !1),
      (this.originalError = null),
      Object.setPrototypeOf(this, m.prototype),
      e !== null &&
        typeof e == 'object' &&
        ((this.url = typeof e.url == 'string' ? e.url : ''),
        (this.status = typeof e.status == 'number' ? e.status : 0),
        (this.isAbort = !!e.isAbort),
        (this.originalError = e.originalError),
        e.response !== null && typeof e.response == 'object'
          ? (this.response = e.response)
          : e.data !== null && typeof e.data == 'object'
            ? (this.response = e.data)
            : (this.response = {})),
      this.originalError || e instanceof m || (this.originalError = e),
      typeof DOMException < 'u' &&
        e instanceof DOMException &&
        (this.isAbort = !0),
      (this.name = 'ClientResponseError ' + this.status),
      (this.message = (t = this.response) == null ? void 0 : t.message),
      this.message ||
        (this.isAbort
          ? (this.message =
              'The request was autocancelled. You can find more info in https://github.com/pocketbase/js-sdk#auto-cancellation.')
          : (s =
                (n = (i = this.originalError) == null ? void 0 : i.cause) ==
                null
                  ? void 0
                  : n.message) != null && s.includes('ECONNREFUSED ::1')
            ? (this.message =
                'Failed to connect to the PocketBase server. Try changing the SDK URL from localhost to 127.0.0.1 (https://github.com/pocketbase/js-sdk/issues/21).')
            : (this.message =
                'Something went wrong while processing your request.'));
  }
  get data() {
    return this.response;
  }
  toJSON() {
    return { ...this };
  }
}
const x = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
function le(r, e) {
  const t = {};
  if (typeof r != 'string') return t;
  const i = Object.assign({}, {}).decode || ce;
  let n = 0;
  for (; n < r.length; ) {
    const s = r.indexOf('=', n);
    if (s === -1) break;
    let o = r.indexOf(';', n);
    if (o === -1) o = r.length;
    else if (o < s) {
      n = r.lastIndexOf(';', s - 1) + 1;
      continue;
    }
    const a = r.slice(n, s).trim();
    if (t[a] === void 0) {
      let l = r.slice(s + 1, o).trim();
      l.charCodeAt(0) === 34 && (l = l.slice(1, -1));
      try {
        t[a] = i(l);
      } catch {
        t[a] = l;
      }
    }
    n = o + 1;
  }
  return t;
}
function q(r, e, t) {
  const i = Object.assign({}, t || {}),
    n = i.encode || de;
  if (!x.test(r)) throw new TypeError('argument name is invalid');
  const s = n(e);
  if (s && !x.test(s)) throw new TypeError('argument val is invalid');
  let o = r + '=' + s;
  if (i.maxAge != null) {
    const a = i.maxAge - 0;
    if (isNaN(a) || !isFinite(a))
      throw new TypeError('option maxAge is invalid');
    o += '; Max-Age=' + Math.floor(a);
  }
  if (i.domain) {
    if (!x.test(i.domain)) throw new TypeError('option domain is invalid');
    o += '; Domain=' + i.domain;
  }
  if (i.path) {
    if (!x.test(i.path)) throw new TypeError('option path is invalid');
    o += '; Path=' + i.path;
  }
  if (i.expires) {
    if (
      !(function (l) {
        return (
          Object.prototype.toString.call(l) === '[object Date]' ||
          l instanceof Date
        );
      })(i.expires) ||
      isNaN(i.expires.valueOf())
    )
      throw new TypeError('option expires is invalid');
    o += '; Expires=' + i.expires.toUTCString();
  }
  if (
    (i.httpOnly && (o += '; HttpOnly'),
    i.secure && (o += '; Secure'),
    i.priority)
  )
    switch (
      typeof i.priority == 'string' ? i.priority.toLowerCase() : i.priority
    ) {
      case 'low':
        o += '; Priority=Low';
        break;
      case 'medium':
        o += '; Priority=Medium';
        break;
      case 'high':
        o += '; Priority=High';
        break;
      default:
        throw new TypeError('option priority is invalid');
    }
  if (i.sameSite)
    switch (
      typeof i.sameSite == 'string' ? i.sameSite.toLowerCase() : i.sameSite
    ) {
      case !0:
        o += '; SameSite=Strict';
        break;
      case 'lax':
        o += '; SameSite=Lax';
        break;
      case 'strict':
        o += '; SameSite=Strict';
        break;
      case 'none':
        o += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  return o;
}
function ce(r) {
  return r.indexOf('%') !== -1 ? decodeURIComponent(r) : r;
}
function de(r) {
  return encodeURIComponent(r);
}
const he =
  (typeof navigator < 'u' && navigator.product === 'ReactNative') ||
  (typeof global < 'u' && global.HermesInternal);
let D;
function w(r) {
  if (r)
    try {
      const e = decodeURIComponent(
        D(r.split('.')[1])
          .split('')
          .map(function (t) {
            return '%' + ('00' + t.charCodeAt(0).toString(16)).slice(-2);
          })
          .join('')
      );
      return JSON.parse(e) || {};
    } catch {}
  return {};
}
function $(r, e = 0) {
  let t = w(r);
  return !(
    Object.keys(t).length > 0 &&
    (!t.exp || t.exp - e > Date.now() / 1e3)
  );
}
D =
  typeof atob != 'function' || he
    ? (r) => {
        let e = String(r).replace(/=+$/, '');
        if (e.length % 4 == 1)
          throw new Error(
            "'atob' failed: The string to be decoded is not correctly encoded."
          );
        for (
          var t, i, n = 0, s = 0, o = '';
          (i = e.charAt(s++));
          ~i && ((t = n % 4 ? 64 * t + i : i), n++ % 4)
            ? (o += String.fromCharCode(255 & (t >> ((-2 * n) & 6))))
            : 0
        )
          i =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='.indexOf(
              i
            );
        return o;
      }
    : atob;
const j = 'pb_auth';
class ue {
  constructor() {
    (this.baseToken = ''),
      (this.baseModel = null),
      (this._onChangeCallbacks = []);
  }
  get token() {
    return this.baseToken;
  }
  get model() {
    return this.baseModel;
  }
  get isValid() {
    return !$(this.token);
  }
  get isAdmin() {
    return w(this.token).type === 'admin';
  }
  get isAuthRecord() {
    return w(this.token).type === 'authRecord';
  }
  save(e, t) {
    (this.baseToken = e || ''),
      (this.baseModel = t || null),
      this.triggerChange();
  }
  clear() {
    (this.baseToken = ''), (this.baseModel = null), this.triggerChange();
  }
  loadFromCookie(e, t = j) {
    const i = le(e || '')[t] || '';
    let n = {};
    try {
      (n = JSON.parse(i)),
        (typeof n === null || typeof n != 'object' || Array.isArray(n)) &&
          (n = {});
    } catch {}
    this.save(n.token || '', n.model || null);
  }
  exportToCookie(e, t = j) {
    var l, c;
    const i = { secure: !0, sameSite: !0, httpOnly: !0, path: '/' },
      n = w(this.token);
    (i.expires =
      n != null && n.exp ? new Date(1e3 * n.exp) : new Date('1970-01-01')),
      (e = Object.assign({}, i, e));
    const s = {
      token: this.token,
      model: this.model ? JSON.parse(JSON.stringify(this.model)) : null,
    };
    let o = q(t, JSON.stringify(s), e);
    const a = typeof Blob < 'u' ? new Blob([o]).size : o.length;
    if (s.model && a > 4096) {
      s.model = {
        id: (l = s == null ? void 0 : s.model) == null ? void 0 : l.id,
        email: (c = s == null ? void 0 : s.model) == null ? void 0 : c.email,
      };
      const y = ['collectionId', 'username', 'verified'];
      for (const g in this.model) y.includes(g) && (s.model[g] = this.model[g]);
      o = q(t, JSON.stringify(s), e);
    }
    return o;
  }
  onChange(e, t = !1) {
    return (
      this._onChangeCallbacks.push(e),
      t && e(this.token, this.model),
      () => {
        for (let i = this._onChangeCallbacks.length - 1; i >= 0; i--)
          if (this._onChangeCallbacks[i] == e)
            return (
              delete this._onChangeCallbacks[i],
              void this._onChangeCallbacks.splice(i, 1)
            );
      }
    );
  }
  triggerChange() {
    for (const e of this._onChangeCallbacks) e && e(this.token, this.model);
  }
}
class pe extends ue {
  constructor(e = 'pocketbase_auth') {
    super(),
      (this.storageFallback = {}),
      (this.storageKey = e),
      this._bindStorageEvent();
  }
  get token() {
    return (this._storageGet(this.storageKey) || {}).token || '';
  }
  get model() {
    return (this._storageGet(this.storageKey) || {}).model || null;
  }
  save(e, t) {
    this._storageSet(this.storageKey, { token: e, model: t }), super.save(e, t);
  }
  clear() {
    this._storageRemove(this.storageKey), super.clear();
  }
  _storageGet(e) {
    if (typeof window < 'u' && window != null && window.localStorage) {
      const t = window.localStorage.getItem(e) || '';
      try {
        return JSON.parse(t);
      } catch {
        return t;
      }
    }
    return this.storageFallback[e];
  }
  _storageSet(e, t) {
    if (typeof window < 'u' && window != null && window.localStorage) {
      let i = t;
      typeof t != 'string' && (i = JSON.stringify(t)),
        window.localStorage.setItem(e, i);
    } else this.storageFallback[e] = t;
  }
  _storageRemove(e) {
    var t;
    typeof window < 'u' &&
      window != null &&
      window.localStorage &&
      ((t = window.localStorage) == null || t.removeItem(e)),
      delete this.storageFallback[e];
  }
  _bindStorageEvent() {
    typeof window < 'u' &&
      window != null &&
      window.localStorage &&
      window.addEventListener &&
      window.addEventListener('storage', (e) => {
        if (e.key != this.storageKey) return;
        const t = this._storageGet(this.storageKey) || {};
        super.save(t.token || '', t.model || null);
      });
  }
}
class f {
  constructor(e) {
    this.client = e;
  }
}
class me extends f {
  async getAll(e) {
    return (
      (e = Object.assign({ method: 'GET' }, e)),
      this.client.send('/api/settings', e)
    );
  }
  async update(e, t) {
    return (
      (t = Object.assign({ method: 'PATCH', body: e }, t)),
      this.client.send('/api/settings', t)
    );
  }
  async testS3(e = 'storage', t) {
    return (
      (t = Object.assign({ method: 'POST', body: { filesystem: e } }, t)),
      this.client.send('/api/settings/test/s3', t).then(() => !0)
    );
  }
  async testEmail(e, t, i) {
    return (
      (i = Object.assign(
        { method: 'POST', body: { email: e, template: t } },
        i
      )),
      this.client.send('/api/settings/test/email', i).then(() => !0)
    );
  }
  async generateAppleClientSecret(e, t, i, n, s, o) {
    return (
      (o = Object.assign(
        {
          method: 'POST',
          body: {
            clientId: e,
            teamId: t,
            keyId: i,
            privateKey: n,
            duration: s,
          },
        },
        o
      )),
      this.client.send('/api/settings/apple/generate-client-secret', o)
    );
  }
}
class T extends f {
  decode(e) {
    return e;
  }
  async getFullList(e, t) {
    if (typeof e == 'number') return this._getFullList(e, t);
    let i = 500;
    return (
      (t = Object.assign({}, e, t)).batch && ((i = t.batch), delete t.batch),
      this._getFullList(i, t)
    );
  }
  async getList(e = 1, t = 30, i) {
    return (
      ((i = Object.assign({ method: 'GET' }, i)).query = Object.assign(
        { page: e, perPage: t },
        i.query
      )),
      this.client.send(this.baseCrudPath, i).then((n) => {
        var s;
        return (
          (n.items =
            ((s = n.items) == null ? void 0 : s.map((o) => this.decode(o))) ||
            []),
          n
        );
      })
    );
  }
  async getFirstListItem(e, t) {
    return (
      ((t = Object.assign(
        { requestKey: 'one_by_filter_' + this.baseCrudPath + '_' + e },
        t
      )).query = Object.assign({ filter: e, skipTotal: 1 }, t.query)),
      this.getList(1, 1, t).then((i) => {
        var n;
        if (!((n = i == null ? void 0 : i.items) != null && n.length))
          throw new m({
            status: 404,
            response: {
              code: 404,
              message: "The requested resource wasn't found.",
              data: {},
            },
          });
        return i.items[0];
      })
    );
  }
  async getOne(e, t) {
    if (!e)
      throw new m({
        url: this.client.buildUrl(this.baseCrudPath + '/'),
        status: 404,
        response: {
          code: 404,
          message: 'Missing required record id.',
          data: {},
        },
      });
    return (
      (t = Object.assign({ method: 'GET' }, t)),
      this.client
        .send(this.baseCrudPath + '/' + encodeURIComponent(e), t)
        .then((i) => this.decode(i))
    );
  }
  async create(e, t) {
    return (
      (t = Object.assign({ method: 'POST', body: e }, t)),
      this.client.send(this.baseCrudPath, t).then((i) => this.decode(i))
    );
  }
  async update(e, t, i) {
    return (
      (i = Object.assign({ method: 'PATCH', body: t }, i)),
      this.client
        .send(this.baseCrudPath + '/' + encodeURIComponent(e), i)
        .then((n) => this.decode(n))
    );
  }
  async delete(e, t) {
    return (
      (t = Object.assign({ method: 'DELETE' }, t)),
      this.client
        .send(this.baseCrudPath + '/' + encodeURIComponent(e), t)
        .then(() => !0)
    );
  }
  _getFullList(e = 500, t) {
    (t = t || {}).query = Object.assign({ skipTotal: 1 }, t.query);
    let i = [],
      n = async (s) =>
        this.getList(s, e || 500, t).then((o) => {
          const a = o.items;
          return (i = i.concat(a)), a.length == o.perPage ? n(s + 1) : i;
        });
    return n(1);
  }
}
function p(r, e, t, i) {
  const n = i !== void 0;
  return n || t !== void 0
    ? n
      ? (console.warn(r),
        (e.body = Object.assign({}, e.body, t)),
        (e.query = Object.assign({}, e.query, i)),
        e)
      : Object.assign(e, t)
    : e;
}
function A(r) {
  var e;
  (e = r._resetAutoRefresh) == null || e.call(r);
}
class ge extends T {
  get baseCrudPath() {
    return '/api/admins';
  }
  async update(e, t, i) {
    return super.update(e, t, i).then((n) => {
      var s, o;
      return (
        ((s = this.client.authStore.model) == null ? void 0 : s.id) === n.id &&
          ((o = this.client.authStore.model) == null
            ? void 0
            : o.collectionId) === void 0 &&
          this.client.authStore.save(this.client.authStore.token, n),
        n
      );
    });
  }
  async delete(e, t) {
    return super.delete(e, t).then((i) => {
      var n, s;
      return (
        i &&
          ((n = this.client.authStore.model) == null ? void 0 : n.id) === e &&
          ((s = this.client.authStore.model) == null
            ? void 0
            : s.collectionId) === void 0 &&
          this.client.authStore.clear(),
        i
      );
    });
  }
  authResponse(e) {
    const t = this.decode((e == null ? void 0 : e.admin) || {});
    return (
      e != null &&
        e.token &&
        e != null &&
        e.admin &&
        this.client.authStore.save(e.token, t),
      Object.assign({}, e, {
        token: (e == null ? void 0 : e.token) || '',
        admin: t,
      })
    );
  }
  async authWithPassword(e, t, i, n) {
    let s = { method: 'POST', body: { identity: e, password: t } };
    s = p(
      'This form of authWithPassword(email, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(email, pass, options?).',
      s,
      i,
      n
    );
    const o = s.autoRefreshThreshold;
    delete s.autoRefreshThreshold, s.autoRefresh || A(this.client);
    let a = await this.client.send(
      this.baseCrudPath + '/auth-with-password',
      s
    );
    return (
      (a = this.authResponse(a)),
      o &&
        (function (c, y, g, S) {
          A(c);
          const b = c.beforeSend,
            d = c.authStore.model,
            k = c.authStore.onChange((u, h) => {
              (!u ||
                (h == null ? void 0 : h.id) != (d == null ? void 0 : d.id) ||
                (((h != null && h.collectionId) ||
                  (d != null && d.collectionId)) &&
                  (h == null ? void 0 : h.collectionId) !=
                    (d == null ? void 0 : d.collectionId))) &&
                A(c);
            });
          (c._resetAutoRefresh = function () {
            k(), (c.beforeSend = b), delete c._resetAutoRefresh;
          }),
            (c.beforeSend = async (u, h) => {
              var P;
              const V = c.authStore.token;
              if ((P = h.query) != null && P.autoRefresh)
                return b ? b(u, h) : { url: u, sendOptions: h };
              let E = c.authStore.isValid;
              if (E && $(c.authStore.token, y))
                try {
                  await g();
                } catch {
                  E = !1;
                }
              E || (await S());
              const C = h.headers || {};
              for (let v in C)
                if (
                  v.toLowerCase() == 'authorization' &&
                  V == C[v] &&
                  c.authStore.token
                ) {
                  C[v] = c.authStore.token;
                  break;
                }
              return (h.headers = C), b ? b(u, h) : { url: u, sendOptions: h };
            });
        })(
          this.client,
          o,
          () => this.authRefresh({ autoRefresh: !0 }),
          () =>
            this.authWithPassword(e, t, Object.assign({ autoRefresh: !0 }, s))
        ),
      a
    );
  }
  async authRefresh(e, t) {
    let i = { method: 'POST' };
    return (
      (i = p(
        'This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).',
        i,
        e,
        t
      )),
      this.client
        .send(this.baseCrudPath + '/auth-refresh', i)
        .then(this.authResponse.bind(this))
    );
  }
  async requestPasswordReset(e, t, i) {
    let n = { method: 'POST', body: { email: e } };
    return (
      (n = p(
        'This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).',
        n,
        t,
        i
      )),
      this.client
        .send(this.baseCrudPath + '/request-password-reset', n)
        .then(() => !0)
    );
  }
  async confirmPasswordReset(e, t, i, n, s) {
    let o = {
      method: 'POST',
      body: { token: e, password: t, passwordConfirm: i },
    };
    return (
      (o = p(
        'This form of confirmPasswordReset(resetToken, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(resetToken, password, passwordConfirm, options?).',
        o,
        n,
        s
      )),
      this.client
        .send(this.baseCrudPath + '/confirm-password-reset', o)
        .then(() => !0)
    );
  }
}
const fe = [
  'requestKey',
  '$cancelKey',
  '$autoCancel',
  'fetch',
  'headers',
  'body',
  'query',
  'params',
  'cache',
  'credentials',
  'headers',
  'integrity',
  'keepalive',
  'method',
  'mode',
  'redirect',
  'referrer',
  'referrerPolicy',
  'signal',
  'window',
];
function z(r) {
  if (r) {
    r.query = r.query || {};
    for (let e in r) fe.includes(e) || ((r.query[e] = r[e]), delete r[e]);
  }
}
class K extends f {
  constructor() {
    super(...arguments),
      (this.clientId = ''),
      (this.eventSource = null),
      (this.subscriptions = {}),
      (this.lastSentSubscriptions = []),
      (this.maxConnectTimeout = 15e3),
      (this.reconnectAttempts = 0),
      (this.maxReconnectAttempts = 1 / 0),
      (this.predefinedReconnectIntervals = [
        200, 300, 500, 1e3, 1200, 1500, 2e3,
      ]),
      (this.pendingConnects = []);
  }
  get isConnected() {
    return (
      !!this.eventSource && !!this.clientId && !this.pendingConnects.length
    );
  }
  async subscribe(e, t, i) {
    var o;
    if (!e) throw new Error('topic must be set.');
    let n = e;
    if (i) {
      z(i);
      const a =
        'options=' +
        encodeURIComponent(
          JSON.stringify({ query: i.query, headers: i.headers })
        );
      n += (n.includes('?') ? '&' : '?') + a;
    }
    const s = function (a) {
      const l = a;
      let c;
      try {
        c = JSON.parse(l == null ? void 0 : l.data);
      } catch {}
      t(c || {});
    };
    return (
      this.subscriptions[n] || (this.subscriptions[n] = []),
      this.subscriptions[n].push(s),
      this.isConnected
        ? this.subscriptions[n].length === 1
          ? await this.submitSubscriptions()
          : (o = this.eventSource) == null || o.addEventListener(n, s)
        : await this.connect(),
      async () => this.unsubscribeByTopicAndListener(e, s)
    );
  }
  async unsubscribe(e) {
    var i;
    let t = !1;
    if (e) {
      const n = this.getSubscriptionsByTopic(e);
      for (let s in n)
        if (this.hasSubscriptionListeners(s)) {
          for (let o of this.subscriptions[s])
            (i = this.eventSource) == null || i.removeEventListener(s, o);
          delete this.subscriptions[s], t || (t = !0);
        }
    } else this.subscriptions = {};
    this.hasSubscriptionListeners()
      ? t && (await this.submitSubscriptions())
      : this.disconnect();
  }
  async unsubscribeByPrefix(e) {
    var i;
    let t = !1;
    for (let n in this.subscriptions)
      if ((n + '?').startsWith(e)) {
        t = !0;
        for (let s of this.subscriptions[n])
          (i = this.eventSource) == null || i.removeEventListener(n, s);
        delete this.subscriptions[n];
      }
    t &&
      (this.hasSubscriptionListeners()
        ? await this.submitSubscriptions()
        : this.disconnect());
  }
  async unsubscribeByTopicAndListener(e, t) {
    var s;
    let i = !1;
    const n = this.getSubscriptionsByTopic(e);
    for (let o in n) {
      if (
        !Array.isArray(this.subscriptions[o]) ||
        !this.subscriptions[o].length
      )
        continue;
      let a = !1;
      for (let l = this.subscriptions[o].length - 1; l >= 0; l--)
        this.subscriptions[o][l] === t &&
          ((a = !0),
          delete this.subscriptions[o][l],
          this.subscriptions[o].splice(l, 1),
          (s = this.eventSource) == null || s.removeEventListener(o, t));
      a &&
        (this.subscriptions[o].length || delete this.subscriptions[o],
        i || this.hasSubscriptionListeners(o) || (i = !0));
    }
    this.hasSubscriptionListeners()
      ? i && (await this.submitSubscriptions())
      : this.disconnect();
  }
  hasSubscriptionListeners(e) {
    var t, i;
    if (((this.subscriptions = this.subscriptions || {}), e))
      return !!((t = this.subscriptions[e]) != null && t.length);
    for (let n in this.subscriptions)
      if ((i = this.subscriptions[n]) != null && i.length) return !0;
    return !1;
  }
  async submitSubscriptions() {
    if (this.clientId)
      return (
        this.addAllSubscriptionListeners(),
        (this.lastSentSubscriptions = this.getNonEmptySubscriptionKeys()),
        this.client
          .send('/api/realtime', {
            method: 'POST',
            body: {
              clientId: this.clientId,
              subscriptions: this.lastSentSubscriptions,
            },
            requestKey: this.getSubscriptionsCancelKey(),
          })
          .catch((e) => {
            if (!(e != null && e.isAbort)) throw e;
          })
      );
  }
  getSubscriptionsCancelKey() {
    return 'realtime_' + this.clientId;
  }
  getSubscriptionsByTopic(e) {
    const t = {};
    e = e.includes('?') ? e : e + '?';
    for (let i in this.subscriptions)
      (i + '?').startsWith(e) && (t[i] = this.subscriptions[i]);
    return t;
  }
  getNonEmptySubscriptionKeys() {
    const e = [];
    for (let t in this.subscriptions) this.subscriptions[t].length && e.push(t);
    return e;
  }
  addAllSubscriptionListeners() {
    if (this.eventSource) {
      this.removeAllSubscriptionListeners();
      for (let e in this.subscriptions)
        for (let t of this.subscriptions[e])
          this.eventSource.addEventListener(e, t);
    }
  }
  removeAllSubscriptionListeners() {
    if (this.eventSource)
      for (let e in this.subscriptions)
        for (let t of this.subscriptions[e])
          this.eventSource.removeEventListener(e, t);
  }
  async connect() {
    if (!(this.reconnectAttempts > 0))
      return new Promise((e, t) => {
        this.pendingConnects.push({ resolve: e, reject: t }),
          this.pendingConnects.length > 1 || this.initConnect();
      });
  }
  initConnect() {
    this.disconnect(!0),
      clearTimeout(this.connectTimeoutId),
      (this.connectTimeoutId = setTimeout(() => {
        this.connectErrorHandler(
          new Error('EventSource connect took too long.')
        );
      }, this.maxConnectTimeout)),
      (this.eventSource = new EventSource(
        this.client.buildUrl('/api/realtime')
      )),
      (this.eventSource.onerror = (e) => {
        this.connectErrorHandler(
          new Error('Failed to establish realtime connection.')
        );
      }),
      this.eventSource.addEventListener('PB_CONNECT', (e) => {
        const t = e;
        (this.clientId = t == null ? void 0 : t.lastEventId),
          this.submitSubscriptions()
            .then(async () => {
              let i = 3;
              for (; this.hasUnsentSubscriptions() && i > 0; )
                i--, await this.submitSubscriptions();
            })
            .then(() => {
              for (let n of this.pendingConnects) n.resolve();
              (this.pendingConnects = []),
                (this.reconnectAttempts = 0),
                clearTimeout(this.reconnectTimeoutId),
                clearTimeout(this.connectTimeoutId);
              const i = this.getSubscriptionsByTopic('PB_CONNECT');
              for (let n in i) for (let s of i[n]) s(e);
            })
            .catch((i) => {
              (this.clientId = ''), this.connectErrorHandler(i);
            });
      });
  }
  hasUnsentSubscriptions() {
    const e = this.getNonEmptySubscriptionKeys();
    if (e.length != this.lastSentSubscriptions.length) return !0;
    for (const t of e) if (!this.lastSentSubscriptions.includes(t)) return !0;
    return !1;
  }
  connectErrorHandler(e) {
    if (
      (clearTimeout(this.connectTimeoutId),
      clearTimeout(this.reconnectTimeoutId),
      (!this.clientId && !this.reconnectAttempts) ||
        this.reconnectAttempts > this.maxReconnectAttempts)
    ) {
      for (let i of this.pendingConnects) i.reject(new m(e));
      return (this.pendingConnects = []), void this.disconnect();
    }
    this.disconnect(!0);
    const t =
      this.predefinedReconnectIntervals[this.reconnectAttempts] ||
      this.predefinedReconnectIntervals[
        this.predefinedReconnectIntervals.length - 1
      ];
    this.reconnectAttempts++,
      (this.reconnectTimeoutId = setTimeout(() => {
        this.initConnect();
      }, t));
  }
  disconnect(e = !1) {
    var t;
    if (
      (clearTimeout(this.connectTimeoutId),
      clearTimeout(this.reconnectTimeoutId),
      this.removeAllSubscriptionListeners(),
      this.client.cancelRequest(this.getSubscriptionsCancelKey()),
      (t = this.eventSource) == null || t.close(),
      (this.eventSource = null),
      (this.clientId = ''),
      !e)
    ) {
      this.reconnectAttempts = 0;
      for (let i of this.pendingConnects) i.resolve();
      this.pendingConnects = [];
    }
  }
}
class ye extends T {
  constructor(e, t) {
    super(e), (this.collectionIdOrName = t);
  }
  get baseCrudPath() {
    return this.baseCollectionPath + '/records';
  }
  get baseCollectionPath() {
    return '/api/collections/' + encodeURIComponent(this.collectionIdOrName);
  }
  async subscribe(e, t, i) {
    if (!e) throw new Error('Missing topic.');
    if (!t) throw new Error('Missing subscription callback.');
    return this.client.realtime.subscribe(
      this.collectionIdOrName + '/' + e,
      t,
      i
    );
  }
  async unsubscribe(e) {
    return e
      ? this.client.realtime.unsubscribe(this.collectionIdOrName + '/' + e)
      : this.client.realtime.unsubscribeByPrefix(this.collectionIdOrName);
  }
  async getFullList(e, t) {
    if (typeof e == 'number') return super.getFullList(e, t);
    const i = Object.assign({}, e, t);
    return super.getFullList(i);
  }
  async getList(e = 1, t = 30, i) {
    return super.getList(e, t, i);
  }
  async getFirstListItem(e, t) {
    return super.getFirstListItem(e, t);
  }
  async getOne(e, t) {
    return super.getOne(e, t);
  }
  async create(e, t) {
    return super.create(e, t);
  }
  async update(e, t, i) {
    return super.update(e, t, i).then((n) => {
      var s, o, a;
      return (
        ((s = this.client.authStore.model) == null ? void 0 : s.id) !==
          (n == null ? void 0 : n.id) ||
          (((o = this.client.authStore.model) == null
            ? void 0
            : o.collectionId) !== this.collectionIdOrName &&
            ((a = this.client.authStore.model) == null
              ? void 0
              : a.collectionName) !== this.collectionIdOrName) ||
          this.client.authStore.save(this.client.authStore.token, n),
        n
      );
    });
  }
  async delete(e, t) {
    return super.delete(e, t).then((i) => {
      var n, s, o;
      return (
        !i ||
          ((n = this.client.authStore.model) == null ? void 0 : n.id) !== e ||
          (((s = this.client.authStore.model) == null
            ? void 0
            : s.collectionId) !== this.collectionIdOrName &&
            ((o = this.client.authStore.model) == null
              ? void 0
              : o.collectionName) !== this.collectionIdOrName) ||
          this.client.authStore.clear(),
        i
      );
    });
  }
  authResponse(e) {
    const t = this.decode((e == null ? void 0 : e.record) || {});
    return (
      this.client.authStore.save(e == null ? void 0 : e.token, t),
      Object.assign({}, e, {
        token: (e == null ? void 0 : e.token) || '',
        record: t,
      })
    );
  }
  async listAuthMethods(e) {
    return (
      (e = Object.assign({ method: 'GET' }, e)),
      this.client
        .send(this.baseCollectionPath + '/auth-methods', e)
        .then((t) =>
          Object.assign({}, t, {
            usernamePassword: !!(t != null && t.usernamePassword),
            emailPassword: !!(t != null && t.emailPassword),
            authProviders: Array.isArray(t == null ? void 0 : t.authProviders)
              ? t == null
                ? void 0
                : t.authProviders
              : [],
          })
        )
    );
  }
  async authWithPassword(e, t, i, n) {
    let s = { method: 'POST', body: { identity: e, password: t } };
    return (
      (s = p(
        'This form of authWithPassword(usernameOrEmail, pass, body?, query?) is deprecated. Consider replacing it with authWithPassword(usernameOrEmail, pass, options?).',
        s,
        i,
        n
      )),
      this.client
        .send(this.baseCollectionPath + '/auth-with-password', s)
        .then((o) => this.authResponse(o))
    );
  }
  async authWithOAuth2Code(e, t, i, n, s, o, a) {
    let l = {
      method: 'POST',
      body: {
        provider: e,
        code: t,
        codeVerifier: i,
        redirectUrl: n,
        createData: s,
      },
    };
    return (
      (l = p(
        'This form of authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, body?, query?) is deprecated. Consider replacing it with authWithOAuth2Code(provider, code, codeVerifier, redirectUrl, createData?, options?).',
        l,
        o,
        a
      )),
      this.client
        .send(this.baseCollectionPath + '/auth-with-oauth2', l)
        .then((c) => this.authResponse(c))
    );
  }
  async authWithOAuth2(...e) {
    if (e.length > 1 || typeof (e == null ? void 0 : e[0]) == 'string')
      return (
        console.warn(
          'PocketBase: This form of authWithOAuth2() is deprecated and may get removed in the future. Please replace with authWithOAuth2Code() OR use the authWithOAuth2() realtime form as shown in https://pocketbase.io/docs/authentication/#oauth2-integration.'
        ),
        this.authWithOAuth2Code(
          (e == null ? void 0 : e[0]) || '',
          (e == null ? void 0 : e[1]) || '',
          (e == null ? void 0 : e[2]) || '',
          (e == null ? void 0 : e[3]) || '',
          (e == null ? void 0 : e[4]) || {},
          (e == null ? void 0 : e[5]) || {},
          (e == null ? void 0 : e[6]) || {}
        )
      );
    const t = (e == null ? void 0 : e[0]) || {},
      i = (await this.listAuthMethods()).authProviders.find(
        (l) => l.name === t.provider
      );
    if (!i)
      throw new m(new Error(`Missing or invalid provider "${t.provider}".`));
    const n = this.client.buildUrl('/api/oauth2-redirect'),
      s = new K(this.client);
    let o = null;
    function a() {
      o == null || o.close(), s.unsubscribe();
    }
    return (
      t.urlCallback || (o = M(void 0)),
      new Promise(async (l, c) => {
        var y;
        try {
          await s.subscribe('@oauth2', async (d) => {
            const k = s.clientId;
            try {
              if (!d.state || k !== d.state)
                throw new Error("State parameters don't match.");
              if (d.error || !d.code)
                throw new Error(
                  'OAuth2 redirect error or missing code: ' + d.error
                );
              const u = Object.assign({}, t);
              delete u.provider,
                delete u.scopes,
                delete u.createData,
                delete u.urlCallback;
              const h = await this.authWithOAuth2Code(
                i.name,
                d.code,
                i.codeVerifier,
                n,
                t.createData,
                u
              );
              l(h);
            } catch (u) {
              c(new m(u));
            }
            a();
          });
          const g = { state: s.clientId };
          (y = t.scopes) != null && y.length && (g.scope = t.scopes.join(' '));
          const S = this._replaceQueryParams(i.authUrl + n, g);
          await (
            t.urlCallback ||
            function (d) {
              o ? (o.location.href = d) : (o = M(d));
            }
          )(S);
        } catch (g) {
          a(), c(new m(g));
        }
      })
    );
  }
  async authRefresh(e, t) {
    let i = { method: 'POST' };
    return (
      (i = p(
        'This form of authRefresh(body?, query?) is deprecated. Consider replacing it with authRefresh(options?).',
        i,
        e,
        t
      )),
      this.client
        .send(this.baseCollectionPath + '/auth-refresh', i)
        .then((n) => this.authResponse(n))
    );
  }
  async requestPasswordReset(e, t, i) {
    let n = { method: 'POST', body: { email: e } };
    return (
      (n = p(
        'This form of requestPasswordReset(email, body?, query?) is deprecated. Consider replacing it with requestPasswordReset(email, options?).',
        n,
        t,
        i
      )),
      this.client
        .send(this.baseCollectionPath + '/request-password-reset', n)
        .then(() => !0)
    );
  }
  async confirmPasswordReset(e, t, i, n, s) {
    let o = {
      method: 'POST',
      body: { token: e, password: t, passwordConfirm: i },
    };
    return (
      (o = p(
        'This form of confirmPasswordReset(token, password, passwordConfirm, body?, query?) is deprecated. Consider replacing it with confirmPasswordReset(token, password, passwordConfirm, options?).',
        o,
        n,
        s
      )),
      this.client
        .send(this.baseCollectionPath + '/confirm-password-reset', o)
        .then(() => !0)
    );
  }
  async requestVerification(e, t, i) {
    let n = { method: 'POST', body: { email: e } };
    return (
      (n = p(
        'This form of requestVerification(email, body?, query?) is deprecated. Consider replacing it with requestVerification(email, options?).',
        n,
        t,
        i
      )),
      this.client
        .send(this.baseCollectionPath + '/request-verification', n)
        .then(() => !0)
    );
  }
  async confirmVerification(e, t, i) {
    let n = { method: 'POST', body: { token: e } };
    return (
      (n = p(
        'This form of confirmVerification(token, body?, query?) is deprecated. Consider replacing it with confirmVerification(token, options?).',
        n,
        t,
        i
      )),
      this.client
        .send(this.baseCollectionPath + '/confirm-verification', n)
        .then(() => {
          const s = w(e),
            o = this.client.authStore.model;
          return (
            o &&
              !o.verified &&
              o.id === s.id &&
              o.collectionId === s.collectionId &&
              ((o.verified = !0),
              this.client.authStore.save(this.client.authStore.token, o)),
            !0
          );
        })
    );
  }
  async requestEmailChange(e, t, i) {
    let n = { method: 'POST', body: { newEmail: e } };
    return (
      (n = p(
        'This form of requestEmailChange(newEmail, body?, query?) is deprecated. Consider replacing it with requestEmailChange(newEmail, options?).',
        n,
        t,
        i
      )),
      this.client
        .send(this.baseCollectionPath + '/request-email-change', n)
        .then(() => !0)
    );
  }
  async confirmEmailChange(e, t, i, n) {
    let s = { method: 'POST', body: { token: e, password: t } };
    return (
      (s = p(
        'This form of confirmEmailChange(token, password, body?, query?) is deprecated. Consider replacing it with confirmEmailChange(token, password, options?).',
        s,
        i,
        n
      )),
      this.client
        .send(this.baseCollectionPath + '/confirm-email-change', s)
        .then(() => {
          const o = w(e),
            a = this.client.authStore.model;
          return (
            a &&
              a.id === o.id &&
              a.collectionId === o.collectionId &&
              this.client.authStore.clear(),
            !0
          );
        })
    );
  }
  async listExternalAuths(e, t) {
    return (
      (t = Object.assign({ method: 'GET' }, t)),
      this.client.send(
        this.baseCrudPath + '/' + encodeURIComponent(e) + '/external-auths',
        t
      )
    );
  }
  async unlinkExternalAuth(e, t, i) {
    return (
      (i = Object.assign({ method: 'DELETE' }, i)),
      this.client
        .send(
          this.baseCrudPath +
            '/' +
            encodeURIComponent(e) +
            '/external-auths/' +
            encodeURIComponent(t),
          i
        )
        .then(() => !0)
    );
  }
  _replaceQueryParams(e, t = {}) {
    let i = e,
      n = '';
    e.indexOf('?') >= 0 &&
      ((i = e.substring(0, e.indexOf('?'))),
      (n = e.substring(e.indexOf('?') + 1)));
    const s = {},
      o = n.split('&');
    for (const a of o) {
      if (a == '') continue;
      const l = a.split('=');
      s[decodeURIComponent(l[0].replace(/\+/g, ' '))] = decodeURIComponent(
        (l[1] || '').replace(/\+/g, ' ')
      );
    }
    for (let a in t)
      t.hasOwnProperty(a) && (t[a] == null ? delete s[a] : (s[a] = t[a]));
    n = '';
    for (let a in s)
      s.hasOwnProperty(a) &&
        (n != '' && (n += '&'),
        (n +=
          encodeURIComponent(a.replace(/%20/g, '+')) +
          '=' +
          encodeURIComponent(s[a].replace(/%20/g, '+'))));
    return n != '' ? i + '?' + n : i;
  }
}
function M(r) {
  if (typeof window > 'u' || !(window != null && window.open))
    throw new m(
      new Error(
        'Not in a browser context - please pass a custom urlCallback function.'
      )
    );
  let e = 1024,
    t = 768,
    i = window.innerWidth,
    n = window.innerHeight;
  (e = e > i ? i : e), (t = t > n ? n : t);
  let s = i / 2 - e / 2,
    o = n / 2 - t / 2;
  return window.open(
    r,
    'popup_window',
    'width=' +
      e +
      ',height=' +
      t +
      ',top=' +
      o +
      ',left=' +
      s +
      ',resizable,menubar=no'
  );
}
class be extends T {
  get baseCrudPath() {
    return '/api/collections';
  }
  async import(e, t = !1, i) {
    return (
      (i = Object.assign(
        { method: 'PUT', body: { collections: e, deleteMissing: t } },
        i
      )),
      this.client.send(this.baseCrudPath + '/import', i).then(() => !0)
    );
  }
}
class we extends f {
  async getList(e = 1, t = 30, i) {
    return (
      ((i = Object.assign({ method: 'GET' }, i)).query = Object.assign(
        { page: e, perPage: t },
        i.query
      )),
      this.client.send('/api/logs', i)
    );
  }
  async getOne(e, t) {
    if (!e)
      throw new m({
        url: this.client.buildUrl('/api/logs/'),
        status: 404,
        response: { code: 404, message: 'Missing required log id.', data: {} },
      });
    return (
      (t = Object.assign({ method: 'GET' }, t)),
      this.client.send('/api/logs/' + encodeURIComponent(e), t)
    );
  }
  async getStats(e) {
    return (
      (e = Object.assign({ method: 'GET' }, e)),
      this.client.send('/api/logs/stats', e)
    );
  }
}
class Ce extends f {
  async check(e) {
    return (
      (e = Object.assign({ method: 'GET' }, e)),
      this.client.send('/api/health', e)
    );
  }
}
class ve extends f {
  getUrl(e, t, i = {}) {
    if (
      !t ||
      !(e != null && e.id) ||
      (!(e != null && e.collectionId) && !(e != null && e.collectionName))
    )
      return '';
    const n = [];
    n.push('api'),
      n.push('files'),
      n.push(encodeURIComponent(e.collectionId || e.collectionName)),
      n.push(encodeURIComponent(e.id)),
      n.push(encodeURIComponent(t));
    let s = this.client.buildUrl(n.join('/'));
    if (Object.keys(i).length) {
      i.download === !1 && delete i.download;
      const o = new URLSearchParams(i);
      s += (s.includes('?') ? '&' : '?') + o;
    }
    return s;
  }
  async getToken(e) {
    return (
      (e = Object.assign({ method: 'POST' }, e)),
      this.client
        .send('/api/files/token', e)
        .then((t) => (t == null ? void 0 : t.token) || '')
    );
  }
}
class xe extends f {
  async getFullList(e) {
    return (
      (e = Object.assign({ method: 'GET' }, e)),
      this.client.send('/api/backups', e)
    );
  }
  async create(e, t) {
    return (
      (t = Object.assign({ method: 'POST', body: { name: e } }, t)),
      this.client.send('/api/backups', t).then(() => !0)
    );
  }
  async upload(e, t) {
    return (
      (t = Object.assign({ method: 'POST', body: e }, t)),
      this.client.send('/api/backups/upload', t).then(() => !0)
    );
  }
  async delete(e, t) {
    return (
      (t = Object.assign({ method: 'DELETE' }, t)),
      this.client
        .send(`/api/backups/${encodeURIComponent(e)}`, t)
        .then(() => !0)
    );
  }
  async restore(e, t) {
    return (
      (t = Object.assign({ method: 'POST' }, t)),
      this.client
        .send(`/api/backups/${encodeURIComponent(e)}/restore`, t)
        .then(() => !0)
    );
  }
  getDownloadUrl(e, t) {
    return this.client.buildUrl(
      `/api/backups/${encodeURIComponent(t)}?token=${encodeURIComponent(e)}`
    );
  }
}
class Se {
  constructor(e = '/', t, i = 'en-US') {
    (this.cancelControllers = {}),
      (this.recordServices = {}),
      (this.enableAutoCancellation = !0),
      (this.baseUrl = e),
      (this.lang = i),
      (this.authStore = t || new pe()),
      (this.admins = new ge(this)),
      (this.collections = new be(this)),
      (this.files = new ve(this)),
      (this.logs = new we(this)),
      (this.settings = new me(this)),
      (this.realtime = new K(this)),
      (this.health = new Ce(this)),
      (this.backups = new xe(this));
  }
  collection(e) {
    return (
      this.recordServices[e] || (this.recordServices[e] = new ye(this, e)),
      this.recordServices[e]
    );
  }
  autoCancellation(e) {
    return (this.enableAutoCancellation = !!e), this;
  }
  cancelRequest(e) {
    return (
      this.cancelControllers[e] &&
        (this.cancelControllers[e].abort(), delete this.cancelControllers[e]),
      this
    );
  }
  cancelAllRequests() {
    for (let e in this.cancelControllers) this.cancelControllers[e].abort();
    return (this.cancelControllers = {}), this;
  }
  filter(e, t) {
    if (!t) return e;
    for (let i in t) {
      let n = t[i];
      switch (typeof n) {
        case 'boolean':
        case 'number':
          n = '' + n;
          break;
        case 'string':
          n = "'" + n.replace(/'/g, "\\'") + "'";
          break;
        default:
          n =
            n === null
              ? 'null'
              : n instanceof Date
                ? "'" + n.toISOString().replace('T', ' ') + "'"
                : "'" + JSON.stringify(n).replace(/'/g, "\\'") + "'";
      }
      e = e.replaceAll('{:' + i + '}', n);
    }
    return e;
  }
  getFileUrl(e, t, i = {}) {
    return this.files.getUrl(e, t, i);
  }
  buildUrl(e) {
    var i;
    let t = this.baseUrl;
    return (
      typeof window > 'u' ||
        !window.location ||
        t.startsWith('https://') ||
        t.startsWith('http://') ||
        ((t =
          (i = window.location.origin) != null && i.endsWith('/')
            ? window.location.origin.substring(
                0,
                window.location.origin.length - 1
              )
            : window.location.origin || ''),
        this.baseUrl.startsWith('/') ||
          ((t += window.location.pathname || '/'),
          (t += t.endsWith('/') ? '' : '/')),
        (t += this.baseUrl)),
      e &&
        ((t += t.endsWith('/') ? '' : '/'),
        (t += e.startsWith('/') ? e.substring(1) : e)),
      t
    );
  }
  async send(e, t) {
    t = this.initSendOptions(e, t);
    let i = this.buildUrl(e);
    if (this.beforeSend) {
      const n = Object.assign({}, await this.beforeSend(i, t));
      n.url !== void 0 || n.options !== void 0
        ? ((i = n.url || i), (t = n.options || t))
        : Object.keys(n).length &&
          ((t = n),
          console != null &&
            console.warn &&
            console.warn(
              'Deprecated format of beforeSend return: please use `return { url, options }`, instead of `return options`.'
            ));
    }
    if (t.query !== void 0) {
      const n = this.serializeQueryParams(t.query);
      n && (i += (i.includes('?') ? '&' : '?') + n), delete t.query;
    }
    return (
      this.getHeader(t.headers, 'Content-Type') == 'application/json' &&
        t.body &&
        typeof t.body != 'string' &&
        (t.body = JSON.stringify(t.body)),
      (t.fetch || fetch)(i, t)
        .then(async (n) => {
          let s = {};
          try {
            s = await n.json();
          } catch {}
          if (
            (this.afterSend && (s = await this.afterSend(n, s)),
            n.status >= 400)
          )
            throw new m({ url: n.url, status: n.status, data: s });
          return s;
        })
        .catch((n) => {
          throw new m(n);
        })
    );
  }
  initSendOptions(e, t) {
    if (
      (((t = Object.assign({ method: 'GET' }, t)).body =
        this.convertToFormDataIfNeeded(t.body)),
      z(t),
      (t.query = Object.assign({}, t.params, t.query)),
      t.requestKey === void 0 &&
        (t.$autoCancel === !1 || t.query.$autoCancel === !1
          ? (t.requestKey = null)
          : (t.$cancelKey || t.query.$cancelKey) &&
            (t.requestKey = t.$cancelKey || t.query.$cancelKey)),
      delete t.$autoCancel,
      delete t.query.$autoCancel,
      delete t.$cancelKey,
      delete t.query.$cancelKey,
      this.getHeader(t.headers, 'Content-Type') !== null ||
        this.isFormData(t.body) ||
        (t.headers = Object.assign({}, t.headers, {
          'Content-Type': 'application/json',
        })),
      this.getHeader(t.headers, 'Accept-Language') === null &&
        (t.headers = Object.assign({}, t.headers, {
          'Accept-Language': this.lang,
        })),
      this.authStore.token &&
        this.getHeader(t.headers, 'Authorization') === null &&
        (t.headers = Object.assign({}, t.headers, {
          Authorization: this.authStore.token,
        })),
      this.enableAutoCancellation && t.requestKey !== null)
    ) {
      const i = t.requestKey || (t.method || 'GET') + e;
      delete t.requestKey, this.cancelRequest(i);
      const n = new AbortController();
      (this.cancelControllers[i] = n), (t.signal = n.signal);
    }
    return t;
  }
  convertToFormDataIfNeeded(e) {
    if (
      typeof FormData > 'u' ||
      e === void 0 ||
      typeof e != 'object' ||
      e === null ||
      this.isFormData(e) ||
      !this.hasBlobField(e)
    )
      return e;
    const t = new FormData();
    for (const i in e) {
      const n = e[i];
      if (typeof n != 'object' || this.hasBlobField({ data: n })) {
        const s = Array.isArray(n) ? n : [n];
        for (let o of s) t.append(i, o);
      } else {
        let s = {};
        (s[i] = n), t.append('@jsonPayload', JSON.stringify(s));
      }
    }
    return t;
  }
  hasBlobField(e) {
    for (const t in e) {
      const i = Array.isArray(e[t]) ? e[t] : [e[t]];
      for (const n of i)
        if (
          (typeof Blob < 'u' && n instanceof Blob) ||
          (typeof File < 'u' && n instanceof File)
        )
          return !0;
    }
    return !1;
  }
  getHeader(e, t) {
    (e = e || {}), (t = t.toLowerCase());
    for (let i in e) if (i.toLowerCase() == t) return e[i];
    return null;
  }
  isFormData(e) {
    return (
      e &&
      (e.constructor.name === 'FormData' ||
        (typeof FormData < 'u' && e instanceof FormData))
    );
  }
  serializeQueryParams(e) {
    const t = [];
    for (const i in e) {
      if (e[i] === null) continue;
      const n = e[i],
        s = encodeURIComponent(i);
      if (Array.isArray(n))
        for (const o of n) t.push(s + '=' + encodeURIComponent(o));
      else
        n instanceof Date
          ? t.push(s + '=' + encodeURIComponent(n.toISOString()))
          : typeof n !== null && typeof n == 'object'
            ? t.push(s + '=' + encodeURIComponent(JSON.stringify(n)))
            : t.push(s + '=' + encodeURIComponent(n));
    }
    return t.join('&');
  }
}
const ke = new Se('https://luminofight.pockethost.io/');
localStorage.getItem('auth') || H('auth', N);
async function Ee({ collection: r, node: e, sort: t }) {
  const i = await ke.collection(r).getFullList({ sort: `${t}` }),
    { isAuth: n } = await F('auth');
  i.forEach((s) => {
    const o = s.now_price * (s.discount * 0.01),
      a = `
    <li class="product-item">
    <figure>
    <a href="${n ? `/src/pages/detail/index.html?product=${s.id}` : '/src/pages/login/login.html'}">
      <img src="${ae(s)}" alt="${s.name}" />
    </a>

    <figcaption>
      ${s.desc ? `<span class="desc">${s.desc}</span>` : ''}
      <div class="item-name"> ${s.name} </div>
      <div class="price-info">
        <div class="now-price-info">
          ${s.discount ? `<span class="discount">${s.discount}%</span>` : ''}
          <span class="now-price">${R(s.now_price)}원</span>
        </div>
        ${
          s.discount
            ? `<span class="real-price"
          >${R(Math.floor(s.now_price + o))}원</span
        >`
            : ''
        }
      </div>
      ${s.extra_desc ? `<span class="extra-desc">${s.extra_desc}</span>` : ''}
      <div class="badge-collect">
        ${
          s.karly_only
            ? `<span class="badge karly-only">Karly Only</span
        >`
            : ''
        } ${
          s.limited_amount
            ? `<span class="badge limited-amount"
          >한정 수량</span
        >`
            : ''
        }
      </div>
    </figcaption>
  </figure>
  </li>
  `;
    Z(e, a);
  });
}
document.addEventListener('DOMContentLoaded', () => {
  var r;
  (r = document.querySelector('.product-container-slide')) == null ||
    r.addEventListener('click', () => {
      location.href = '/';
    });
});
const Ae = {
  collection: 'best_products',
  node: '.best-products > ul',
  sort: '-created',
};
document.addEventListener('DOMContentLoaded', () => {
  Ee(Ae);
});
class Oe extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
    const e = `
		.input-search-container {
			position: relative;
			width: 333px;
			margin-bottom: 31px; /* 컴포넌트 간 간격 */
		}
		.input-search-container input {
			width: 100%;
			height: 44px;
			padding: 0 20px 0 20px;
			padding-right: 50px; /* Add space for the icon */
			box-sizing: border-box;
			border: 1px solid #5F0080;
			border-radius: 4px;
			font-size: 16px;
		}
		.input-search-container input:focus {
			outline: none;
			border-color: #181818;
		}
		.input-search-container label {
			position: absolute;
			top: 50%;
			left: 20px;
			transform: translateY(-50%);
			color: #A6A6A6;
			font-size: 16px;
			pointer-events: none;
			transition: all 0.2s ease;
		}
		.input-search-container input:not(:placeholder-shown) + label {
			display: none;
		}
		.input-search-container svg {
			position: absolute;
			top: 50%;
			right: 10px;
			transform: translateY(-50%);
			cursor: pointer;
		}
	`,
      t = `
	  <div class="input-search-container">
		  <input type="text" placeholder=" " required>
		  <label></label>
		  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			  <path d="M26.0811 26.081L21.9611 21.961M16.4671 23.334C17.3689 23.334 18.2618 23.1564 19.095 22.8113C19.9281 22.4662 20.6851 21.9603 21.3228 21.3227C21.9605 20.685 22.4663 19.928 22.8114 19.0949C23.1565 18.2617 23.3341 17.3688 23.3341 16.467C23.3341 15.5652 23.1565 14.6722 22.8114 13.8391C22.4663 13.0059 21.9605 12.2489 21.3228 11.6113C20.6851 10.9736 19.9281 10.4678 19.095 10.1227C18.2618 9.77759 17.3689 9.59998 16.4671 9.59998C14.6459 9.59998 12.8992 10.3235 11.6114 11.6113C10.3236 12.8991 9.6001 14.6457 9.6001 16.467C9.6001 18.2882 10.3236 20.0349 11.6114 21.3227C12.8992 22.6105 14.6459 23.334 16.4671 23.334V23.334Z" stroke="#5F0080" stroke-width="1.7" stroke-linecap="round"/>
		  </svg>
	  </div>
  `;
    this.shadowRoot.innerHTML = `
            <style>${e}</style>
            ${t}
        `;
    const i = this.shadowRoot.querySelector('input'),
      n = this.shadowRoot.querySelector('label');
    (n.textContent = this.getAttribute('label') || ''),
      i.addEventListener('input', () => {
        n.style.display = i.value.trim() !== '' ? 'none' : 'block';
      });
  }
}
customElements.define('input-search-container', Oe);
class Le extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: 'open' });
    const e = `
            .input-container {
                position: relative;
                width: 333px;
                margin-bottom: 31px; /* 컴포넌트 간 간격 */
            }

            .input-container input {
                width: 100%;
                height: 44px;
                padding: 0 20px;
                box-sizing: border-box;
                border: 1px solid #A6A6A6;
                border-radius: 4px;
                font-size: 16px;
            }

            .input-container input:focus {
                outline: none;
                border-color: #181818;
            }

            .input-container label {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                color: #A6A6A6;
                font-size: 16px;
                pointer-events: none;
                transition: all 0.2s ease;
            }

            .input-container input:not(:placeholder-shown) + label {
                display: none;
            }
        `,
      t = `
            <div class="input-container">
                <input type="text" placeholder=" " required>
                <label></label>
            </div>
        `;
    this.shadowRoot.innerHTML = `
            <style>${e}</style>
            ${t}
        `;
    const i = this.shadowRoot.querySelector('input'),
      n = this.shadowRoot.querySelector('label');
    (n.textContent = this.getAttribute('label') || ''),
      i.addEventListener('input', () => {
        n.style.display = i.value.trim() !== '' ? 'none' : 'block';
      });
  }
}
customElements.define('input-text-container', Le);
class Te extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
    <style>
      .logo-and-switch{
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        gap: 12px;
        position: relative;
        white-space: nowrap;
      }
      .switch-bar {
        width: 173px;
        height: 32px;
        display: flex;
        flex-flow: row nowrap;
        gap: 12px;
        align-items: center;
        font-weight: 600;
        font-size: 21.33px;
        line-height: 31.99px;
      }
      span {
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      color: #5F0080;
      }
      .market-karly a {
        text-decoration: none;
      }
      .beauty-karly{
        color: #898989;
        cursor: pointer;
      }
      .beauty-karly:hover {
        color: #5F0080;
      }
      .beauty-karly-bar {
        top: 0px;
        position: absolute;
      }
      .beauty-karly-new {
        position: absolute;
        top: 0;
        left: 273px;
      }
      </style>
    
    <div class="logo-and-switch">
      <a href="/src/index.html"><svg width="82" height="42" viewBox="0 0 82 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_6404_350)">    
      <path d="M62.5 0.965008C63.526 0.408008 64.966 0.247008 65.856 1.07201C66.746 1.89701 66.532 3.12001 65.856 5.04501C65.856 5.04501 64.351 9.11101 62.801 13.307L62.403 14.387C60.989 18.217 59.641 21.874 59.476 22.35C57.978 26.595 61.443 26.472 63.5 22.198C64.659 19.804 66.144 15.841 66.144 15.841C66.668 14.278 66.826 13.337 66.503 13.013C66.396 12.9 66.548 12.761 66.683 12.69C68.952 11.541 71.313 12.618 70.019 16L69.965 16.138C69.578 17.116 67.285 22.871 67.285 22.871C66.609 24.531 66.69 26.107 67.703 26.107C68.389 26.103 69.163 25.722 70.007 25.019C71.825 23.515 73.229 20.707 73.734 19.565C73.964 19.057 74.821 17.145 75.5 15.204C75.736 14.539 75.869 13.844 75.895 13.139C75.8776 13.0519 75.8867 12.9615 75.9213 12.8796C75.9559 12.7978 76.0143 12.7282 76.089 12.68C76.6032 12.4061 77.1764 12.262 77.759 12.26C78.0413 12.2547 78.3209 12.3158 78.5754 12.4382C78.8298 12.5607 79.052 12.7411 79.224 12.965C79.667 13.563 79.79 14.544 79.327 15.773C79.207 16.093 75.552 25.731 75.552 25.731V25.757C77.593 24.534 79.422 24.444 80.505 24.903L80.502 24.89C81.997 25.537 82.492 27.33 81.44 28.449C81.337 28.559 81.078 28.533 81.078 28.359C80.984 27.106 78.561 24.864 74.969 27.284L74.824 27.669L73.756 30.477C71.136 37.495 68.353 42.613 64.341 41.477C61.653 40.717 61.964 36.87 64.856 33.687C66.8586 31.5511 69.0288 29.5788 71.346 27.789C71.414 27.601 71.476 27.439 71.534 27.278C71.812 26.498 72.025 25.844 72.326 25.013L72.485 24.495C72.307 24.695 71.987 25.068 71.773 25.307C71.061 26.107 69.279 28.064 66.444 27.514L66.21 27.462C64.16 26.954 63.602 25.476 63.555 24.185C61.413 26.841 59.204 27.611 57.748 27.575C55.8 27.527 54.37 26.061 55.321 23.285C56.379 20.179 60.821 7.95301 62.116 4.28501C62.601 2.70501 62.782 1.70501 62.3 1.31101C62.177 1.20801 62.352 1.04601 62.5 0.965008ZM70.864 29.743C69.761 30.623 65.338 34.273 64.112 37.184C63.607 38.381 63.736 39.333 64.6 39.417C66.56 39.611 68.612 35.599 70.828 29.905L70.864 29.743ZM16.028 5.35201C15.941 5.68401 14.709 9.21201 13.327 13.101L13.118 13.687L12.908 14.276L12.693 14.88C17.384 13.757 25.757 8.31001 26.728 4.79501C26.848 4.63401 27.018 4.57501 27.294 4.76001C27.789 5.09001 27.98 5.91501 27.789 6.67801C27.025 9.71601 21.373 14.019 16.41 16.232C17.022 17.869 19.092 22.499 20.616 25.343C22.279 28.462 24.036 29.918 26.763 30.08C28.223 30.165 29.777 29.633 30.656 28.86L30.804 28.72L30.791 28.75C30.985 28.546 31.302 28.827 31.157 29.073C30.601 29.9022 29.8614 30.5921 28.9957 31.0893C28.13 31.5865 27.1614 31.8776 26.165 31.94C19.82 32.367 17.391 28.07 12.861 17.446C12.495 17.572 12.052 17.734 11.606 17.896C11.531 18.083 9.53599 23.538 9.47599 23.719C8.53199 26.589 8.47099 28.161 9.11799 28.614C9.26299 28.704 9.19199 28.947 8.93999 29.028C6.41299 29.824 4.08699 28.332 5.38099 24.586C6.542 21.27 11.071 8.40601 12.295 4.96001C12.722 3.66601 12.492 2.83501 11.803 2.65401C8.50599 1.78001 0.876995 8.74901 1.97099 15.184C2.16099 16.304 2.95099 16.931 3.34899 16.847C3.37068 16.8427 3.3931 16.8438 3.41424 16.8503C3.43537 16.8568 3.45455 16.8685 3.47004 16.8843C3.48553 16.9001 3.49683 16.9195 3.50294 16.9407C3.50904 16.962 3.50975 16.9844 3.50499 17.006C3.39417 17.3856 3.1387 17.7064 2.79361 17.8994C2.44852 18.0925 2.04142 18.1422 1.65999 18.038C0.489995 17.782 0.106995 16.527 0.0429947 15.88C-0.601005 9.22001 6.14799 1.23001 12.389 0.580008C14.767 0.330008 16.998 1.54001 16.028 5.35201ZM40.068 15.265L40.008 15.472L37.178 23.632C36.874 24.482 37.078 25.369 37.679 25.534C39.436 26.016 41.707 23.389 42.81 20.801C43.3403 19.5445 43.8325 18.2722 44.286 16.986C44.868 15.343 45.392 13.803 45.069 13.078C44.994 12.91 45.114 12.822 45.292 12.728C45.797 12.473 47.518 11.903 48.433 12.796C49.128 13.47 49.042 14.567 48.403 16.233L48.307 16.475L48.527 16.202C51.23 12.902 53.319 11.91 55.09 12.605L55.237 12.667C57.618 13.741 56.383 17.882 53.121 18.147C52.921 18.164 52.765 18.021 52.963 17.74C53.358 17.135 53.319 15.831 52.167 15.718C51.015 15.605 49.337 16.925 48.129 18.562C47.045 20.012 45.929 22.473 44.807 25.835C44.535 26.653 44.664 26.847 44.697 26.902C44.7047 26.9165 44.7087 26.9326 44.7087 26.949C44.7087 26.9654 44.7047 26.9815 44.697 26.996C44.554 27.268 43.732 27.592 42.937 27.592C41.312 27.585 40.646 26.647 40.97 25.155C39.122 26.919 37.259 27.769 35.615 27.621C35.2533 27.5896 34.9026 27.4805 34.5869 27.3012C34.2712 27.1219 33.998 26.8766 33.7857 26.5821C33.5735 26.2875 33.4272 25.9506 33.3571 25.5944C33.2869 25.2382 33.2943 24.8711 33.379 24.518C31.953 26.327 29.837 27.786 27.682 27.585C25.527 27.385 24.182 25.919 24.88 22.797C25.47 20.199 28.2195 13.687 31.5 11.5C33 10.5 34.6656 10.678 35 10.5C36.5 11 36.7231 11.4523 36.207 12.9468C34 13 32.5 14.5 31.157 16.202C29.2556 18.1878 28.1559 21.5192 28 22C27.263 24.287 28.365 25.709 29.41 25.766C30.455 25.826 31.84 24.806 32.83 23.263C34.59 20.739 35.411 17.578 36.207 15.381C36.411 14.821 37 13.5 36.207 12.9468C35.99 13.0425 34.792 10.614 35 10.5C37 10 40.951 12.017 40.068 15.265Z" fill="#5F0080"/>
      </g>
      <defs>
      <clipPath id="clip0_6404_350">
      <rect width="82" height="42" fill="white"/>
      </clipPath>
      </defs>
      </svg></a>

      <div class="switch-bar">
        <span class="market-karly"><a href="/src/index.html">마켓칼리</a></span>
        <span aria-hidden="true"><img src="/default-switch-bar.png" alt="스위치 바" /></span>
        <span class="beauty-karly">뷰티칼리</span>
      </div>

      <img class="beauty-karly-new" src="/beauty-karly-new.png" alt="뷰티칼리 new 아이콘">
    </div>
    `);
  }
}
customElements.define('default-logo', Te);
class Pe extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
    <style>
      .middle-header {
        width: 1050px;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin: 0 auto;
      }
      .default-icon{
        display: flex;
        flex-flow: row nowrap;
        gap: 20px;
      }
      .logo-search{
        display: flex;
        gap: 60px;
      }
      .bottom-header{
        width: 1050px;
        height: 72px;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        align-items: center;
      }
      .delivery-info{
        width: 79px;
        height: 19px;
        font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        font-weight: 400;
        font-size: 12px;
        border: 1px solid #A6A6A6;
        border-radius: 16px;
        line-height: 19.2px;
        padding: 4px 8px 4px 8px;
      }
      .delivery-info-first{
        color: #5F0080;
      }
    </style>

    <div class="middle-header">

    <span class="logo-search">
    <default-logo></default-logo>
    <input-search-container label="검색어를 입력해주세요"></input-search-container>
    </span>
     
      <span class="default-icon">
        <cart-icon></cart-icon> <!-- location 아이콘 들어와야함. -->
        <cart-icon></cart-icon>
        <default-icon-heart></default-icon-heart>    
      </span>
    </div>

    <div class="bottom-header">
    <header-category></header-category>
    <nav-menu></nav-menu>
    <span class="delivery-info">
      <span class="delivery-info-first"> 샛별·낮 </span>
      <span class="delivery-info-last"> 배송안내</span>
    </span>
    </div>
    
    `);
  }
}
customElements.define('c-header', Pe);
class Ie extends HTMLElement {
  constructor() {
    super();
    const e = this.attachShadow({ mode: 'open' }),
      t = document.createElement('div');
    t.setAttribute('class', 'footer-container'),
      (t.innerHTML = `
      <div class="footer-content">
        <!-- Customer Service Section -->
        <div class="customer-service" aria-labelledby="customer-service-title">
          <h2 id="customer-service-title" class="customer-service-title">고객행복센터</h2>
          <p class="customer-service-phone">
            <strong class="phone-number">1644-1107</strong>
            <span>월~토요일 오전 7시 - 오후 6시</span>
          </p>
          <div class="customer-service-info">
            <div class="info-section" aria-labelledby="kakao-inquiry-title">
              <span id="kakao-inquiry-title" class="info-title">카카오톡 문의</span>
              <div class="info-details" aria-labelledby="kakao-inquiry-title">
                <span aria-label="운영 시간">월~토요일 | 오전 7시 - 오후 6시</span>
                <span aria-label="일요일 및 공휴일 운영 시간">일/공휴일 | 오전 7시 - 오후 1시</span>
              </div>
            </div>
            <div class="info-section" aria-labelledby="one-on-one-inquiry-title">
              <span id="one-on-one-inquiry-title" class="info-title">1:1 문의</span>
              <div class="info-details" aria-labelledby="one-on-one-inquiry-title">
                <span>365일</span> 고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </div>
            </div>
            <div class="info-section" aria-labelledby="bulk-order-inquiry-title">
              <span id="bulk-order-inquiry-title" class="info-title">대량주문 문의</span>
              <div class="info-details" aria-labelledby="bulk-order-inquiry-title">
                <span aria-label="대량 주문 문의 운영 시간">월~금요일 | 오전9시 - 오후 6시</span>
                <span aria-label="점심시간">점심시간 | 낮 12시 - 오후 1시</span>
              </div>
            </div>
          </div>
          <ul class="customer-service-contacts">
            비회원 문의 : <a href="mailto:help@karlycorp.com">help@karlycorp.com</a>
            <br>비회원 대량주문 문의 : <a href="mailto:help@karlycorp.com">help@karlycorp.com</a>
          </ul>
        </div>
        <!-- Company Info Section -->
        <div class="company-info">
          <ul class="company-menu">
            <li><a href="">칼리소개</a></li>
            <li><a href="">칼리소개영상</a></li>
            <li><a href="">인재채용</a></li>
            <li><a href="">이용약관</a></li>
            <li><a href="">개인정보처리방침</a></li>
            <li><a href="">이용안내</a></li>
          </ul>
          <address class="company-address">
            <ul>
              <li>법인명 (상호) : 주식회사 컬리
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li>사업자등록번호 : 261-81-23567
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li><a href="#">사업자정보 확인</a></li>
              <li>통신판매업 : 제 2018-서울강남-01646 호
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li>개인정보보호책임자 : 이원준</li>
              <li>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</li>
              <li>대표이사 : 김슬아</li>
              <li>입점문의 : <a href="#">입정문의하기</a>
              <span class="divider" aria-hidden="true">|</span></li>
              <li>제휴문의 : <a href="mailto:business@karlycorp.com">business@karlycorp.com</a></li>
              <li class="wide">채용문의 : <a href="mailto:recruit@karlycorp.com">recruit@karlycorp.com</a></li>
              <li class="wide">팩스 : 070 - 7500 - 6098</li>
            </ul>
          </address>
          <ul class="social-links">
            <li><a href="#"><img src="/icons/ico_naver.png" alt="블로그" /></a></li>
            <li><a href="#"><img src="/icons/ico_facebook.png" alt="페이스북" /></a></li>
            <li><a href="#"><img src="/icons/ico_instagram.png" alt="인스타그램" /></a></li>
            <li><a href="#"><img src="/icons/NaverPost.svg" alt="네이버 포스트" /></a></li>
            <li><a href="#"><img src="/icons/Youtube.svg" alt="유튜브" /></a></li>
          </ul>
        </div>
      </div>
      <!-- Certifications Section -->
      <ul class="certifications">
        <li>
          <figure>
            <div>
              <img src="../../../icons/isms.png" alt="ISMS" />
            </div>
            <figcaption>
              <span>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영</span>
              <span>(심사받지 않은 물리적 인프라 제외)</span>
              <span>[유효기간] 2022.01.19 ~ 2025.01.18</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/privacy.png" alt="PRIVACY 로고" />
            </div>
            <figcaption>
              <span>개인정보보호 우수 웹사이트</span>
              <span>개인정보처리시스템 인증 (PRIVACY)</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/tosspayments.png" alt="toss payments 로고" />
            </div>
            <figcaption>
              <span>토스페이먼츠 구매안전(에스크로) <br>서비스를 이용하실 수 있습니다.</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/wooriBank.png" alt="우리은행" />
            </div>
            <figcaption>
              <span>고객님이 현금으로 결제한 금액에 대해 우리은행과<br>채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <!-- Disclaimer Section -->
      <div class="footer-disclaimer">
        <div class="disclaimer-text">
          <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
          <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
        </div>
        <p class="copyright-text">© KURLY CORP. ALL RIGHTS RESERVED</p>
      </div>
    `);
    const i = document.createElement('style');
    (i.textContent = `
     body, h2, p, ul, li, span {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  font-family: 'Pretendard', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  padding: 20px;
  border-bottom: 1px solid var(--gray--100, #e1e1e1);
}

.footer-disclaimer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 20px;
  text-align: center;
}

.customer-service, .company-info {
  width: 48%;
}

.customer-service-title, .customer-service-phone, .company-menu, .company-address, .customer-service-contacts, .social-links, .certifications, .disclaimer-text, .copyright-text {
  margin-bottom: 20px;
}

.customer-service-title {
  color: var(--content, #333);
  font-size: 21px;
  font-weight: 700;
  line-height: 140%; 
}

.customer-service-phone {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-number {
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 38px;
  font-weight: 700;
}

.customer-service-phone span {
  color: var(--content, #333);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}

.customer-service-contacts a {
  color: var(--content, #5F0080);
}

.customer-service-info .info-section {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
}

.info-title {
  font-weight: bold;
  width: 140px;
  height: 40px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--gray--200, #ccc);
  box-sizing: border-box;
}

.info-details {
  margin-left: 10px;
  color: var(--content, #333);
  font-size: 16px;
  line-height: 160%;
}

.info-details span {
  display: block;
}

.footer_cs_list li {
  color: var(--content, #333);
  font-size: 12px;
  line-height: 160%;
}

.footer_cs_list li a {
  color: var(--primary, #007bff);
}

.company-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.company-menu li {
  list-style: none;
  color: var(--content, #333);
  font-size: 16px;
  line-height: 160%;
}

.company-menu a {
  text-decoration: none;
  color: var(--content, #333);
}

.company-menu a:hover {
  text-decoration: underline;
}

.company-address {
  overflow: hidden;
  width: 416px;
}

.company-address ul {
  display: flex;
  flex-wrap: wrap;
  margin-left: -17px;
  list-style-type: none;
}

.company-address li {
  position: relative;
  padding-left: 17px;
  color: var(--content, #333);
  font-size: 12px;
  line-height: 160%;
}

.company-address li::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 10px;
  background-color: var(--content, #333);
}

.company-address a {
  color: var(--primary, #5F0080);
}

.company-address a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
}

.social-links li {
  list-style: none;
}

.social-links img {
  
 
  height: 30px;
  
}

.certifications {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  padding: 24px 0 32px;
  background-color: #fff;
  border: 1px solid var(--gray--100, #e1e1e1);
  border-radius: 5px;
}

.certifications li {
  list-style: none;
  text-align: center;
  min-width: 23%;
}

.certifications img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.certifications figcaption {
  font-size: 10px;
  color: var(--content, #777);
  line-height: 160%;
}

.certifications figcaption span {
  display: block;
  white-space: nowrap;
}

.disclaimer-text p {
  font-size: 14px;
  color: var(--content, #777);
  margin-bottom: 10px;
}

.copyright-text {
  font-size: 12px;
  color: var(--gray--400, #bbb);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .customer-service, .company-info {
    width: 100%;
  }

  .company-menu {
    flex-direction: column;
    align-items: center;
  }

  .company-menu li {
    margin-bottom: 10px;
  }

  .social-links {
    justify-content: center;
  }
}
`),
      e.appendChild(i),
      e.appendChild(t);
  }
}
customElements.define('footer-component', Ie);
class Re extends HTMLElement {
  constructor() {
    super(),
      this.attachShadow({ mode: 'open' }),
      (this.shadowRoot.innerHTML = `
    <style>
      .main-banner-wrapper {
        position: relative;
        width: 1920px;
        height: 370px;
        margin: 0 auto;
      }
      .prev-button {
        opacity: 0;
        transition: opacity 0.5s ease;
        position: absolute;
        top: 146px;
        left: 402px;
        cursor: pointer;
      }
      .next-button {
        opacity: 0;
        transition: opacity 0.5s ease;
        position: absolute;
        top: 146px;
        left: 1518px;
        cursor: pointer;
      }
      .is-active {
        opacity: 1;
      }
    </style>
    <div class="main-banner-wrapper">
      <img src="/src/assets/images/banner05.png" class="main-banner" alt="특가/혜택 관련 배너">
      <img src="/arrow-left.png" role="button" class="prev-button main-banner-button" alt="배너 prev 버튼">
      <img src="/arrow-right.png" role="button" class="next-button main-banner-button" alt="배너 next 버튼">    
    </div>
    `),
      (this.mainBannerWrapper = this.shadowRoot.querySelector(
        '.main-banner-wrapper'
      )),
      (this.mainBanner = this.shadowRoot.querySelector('.main-banner')),
      (this.mainBannerButtons = this.shadowRoot.querySelectorAll(
        '.main-banner-button'
      )),
      this.mainBanner.addEventListener(
        'mouseenter',
        this.handleMouseEnter.bind(this)
      ),
      this.mainBannerWrapper.addEventListener(
        'mouseleave',
        this.handleMouseLeave.bind(this)
      );
  }
  handleMouseEnter(e) {
    this.mainBannerButtons.forEach((t) => t.classList.add('is-active'));
  }
  handleMouseLeave(e) {
    this.mainBannerButtons.forEach((t) => t.classList.remove('is-active'));
  }
}
customElements.define('main-banner', Re);
class qe extends HTMLElement {
  constructor() {
    super();
    const e = this.attachShadow({ mode: 'open' });
    e.innerHTML = `
      <style>
        ${this.getStyle()}
      </style>
      <div class="container">
        <h1>로그인</h1>
        <hr />
        <form action="">
          <div>
            <label for="emField"></label>
            <input type="email" id="emField" placeholder="이메일를 입력해주세요" />
          </div>
          <div>
            <label for="pwField"></label>
            <input type="password" id="pwField" placeholder="비밀번호를 입력해주세요" />
          </div>
          <div class="find-info">
            <a href="#">아이디 찾기</a>
            <span class="divider" aria-hidden="true">|</span>
            <a href="#">비밀번호 찾기</a>
          </div>
          <button type="submit" class="login">로그인</button>
        </form>
        <a href="/src/pages/register/" class="register">회원가입</a>
      </div>
    `;
  }
  getStyle() {
    return `
      body {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      font-family: Pretendard;
      }

      .container {
        text-align: center;
        max-width: 400px;
        width: 100%;
        padding: 20px;
      }

      h1 {
        font-size: 21.33px;
        font-weight: 600;
        font-weight: bold;
        line-height: 31.99px;
        margin-bottom: 20px;
      }

      hr {
        margin: 20px 0;
        border: none;
      }

      form div {
        margin-bottom: 15px;
      }

      input[type="email"],
      input[type="password"] {
        width: 100%;
        padding: 14px;
        border: 2px solid #ddd;
        border-radius: 5px;
        box-sizing: border-box;
        font-size: 16px;
      }

      .find-info {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 15px;
      }

      .find-info a {
        color: #000000;
        text-decoration: none;
        font-size: 12px;
        line-height: 160%;
      }

      .find-info a:hover {
        text-decoration: underline;
      }

      .login {
        width: 100%;
        height: 54px;
        padding: 10px;
        background-color: #5F0080;
        color: #FFFFFF;
        border: none;
        border-radius: 4px;
        font-size: 16px;
        cursor: pointer;
      }

      .login:hover {
        background-color: #5F0080;
      }

      .register {
        width: 100%;
        height: 54px;
        margin-top: 15px;
        color: #5F0080;
        text-decoration: none;
        border: 2px solid #5F0080;
        padding: 10px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 16px;
        box-sizing: border-box;
        cursor: pointer;
      }

      .divider {
        width: 10px;
        height: 10px;
        color: #333;
      }

      .register:hover {
        background-color: #FFFFFF;
      }
    `;
  }
}
customElements.define('login-component', qe);
export { Ee as r };
