import '/src/components/default-logo.js';
import '/src/main.js';
import '/src/styles/style.css';
import { getStorage, deleteStorage } from 'kind-tiger';

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
      
      .header-login-Service {
          display: flex;
          padding-top: 12px;
          align-items: center;
          gap: 12px;
        }

        .header-login-Service li {
          display: inline-block;
          position: relative;
        }

        .header-login-Service a {
          display: inline-block;
          font-size: 12px;
          font-weight: 400;
          line-height: 160%;
          color: #333;
          text-decoration: none;
        }

        .down-arrow {
          width: 8px;
          height: 5.6px;
          margin-left: 4px;
          vertical-align: middle;
        }
        .customer-service:hover .customerService-info {
          display: block;
        }

        .customerService-info {
          position: absolute;
          display: none;
          top: 100%;
          left: 0;
          background: white;
          border: 1px solid #ddd;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          z-index: 1000;
          width: 150px; 
        }

        .customerService-info a {
          display: block;
          padding: 8px 16px;
          color: #333;
          text-decoration: none;
          font-size: 12px;
          line-height: 160%;
        }

        .customerService-info a:hover {
          background-color: #f7f7f7;
        }
        .hidden {
          display: none;
        }


    </style>
    
    <div class="header-container">
    <top-banner></top-banner>
    <div class="top-header">
        <ul class="header-login-Service" id="logged-out">
            <li>
                <a href="../../pages/register/register.html" class="register-link">회원가입</a>
            </li>
            <li class="divider" aria-hidden="true">|</li>
            <li>
                <a href="../../pages/login/login.html">로그인</a>
            </li>
            <li class="divider" aria-hidden="true">|</li>
            <li class="customer-service">
                <a href="#">고객센터</a>
                <img src="../../../down.png" alt="화살표" class="down-arrow">
                <div class="customerService-info">
                    <a href="#">공지사항</a>
                    <a href="#">자주하는 질문</a>
                    <a href="#">1:1문의</a>
                    <a href="#">대량주문 문의</a>
                </div>
            </li>
        </ul>
        <ul class="header-login-Service hidden" id="logged-in">
            <li class="customer-service">
                <a href="#" id="username-link">ㅇㅇㅇ님</a>
                <img src="../../../down.png" alt="화살표" class="down-arrow">
                <div class="customerService-info">
                  <a href="#">주문 내역</a>
                  <a href="#">쿠폰</a>
                  <a href="#">찜한 상품</a>
                  <a href="#">자주 구매</a>
                  <a href="#">적립금 컬리캐시</a>
                  <a href="#">결제수단 컬리페이</a>
                  <a href="#">상품 후기</a>
                  <a href="#">선물 내역</a>
                  <a href="#">상품 문의</a>
                  <a href="#">컬리멤버스</a>
                  <a href="#">배송지 관리</a>
                  <a href="#">나의 컬리 스타일</a>
                  <a href="#">개인 정보 수정</a>
                  <a href="#" id="logout-link">로그아웃</a>
                </div>
            </li>
            <li class="divider" aria-hidden="true">|</li>
            <li class="customer-service">
                <a href="#">고객센터</a>
                <img src="../../../down.png" alt="화살표" class="down-arrow">
                <div class="customerService-info">
                    <a href="#">공지사항</a>
                    <a href="#">자주하는 질문</a>
                    <a href="#">1:1문의</a>
                    <a href="#">대량주문 문의</a>
                </div>
            </li>
        </ul>
    </div>
      <div class="middle-header">
        <span class="logo-search">
          <default-logo></default-logo>
          <input-search-container label="검색어를 입력해주세요"></input-search-container>
        </span>
      
        <span class="default-icon">
          <div><img src="/icons/Location.svg" alt="icon"></div>
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

document.addEventListener('DOMContentLoaded', async function () {
  const headerElement = document.querySelector('c-header');
  const shadowRoot = headerElement.shadowRoot;

  try {
    const authData = await getStorage('marketKurly_auth');
    const loggedOutDiv = shadowRoot.getElementById('logged-out');
    const loggedInDiv = shadowRoot.getElementById('logged-in');
    const usernameLink = shadowRoot.getElementById('username-link');
    const logoutLink = shadowRoot.getElementById('logout-link');

    if (authData.isAuth === true) {
      loggedOutDiv.classList.add('hidden');
      usernameLink.textContent = `${authData.name}님`;
      loggedInDiv.classList.remove('hidden');
    } else {
      loggedOutDiv.classList.remove('hidden');
      loggedInDiv.classList.add('hidden');
    }

    logoutLink.addEventListener('click', async (event) => {
      event.preventDefault();
      alert('로그아웃 되었습니다.');
      await deleteStorage('marketKurly_auth');
      loggedOutDiv.classList.remove('hidden');
      loggedInDiv.classList.add('hidden');
      location.reload();
    });
  } catch (error) {
    console.error(error);
  }
});

customElements.define('c-header', Header);
