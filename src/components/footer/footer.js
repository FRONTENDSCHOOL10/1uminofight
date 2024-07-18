// footerNavigation 컴포넌트 #25

class FooterComponent extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });

    const footerContainer = document.createElement('div');
    footerContainer.setAttribute('class', 'footer-container');

    footerContainer.innerHTML = `
      <div class="footer-content">
        <!-- Customer Service Section -->
        <div class="customer-service" aria-labelledby="customer-service-title">
          <h2 id="customer-service-title" class="customer-service-title">고객행복센터</h2>
          <p class="customer-service-phone">
            <strong class="phone-number">1644-1107</strong>
            <span>월~토요일 오전 7시 - 오후 6시</span>
          </p>
          <div class="customer-service-info">
            <div class="info-section" aria-labelledby="kakao-inquiry-title">
              <span id="kakao-inquiry-title" class="info-title">카카오톡 문의</span>
              <div class="info-details" aria-labelledby="kakao-inquiry-title">
                <span aria-label="운영 시간">월~토요일 | 오전 7시 - 오후 6시</span>
                <span aria-label="일요일 및 공휴일 운영 시간">일/공휴일 | 오전 7시 - 오후 1시</span>
              </div>
            </div>
            <div class="info-section" aria-labelledby="one-on-one-inquiry-title">
              <span id="one-on-one-inquiry-title" class="info-title">1:1 문의</span>
              <div class="info-details" aria-labelledby="one-on-one-inquiry-title">
                <span>365일</span> 고객센터 운영시간에 순차적으로 답변드리겠습니다.
              </div>
            </div>
            <div class="info-section" aria-labelledby="bulk-order-inquiry-title">
              <span id="bulk-order-inquiry-title" class="info-title">대량주문 문의</span>
              <div class="info-details" aria-labelledby="bulk-order-inquiry-title">
                <span aria-label="대량 주문 문의 운영 시간">월~금요일 | 오전9시 - 오후 6시</span>
                <span aria-label="점심시간">점심시간 | 낮 12시 - 오후 1시</span>
              </div>
            </div>
          </div>
          <ul class="customer-service-contacts">
            비회원 문의 : <a href="mailto:help@karlycorp.com">help@karlycorp.com</a>
            <br>비회원 대량주문 문의 : <a href="mailto:help@karlycorp.com">help@karlycorp.com</a>
          </ul>
        </div>
        <!-- Company Info Section -->
        <div class="company-info">
          <ul class="company-menu">
            <li><a href="">칼리소개</a></li>
            <li><a href="">칼리소개영상</a></li>
            <li><a href="">인재채용</a></li>
            <li><a href="">이용약관</a></li>
            <li><a href="">개인정보처리방침</a></li>
            <li><a href="">이용안내</a></li>
          </ul>
          <address class="company-address">
            <ul>
              <li>법인명 (상호) : 주식회사 컬리
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li>사업자등록번호 : 261-81-23567
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li><a href="#">사업자정보 확인</a></li>
              <li>통신판매업 : 제 2018-서울강남-01646 호
                <span class="divider" aria-hidden="true">|</span>
              </li>
              <li>개인정보보호책임자 : 이원준</li>
              <li>주소 : 서울특별시 강남구 테헤란로 133, 18층(역삼동)</li>
              <li>대표이사 : 김슬아</li>
              <li>입점문의 : <a href="#">입정문의하기</a>
              <span class="divider" aria-hidden="true">|</span></li>
              <li>제휴문의 : <a href="mailto:business@karlycorp.com">business@karlycorp.com</a></li>
              <li class="wide">채용문의 : <a href="mailto:recruit@karlycorp.com">recruit@karlycorp.com</a></li>
              <li class="wide">팩스 : 070 - 7500 - 6098</li>
            </ul>
          </address>
          <ul class="social-links">
            <li><a href="#"><img src="/icons/ico_naver.png" alt="블로그" /></a></li>
            <li><a href="#"><img src="/icons/ico_facebook.png" alt="페이스북" /></a></li>
            <li><a href="#"><img src="/icons/ico_instagram.png" alt="인스타그램" /></a></li>
            <li><a href="#"><img src="/icons/NaverPost.svg" alt="네이버 포스트" /></a></li>
            <li><a href="#"><img src="/icons/Youtube.svg" alt="유튜브" /></a></li>
          </ul>
        </div>
      </div>
      <!-- Certifications Section -->
      <ul class="certifications">
        <li>
          <figure>
            <div>
              <img src="../../../icons/isms.png" alt="ISMS" />
            </div>
            <figcaption>
              <span>[인증범위] 마켓칼리 쇼핑몰 서비스 개발 운영</span>
              <span>(심사받지 않은 물리적 인프라 제외)</span>
              <span>[유효기간] 2022.01.19 ~ 2025.01.18</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/privacy.png" alt="PRIVACY 로고" />
            </div>
            <figcaption>
              <span>개인정보보호 우수 웹사이트</span>
              <span>개인정보처리시스템 인증 (PRIVACY)</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/tosspayments.png" alt="toss payments 로고" />
            </div>
            <figcaption>
              <span>토스페이먼츠 구매안전(에스크로) <br>서비스를 이용하실 수 있습니다.</span>
            </figcaption>
          </figure>
        </li>
        <li>
          <figure>
            <div>
              <img src="../../../icons/wooriBank.png" alt="우리은행" />
            </div>
            <figcaption>
              <span>고객님이 현금으로 결제한 금액에 대해 우리은행과<br>채무지급보증 계약을 체결하여 안전거래를 보장하고 있습니다.</span>
            </figcaption>
          </figure>
        </li>
      </ul>
      <!-- Disclaimer Section -->
      <div class="footer-disclaimer">
        <div class="disclaimer-text">
          <p>마켓컬리에서 판매되는 상품 중에는 마켓컬리에 입점한 개별 판매자가 판매하는 마켓플레이스(오픈마켓) 상품이 포함되어 있습니다.</p>
          <p>마켓플레이스(오픈마켓) 상품의 경우 컬리는 통신판매중개자로서 통신판매의 당사자가 아닙니다. 컬리는 해당 상품의 주문, 품질, 교환/환불 등 의무와 책임을 부담하지 않습니다.</p>
        </div>
        <p class="copyright-text">© KURLY CORP. ALL RIGHTS RESERVED</p>
      </div>
    `;

    //  footer CSS
    const style = document.createElement('style');
    style.textContent = `
     body, h2, p, ul, li, span {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.footer-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f7f7f7;
  font-family: 'Pretendard', sans-serif;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  padding: 20px;
  border-bottom: 1px solid var(--gray--100, #e1e1e1);
}

.footer-disclaimer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  
  padding: 20px;
  text-align: center;
}

.customer-service, .company-info {
  width: 48%;
}

.customer-service-title, .customer-service-phone, .company-menu, .company-address, .customer-service-contacts, .social-links, .certifications, .disclaimer-text, .copyright-text {
  margin-bottom: 20px;
}

.customer-service-title {
  color: var(--content, #333);
  font-size: 21px;
  font-weight: 700;
  line-height: 140%; 
}

.customer-service-phone {
  display: flex;
  align-items: center;
  gap: 8px;
}

.phone-number {
  color: black;
  padding: 10px 20px;
  border-radius: 5px;
  text-align: center;
  font-size: 38px;
  font-weight: 700;
}

.customer-service-phone span {
  color: var(--content, #333);
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}

.customer-service-contacts a {
  color: var(--content, #5F0080);
}

.customer-service-info .info-section {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 10px;
}

.info-title {
  font-weight: bold;
  width: 140px;
  height: 40px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border: 1px solid var(--gray--200, #ccc);
  box-sizing: border-box;
}

.info-details {
  margin-left: 10px;
  color: var(--content, #333);
  font-size: 16px;
  line-height: 160%;
}

.info-details span {
  display: block;
}

.footer_cs_list li {
  color: var(--content, #333);
  font-size: 12px;
  line-height: 160%;
}

.footer_cs_list li a {
  color: var(--primary, #007bff);
}

.company-menu {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}

.company-menu li {
  list-style: none;
  color: var(--content, #333);
  font-size: 16px;
  line-height: 160%;
}

.company-menu a {
  text-decoration: none;
  color: var(--content, #333);
}

.company-menu a:hover {
  text-decoration: underline;
}

.company-address {
  overflow: hidden;
  width: 416px;
}

.company-address ul {
  display: flex;
  flex-wrap: wrap;
  margin-left: -17px;
  list-style-type: none;
}

.company-address li {
  position: relative;
  padding-left: 17px;
  color: var(--content, #333);
  font-size: 12px;
  line-height: 160%;
}

.company-address li::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 50%;
  transform: translateY(-50%);
  width: 1px;
  height: 10px;
  background-color: var(--content, #333);
}

.company-address a {
  color: var(--primary, #5F0080);
}

.company-address a:hover {
  text-decoration: underline;
}

.social-links {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  
}

.social-links li {
  list-style: none;
}

.social-links img {
  
 
  height: 30px;
  
}

.certifications {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1050px;
  padding: 24px 0 32px;
  background-color: #fff;
  border: 1px solid var(--gray--100, #e1e1e1);
  border-radius: 5px;
}

.certifications li {
  list-style: none;
  text-align: center;
  min-width: 23%;
}

.certifications img {
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
}

.certifications figcaption {
  font-size: 10px;
  color: var(--content, #777);
  line-height: 160%;
}

.certifications figcaption span {
  display: block;
  white-space: nowrap;
}

.disclaimer-text p {
  font-size: 14px;
  color: var(--content, #777);
  margin-bottom: 10px;
}

.copyright-text {
  font-size: 12px;
  color: var(--gray--400, #bbb);
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .customer-service, .company-info {
    width: 100%;
  }

  .company-menu {
    flex-direction: column;
    align-items: center;
  }

  .company-menu li {
    margin-bottom: 10px;
  }

  .social-links {
    justify-content: center;
  }
}
`;

    shadow.appendChild(style);
    shadow.appendChild(footerContainer);
  }
}

customElements.define('footer-component', FooterComponent);
