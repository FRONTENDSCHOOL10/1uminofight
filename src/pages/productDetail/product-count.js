/*
product_count 컴포넌트
기능 
- 수량 변경 버튼, [-,+] 클릭에 따라 수량 변경
사용 페이지 : 상품 상세페이지
이슈번호 : #32

cf. 
- html 사용
<product-count data-initial-value="1"></product-count>
*/
class ProductCount extends HTMLElement {
	constructor() {
		super();
		
		this.attachShadow({ mode: 'open' });
		
		this.shadowRoot.innerHTML = `
			<style>
				.product-count {
					display: flex;
					align-items: center;
					justify-content: center;
					width: 70px;
					height: 30px;
					border: 1px solid #C4C4C4;
					gap: 8px;
				}

				.product-count button {
					background: none;
					border: none;
					padding: 10px;
					display: flex;
					align-items: center;
					justify-content: center;
					cursor: pointer;
				}

				.product-count .quantity {
					display: flex;
					align-items: center;
					justify-content: center;
					font-weight: bolder;
					font-size: 13px;
				}
					
			</style>
			<div class="product-count">
				<button class="decrease-btn">
					<svg width="8" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10 0V2H0V0H10Z" fill="#A6A6A6"/>
					</svg>
				</button>
				<span class="quantity">1</span>
				<button class="increase-btn">
					<svg width="8" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M6 0V4H10V6H6V10H4V6H0V4H4V0H6Z" fill="#333333"/>
					</svg>
				</button>
			</div>
		`;

		this.decreaseBtn = this.shadowRoot.querySelector('.decrease-btn');
		this.increaseBtn = this.shadowRoot.querySelector('.increase-btn');
		this.quantity = this.shadowRoot.querySelector('.quantity');
	}

	connectedCallback() {
		this.initialValue = parseInt(this.getAttribute('data-initial-value')) || 1;
		this.quantity.textContent = this.initialValue;

		this.decreaseBtn.addEventListener('click', this.decrease.bind(this));
		this.increaseBtn.addEventListener('click', this.increase.bind(this));
	}

	decrease() {
		let currentValue = parseInt(this.quantity.textContent);
		if (currentValue > 1) {
			this.quantity.textContent = currentValue - 1;
			this.updateTotalPrice();
		}
	}

	increase() {
		let currentValue = parseInt(this.quantity.textContent);
		this.quantity.textContent = currentValue + 1;
		this.updateTotalPrice();
	}

	updateTotalPrice() {
		const event = new CustomEvent('quantity-change', {
			detail: { quantity: parseInt(this.quantity.textContent) },
		});
		this.dispatchEvent(event);
	}
}

customElements.define('product-count', ProductCount);

document.addEventListener('DOMContentLoaded', function() {
	const pricePerItem = 4980;
	const productCount = document.querySelector('product-count');
	const totalPriceSpan = document.getElementById('total-price');

	function updateTotalPrice(event) {
		const quantity = event.detail.quantity;
		const totalPrice = pricePerItem * quantity;
		totalPriceSpan.textContent = `${totalPrice.toLocaleString()}`;
	}

	productCount.addEventListener('quantity-change', updateTotalPrice);
});
