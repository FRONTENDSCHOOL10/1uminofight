class HeartIcon extends HTMLElement {
	constructor() {
	  super();
  
	  // Shadow DOM을 사용하여 컴포넌트를 캡슐화합니다.
	  const shadow = this.attachShadow({ mode: 'open' });
  
	  // 스타일 정의
	  const style = document.createElement('style');
	  style.textContent = `
		.heart-box {
		  width: 100%;
		  height: auto;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  padding: 20px;
		  box-sizing: border-box;
		}
		.square-border {
		  width: 55px;
		  height: 55px;
		  border: 0.99px solid #DDDDDD;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  border: 1px solid #ccc;
		  border-radius: 5px;
		}
		.heart-filled {
		  display: none;
		}
		.heart.filled .heart-filled {
		  display: block;
		}
	  `;
  
	  // HTML 구조 정의
	  const container = document.createElement('div');
	  container.classList.add('heart-box');
  
	  const squareBorder = document.createElement('div');
	  squareBorder.classList.add('square-border');
  
	  const heartIcon = document.createElement('img');
	  heartIcon.classList.add('heart');
	  heartIcon.setAttribute('src', '/public/heartIcon.svg');
	  heartIcon.setAttribute('alt', 'Heart Icon');
	  heartIcon.setAttribute('width', '25');
	  heartIcon.setAttribute('height', '30');
  
	  // 요소를 조립합니다.
	  squareBorder.appendChild(heartIcon);
	  container.appendChild(squareBorder);
	  shadow.appendChild(style);
	  shadow.appendChild(container);
  
	  // 클릭 이벤트 추가
	  heartIcon.addEventListener('click', function() {
		this.classList.toggle('filled');
	  });
	}
  }
  
  // 커스텀 요소를 정의합니다.
  customElements.define('heart-icon', HeartIcon);
  