/*
HeaderCategoryItem 컴포넌트 & HeaderCategoryItemList 컴포넌트
기능 : 카테고리 탭을 hover 했을 때 -> 카테고리 메뉴가 나타남.
사용 페이지 : 헤더
이슈번호 : #17

cf. 특이사항
- 카테고리 hover 했을 때 나타나는 메뉴 컴포넌트
- HeaderCategoryItem 컴포넌트 구성 -> HeaderCategory 컴포넌트 구성
- 이후에 헤더 컴포넌트에 포함될 예정
*/

//******************* HeaderCategoryItem 컴포넌트 ********************

import { data } from './icon-data.js';

class HeaderCategoryItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const value = this.getAttribute('value');
    const url = this.getAttribute('url');
    const template = document.createElement('template');

    template.innerHTML = `
    <style>
        li {
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
        <img src="${url}" alt="${value}" />
        <span>${value}</span>
      </li>

    `;

    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
}

if (!customElements.get('header-category-item')) {
  customElements.define('header-category-item', HeaderCategoryItem);
}
// **************** HeaderCategoryItemList 컴포넌트 *************

class HeaderCategoryItemList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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

    const ul = this.shadowRoot.querySelector('ul');

    // category item 데이터
    const categoryItems = data;

    categoryItems.forEach((item) => {
      const categoryItem = document.createElement('header-category-item');
      categoryItem.setAttribute('value', item.value);
      categoryItem.setAttribute('url', item.url);
      ul.appendChild(categoryItem);
    });
  }
}

if (!customElements.get('header-category-item-list')) {
  customElements.define('header-category-item-list', HeaderCategoryItemList);
}
