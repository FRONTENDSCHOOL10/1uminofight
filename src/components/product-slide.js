/*
product-slide 컴포넌트
기능 : 상품 리스트 나열
사용 페이지 : 메인페이지, 상품리스트 페이지

cf. 특이사항
- product-slide.css가 product-slide.js에 연결되어 있음.
- 함수로 컴포넌트를 나눠서 컴포넌트를 사용할 페이지의 js 파일에 renderProductSlide({collection, node, sort})를 실행해줘야 함. 

cf. 사용법
ex) mainPage.js
import { renderProductSlide } from '/src/components/product-slide.js';

const first_products = {
  collection: 'main_first_products',
  node: '.main-first-products > ul',
  sort: '-created',
};

document.addEventListener('DOMContentLoaded', () => {
  renderProductSlide(first_products);
});

-> 하고 html 파일에 js 파일 연결

* 매개변수 설명
- collection : 포켓베이스 데이터 collection 이름
- node : 코드가 들어갈 위치
- sort : 아이템이 나열되는 방식

*/

import defaultAuthData from '../api/defaultAuthData';
import getPbImageURL from '../api/getPbImageURL';
import pb from '../api/pocketbase';
import { comma, getStorage, insertLast, setStorage } from 'kind-tiger';
import '/src/styles/product-slide.css';
// a 링크 href에 어디로 이동하는지 경로 적어야 함.

if (!localStorage.getItem('auth')) {
  setStorage('auth', defaultAuthData);
}

export async function renderProductSlide({ collection, node, sort }) {
  const productData = await pb.collection(collection).getFullList({
    sort: `${sort}`,
  });

  const { isAuth } = await getStorage('auth');

  productData.forEach((item) => {
    const discount_price = item.now_price * (item.discount * 0.01);

    const template = `
    <li class="product-item">
    <figure>
    <a href="/src/pages/productDetail/index.html">
      <img src="${getPbImageURL(item)}" alt="${item.name}" />
    </a>

    <figcaption>
      ${item.desc ? `<span class="desc">${item.desc}</span>` : ''}
      <div class="item-name"> ${item.name} </div>
      <div class="price-info">
        <div class="now-price-info">
          ${
            item.discount
              ? `<span class="discount">${item.discount}%</span>`
              : ''
          }
          <span class="now-price">${comma(item.now_price)}원</span>
        </div>
        ${
          item.discount
            ? `<span class="real-price"
          >${comma(Math.floor(item.now_price + discount_price))}원</span
        >`
            : ''
        }
      </div>
      ${item.extra_desc ? `<span class="extra-desc">${item.extra_desc}</span>` : ''}
      <div class="badge-collect">
        ${
          item.karly_only
            ? `<span class="badge karly-only">Karly Only</span
        >`
            : ''
        } ${
          item.limited_amount
            ? `<span class="badge limited-amount"
          >한정 수량</span
        >`
            : ''
        }
      </div>
    </figcaption>
  </figure>
  </li>
  `;
    insertLast(node, template);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .querySelector('.product-container-slide')
    ?.addEventListener('click', () => {
      location.href = '/';
    });
});
