(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const mobileMenuBtn = document.querySelector('.js-show-btn');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtnA = document.querySelector('.js-close-menua');
  const closeMenuBtnB = document.querySelector('.js-close-menub');
  const closeMenuBtnC = document.querySelector('.js-close-menuc');
  const closeMenuBtnD = document.querySelector('.js-close-menud');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
      openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
      mobileMenu.classList.toggle('is-open');
      mobileMenuBtn.classList.toggle('show');

    const scrollLockMethod = !isMenuOpen
      ? 'disableBodyScroll'
      : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtnA.addEventListener('click', toggleMenu);
  closeMenuBtnB.addEventListener('click', toggleMenu);
  closeMenuBtnC.addEventListener('click', toggleMenu);
  closeMenuBtnD.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();