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
    <a href="${isAuth ? `/src/pages/detail/index.html?product=${item.id}` : '/src/pages/login/login.html'}">
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
    /*
    const karly_only = document.querySelector('.karly_only');
    const limited_amount = document.querySelector('.limited-amount');

    if (item.karly_only) karly_only.classList.add('is-active');
    if (item.limited_amount) karly_only.classList.add('limited');
*/
    insertLast(node, template);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // const productSlideContainer = document.querySelector(
  //   '.product-slide-container > ul'
  // );
  // if (productSlideContainer) {
  //   renderProductSlide(productSlideContainer);
  // } else {
  //   console.error('Product slide container element not found.');
  // }

  document
    .querySelector('.product-container-slide')
    ?.addEventListener('click', () => {
      location.href = '/';
    });
});
