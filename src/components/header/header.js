document.addEventListener("DOMContentLoaded", function () {
  const topBanner = document.querySelector('.Top-banner');
  const topBannerCloseBtn = document.querySelector('.Top-banner-Close');

  function handleBannerClose() {
    topBanner.style.transition = 'all 0.5s';
    topBanner.style.transform = 'translateY(-50px)';
    topBanner.style.opacity = '0';

    setTimeout(() => {
      topBanner.classList.add('hidden');
    }, 500);
  }

  topBannerCloseBtn.addEventListener('click', handleBannerClose);
});
