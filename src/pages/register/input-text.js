/*
input/text 컴포넌트 
기능 
- input 구성, placeholder로 입력할 내용 표시
사용 페이지 : 상품리스트, 상품후기
이슈번호 : #30

cf. 
- html 사용
	각 컴포넌트는 label 속성을 통해 라벨 텍스트를 지정
	<input-container label="아이디를 입력해주세요"></input-container>
	<input-container label="비밀번호를 입력해주세요"></input-container>
	<input-container label="비밀번호를 한번 더 입력해주세요"></input-container>
	<input-container label="이름을 한번 더 입력해주세요"></input-container>
	<input-container label="예) marketkarly@karly.com"></input-container>
	<input-container label="숫자만 입력해주세요"></input-container>
	<script src="input-text.js"></script>
*/

class InputContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }); // Shadow DOM 생성

        // 스타일 정의
        const style = `
            .input-container {
                position: relative;
                width: 333px;
                margin-bottom: 31px; /* 컴포넌트 간 간격 */
            }

            .input-container input {
                width: 100%;
                height: 44px;
                padding: 0 20px;
                box-sizing: border-box;
                border: 1px solid #A6A6A6;
                border-radius: 4px;
                font-size: 16px;
            }

            .input-container input:focus {
                outline: none;
                border-color: #181818;
            }

            .input-container label {
                position: absolute;
                top: 50%;
                left: 20px;
                transform: translateY(-50%);
                color: #A6A6A6;
                font-size: 16px;
                pointer-events: none;
                transition: all 0.2s ease;
            }

            .input-container input:not(:placeholder-shown) + label {
                display: none;
            }
        `;

        // 템플릿 정의
        const template = `
            <div class="input-container">
                <input type="text" placeholder=" " required>
                <label></label>
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
customElements.define('input-text-container', InputContainer);
