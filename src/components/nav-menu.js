/*
navMenuItem 컴포넌트
기능 : '베스트' 탭 클릭 -> 상품리스트 페이지로 이동
사용 페이지 : 헤더
이슈번호 : #20

cf. 특이사항
- navMenuItem 컴포넌트 구성 -> navMenu 컴포넌트 구성
- 이후에 헤더 컴포넌트에 포함될 예정
*/

import './nav-menu-item.js';

class NavMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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

    const ul = this.shadowRoot.querySelector('ul');

    // 메뉴 아이템 데이터
    const menuItems = [
      { value: '신상품', url: '/src/pages/mainPage/mainPage.html' },
      { value: '베스트', url: '/src/pages/ProductList/ProductList.html' },
      { value: '알뜰쇼핑', url: '/src/pages/mainPage/mainPage.html' },
      { value: '특가/혜택', url: '/src/pages/mainPage/mainPage.html' },
    ];

    // 메뉴 아이템 생성
    menuItems.forEach((item) => {
      const menuItem = document.createElement('nav-menu-item');
      menuItem.setAttribute('value', item.value);
      menuItem.setAttribute('url', item.url);
      ul.appendChild(menuItem);
    });
  }
}

if (!customElements.get('nav-menu')) {
  customElements.define('nav-menu', NavMenu);
}

export { NavMenu };
