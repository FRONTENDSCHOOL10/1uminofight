/*
navMenu 컴포넌트 
기능 : 신상품 탭, 베스트 탭, 알뜰쇼핑 탭, 특가/혜택 탭으로 구성된 navigation menu
사용 페이지 : 헤더
이슈번호 : #20

cf. 특이사항
- navMenuItem 컴포넌트 구성 -> navMenu 컴포넌트 구성
*/

class NavMenuItem extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const value = this.getAttribute('value');
    const url = this.getAttribute('url');

    this.shadowRoot.innerHTML = `
      <style>
        li {
          width: 150px;
          line-height: 40px;
          text-align: center;
          list-style: none;
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
      <li><a href="${url}" tabindex=0>${value}</a></li>
    `;
  }
}

customElements.define('nav-menu-item', NavMenuItem);

export { NavMenuItem };
