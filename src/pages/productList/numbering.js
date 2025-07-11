/*
numbering 컴포넌트 
기능 
- UI만 구현, 기능 X 
사용 페이지 : 상품리스트, 상품후기
이슈번호 : #30

cf. 특이사항
- 이후에 상품리스트, 상품후기에 적용될 예정
- html 사용
    <numbering-container id="svg-container"></numbering-container>
    <script type="module">
        import './src/pages/productList/numbering.js';
    </script>
*/

// numbering.js

// SVG 내용
const numberingSVG = `
<svg width="233" height="70" viewBox="0 0 233 70" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <rect x="1" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <rect x="13" y="49.5" width="9" height="7" fill="url(#pattern0_61_2235)"/>
    <rect x="34" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <rect x="48" y="49.5" width="5" height="7" fill="url(#pattern1_61_2235)"/>
    <rect x="67" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M84.4716 48.7727V57.5H83.4148V49.8807H83.3636L81.233 51.2955V50.2216L83.4148 48.7727H84.4716Z" fill="#333333"/>
    <rect x="100" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M113.403 57.5V56.733L116.284 53.5795C116.622 53.2102 116.901 52.8892 117.119 52.6165C117.338 52.3409 117.5 52.0824 117.605 51.8409C117.713 51.5966 117.767 51.3409 117.767 51.0739C117.767 50.767 117.693 50.5014 117.545 50.277C117.401 50.0526 117.202 49.8793 116.949 49.7571C116.696 49.6349 116.412 49.5739 116.097 49.5739C115.761 49.5739 115.469 49.6435 115.219 49.7827C114.972 49.919 114.78 50.1108 114.643 50.358C114.51 50.6051 114.443 50.8949 114.443 51.2273H113.438C113.438 50.7159 113.555 50.267 113.791 49.8807C114.027 49.4943 114.348 49.1932 114.754 48.9773C115.163 48.7614 115.622 48.6534 116.131 48.6534C116.642 48.6534 117.095 48.7614 117.49 48.9773C117.885 49.1932 118.195 49.4844 118.419 49.8509C118.643 50.2173 118.756 50.625 118.756 51.0739C118.756 51.3949 118.697 51.7088 118.581 52.0156C118.467 52.3196 118.268 52.6591 117.984 53.0341C117.703 53.4062 117.312 53.8608 116.812 54.3977L114.852 56.4943V56.5625H118.909V57.5H113.403Z" fill="#333333"/>
    <rect x="133" y="36.5" width="33" height="33" stroke="#E1E1E1"/>
    <path d="M149.352 57.6193C148.79 57.6193 148.288 57.5227 147.848 57.3295C147.411 57.1364 147.063 56.8679 146.804 56.5241C146.548 56.1776 146.409 55.7756 146.386 55.3182H147.46C147.483 55.5994 147.58 55.8423 147.75 56.0469C147.92 56.2486 148.143 56.4048 148.419 56.5156C148.695 56.6264 149 56.6818 149.335 56.6818C149.71 56.6818 150.043 56.6165 150.332 56.4858C150.622 56.3551 150.849 56.1733 151.014 55.9403C151.179 55.7074 151.261 55.4375 151.261 55.1307C151.261 54.8097 151.182 54.527 151.023 54.2827C150.864 54.0355 150.631 53.8423 150.324 53.7031C150.017 53.5639 149.642 53.4943 149.199 53.4943H148.5V52.5568H149.199C149.545 52.5568 149.849 52.4943 150.111 52.3693C150.375 52.2443 150.581 52.0682 150.729 51.8409C150.879 51.6136 150.955 51.3466 150.955 51.0398C150.955 50.7443 150.889 50.4872 150.759 50.2685C150.628 50.0497 150.443 49.8793 150.205 49.7571C149.969 49.6349 149.69 49.5739 149.369 49.5739C149.068 49.5739 148.784 49.6293 148.517 49.7401C148.253 49.848 148.037 50.0057 147.869 50.2131C147.702 50.4176 147.611 50.6648 147.597 50.9545H146.574C146.591 50.4972 146.729 50.0966 146.987 49.7528C147.246 49.4062 147.584 49.1364 148.001 48.9432C148.422 48.75 148.884 48.6534 149.386 48.6534C149.926 48.6534 150.389 48.7628 150.776 48.9815C151.162 49.1974 151.459 49.483 151.666 49.8381C151.874 50.1932 151.977 50.5767 151.977 50.9886C151.977 51.4801 151.848 51.8991 151.589 52.2457C151.334 52.5923 150.986 52.8324 150.545 52.9659V53.0341C151.097 53.125 151.527 53.3594 151.837 53.7372C152.146 54.1122 152.301 54.5767 152.301 55.1307C152.301 55.6051 152.172 56.0312 151.913 56.4091C151.658 56.7841 151.308 57.0795 150.865 57.2955C150.422 57.5114 149.918 57.6193 149.352 57.6193Z" fill="#333333"/>
    <rect x="-0.5" y="0.5" width="33" height="33" transform="matrix(-1 0 0 1 198.5 36)" stroke="#E1E1E1"/>
    <rect width="5" height="7" transform="matrix(-1 0 0 1 185 49.5)" fill="url(#pattern2_61_2235)"/>
    <rect x="-0.5" y="0.5" width="33" height="33" transform="matrix(-1 0 0 1 231.5 36)" stroke="#E1E1E1"/>
    <rect width="9" height="7" transform="matrix(-1 0 0 1 220 49.5)" fill="url(#pattern3_61_2235)"/>
    <defs>
    <pattern id="pattern0_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_61_2235" transform="scale(0.111111 0.142857)"/>
    </pattern>
    <pattern id="pattern1_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image1_61_2235" transform="scale(0.2 0.142857)"/>
    </pattern>
    <pattern id="pattern2_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image1_61_2235" transform="scale(0.2 0.142857)"/>
    </pattern>
    <pattern id="pattern3_61_2235" patternContentUnits="objectBoundingBox" width="1" height="1">
    <use xlink:href="#image0_61_2235" transform="scale(0.111111 0.142857)"/>
    </pattern>
    <image id="image0_61_2235" width="9" height="7" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAHCAQAAABwkq/rAAAAHUlEQVR42mNgAIPi/8X/kWkwA8SE0UQIMJAsCKMBBzk27fqtkcYAAAAASUVORK5CYII="/>
    <image id="image1_61_2235" width="5" height="7" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAHCAQAAABqrk9lAAAAGElEQVR42mNgAIPi/8X/4QwwE5PBQJADAAKSG3cyVhtXAAAAAElFTkSuQmCC"/>
    </defs>
</svg> `;

// 커스텀 웹 컴포넌트 클래스
class NumberingContainer extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .numbering-container {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="numbering-container">
                ${numberingSVG}
            </div>
        `;
    }
}

// 커스텀 요소
customElements.define('numbering-container', NumberingContainer);
