import '/src/components/default-logo.js';
import '/src/main.js';
import '/src/styles/style.css';

class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <style>
      .header-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
      }
      .top-header {
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        width: 1050px;
        height: 35px;
        align-items: center;
      }
      .header-link {
        text-decoration: none;
        color: #333;
        font-size: 12px;
        margin-left: 15px;
        position: relative;
        padding: 0 10px;
      }
      .header-link:not(:last-child)::after {
        content: '';
        position: absolute;
        right: -10px;
        top: 50%;
        transform: translateY(-50%);
        width: 1px;
        height: 14px;
        background-color: #ccc;
      }
      .middle-header {
        width: 1050px;
        height: 63px;
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
        height: 56px;
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
      .bottom-shadow {
        width: 100%;
        height: 2px;
        background: rgba(0, 0, 0, 0.1); 
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        position: absolute;
        left: 0;
      }
    </style>

    <div class="header-container">
      <top-banner></top-banner>
      <div class="top-header">
        <a href="/src/pages/register/register.html" class="header-link">회원가입</a>
        <a href="/src/pages/login/login.html" class="header-link">로그인</a>
        <a href="#" class="header-link">고객센터</a>
      </div>
      <div class="middle-header">
        <span class="logo-search">
          <default-logo></default-logo>
          <input-search-container label="검색어를 입력해주세요"></input-search-container>
        </span>
      
        <span class="default-icon">
          <div><img src="/public/icons/Location.svg" alt="icon"></div>
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
    </div>
    <div class="bottom-shadow"></div>
    `;
  }
}

customElements.define('c-header', Header);
