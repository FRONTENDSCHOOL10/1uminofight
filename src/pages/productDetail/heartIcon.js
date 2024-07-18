/*
Icon/Heart 컴포넌트
기능 
- 하트 클릭 시 색상 변경
사용 페이지 : 상품 상세페이지
이슈번호 : #33

cf. 
- html 사용
	<heart-icon></heart-icon>
*/

class HeartIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                .heartIcon-container {
                    width: 56px;
                    height: 56px;
                    border: 1px solid #E1E1E1;
                    border-radius: 3.5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .heart, .heart-filled {
                    cursor: pointer; /* 클릭 가능한 커서 설정 */
                }
            </style>

            <div class="heartIcon-container">
                <svg class="heart" width="25.72" height="21.59" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" stroke="#5F0080" stroke-width="1.7" fill="none"/>
                </svg>
                <svg class="heart-filled" width="25.72" height="21.59" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#FF5A5A"/>
                </svg>
            </div>
        `;
    }

    connectedCallback() {
        const container = this.shadowRoot.querySelector('.heartIcon-container');
        const heart = this.shadowRoot.querySelector('.heart');
        const heartFilled = this.shadowRoot.querySelector('.heart-filled');

        container.addEventListener('click', () => {
            heart.style.display = heart.style.display === 'none' ? 'block' : 'none';
            heartFilled.style.display = heartFilled.style.display === 'none' ? 'block' : 'none';
        });
    }
}

customElements.define('heart-icon', HeartIcon);
