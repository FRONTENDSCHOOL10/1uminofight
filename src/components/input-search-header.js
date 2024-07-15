/*
Input / Search 컴포넌트 

기능 
UI만 구현
사용 페이지 : 헤더
이슈번호 : #13

cf. 
- html 사용
<input-search-container label="검색어를 입력해주세요"></input-search-container>
*/

class InputSeearchContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM 생성

		const style = `
		.input-search-container {
			position: relative;
			width: 333px;
			margin-bottom: 31px; /* 컴포넌트 간 간격 */
		}
		.input-search-container input {
			width: 100%;
			height: 44px;
			padding: 0 20px 0 20px;
			padding-right: 50px; /* Add space for the icon */
			box-sizing: border-box;
			border: 1px solid #5F0080;
			border-radius: 4px;
			font-size: 16px;
		}
		.input-search-container input:focus {
			outline: none;
			border-color: #181818;
		}
		.input-search-container label {
			position: absolute;
			top: 50%;
			left: 20px;
			transform: translateY(-50%);
			color: #A6A6A6;
			font-size: 16px;
			pointer-events: none;
			transition: all 0.2s ease;
		}
		.input-search-container input:not(:placeholder-shown) + label {
			display: none;
		}
		.input-search-container svg {
			position: absolute;
			top: 50%;
			right: 10px;
			transform: translateY(-50%);
			cursor: pointer;
		}
	`;

      // 템플릿 정의
	  const template = `
	  <div class="input-search-container">
		  <input type="text" placeholder=" " required>
		  <label></label>
		  <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
			  <path d="M26.0811 26.081L21.9611 21.961M16.4671 23.334C17.3689 23.334 18.2618 23.1564 19.095 22.8113C19.9281 22.4662 20.6851 21.9603 21.3228 21.3227C21.9605 20.685 22.4663 19.928 22.8114 19.0949C23.1565 18.2617 23.3341 17.3688 23.3341 16.467C23.3341 15.5652 23.1565 14.6722 22.8114 13.8391C22.4663 13.0059 21.9605 12.2489 21.3228 11.6113C20.6851 10.9736 19.9281 10.4678 19.095 10.1227C18.2618 9.77759 17.3689 9.59998 16.4671 9.59998C14.6459 9.59998 12.8992 10.3235 11.6114 11.6113C10.3236 12.8991 9.6001 14.6457 9.6001 16.467C9.6001 18.2882 10.3236 20.0349 11.6114 21.3227C12.8992 22.6105 14.6459 23.334 16.4671 23.334V23.334Z" stroke="#5F0080" stroke-width="1.7" stroke-linecap="round"/>
		  </svg>
	  </div>
  `;
  
        // Shadow DOM에 스타일과 템플릿 추가
        this.shadowRoot.innerHTML = `
            <style>${style}</style>
            ${template}
        `;

        // input 및 label 요소 가져오기
        const input = this.shadowRoot.querySelector('input');
        const label = this.shadowRoot.querySelector('label');
        label.textContent = this.getAttribute('label') || ''; // label 속성 설정

        // input 이벤트 리스너 추가
        input.addEventListener('input', () => {
            label.style.display = input.value.trim() !== '' ? 'none' : 'block';
        });
    }
}

// 사용자 정의 요소 등록
customElements.define('input-search-container', InputSeearchContainer);