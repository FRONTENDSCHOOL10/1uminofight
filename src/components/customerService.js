class HeaderComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .header {
          display: flex;
          justify-content: flex-end;
          margin-right: 280px;
        }

        .register-link {
          color: #5F0080; /* 회원가입 링크 색상 안 바뀌는 이유?.. */
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
          color: #333; /* 기본 색상 */
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
      </style>
      <div class="header">
        <div class="header-inner">
          <ul class="header-login-Service">
            <li>
              <a href="../../pages/register/index.html" class="register-link">회원가입</a>
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
        </div>
      </div>
    `;
  }

  connectedCallback() {
    const customerService = this.shadowRoot.querySelector('.customer-service');
    const customerServiceInfo = this.shadowRoot.querySelector(
      '.customerService-info'
    );

    customerService.addEventListener('mouseenter', () => {
      customerServiceInfo.style.display = 'block';
    });

    customerService.addEventListener('mouseleave', () => {
      customerServiceInfo.style.display = 'none';
    });
  }
}

customElements.define('header-component', HeaderComponent);
