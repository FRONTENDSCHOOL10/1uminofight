/*
defaultIconHeart 컴포넌트
기능 
- <로그인O> : 메인페이지로 이동
- <로그인X> : 로그인페이지로 이동
- 마우스 hover시 색상 변경
사용 페이지 : 헤더
이슈번호 : #18

cf. 특이사항
- 이후에 헤더 컴포넌트에 포함될 예정
- src 폴더에 api / defaultAuthData 생성

cf. 
- 컴포넌트 사용법
html에 <default-icon-heart></default-icon-heart) 붙이기 
*/

import { getStorage, setStorage } from 'kind-tiger';
import defaultAuthData from '../api/defaultAuthData';

(async function () {
  if (!localStorage.getItem('auth')) {
    setStorage('auth', defaultAuthData);
  }

  const { isAuth, user } = await getStorage('auth');

  // 커스텀 웹 컴포넌트 클래스 정의 (defaultIconHeart 컴포넌트)
  class DefaultIconHeart extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });

      this.shadowRoot.innerHTML = `
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
      `;
    }

    connectedCallback() {
      this.shadowRoot
        .querySelector('svg')
        .addEventListener('click', this.handleClick.bind(this));
    }

    handleClick(e) {
      e.preventDefault();
      isAuth
        ? (location.href = '/src/pages/mainPage/mainPage.html')
        : (location.href = '/src/pages/login/login.html');
    }
  }

  customElements.define('default-icon-heart', DefaultIconHeart);
})();
