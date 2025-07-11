import '/src/components/Header.js';
import '/src/components/default-logo.js';
import '/src/main.js';
import '/src/styles/style.css';
import '/src/components/footer/footer.js';
import '/src/components/customerService.js';
import '/src/components/top-banner.js';

import { setDocumentTitle, setStorage } from 'kind-tiger';
import pb from '/src/api/pocketbase';

class LoginComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
      <style>
        ${this.getStyle()}
      </style>
      <div class="container">
        <h1>로그인</h1>
        <hr />
        <form id="login-form">
          <div>
            <label for="emField"></label>
            <input type="email" id="emField" placeholder="이메일을 입력해주세요" />
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
        <a href="/src/pages/register/register.html" class="register">회원가입</a>
      </div>
    `;

    this.loginForm = shadow.getElementById('login-form');
    this.handleLogin = this.handleLogin.bind(this);
  }

  connectedCallback() {
    this.loginForm.addEventListener('submit', this.handleLogin);
  }

  disconnectedCallback() {
    this.loginForm.removeEventListener('submit', this.handleLogin);
  }

  async handleLogin(e) {
    e.preventDefault();

    const id = this.shadowRoot.getElementById('emField').value;
    const pw = this.shadowRoot.getElementById('pwField').value;

    try {
      const authData = await pb
        .collection('users_collection')
        .authWithPassword(id, pw);

      const userName = authData.record.name;
      await setStorage('marketKurly_auth', {
        isAuth: true,
        name: userName,
      });

      alert('로그인 완료! 메인페이지로 이동합니다.');
      location.href = '/src/pages/mainPage/mainPage.html';
    } catch (error) {
      alert('인증된 사용자가 아닙니다.');
    }
  }

  getStyle() {
    return `
      .container {
        text-align: center;
        max-width: 400px;
        width: 100%;
        padding: 20px;
        margin: 0 auto;
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

customElements.define('login-component', LoginComponent);

setDocumentTitle('로그인 - 컬리');

const tl = gsap.timeline({
  defaults: {
    opacity: 0,
  },
});

tl.from('.container h1', { delay: 0.2, y: 30 })
  .from('.container hr', { scaleX: 0 })
  .from('form > *', { y: 30, stagger: 0.1 })
  .from('.register', { y: -30 }, '-=0.2');
