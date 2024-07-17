// components.js
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

customElements.define('login-component', LoginComponent);
