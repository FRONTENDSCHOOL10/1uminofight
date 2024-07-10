(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function a(o){if(o.ep)return;o.ep=!0;const n=r(o);fetch(o.href,n)}})();class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
  <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" tabindex="0" role="button" aria-label = "장바구니 아이콘">
      <g
        stroke="#333"
        stroke-linecap="square"
        stroke-linejoin="round"
        stroke-width="1.7"
        clip-path="url(#a)">
        <path
          d="m30.844 10.207-2.72 11.57h-15.59l-2.71-11.57h21.02Z"
          clip-rule="evenodd" />
        <path
          d="M25.684 29.467a2.14 2.14 0 1 0 0-4.28 2.14 2.14 0 0 0 0 4.28ZM14.974 29.467a2.14 2.14 0 1 0 0-4.28 2.14 2.14 0 0 0 0 4.28ZM5.164 6.547h3.8l1.76 7.5" />
      </g>
      <defs>
        <clipPath id="a"><path fill="#fff" d="M0 0h36v36H0z" /></clipPath>
      </defs>
    </svg>
  `,this.shadowRoot.querySelector("svg").addEventListener("click",this.handleClick.bind(this))}handleClick(e){e.preventDefault(),location.href="/src/pages/cart.html"}}customElements.define("cart-icon",p);function c(t,e=document){if(typeof t!="string")throw new Error("getNode 함수의 인수는 문자 타입 이어야 합니다.");return e.nodeType!==document.DOCUMENT_NODE&&(e=document.querySelector(e)),e.querySelector(t)}function s(t){return Object.prototype.toString.call(t).slice(8,-1).toLowerCase()}const m=t=>s(t)==="object",f=t=>s(t)==="number",d=t=>s(t)==="string";c(".first");c(".second");const l={shouldReject:!1,timeout:1e3,data:"아싸 성공!",errorMessage:"알 수 없는 오류가 발생했습니다."};function y(t){let e={...l};f(t)&&(e.timeout=t),m(t)&&(e={...l,...t});let{timeout:r,shouldReject:a,errorMessage:o,data:n}=e;return new Promise((i,g)=>{setTimeout(()=>{a?g({message:o}):i(n)},r)})}y(1e3);const{localStorage:h}=window;function w(t,e){return new Promise((r,a)=>{d(t)?(h.setItem(t,JSON.stringify(e)),r()):a({message:"key는 문자 타입 이어야 합니다."})})}function C(t){return new Promise((e,r)=>{d(t)?e(JSON.parse(h.getItem(t))):r({message:"key는 문자 타입 이어야 합니다."})})}const v={isAuth:!1,user:null,token:""};(async function(){localStorage.getItem("auth")||w("auth",v);const{isAuth:t,user:e}=await C("auth");class r extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
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
      `}connectedCallback(){this.shadowRoot.querySelector("svg").addEventListener("click",this.handleClick.bind(this))}handleClick(o){o.preventDefault(),t?location.href="/src/pages/mainPage/mainPage.html":location.href="/src/pages/login/login.html"}}customElements.define("default-icon-heart",r)})();class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
            <style>
                .heartIcon-container {
                    width: 56px;
                    height: 56px;
                    border: 1px solid #E1E1E1;
					radius: 4px;
					padding: 4px;
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
        `}connectedCallback(){const e=this.shadowRoot.querySelector(".heartIcon-container"),r=this.shadowRoot.querySelector(".heart"),a=this.shadowRoot.querySelector(".heart-filled");e.addEventListener("click",()=>{r.style.display=r.style.display==="none"?"block":"none",a.style.display=a.style.display==="none"?"block":"none"})}}customElements.define("heart-icon",x);const A=`
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
</svg> `;class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=`
            <style>
                .numbering-container {
                    width: 100%;
                    height: 100%;
                }
            </style>
            <div class="numbering-container">
                ${A}
            </div>
        `}}customElements.define("numbering-container",b);class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const e=this.getAttribute("value"),r=this.getAttribute("url");this.shadowRoot.innerHTML=`
      <style>
        li {
          width: 150px;
          line-height: 40px;
          text-align: center;
          list-style: none;
          font-weight: 600;
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        a {
          text-decoration: none;
          color: inherit;
          padding: 8px 0px;
        }
        a:hover {
          color: #5F0080;
          text-decoration: underline;
        }
      </style>
      <li><a href="${r}" tabindex=0>${e}</a></li>
    `}}customElements.define("nav-menu-item",E);class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
      <style>
        :host {
          display: inline-block; /* 부모 요소가 자식 요소의 크기를 상속받도록 설정 */
        }
        ul {
          width: 600px;
          display: flex;
          padding: 0;
          margin: 0;
          list-style: none;
        }
      </style>
      <ul>
        <!-- NavMenuItem들이 여기에 추가 -->
      </ul>
    `;const e=this.shadowRoot.querySelector("ul");[{value:"신상품",url:"/src/pages/mainPage/mainPage.html"},{value:"베스트",url:"/src/pages/ProductList/ProductList.html"},{value:"알뜰쇼핑",url:"/src/pages/mainPage/mainPage.html"},{value:"특가/혜택",url:"/src/pages/mainPage/mainPage.html"}].forEach(a=>{const o=document.createElement("nav-menu-item");o.setAttribute("value",a.value),o.setAttribute("url",a.url),e.appendChild(o)})}}customElements.get("nav-menu")||customElements.define("nav-menu",I);const S=[{url:"/headerCategoryIcon/1.gift.png",value:"선물하기"},{url:"/headerCategoryIcon/2.vegetable.png",value:"채소"},{url:"/headerCategoryIcon/3.fruit.png",value:"과일 · 견과 · 쌀"},{url:"/headerCategoryIcon/4.sea-food.png",value:"수산 · 해산 · 건어물"},{url:"/headerCategoryIcon/5.meat.png",value:"정육 · 계란"},{url:"/headerCategoryIcon/6.cook.png",value:"국 · 반찬 · 메인요리"},{url:"/headerCategoryIcon/7.salad.png",value:"샐러드 · 간편식"},{url:"/headerCategoryIcon/8.oil.png",value:"면 · 양념 · 오일"},{url:"/headerCategoryIcon/9.coffee.png",value:"생수 · 음료 · 우유 · 커피"},{url:"/headerCategoryIcon/10.snack.png",value:"간식 · 과자 · 떡"},{url:"/headerCategoryIcon/11.bread.png",value:"베이커리 · 치즈 · 델리"},{url:"/headerCategoryIcon/12.health.png",value:"건강식품"},{url:"/headerCategoryIcon/13.wine.png",value:"와인"},{url:"/headerCategoryIcon/14.tradition_liquor.png",value:"전통주"},{url:"/headerCategoryIcon/15.detergent.png",value:"생활용품 · 리빙 · 캠핑"},{url:"/headerCategoryIcon/16.cosmetics.png",value:"스킨케어 · 메이크업"},{url:"/headerCategoryIcon/17.shampoo.png",value:"헤어 · 바디 · 구강"},{url:"/headerCategoryIcon/18.cook.png",value:"주방용품"},{url:"/headerCategoryIcon/19.home_appliances.png",value:"가전제품"},{url:"/headerCategoryIcon/20.dog.png",value:"반려동물"},{url:"/headerCategoryIcon/21.baby.png",value:"베이비 · 키즈 · 완구"},{url:"/headerCategoryIcon/22.travel.png",value:"여행 · 티켓"}];class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const e=this.getAttribute("value"),r=this.getAttribute("url"),a=document.createElement("template");a.innerHTML=`
    <style>
        li {
          box-sizing: border-box;
          width: 100%;
          height: 40px;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 16px;
          padding: 8px 0px 8px 12px;
          font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
        }
        li:hover {
          cursor: pointer;
        }
      </style>
      <li>
        <img src="${r}" alt="${e}" />
        <span>${e}</span>
      </li>

    `,this.shadowRoot.appendChild(a.content.cloneNode(!0))}}customElements.get("header-category-item")||customElements.define("header-category-item",k);class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.shadowRoot.innerHTML=`
    <style>
      :host {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          z-index: 1000;
        }
      ul {
        display: flex; 
        flex-flow: column nowrap;
        width: 247px;
        padding: 0;
        margin: 0;
      }
    </style>

    <ul class="header-category-item-list">
    <!-- <header-category-item>들이 여기에 추가 -->
    </ul>
    `;const e=this.shadowRoot.querySelector("ul");S.forEach(a=>{const o=document.createElement("header-category-item");o.setAttribute("value",a.value),o.setAttribute("url",a.url),e.appendChild(o)})}}customElements.get("header-category-item-list")||customElements.define("header-category-item-list",H);const u=document.createElement("template");u.innerHTML=`
  <style>
    .header-category-tab{
      display: inline-block;
      width: 84px;
      line-height: 24px;
      font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
      margin: 0 auto;
      position: relative;
    }
    span {
      font-weight: 600;
      font-size : 16px;      
    }
    .icon-hamburger {
      padding-right: 12px;
    }
    .header-category-tab:hover {
      cursor: pointer;
    }
    .header-category-tab:hover .icon-hamburger path {
      fill: #5F0080
    }
    .header-category-tab:hover span {
      color: #5F0080
    }
    .header-category-tab:hover header-category-item-list {
      display: flex;
    }
  </style>
  <div class="header-category-tab" role="group" aria-haspopup="true" aria-expanded="false" aria-controls="category-item-list">
  <svg
    class="icon-hamburger"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
  <path
    fill-rule="evenodd"
    clip-rule="evenodd"
    d="M0 0H16V1.7H0V0ZM0 6.15H16V7.85H0V6.15ZM0 12.3H16V14H0V12.3Z"
    fill="#333333"
  />
  <span>카테고리</span>
  </svg>
  <header-category-item-list id="category-item-list"></header-category-item-list>
  </div>
`;class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(u.content.cloneNode(!0));const e=this.shadowRoot.querySelector(".header-category-tab");e.addEventListener("mouseover",()=>{e.setAttribute("aria-expanded","true")}),e.addEventListener("mouseout",()=>{e.setAttribute("aria-expanded","false")})}}customElements.get("header-category")||customElements.define("header-category",M);
