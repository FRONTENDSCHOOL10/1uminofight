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
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon img');
      const isChecked = checkIcon && checkIcon.src.includes('CheckTrue');

      if (isChecked) {
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
      }
    });

    const discountAmount = totalRegularPrice - totalDiscountPrice;
    const shippingCost =
      totalDiscountPrice > 42000 || totalDiscountPrice == 0 ? 0 : 3000;
    const totalCost = totalDiscountPrice + shippingCost;

    amountElement.textContent = `${formatPrice(totalRegularPrice)}원`;
    discountElement.textContent = `-${formatPrice(discountAmount)}원`;
    shippingElement.textContent = `${formatPrice(shippingCost)}원`;
    totalElement.textContent = `${formatPrice(totalCost)}원`;
  }

  function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function initializeCheckIcons() {
    const cartItems = document.querySelectorAll('cart-products');
    cartItems.forEach((item) => {
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon');
      checkIcon.addEventListener('click', toggleCheckIcon);
    });

    const checkIcons = document.querySelectorAll('.check-icon');
    checkIcons.forEach((icon) => {
      icon.addEventListener('click', toggleAllCheckIcons);
    });
  }

  function toggleCheckIcon(event) {
    const button = event.currentTarget;
    const img = button.querySelector('img');

    if (img.src.includes('CheckTrue.svg')) {
      img.src = '/icons/CheckFalse.svg';
    } else {
      img.src = '/icons/CheckTrue.svg';
    }
    updateCartSummary();
    updateSelectAllButton();
  }

  function toggleAllCheckIcons() {
    const cartItems = document.querySelectorAll('cart-products');
    let allChecked = true;

    cartItems.forEach((item) => {
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon img');
      if (!checkIcon.src.includes('CheckTrue')) {
        allChecked = false;
      }
    });

    cartItems.forEach((item) => {
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon img');
      if (allChecked) {
        checkIcon.src = '/icons/CheckFalse.svg';
      } else {
        checkIcon.src = '/icons/CheckTrue.svg';
      }
    });

    updateCartSummary();
    updateSelectAllButton();
  }

  function updateSelectAllButton() {
    const cartItems = document.querySelectorAll('cart-products');
    const selectAllButton = document.querySelector('.select-all');
    let allChecked = true;

    cartItems.forEach((item) => {
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon img');
      if (!checkIcon.src.includes('CheckTrue')) {
        allChecked = false;
      }
    });

    const selectAllCheckIcon = document.querySelector('.check-icon img');
    if (allChecked) {
      selectAllCheckIcon.src = '/icons/CheckTrue.svg';
    } else {
      selectAllCheckIcon.src = '/icons/CheckFalse.svg';
    }
  }

  function deleteSelectedItems() {
    const cartItems = document.querySelectorAll('cart-products');
    cartItems.forEach((item) => {
      const shadowRoot = item.shadowRoot;
      const checkIcon = shadowRoot.querySelector('.check-icon img');
      if (checkIcon.src.includes('CheckTrue')) {
        item.remove();
      }
    });
    updateCartSummary();
  }

  updateCartSummary();

  document.querySelectorAll('cart-products').forEach((item) => {
    const shadowRoot = item.shadowRoot;
    const decreaseBtn = shadowRoot.getElementById('decrease-btn');
    const increaseBtn = shadowRoot.getElementById('increase-btn');
    const closeBtn = shadowRoot.getElementById('close-btn');

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

  initializeCheckIcons();

  const selectAllButton = document.querySelector('.select-all');
  selectAllButton.addEventListener('click', toggleAllCheckIcons);

  const deleteSelectedButton = document.querySelector('.delete-selected');
  deleteSelectedButton.addEventListener('click', deleteSelectedItems);
});
