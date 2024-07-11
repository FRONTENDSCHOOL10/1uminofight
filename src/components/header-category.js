/*
HeaderCategory 컴포넌트
기능 : 카테고리 탭을 hover 했을 때 -> 카테고리 메뉴가 나타남.
사용 페이지 : 헤더
이슈번호 : #17

cf. 특이사항
- 카테고리 탭 (카테고리 탭과 메뉴까지 포함하고 있는 컴포넌트)
- 이후에 헤더 컴포넌트에 포함될 예정
*/

import './header-category-item-list.js';

const template = document.createElement('template');
template.innerHTML = `
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
  </style>
  <div class="header-category-tab" role="group" aria-haspopup="true" aria-expanded="false" aria-controls="category-item-list">
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

class HeaderCategory extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.appendChild(template.content.cloneNode(true));

    const tab = this.shadowRoot.querySelector('.header-category-tab');

    tab.addEventListener('mouseover', () => {
      tab.setAttribute('aria-expanded', 'true');
    });

    tab.addEventListener('mouseout', () => {
      tab.setAttribute('aria-expanded', 'false');
    });
  }
}

if (!customElements.get('header-category')) {
  customElements.define('header-category', HeaderCategory);
}
