/*
메인페이지 main banner 컴포넌트
기능 : 마우스 hover했을 때 prev, next 방향키 나타남
사용 페이지 : 메인페이지
이슈번호 : 7번

cf. 특이사항
- 상품리스트 나열한 부분을 스와이퍼로 넘길 때 white-arrow-right에 다음 파트로 넘기는 기능 추가해줘야 함. 

cf. 사용법
html에 <main-banner></main-banner> 라고 붙이기

*/

class Banner extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    this.shadowRoot.innerHTML = `
    <style>
      .main-banner-wrapper {
        position: relative;
        width: 1920px;
        height: 370px;
        margin: 0 auto;
      }
      .prev-button {
        opacity: 0;
        transition: opacity 0.5s ease;
        position: absolute;
        top: 146px;
        left: 402px;
        cursor: pointer;
      }
      .next-button {
        opacity: 0;
        transition: opacity 0.5s ease;
        position: absolute;
        top: 146px;
        left: 1518px;
        cursor: pointer;
      }
      .is-active {
        opacity: 1;
      }
    </style>
    <div class="main-banner-wrapper">
      <img src="/src/assets/images/banner05.png" class="main-banner" alt="특가/혜택 관련 배너">
      <img src="/arrow-left.png" role="button" class="prev-button main-banner-button" alt="배너 prev 버튼">
      <img src="/arrow-right.png" role="button" class="next-button main-banner-button" alt="배너 next 버튼">    
    </div>
    `;
    this.mainBannerWrapper = this.shadowRoot.querySelector(
      '.main-banner-wrapper'
    );
    this.mainBanner = this.shadowRoot.querySelector('.main-banner');
    this.mainBannerButtons = this.shadowRoot.querySelectorAll(
      '.main-banner-button'
    );

    this.mainBanner.addEventListener(
      'mouseenter',
      this.handleMouseEnter.bind(this)
    );
    this.mainBannerWrapper.addEventListener(
      'mouseleave',
      this.handleMouseLeave.bind(this)
    );
  }

  handleMouseEnter(e) {
    this.mainBannerButtons.forEach((button) =>
      button.classList.add('is-active')
    );
  }

  handleMouseLeave(e) {
    this.mainBannerButtons.forEach((button) =>
      button.classList.remove('is-active')
    );
  }
}

customElements.define('main-banner', Banner);
