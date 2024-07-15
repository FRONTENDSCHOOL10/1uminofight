/*
POPUP / button 컴포넌트

기능 
- '오늘 하루 안 보기'시 하루 동안 해당 팝업 안 뜸
사용 페이지 : 팝업
이슈번호 : #6

cf.
- html 사용
<script type="module" src="/src/components/popup.js"></script>

*/


class PopupComponent extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                #popup {
                    display: none;
                    position: fixed;
                    top: 10%;
                    left: 10%;
                    width: 250px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                    background-color: #fff;
                    z-index: 1000;
                    border-radius: 10px;
                }

                #popup img {
                    width: 100%;
                    height: auto;
                    border-radius: 10px 10px 0 0;
                }

                #popup .button-container {
                    display: flex;
                }

                #popup button {
                    flex: 1;
                    height: 50px;
                    border: none;
                    cursor: pointer;
                    background-color: #fff;
                    color: #333333;
                    font-size: 9px;
                    text-align: center;
                    line-height: 50px;
                }

                #popup button:first-child {
                    border-right: 1px solid #ddd;
                    border-bottom-left-radius: 10px;
                }

                #popup button:last-child {
                    border-bottom-right-radius: 10px;
                }
            </style>
            <div id="popup">
                <img src="/src/assets/images/popup.svg" alt="Popup Image">
                <div class="button-container">
                    <button id="hideTodayBtn">오늘 하루 안 보기</button>
                    <button id="closeBtn">닫기</button>
                </div>
            </div>
        `;
    }

    connectedCallback() {
        const popup = this.shadowRoot.getElementById('popup');
        const hideTodayBtn = this.shadowRoot.getElementById('hideTodayBtn');
        const closeBtn = this.shadowRoot.getElementById('closeBtn');

        hideTodayBtn.addEventListener('click', () => {
            popup.style.display = 'none';
            const now = new Date();
            const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
            localStorage.setItem('hidePopupUntil', tomorrow.getTime());
        });

        closeBtn.addEventListener('click', () => {
            popup.style.display = 'none';
        });

        const hidePopupUntil = localStorage.getItem('hidePopupUntil');
        if (!hidePopupUntil || new Date().getTime() > hidePopupUntil) {
            popup.style.display = 'block';
        }
    }
}

customElements.define('popup-component', PopupComponent);

window.addEventListener('DOMContentLoaded', () => {
    const popupComponent = document.createElement('popup-component');
    document.body.appendChild(popupComponent);
});
