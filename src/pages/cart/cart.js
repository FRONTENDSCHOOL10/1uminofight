document.addEventListener('DOMContentLoaded', function () {
  function updateCartSummary() {
    const amountElement = document.querySelector('.amount p:nth-child(2)');
    const discountElement = document.querySelector('.discount2 p:nth-child(2)');
    const shippingElement = document.querySelector('.shipping p:nth-child(2)');
    const totalElement = document.querySelector('.total p:nth-child(2)');

    let totalRegularPrice = 0;
    let totalDiscountPrice = 0;

    const cartItems = document.querySelectorAll('cart-products');
    cartItems.forEach((item) => {
      const quantity = parseInt(item.getAttribute('quantity'));
      const regularPrice = item.getAttribute('regular-price')
        ? parseInt(item.getAttribute('regular-price').replace(/[^0-9]/g, ''))
        : 0;
      const discountPrice = parseInt(
        item.getAttribute('discount-price').replace(/[^0-9]/g, '')
      );

      if (regularPrice) {
        totalRegularPrice += regularPrice * quantity;
        totalDiscountPrice += discountPrice * quantity;
      } else {
        totalRegularPrice += discountPrice * quantity;
        totalDiscountPrice += discountPrice * quantity;
      }
    });

    const discountAmount = totalRegularPrice - totalDiscountPrice;
    const shippingCost = totalDiscountPrice > 42000 ? 0 : 3000;
    const totalCost = totalDiscountPrice + shippingCost;

    amountElement.textContent = `${formatPrice(totalRegularPrice)}원`;
    discountElement.textContent = `-${formatPrice(discountAmount)}원`;
    shippingElement.textContent = `${formatPrice(shippingCost)}원`;
    totalElement.textContent = `${formatPrice(totalCost)}원`;
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  updateCartSummary();

  document.querySelectorAll('cart-products').forEach((item) => {
    const decreaseBtn = item.shadowRoot.getElementById('decrease-btn');
    const increaseBtn = item.shadowRoot.getElementById('increase-btn');
    const closeBtn = item.shadowRoot.getElementById('close-btn');

    decreaseBtn.addEventListener('click', () => {
      updateCartSummary();
    });

    increaseBtn.addEventListener('click', () => {
      updateCartSummary();
    });

    closeBtn.addEventListener('click', () => {
      item.remove();
      setTimeout(() => {
        updateCartSummary();
      }, 0);
    });
  });
});
